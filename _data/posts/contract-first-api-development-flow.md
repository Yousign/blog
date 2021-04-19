---
tags: []
title: Contract-first API Development flow
excerpt: À l’ère du web, nous sommes de plus en plus amenés à développer des API Rest.
  Lorsqu’il s’agit de développer une API Rest, deux flows de développement s’offrent
  à nous. Le premier consiste à commencer la spécification de l’API par le code (code-first),
  l’autre consiste à partir plutôt du contrat d’API (contract-first).
coverImage: https://ys-storage-public-blogtech-content-bucket.s3.eu-west-3.amazonaws.com/contract-first-api-v2@2x.png
date: 2021-04-19T22:00:00Z
authors:
- _data/authors/Lucas.md
published: false

---
# Flow de développement API Contract-first

![](https://ys-storage-public-blogtech-content-bucket.s3.eu-west-3.amazonaws.com/API-frist-yousign.png)

À l’ère du web, nous sommes de plus en plus amenés à développer des API Rest.

Lorsqu’il s’agit de développer une API Rest, deux flows de développement s’offrent à nous. Le premier consiste à commencer la spécification de l’API par le code (code-first), l’autre consiste à partir plutôt du contrat d’API (contract-first). Dans cet article, j'ai souhaité vous présenter les avantages et inconvénients de ces deux approches ainsi qu’un retour d’expérience de leur application chez Yousign.

## L’approche code-first

Le code est ici le point de départ, la source de vérité. Les développeurs implémentent le besoin métier directement, sans passer par un contrat ou une spécification au préalable. C’est une approche très populaire, car elle s’inscrit dans un flow assez traditionnel de développement logiciel.

Une fois le code fait, nous pouvons ajouter des méta-données, sous forme d’annotations par exemple, sur des classes, méthodes et propriétés pour ensuite en extraire un contrat OpenAPI de manière générée. Il est aussi possible d’écrire la documentation et le contrat d’API dans un second temps.

L’avantage de cette approche est qu’elle est triviale et rapide à implémenter. Elle peut être un choix lorsqu’il s’agit de développer une API à usage privé ou quand le time-to-market prime sur le design de l’API.

Le principal inconvénient est le temps de feedback. Les autres parties (les équipes métier, développeurs frontend, QAs, etc.) doivent attendre que le code soit effectivement écrit avant de faire des retours sur le contrat, utiliser un serveur de mock ou écrire la documentation.

## L’approche contract-first

La seconde approche est celle qui privilégie de faire d’abord un consensus sur le contrat avant de commencer à écrire la première ligne de code.

Le contrat d’API se présente sous la forme d’un fichier plat, bien souvent écrit au format Yaml ou Json qui peut à la fois être lu et écrit par un humain et une machine.

De nombreux formats de contrat d’API ont vu le jour ces dernières années. Vous avez déjà sans doute entendu parler de WSDL (2001), WADL (2009), Swagger (2011), ApiBlueprint (2012), RAML (2013) ou Openapi (2016) ?

L’OpenAPI Specification (OAS), projet de la Fondation Linux, se veut aujourd’hui le standard de l'industrie pour définir une interface indépendante du langage pour les API REST.

L’approche contract-first a de nombreux avantages :

* favorise l’expérience développeur et la collaboration avec les autres équipes (front, QA, ops, etc)
* facilite l’expression du besoin avec les responsables métier et minimise le risque d’incompréhensions au cours de développement
* permet aux équipes de développement de travailler en parallèle en utilisant un serveur de mock
* permet l’utilisation d’outils de génération de code pour générer [des serveurs et des clients](https://github.com/OpenAPITools/openapi-generator) dans divers langages de programmation
* permet l’utilisation d’outils de génération de documentation pour écrire une doc
* permet l’utilisation de [nombreux outils](https://openapi.tools/)

Cette approche peut être plus “bloquante” que l’approche code-first, car elle demande de passer par la phase de discussion du contrat (qui peut prendre plus ou moins de temps) avec toutes les parties prenantes du projet avant d’attaquer le développement et d’expérimenter.

Aussi, maintenir le fichier de spécification OpenAPI peut être rapidement problématique sans l’utilisation d’outils adaptés, car le fichier atteint très vite des centaines, voire des milliers de lignes de code.

## L’approche contrat-first chez Yousign

Dans le cadre du développement de notre API Rest publique, nous avons souhaité partir sur ce flow de développements pour les nombreuses raisons citées ci-dessus.

En effet, nous voulions, à chaque nouvelle UserStory de l’API, valider le contrat au préalable avec les parties prenantes, pour être sûr d’avoir cerné le besoin et de partir dans la bonne direction dès le départ. Il était important pour nous de mettre l’accent sur un bon design de l’API étant donné qu’elle a pour but d’être exposée à l’extérieur, afin de maximiser la satisfaction client et l'expérience développeur. Une fois en production, il est beaucoup plus délicat de rattraper une erreur de design impliquant un breaking change.

Nous voulions vraiment avoir la main sur le code du contrat OpenAPI et ne pas être limités à ce que certains frameworks ou librairies nous permettent de faire via des annotations, qui sont d’ailleurs très rapidement difficiles à maintenir dues à leur verbosité en PHP.

Côté tests, nous voulions nous baser sur ce contrat pour nos tests exploratoires (export vers postman pour l’équipe QA) et nos tests automatisés (tests de contrat pour valider que nos développements sont bien conformes avec le fichier OpenAPI).

Côté documentation, nous voulions être synchrones avec notre contrat OpenAPI, générer un maximum de documentation depuis le contrat tout en se laissant la liberté d’ajouter du contenu pour expliciter le fonctionnement de telle ou telle route.

Nous voulions également profiter du contrat OpenAPI pour générer des clients dans différents langages, les maintenir facilement à jour et les fournir comme SDKs de notre API publique.

En revanche, nous voulions éviter d’écrire des milliers de lignes de Yaml/Json à la main, nous avons donc testé plusieurs éditeurs de format OpenAPI et avons fait le choix de [Stoplight](https://stoplight.io/).

### Éditer un contrat OpenAPI avec Stoplight

![From Slite.com](https://storage.googleapis.com/slite-api-files-production/files/af8cc26c-99df-4bdb-907d-81ab51c3ff61/6x69yQTP1HgbC82DCw_WE9fXn6KNEzdICL6jx8cv8nq03RMqXlen4yXGV_VMZbwAXbO10VTnAb26jE8izJeDw79iuSl9JXGQeQzOpkRaf8Fc7YnfP6jGgHwG14bmEf-gcCXG9X0l "Spotlight studio")

Stoplight est un outil tout en un qui intègre un [excellent éditeur](https://meta.stoplight.io/docs/studio/README.md) permettant d’éditer un fichier OpenAPI aussi bien en mode texte qu’en mode interface graphique. Cette dernière permet de réaliser tout ce qui est possible de faire en temps normal, avec la réutilisation des composants (models, responses, parameters), une prévisualisation de la doc produite avec possibilité de tester le serveur de mock intégré, de voir les erreurs de syntaxes et le code yaml produit dans l’onglet “code”. Le tout est synchronisé avec un repository Github permettant la création d’une PR et un code review avant qu’une modification du contrat soit mergée sur le tronc commun.

![image.png](https://yousign.slite.com/api/files/8rQt71_7K1/image.png "Spotlight studio")

Une fois la modification du contrat acceptée et mergée sur master, nous utilisons ce contrat pour procéder au développement.

Chez Yousign, nous aimons laisser guider nos développements par des tests automatisés en mode Outside-In. Nous utilisons PHP avec le framework Symfony et avons donc des tests au niveau des endpoints. Toutefois, nous n’effectuons pas de réelles requêtes avec un client http, au lieu de cela, nous utilisons les WebTestCase du framework qui nous permettent de simuler des requêtes http en bootant seulement le kernel du framework.

Pour vérifier que nos développements sont bien conformes à ce qui a été contractualisé côté OpenAPI sur Stoplight, nous avons intégré le [middleware de validation OpenApi](https://github.com/thephpleague/openapi-psr7-validator) dans nos tests automatisés qui permettent de nous assurer que nous respectons pleinement le contrat OpenAPI.

![schema-workflow-api-yousign2.png](https://yousign.slite.com/api/files/TkM1n_0Z2F/schema-workflow-api-yousign2.png)

## Conclusion

En résumé, nous sommes très contents de l’approche choisie pour le développement de notre API publique. Nous y voyons un réel avantage au niveau de la collaboration et du feedback rapide autour du design de l’API publique avant un éventuel développement de la fonctionnalité, une entière liberté sur la création du fichier OpenAPI qui n’est pas freinée par l’utilisation de frameworks ou d’annotations.

Cette collaboration est grandement facilitée par l’utilisateur de Stoplight Studio qui nous permet de collaborer sur le contrat avec les développeurs, mais aussi des personnes non techniques qui peuvent faire une revue de modification du contrat dans l’interface graphique, avant un merge sur master. Nos tests de contrat, grâce au middleware de validation OpenAPI, nous permettent de s’assurer de la cohérence entre le contrat et le fonctionnement réel de l’API.

L’approche contract-first nous ouvre la voie à la génération de codes pour créer des clients dans différents langages, automatiquement synchronisés, une doc toujours à jour, la possibilité de mocker des endpoints non encore développés et bien d’autres choses !

Cependant, pour ce qui est de l'API privée destinée à notre application web, nous avons préféré garder le flow de développement code-first. Cette approche est effectivement plus adaptée aux APIs privées, car elle est plus rapide à mettre en œuvre et met l’accent sur le time-to-market.

Il y a des avantages et inconvénients aux deux approches, à vous de choisir la bonne pour votre besoin.

**Lucas Courot**