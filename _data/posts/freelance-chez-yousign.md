---
tags: []
title: Freelance chez Yousign
excerpt: Je m’appelle Damien Rochette, je suis développeur depuis plus de 10 ans.
  Je suis arrivé chez Yousign en décembre 2020 pour intégrer la toute nouvelle squad
  dédiée à la construction de la nouvelle API publique.
coverImage: ''
date: 
authors:
- _data/authors/Damien.md

---
C’est dans le contexte de la création de ce blog Tech que [Kevin Dubourg](https://www.linkedin.com/in/kevin-dubourg-586351146/), Engineering Director, a proposé aux freelances de participer à la rédaction de son contenu avec plusieurs idées d’articles. Dans celui-ci, l’idée est de présenter en quelques lignes mon ressenti sur ces 3 premiers mois chez Yousign en tant que développeur freelance, en me laissant bien sûr maître sur le ton et la forme de l'article 🙂.

## Freelance chez Yousign ?

Je m’appelle Damien Rochette, je suis développeur depuis plus de 10 ans. J’ai eu l’occasion de travailler dans des univers très différents, aussi bien des startups que des grands comptes, en CDI ou lors de missions plus ou moins longues.

Yousign a décidé depuis peu d’ouvrir des postes en freelance, c’est donc dans ce contexte que je suis arrivé en décembre 2020. J’y ai intégré la toute nouvelle squad dédiée à la construction de la nouvelle API publique 🚀.

Lors de mes recherches de mission, je me pose toujours la question de savoir comment cela se passe vraiment en interne en tant que développeur. J’ai besoin de me projeter pour savoir si ça va me plaire, si je vais pouvoir monter en compétences et travailler dans de bonnes conditions… Après ces premiers mois chez Yousign, je voulais donc écrire ces quelques lignes pour présenter mon retour d'expérience en tant que freelance chez Yousign, et en particulier ce qui ressort le plus à mes yeux : la culture d’entreprise et la qualité du code.

## Onboarding & culture fit

Ce n’est pas la première fois que je débute un contrat en full remote mais chez Yousign, ce démarrage est sans aucun doute l'un des meilleurs. Le full remote fait partie intégrante de l’ADN de l’entreprise et cela se ressent, ce n’est pas un effet de mode : le sujet est maîtrisé, on nous fait confiance, je n’ai pas le sentiment d’être surveillé ni d’avoir à justifier mon agenda.

D'abord, le télétravail est facilité par les outils mis en place : récemment, des bureaux virtuels ont vu le jour suite à un Hackathon organisé en interne. Cela permet entre autres de se déplacer dans des rooms pour rejoindre des réunions ou d'échanger avec le reste de l'équipe dans un autre contexte. À cela vient également s'ajouter la possibilité de s’organiser à travers Google Meet, Slack ou encore le serveur Discord.

![From Slite.com](https://storage.googleapis.com/slite-api-files-production/files/26201528-cb80-41d0-90aa-53477c5a7c28/WLMdpnLUdljEkVGk1F24Ei9qLocMXvHd72qLXZcFAnxDEerZnJbclnfMcTiAjYSbNHSFRk4YOxRxRxc78n3XDGu49wGI956YXTZO4fMuAeSm5dso6SuQ8jHDHRVOF8JlzhN2lC8u)

Ensuite, chaque nouveau membre de l'équipe Yousign, freelances compris, a le droit à son arrivée à un onboarding sur plusieurs jours, pour bien comprendre l'entreprise, son organisation et les projets en cours.

## Team spirit & méthodo

Chez Yousign, même si certaines réunions sont réservées aux internes (les 1o1 bi-mensuels avec le manager) ou bien que nous ne disposons que d'un accès restreint au Slack de l'entreprise, j'ai quand même le sentiment de faire partie de l’équipe. On m’a d’ailleurs proposé de participer au Hackathon pour la construction des bureaux virtuels, ou bien encore d’animer un meetup tech sur la façon de gérer nos API via la mise en place de [Kong](https://konghq.com/kong/).

La responsabilisation fait également beaucoup partie du job : une fois la vision et les besoins exprimés, on doit être force de proposition, être capable de s’organiser en conséquence, car on nous laisse beaucoup d’autonomie et de flexibilité sur les décisions techniques.

Je dirais que pour travailler chez Yousign, il est quand même important d’avoir de bonnes notions sur le DDD et l’architecture hexagonale, mais aussi d’avoir cet esprit « craftsmanship ». La qualité du code est importante, on pratique le pair programming quand le besoin se fait ressentir et on réalise également des codes reviews.

Chez Yousign, je n’ai jamais eu ce sentiment d’avoir à développer une fonctionnalité qui ne servirait à rien. Je pense que c’est également lié au fait que le management et les équipes produits sont très tech, ça facilite les échanges au quotidien et les problématiques sont plus facilement comprises. Des points réguliers sont réalisés avec les équipes pour suivre l'avancée de la roadmap permettant d'avoir également une vision long terme sur les projets définis.

Pour ce qui est de ma squad, nous fonctionnons en mode projet et différons un peu du fonctionnement des autres squads, qui sont plutôt en mode built sur une organisation commune. Je dirais que le maître mot est la communication. Il arrive également que dans le cadre d’un développement d’une fonctionnalité touchant plusieurs domaines, de petites équipes se créent (regroupant devops, front, back...). Pour moi, c’est aussi ça l’agilité chez Yousign, savoir communiquer et s’organiser ensemble pour travailler, et s’améliorer au quotidien pour atteindre des objectifs communs.

Au quotidien, pour le développement d’une fonctionnalité je dirais que l’on itère de la manière suivante (ce processus est spécifique à notre fonctionnement actuel "build", il est différent des autres squads qui livrent en production) :

* Réunion de présentation du besoin
* Rédaction de l’ADR (Architecture Decision Record), présentant les choix et décisions fonctionnelles/techniques Spécification / découpage technique de la fonctionnalité
* Développements
* Code Reviews
* Tests & recettes
* Livraison

## Stack technique

Côté techno au quotidien, je travaille sous Docker, Symfony et ReactJS. Les environnements sont dockerizés jusqu’à la production.

La même codebase est utilisée entre plusieurs squads (back et front), cela a son lot d’inconvénients (CI partagée, conflits, dépendances ...), mais le fait que la communication soit bonne nous permet de bien organiser. Les tests automatisés sont nombreux, cela nous sécurise bien, particulièrement au début lorsqu’on découvre le projet.

Une grande attention est apportée à la CI/CD, avec la possibilité de créer des environnements de test par feature branch. C’est assez rare de voir ça chez des clients et c’est franchement pratique.

![From Slite.com](https://storage.googleapis.com/slite-api-files-production/files/880cdb9b-ad7f-4d5d-99bb-d9344208f0a4/3TOBsjRw6QkW_EJQCixtHYL2ye9N-9vYGLOFAFeYJ29UHpsB8xmg9rzgzmtrNJjU3IgAqy3HfyOEEiiQwSRXcP41HRkcmkqlAanWldIlo0ws9tidph8sCdIkSwCTiRhBfNY2KG5Z)

Coté stack technique, tout se trouve ici : [https://stackshare.io/yousign/yousign](https://stackshare.io/yousign/yousign "https://stackshare.io/yousign/yousign").

Yousign, pour moi, c'est également la découverte de nouveaux outils comme :

* [https://github.com/commitizen/cz-cli](https://github.com/commitizen/cz-cli "https://github.com/commitizen/cz-cli") pour la convention de nommage des commits
* [https://slite.com/](https://slite.com/ "https://slite.com/") pour le suivi des développements par projet (Kanban)
* [https://launchdarkly.com/](https://launchdarkly.com/ "https://launchdarkly.com/") pour le feature flag
* [https://stoplight.io/](https://stoplight.io/ "https://stoplight.io/") pour le design & la documentation API

Être freelance chez Yousign, c’est donc faire partie d’une équipe solide techniquement ou règne une ambiance conviviale. C’est aussi aimer sortir de sa zone de confort, car les défis et challenges techniques ne manquent pas. Savoir s’adapter au changement pour répondre à une forte croissance demandant certaines remises en question de l’existant, que ce soit d’un point de vue technique ou organisationnel.

En résumé, si vous êtes intéressé(e) par le produit, que vous aimez les challenges techniques et travailler en équipe, alors Yousign est sûrement une entreprise à considérer dans votre recherche de job. 😉

Et si vous voulez en savoir davantage, n'hésitez pas à venir me voir sur [LinkedIn](https://www.linkedin.com/in/damienrochette/) ✌️