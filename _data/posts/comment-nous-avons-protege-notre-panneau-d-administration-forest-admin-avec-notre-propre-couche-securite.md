---
tags: []
published: false
title: Comment nous avons protégé notre panneau d'administration Forest Admin avec
  notre propre couche sécurité
excerpt: ''
coverImage: https://ys-storage-public-blogtech-content-bucket.s3.eu-west-3.amazonaws.com/07-forest-admin@2x.png
date: 2021-05-20T22:00:00Z
authors:
- _data/authors/Damien.md

---
Chez Yousign, nous utilisons depuis quelque temps [Forest Admin](https://www.forestadmin.com/), également membre d'eFounders depuis 2016, comme panneau d'administration de notre application web et nous allons intensifier son usage au sein de nos différentes typologies d'équipe. Nous avons à cœur la sécurité des données de nos utilisateurs, c'est pourquoi nous avons souhaité renforcer le système proposé par Forest Admin en ajoutant une vérification d'accès supplémentaire. Ces différents points vont être abordés dans cet article.

# **Comment fonctionne Forest Admin ?**

![0_3fq2ebjMBeMHpSKD.png](https://yousign.slite.com/api/files/L95qSFpD4E/0_3fq2ebjMBeMHpSKD.png)

L'architecture logicielle des éléments de Forest Admin est composée de deux parties :

* la partie hébergée sur notre infrastructure : l'API appelé "Admin Backend" qui se connecte à nos différentes bases de données applicatives et permet de réaliser des actions avancées via du développement réalisé chez nous
* la partie hébergée chez Forest Admin : l'interface utilisateur web et son API de gestion entièrement gérés par les équipes de Forest Admin

Pour plus d'informations, veuillez vous reporter à [cet article](https://medium.com/forest-admin/a-deep-dive-into-forest-admins-architecture-and-its-benefits-for-the-developers-who-trust-it-1d49212fb4b), écrit par les équipes de Forest Admin.

# Et la sécurité ?

Forest Admin propose différentes méthodes et solutions pour sécuriser les échanges entre l'interface et l'API backend hébergée dans notre infrastructure.

Dans un premier temps, avec l'architecture créée par Forest Admin, nos données ne transitent jamais par leurs serveurs, car les échanges sont faits en direct entre le navigateur utilisateur et le backend.

La sécurité est portée par le standard JWT. Les communications entre le backend et les serveurs Forest Admin sont protégées par deux JWT différents signés avec deux clés différentes.

Trois autres options de sécurité sont proposés dans le plan Plus :

* la liste blanche d'IP
* l'auto-déconnexion
* le double facteur d'authentification (2FA)

# Comment renforcer la sécurité en apportant notre propre couche de sécurité ?

Chez Yousign, nous sommes très vigilants sur la sécurité à tous les niveaux. Même si Forest Admin propose une architecture et des mécanismes de protection bien pensés, nous voulions absolument rajouter une couche de sécurité entièrement portée chez nous dans une logique de "Zero Trust".

La documentation officielle indique actuellement ceci aussi :

![image.png](https://yousign.slite.com/api/files/K6yh5s1CnC/image.png)

## VPN

Bien évidement la solution qui vient en premier et qui est d'ailleurs proposée dans la documentation de Forest Admin est de protéger l'accès au backend en utilisant un VPN. En effet, en installant un VPN sur nos serveurs qui hébergent l'API admin, tous les appels API de nos utilisateurs effectués depuis l'interface web seraient sécurisés par notre VPN. Mais cela impliquait de déployer le VPN à l'ensemble de nos utilisateurs internes, chose que nous ne souhaitions pas dans ce contexte précis d'utilisation. Nous utilisons toujours les VPN, mais pour des usages bien précis que nous ne détaillerons pas ici.

## API Gateway et IAM

Nous utilisons depuis plusieurs années Kong en tant qu'API Gateway et Okta en tant qu'IAM pour sécuriser l’accès de nos collaborateurs et partenaires​ aux outils d'entreprise.

Nous avons donc eu l'idée de placer l'API backend derrière notre API Gateway et ainsi de bénéficier de toute la puissance qu'apporte une API Gateway et en l’occurrence Kong. Avec un plugin OIDC configuré avec notre IDP Okta, nous avons donc protégé l'accès aux routes de l'API backend avec notre propre mécanisme, sans aucun développement spécifique sur le backend.

Cela se schématise comme ceci :

[https://miro.com/app/board/o9J_lH43HMM=/](https://miro.com/app/board/o9J_lH43HMM=/ "https://miro.com/app/board/o9J_lH43HMM=/")

![Forest Admin + Kong.jpg](https://yousign.slite.com/api/files/F2Q2G_SS7z/Forest%20Admin%20+%20Kong.jpg)

Le système a été mis en place en intelligence avec les équipes de Forest Admin, qui nous ont vraiment bien accompagnés sur la compréhension des échanges entre leurs différentes briques logicielles pour garantir le succès du projet.

Aujourd'hui, les données de Yousign jouissent d'une protection renforcée. Le système a été déployé et est pratiquement transparent, à travers la connexion via Okta, pour les personnes autorisées à accéder à Forest Admin. Elles ont désormais la possibilité de personnaliser l'interface de Forest Admin pour les besoins spécifiques liés à leur profil.