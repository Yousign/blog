---
title: Comment la librairie react-query s’est imposée dans notre stack
excerpt: Nous vous expliquons comment nous hydratons notre application avec la donnée serveur et pourquoi nous utilisons react-query.
coverImage:
date: 2021-12-23T08:00:00.000+00:00
authors:
  - _data/authors/jeromeboileux.md
tags:
  - front
  - library
published: false
---

Lorsque nous avons commencé à imaginer la stack front de notre nouvelle version applicative, nous avions très rapidement décidé de ne pas utiliser Redux dans nos premières itérations de build afin de ne pas complexifier l'application trop tôt. En gros l'idée était de challenger notre manière de faire du state management, de n'apporter une librairie comme Redux que si cela s'avérait nécéssaire.

<aside>
ℹ️ Spoiler alert : nous n'avons toujours pas ajouté Redux ou autre librairie dédiée au state management mais nous allons vous expliquer pourquoi 😃

</aside>

## UI state vs server state

Le constat est en vérité assez simple : la plupart des données que l'application conserve dans un "store" n'est que le pendant de données conservées à distance, coté serveur (un utilisateur, une liste de requests, une souscription par exemple).

Seule une petite partie est côté client uniquement, et elle correspond presque toujours aux informations qui concernent de l'UI, comme l'ouverture d'une modale, etc.

Cette partie est manipulable depuis des simples states internes aux composants (`useState`, `useReducer`), ou encore en ajoutant des contextes finement découpés.

Concernant l'autre partie, nous avons assez vite saisi l'opportunité d'essayer `react-query` afin de remplacer les quelques "stores" que nous avions commencé à mettre en place. Voici la démarche.

