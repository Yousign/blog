---
tags:
- Kong
- Auth0
- Sécurité
published: false
title: 'On a mis en place une API gateway : Kong'
excerpt: Chez Yousign on a bien conscience de l'importance de la sécurité de notre
  application et le meilleur moyen que l'on a trouvé pour protéger notre application
  a été de ne pas faire porter la totalité de la sécurité sur celle-ci, grâce à Kong
  et Auth0.
coverImage: https://ys-storage-public-blogtech-content-bucket.s3.eu-west-3.amazonaws.com/kongv2-a@2x.png
date: 2021-06-28T22:00:00Z
authors:
- _data/authors/Benjamin R.md

---
Chez Yousign on a bien conscience de l'importance de la sécurité de notre application et le meilleur moyen que l'on a trouvé pour protéger notre application a été de ne pas faire porter la totalité de la sécurité sur celle-ci, grâce à [Kong](https://konghq.com/) et [Auth0](https://auth0.com/).

## Kong, Quésaco ?

Kong, c'est une API gateway, il fait office de passerelle entre l’émetteur d'une requête (les utilisateurs depuis notre application) et notre API. Il n'y a donc aucun échange direct entre les deux et Kong s'occupe de tout, il garantit que chaque route est protégée et n'autorise l'accès qu'aux personnes ayant obtenu une permission au préalable.

## Mais qui donne ces permissions ?

Eh bien, c'est encore Kong ! Il gère également différents types d'authentification tels que OpenId Connect, Key-Auth, Basic-Auth et bien d'autres. Nous avons décidé de nous tourner vers le plugin OpenId-connect, branché directement sur notre Identity Provider : Auth0.

Sans rentrer dans les détails de cette implémentation avec Auth0, le principe est que Kong à l'aide du plugin OpenId-Connect va faire le lien entre le navigateur du client et sa connexion sur Auth0 et si l'utilisateur est bel et bien connecté nous renverra un JWT Token contenant les informations de l'utilisateur ensuite utilisable sur notre API.

Kong fonctionnant avec des micro-services, il nous apporte également d'autres avantages comme avec les plugins Correlation-Id, Rate-limiting, IP-restrictor, CORS... donc après tout ça, on y gagne clairement du temps.

Avant d'aller plus loin, des explications sur le fonctionnement de Kong s'imposent ; il repose sur trois principes :

* Les services, ils représentent notre API et permettent de rediriger les requêtes vers la bonne destination (comme notre API)
* Les routes qui sont le reflet des différentes URLs de notre API, Kong s'en sert pour savoir quels sont les plugins à faire intervenir en fonction de la configuration voulue
* Les plugins (les micro-services) afin de personnaliser notre Kong en rajoutant de nombreuses fonctionnalités, ils sont directement configurables sur chacune de nos routes

Avec [KongMap](https://docs.konghq.com/hub/yesinteractive/kongmap/), nous avons réussi à avoir une représentation graphique de toute cette orchestration. On y trouve en bleu le service, en vert les routes et en rose les plugins rattachés directement à nos routes, qui elles-mêmes sont rattachées à un service.

![Capture d’écran du 2021-06-16 11-55-26.png](https://yousign.slite.com/api/files/avABveXzh2/Capture%20d%E2%80%99%C3%A9cran%20du%202021-06-16%2011-55-26.png)

Afin de donner une vision un peu plus claire, voici une représentation du cycle de vie d'une requête de notre application vers notre API.

![schema API kong.png](https://yousign.slite.com/api/files/\~dBeg3EbU/schema%20API%20kong.png)

## La mise en place

C'est là qu'on commence à se poser la question de comment mettre en place cette solution. Chez Yousign nous avons traité ce projet en trois grandes étapes :

* Premièrement, Kong devait être hébergé directement dans notre stack de développement donc nos SRE (Site Reliability Engineers) nous ont concocté une image docker de Kong nous permettant d'avoir cet outil directement sur chacun de nos environnements. Cette solution nous allait particulièrement bien, car nous avions besoin de reproduire le plus fidèlement possible le comportement de la production sur nos environnements locaux et testing.
* Seconde problématique, Kong devait pouvoir identifier les différentes URLs de notre API pour pouvoir fonctionner, il a donc fallu les lui faire connaître. Pour cela on a profité du RouterBundle de Symfony pour retrouver chacune de nos routes afin de les envoyer à Kong. À ce moment-là, il suffit d'envoyer un JSON contenant toutes les informations de la route vers Kong (protocole, méthode, path, etc..).
* Dernière étape, il fallait configurer les différents plugins pour chaque route. On a donc créé un tableau associatif afin de pouvoir indiquer à Kong que telle ou telle route devait être sécurisée par tel ou tel moyen de protection, ou bien si elle devait avoir un plugin comme CORS, Correlation-id, Rate-Limiting etc...

Une fois tout ceci en place, nous avons vite pu découvrir les avantages de cet outil :

* Sécurité des API
* Restriction d’IP
* Évolutivité et élasticité des API
* Haute disponibilité
* Contrôle de trafic
* Répartition de charge
* Facilité de gestion
* Simplicité de développement

## Penser à rester vigilant

Il faut d'abord avoir conscience qu'en cas de problème avec Kong, tout l'ensemble de l'application sera indisponible. Il est donc fortement recommandé d'avoir plusieurs instances de Kong, prêtes à prendre le relais en cas d'anomalie.

Autre recommandation importante : Il faut toujours tester la configuration de Kong afin de garantir une sécurité sans faille. Pour cela, nous avons mis en place un script lancé sur notre CI afin de tester les différents moyens d'authentifications et vérifier que seul le bon est accepté. En faisant cela on ne teste pas Kong, mais bien qu'il n'y a pas eu de régressions dans la configuration de celui-ci.

## Pourquoi cette solution chez Yousign ?

L'idée d'utiliser Kong a émergé en décembre 2020 pour un début d'utilisation en janvier. Très rapidement nous avons constaté que Kong était une solution robuste et facile à maintenir dans le temps. Sa souplesse et son grand nombre de fonctionnalités nous ont particulièrement motivés à en faire notre choix numéro 1 parmi ses nombreux concurrents. De plus, Kong ayant une belle [communauté Open Source](https://github.com/Kong/kong), nous sommes vraiment confiants dans sa pérennité dans le temps.

## Notre retour d'expérience

Le but de cet article, c'est aussi de faire un retour d'expérience, donc le voici : Kong a rapidement été adopté par l'équipe bien qu'il ait fallu un temps d'adaptation et de montée en compétences pour que chacun puisse bien comprendre le potentiel d'une API gateway et travailler avec.

Après ce tournant qui a été plus qu'important dans notre projet, nous avons très rapidement vu les bénéfices grâce aux nombreux avantages qu'offre Kong.

Demain, nous souhaiterions pousser encore plus l'usage de Kong en utilisant au maximum les plugins [déjà proposés](https://docs.konghq.com/hub/), et pourquoi pas, créer le nôtre pour répondre à tous nos besoins !

[**Benjamin Rouquet**](https://www.linkedin.com/in/benjamin-rouquet-172a29a4/)