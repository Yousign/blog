---
tags: []
published: true
title: On a changé notre gestionnaire de dépendances front
excerpt: Chez Yousign, nous cherchons en permanence à challenger nos outils, nos process,
  bref nous recherchons l'amélioration continue. Comme beaucoup, nous utilisons Yarn
  comme package manager sur notre stack front. Mais alors pourquoi venir le challenger
  ? Explications dans cet article.
coverImage: https://ys-storage-public-blogtech-content-bucket.s3.eu-west-3.amazonaws.com/gestionnaire-dependance-front@2x.png
date: 2021-06-01T06:00:00.000+00:00
authors:
- _data/authors/jeromeboileux.md

---
Chez **Yousign**, vous le savez peut-être déjà, nous sommes très early adopters. Nous cherchons en permanence à challenger nos outils, nos process, bref nous recherchons l'amélioration continue.

## Pourquoi changer de gestionnaire de dépendances ?

La question semble assez légitime. Comme beaucoup, nous utilisons (par défaut ?) `Yarn` comme package manager sur notre stack front ; principalement car nous avons une architecture en monorepo / workspaces.

### Mais alors pourquoi venir challenger Yarn ?

Le véritable point de départ est la volonté d'optimiser nos builds en CI, c'est ce qui nous a poussé à étudier des alternatives.

Trois pistes s'offraient alors à nous :

* [yarn v2](https://yarnpkg.com/getting-started/install), aka yarn berry
* [npm v7](https://github.blog/2021-02-02-npm-7-is-now-generally-available/)
* [pnpm](https://pnpm.io/)

### Pourquoi pnpm ?

D'abord les benchmarks exposés par l'outil semblent prometteur :

[https://pnpm.io/benchmarks](https://pnpm.io/benchmarks "https://pnpm.io/benchmarks")

![Capture d’écran 2021-04-12 à 09.23.46.png](https://yousign.slite.com/api/files/cJqyJv6JTw/Capture%20d%E2%80%99e%CC%81cran%202021-04-12%20a%CC%80%2009.23.46.png)

    Ensuite, c'est la migration qui nous apparait comme la plus simple, il n'y a aucun breaking changes à utiliser pnpm plutôt que yarn, juste des cmd à adapter.

Mais surtout, la réponse est plus théorique et se trouve dans la structure utilisée par `pnpm` pour organiser les dépendances : _flat node_modules directory structure_.

Reprenons la structure classique proposée par `npm` avant la version 3 :

    node_modules
    └─ foo
       ├─ index.js
       ├─ package.json
       └─ node_modules
          └─ bar
             ├─ index.js
             └─ package.json

Ici, chaque dépendance a donc son propre dossier `/node_modules`, ce qui semble plutôt propre ; cependant, ce que les versions supérieures de `npm` (tout comme `yarn`) ont tenté de résoudre, c'est la profondeur de l'arbre de dépendances qui en résulte, ainsi que le fait que les dépendances étaient copiées plusieurs fois dans ces dossiers.

On se retrouvait alors avec une structure dite "flat", quelque chose comme ceci :

    node_modules
    ├─ foo
    |  ├─ index.js
    |  └─ package.json
    └─ bar
       ├─ index.js
       └─ package.json 

Plutôt bien pensé, direz-vous, à ceci près que dans un arbre de dépendances complexe comme on peut rapidement en avoir avec des workspaces, toutes les dépendances se retrouvaient accessibles par tous les modules, sans nécessiter de déclaration. Ouch !

`pnpm` essaye de résoudre la problématique de lourdeur que pose la structure `npm version 2`sans aplatir l'arbre de dépendances. Pour ceci, il s'appuie sur un système astucieux de symlinks et de stores :

    -> - a symlink
    
    node_modules
    ├─ foo -> .pnpm/foo/1.0.0/node_modules/foo
    └─ .pnpm
       ├─ foo/1.0.0/node_modules
       |  ├─ bar -> ../../bar/2.0.0/node_modules/bar
       |  └─ foo
       |     ├─ index.js
       |     └─ package.json
       └─ bar/2.0.0/node_modules
          └─ bar
             ├─ index.js
             └─ package.json

On obtient alors une structure compatible, propre et prévisible, qui reste efficace à construire car les symlinks sont plus rapides à copier que les packages en entiers.

Résultat :

* **pnpm** est plus sécurisant car plus strict
* **pnpm** est plus rapide et plus efficace (liens vers un store)
* **pnpm** gère mieux les architectures monorepos

## De yarn à pnpm dans la pratique

La théorie est alléchante, mais dans la pratique, cad avec un monorepo et un arbre de dépendances autrement plus complexe que foo / bar, ça donne quoi ?

La migration fut en réalité plutôt simple à mettre en place et facile à exécuter, il a fallu :

* installer `pnpm` globalement en local et dans la CI
* remplacer les commandes `yarn` par `pnpm` ou leur équivalent (`yarn worspaces appName cmd` 👉 `pnpm cmd --filter appName`)
* supprimer les `yarn.lock` et les remplacer pas des `pnpm-lock.yaml` (plus lisibles sur le repo)
* faire une étape intermédiaire de nettoyage, car certains imports ne fonctionnaient plus (ils n'étaient simplement pas correctement déclarés)

## Conclusion

Les builds en local ou dans la CI sont effectivement plus rapides (**environ x2**) (le [benchmark](https://pnpm.io/benchmarks) est confirmé), la place occupée par les dépendances sur les disques est aussi réduite d'**environ 40%**.

En dehors de cet aspect "optimisation des performances" qui ont déclenché l'étude et la migration, on a l'impression assez satisfaisante d'avoir nettoyé l'architecture et les déclarations, cloisonné nos applications pour les rendre plus sécurisées et récupéré la maîtrise sur nos dépendances.

Coté front, nous vous parlerons bientôt d'une autre migration structurante en cours... stay tuned.

**Jérôme Boileux**