![[https://react-query.tanstack.com/](https://react-query.tanstack.com/)](Comment%20la%20librairie%20react-query%20s%E2%80%99est%20impose%CC%81e%20da%2002909c14f66c49c4b8692e0543a2beff/Untitled.png)

[https://react-query.tanstack.com/](https://react-query.tanstack.com/)

Ici nous allons concrétiser l'article pour comparer les approches.

Prenons comme exemple les données de profil de l'utilisateur, une fois celui-ci connecté sur l'application. Considérons que nous récupérions ces données en utilisant une route api `/profile`.

### Un state global et un context

Dans notre première itération, nous avions mis en place un store global à l'application, en fournissant un context dans toute la partie connectée de l'app.

En simplifiant pour la lecture, ça donne quelque chose comme ça :

```jsx
const initialUser = {
  name: '',
  phoneNumber: '',
  role: null,
};

const UserContext = createContext(null);

function reducer(state, action) {
  let newState;
  switch (action.type) {
    case 'update':
      newState = { ...state, ...action.payload };
      break;
    default:
      throw new Error();
  }
  return newState;
}

function App() {
  const [user, dispatch] = useReducer(reducer, initialUser);

  const value = useMemo(() => ({ user, dispatch }), [user]);

  return (
    <UserContext.Provider value={value}>
      <UserNameInput />
      <UserInfo />
    </UserContext.Provider>
  );
}

function UserNameInput() {
  const { userName, dispatch } = useContext(UserContext);
  const onSubmit = (event) => dispatch({ type: 'update', payload: { name: event.target.value } });

  return <input type="text" value={userName} onChange={changeHandler} />;
}

function UserInfo() {
  const { name } = useContext(UserContext);
  return <span>{name}</span>;
}
```

Là vous vous dites, pourquoi pas ?

Ensuite il faut gérer la récupération de ce user : un effet de bord sur le root composant pour lancer la requête, puis l'hydratation du store avec le résultat de la requête. Ça se fait !

```jsx
function App() {
  const [user, dispatch] = useReducer(reducer, initialUser);

  const value = useMemo(() => ({ user, dispatch }), [user]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/profile');

      dispatch({ type: 'update', payload: result.data });
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={value}>
      <UserNameInput />
      <UserInfo />
    </UserContext.Provider>
  );
}
```

Ouais mais le user input, il faut qu'il mute la donnée sur le server en plus du store pour persister la modification.

```jsx
function UserNameInput() {
  const { user, dispatch } = useContext(UserContext);
  async function changeHandler() {
    const name = event.target.value;
    await axios({ url: '/profile', method: 'post', data: { ...user, name } });
    dispatch({ type: 'update', payload: { name } });
  }

  return <input type="text" value={user.name} onChange={changeHandler} />;
}
```

(on modifie ici et on envoie "on change" pour simplifier la lecture ;D)

Ah oui mais dans ce cas, qui constitue vraiment la source de la donnée pour l'interface, le server, ou le store ? Ou alors on mute sur le serveur seulement puis on refetch... pas optimal mais ça se fait.

Au fait : on ne gère pas encore ici les autres états de la donnée : le loading, le pending, les requêtes en erreur ; il faudra le rajouter au store !

Ça commence à se corser légèrement lorsqu'il faut utiliser ce contexte à plusieurs endroits dans l'application : on stocke le store indépendamment dans un fichier puis on exporte le contexte, le provider, les différentes actions... ça fonctionne, mais on commence à avoir beaucoup d'adhérence entre les différentes couches de l'application.

Ça se complique encore plus lorsqu'il faut gérer plusieurs autres données, contextes, actions, c'est factoriel !

Sans parler de l'utilisation des contextes de façon globale comme ceci, qui est une porte ouverte vers les fuites de performance, car c'est assez facile de provoquer énormément de re-render avec cette solution.

### Et si nous laissions `react-query` s'occuper de la donnée serveur ?

Si nous reprenions ce même cas d'usage en utilisant react-query pour comprendre la différence ? Comment react-query nous facilite toute cette gestion de données et d'états ?

En pratique, nous commençons par mettre un provider de client

```jsx
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      >
      <UserNameInput />
      <UserInfo />
    </QueryClientProvider>
  );
}
```

Notre composant `UserInfo` ne doit alors plus s'appuyer sur un context pour aller chercher le profile, mais sur le hook `useQuery` fourni par `react-query` :

```jsx
import { useQuery } from "react-query";

function UserInfo() {
  const {data, error, status} = useQuery('profile', () => axios('/profile'));

	switch (status) {
		default:
	  case 'loading':
	    return <span>loading...</span>;
		case 'error':
	    return return <span>{error}</span>;
		case 'success':
			return <span>{data.name}</span>;
}
```

Le hook nous retourne plusieurs propriétés directement exploitables dans le composant, comme:

- le status de la requête
- la donnée si la requête aboutit
- l'erreur si la requête est en erreur

Grace à la clé 'profile' que l'on fournie au hook, la librairie conserve la donnée en cache une fois la requête faite. De cette façon, un autre composant (ou même celui-ci) qui a besoin de cette même donnée peut la récupérer directement depuis le cache sans refaire la requête si la donnée est déjà disponible dans le cache ; react-query gère cela pour nous.

```jsx
function UserPhone() {
  const {data, error, status} = useQuery('profile', () => axios('/profile'));

	switch (status) {
		default:
	  case 'loading':
	    return <span>loading...</span>;
		case 'error':
	    return return <span>{error}</span>;
		case 'success':
			return <span>{data.phoneNumber}</span>;
}
```

Il conviendra alors d'extraire la logique de requête dans un hook et ainsi de rendre les composants agnostiques de cette partie.

```jsx
function useProfil() {
  return useQuery('profile', () => axios('/profile'));
}
```

À cette étape, nous ajoutons un réglage important sur le `staleTime`, c'est à dire la période sur laquelle nous allons considérer cette donnée comme fraîche.

```jsx
function useProfil() {
  return useQuery('profile', () => axios('/profile'), {
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}
```

puis

```jsx
function UserInfo() {
  const {data, error, status} = useProfil();

	switch (status) {
		default:
	  case 'loading':
	    return <span>loading...</span>;
		case 'error':
	    return <span>{error}</span>;
		case 'success':
			return <span>{data.name}</span>;
}
```

Enfin pour gérer le cas de la mutation de la donnée, nous ai également fourni le hook `useMutation`, que l'on pourra aussi déclarer dans notre custom hook et dans lequel on peut, par exemple, préciser que la donnée en cache n'est plus valide à la suite de la mutation :

```jsx
function useUpdateProfil() {
  function update(data) {
    return axios({ url: '/profile', method: 'post', data });
  }

  return useMutation(udpate, {
    onSuccess: () => {
      queryClient.invalidateQueries('profile');
    },
  });
}
```

De cette façon, les composants qui s'appuient sur la donnée en cache vont considérer la donnée comme périmée et ainsi provoquer un rafraîchissement.

C’est précisément sur ce point que l’apport de `react-query` est le plus impactant : la gestion d’un système de cache est l’une des choses les plus ardues à développer et à maintenir ; la librairie stocke la donnée, les metas et les états des requêtes, puis nous fourni un mécanisme à partir de simples clés pour modifier l’état de ce store, se chargeant de la synchronisation de la donnée avec le serveur en arrière plan.

La configuration de ce cache est accessible pour chaque clé et il conviendra d’affiner certains réglages (en empêchant par exemple certaines données “statiques” de se périmer automatiquement). Cependant les “réglages usines” sont relativement agressifs et fonctionneront dans la majorité des cas.

Voici alors comment utiliser la fonction mutate rendu par le hook.

```jsx
function UserNameInput() {
  const { mutate } = useUpdateProfil();

  function changeHandler(event) {
    mutate({ name: event.target.value });
  }

  return <input type="text" value={user.name} onChange={changeHandler} />;
}
```

## Conclusion

L'exemple ici est volontairement assez simple, mais la démonstration est efficace car on se rend rapidement compte de l'apport et de l'intérêt de la librairie :

- la couche intermédiaire entre le serveur et l'interface pour accéder à la donnée est un système de cache créé et géré par la librairie
- la logique sur les états de requête est encapsulée dans les hooks fournis par la librairie, il reste juste à la consommer
- ce sont des hooks, donc il est aisé d'y ajouter notre propre interface pour abstraire tout notion de query
- la librairie fournit des méthodes pour modifier, invalider les données du cache
- un dev tools spécifique pour visualiser le store en action

Et ce n'est que l'ouverture, car `react-query` est une librairie profonde, les possibilités sont nombreuses, je vous invite à parcourir l'excellente documentation.
👉🏻[https://react-query.tanstack.com/overview](https://react-query.tanstack.com/overview)

Ou encore le blog plus que fourni d’un des mainteneurs de la librairie.

👉🏻 [https://tkdodo.eu/blog/](https://tkdodo.eu/blog/)

Quelques points d'exemple dont nous n'avons pas parlé ici :

- Mise à jour de la donnée en background
- Optimisations des performances telles que la pagination et le lazy loading des données
- Optimistic Updates
- Query Cancellation
- Dependent or parallel Queries

Vous comprendrez alors comment `react-query` s'est imposé en quelques mois comme une dépendance centrale et stratégique dans note stack frontend.

C'est un de nos sujets de discussion récurrent car il nous reste encore à apprendre de la librairie, et les axes d'optimisations restent nombreux.

Voici donc pourquoi nous n’avons pas eu besoin d’installer une librairie dédiée au state management : des patterns natives pour l’UI, `react-query` pour la synchronisation avec les données serveurs.

Merci pour la lecture de cet article, il était dans les tiroirs depuis un moment, d'abord censé être assez théorique sur les différentes approches concernant le state management. Puis il a finalement pris une tournure très pratique : sur notre utilisation d'une librairie qui a complètement modifié notre rapport à la gestion de la donnée dans notre application.

**Jérôme Boileux**
