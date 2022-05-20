---
tags: []
published: true
title: Comment nous avons réussi à conduire des tests utilisateurs en seulement 13
  jours
excerpt: La conduite de tests utilisateurs est un investissement en temps. Vous investissez
  du temps pour tester le design de votre produit, dans l’espoir que cela portera
  ses fruits en vous évitant plus tard des problèmes d’utilisabilité. Votre temps
  est limité, investissez-le judicieusement. Que devriez-vous tester en priorité ?
  Combien de tests devriez-vous conduire ? Devriez-vous réellement conduire des tests
  ?
coverImage: https://ys-storage-public-blogtech-content-bucket.s3.eu-west-3.amazonaws.com/User_test.png
date: 2022-05-02T12:00:00Z
authors:
- _data/authors/Adrien Van Den Branden.md
- _data/authors/Alban Carmet.md

---
La conduite de tests utilisateurs est un investissement en temps. Vous investissez du temps pour tester le design de votre produit, dans l’espoir que cela portera ses fruits en vous évitant plus tard des problèmes d’utilisabilité. Votre temps est limité, investissez-le judicieusement. Que devriez-vous tester en priorité ? Combien de tests devriez-vous conduire ? Devriez-vous réellement conduire des tests ? Voici nos conseils 👇

## Contexte: développer notre premier produit qui n’est pas de la signature électronique

Tout d’abord, un peu de contexte. En Mai 2021 nous avons levé [30 millions d’euros en série A](https://yousign.com/blog) pour amener notre produit vers sa prochaine phase. Yousign a développé son produit principal de signature électronique qui compte aujourd’hui plus de 10 000 clients. Nous avons cependant réalisé que nous pourrions aller plus loin et offrir plus de valeur à nos clients en les accompagnant tout au long de la phase contractuelle. Début 2022 nous avons constitué une nouvelle équipe que nous appelé la squad “Workflows”. Sa mission: sortir et vendre une nouvelle ligne produit nommée “Workflows”. Nous avons constitué la squad autour des fondateurs de Canyon, un outil d’automatisation de contrats que Yousign a [récemment acquis](https://yousign.com/blog/yousign-acquires-canyon). Avec les Workflows, nous voulons faciliter le processus de création de contrats qui nous semble dysfonctionnel. Aujourd’hui les PME passent trop de temps à préparer leurs contrats. Cela prend des heures de collecter des données, les copier-coller dans des documents Word et envoyer les contrats pour signature. Ce processus très fragmenté implique plusieurs outils et parties prenantes. Cela génère de nombreuses erreurs et frustrations. Notre solution “Workflows” aide les utilisateurs à automatiser de nombreuses tâches durant le processus de création de contrats. C’est donc un gain de temps énorme.

Si vous souhaitez en savoir plus sur notre solution et en avoir un aperçu, inscrivez vous à notre liste d’attente.  
  
<a href="https://yousign1.typeform.com/to/lJJoQKBG#source=blogusertest" class="btn btn-primary" target="_blank">S'inscrire à la liste d'attente</a>

## 6 mois pour construire un toute nouvelle ligne produit

Construire une nouvelle ligne produit est ambitieux. Et nous devions la lancer rapidement. Nous avions 6 mois pour designer, livrer et vendre le produit. Nous avons alors relevé nos manches et commencé à travailler. Les tests utilisateurs sont un des nombreux outils nous utilisons chez Yousign dans notre phase de “découverte” d’un nouveau produit ou fonctionnalité. Le processus de “découverte” couvre les risques autours des problématiques utilisateur, produit, channel et rentabilité. En parallèle, les autres membres de notre squad ont travaillé sur les spécifications techniques, le naming, le positionnement, le prix, etc. Les tests utilisateurs sont un outil conçu pour atténuer le risque produit.

![](https://ys-storage-public-blogtech-content-bucket.s3.eu-west-3.amazonaws.com/Diagram_EN.png)

En moins d’un mois, nous avons designé les écrans qui constituaient notre première version de la solution. Nous sommes allés vite grâce à la connaissance métier des fondateurs de Canyon. Cependant, le processus de design a révélé des points d’amélioration en terme d’utilisabilité du futur produit. L’inquiétude principale concernait la création d’un Workflow. Notre solution Workflows comporte 2 "flows" principaux: celui de création et celui d’exécution. 

* Le "flow" de création est le facilitateur. Il permet aux utilisateurs de créer les automatisations qui les aideront à gagner du temps. Une fois créé, les utilisateurs peuvent exécuter le Workflow autant de fois qu’ils le souhaitent. 
* Le "flow" d’exécution génère de la valeur. Oui, il n’y a pas d’exécution sans création. Les utilisateurs doivent d’abord créer le Workflow. Ce n’est qu’à ce moment là qu’ils peuvent profiter de la valeur ajoutée d’un Workflow. 

Nous avions anticipé que la création d’un Workflow pouvait être source de problèmes d’utilisabilité. Créer un Workflow comporte plusieurs étapes. 

* Les utilisateurs doivent d’abord uploader leur template de document.
* Ensuite, ils relient les champs texte au formulaire et ajoutent des placeholders de signature. 
* Enfin, ils doivent définir les signataires et paramètres du document.

Pour Yousign, il y avait une difficulté supplémentaire: la majorité de nos clients ne sont pas les plus digital-friendly. Nous vendons majoritairement notre solution à des PME évoluant dans des secteurs dit “traditionnels” (immobilier, éducation, cabinet d’architectes, avocats etc.). La plupart de nos utilisateurs ont, au mieux, un vernis informatique. Notre défi est de rendre notre produit accessible afin qu’il puisse être utilisé de manière autonome. Aucune formation n’est requise, ce qui signifie que le parcours client doit se dérouler sans accrocs.

## Seules les hypothèses à haut niveau de risque valent le coup d’être testées

La première question que nous nous sommes posés a été de savoir si nous avions besoin de conduire des tests utilisateurs. C’est en effet un processus qui peut prendre des semaines, entre la prise de rendez-vous avec des utilisateurs, la conduite des tests et l’analyse de leurs résultats. Avons-nous le temps pour cela ? Pouvons-nous nous le permettre étant donné notre calendrier de développement serré ?

Pour faciliter notre travail nous avons listé les hypothèses relatives au parcours utilisateur que nous avions créé. En design produit, vous êtes tenu de faire des hypothèses sur le comportement qu’auront les utilisateurs. Certaines hypothèses sont plus risquées que d’autres.

Par example, on peut imaginer que les utilisateurs qui verront un formulaire, soumettrons leurs données sans difficultés. Les formulaires sont des fonctionnalités standard des applications web et sont habituellement “bien compris” par les utilisateurs. Notre solution de workflows utilise un formulaire. Nous nous attendions à ce que les utilisateurs remplissent un formulaire lorsqu’ils verraient les champs vides de ce dernier. Nous ne nous attendions pas à ce qu’ils aient des difficultés à comprendre cela. C’est ce qui nous a conduit à évaluer cette hypothèse comme à “faible risque” dans notre parcours utilisateur. 

Voici l’example d’une hypothèse à “haut risque”. Nous avons demandé à nos utilisateurs de configurer leur template de document dans Word, et non en utilisant l’application Yousign. Nous pensions que les utilisateurs comprendraient qu’ils devraient d’abord éditer leur template au format .docx. Nous pensions également qu’ils uploaderaient ensuite leurs templates dans l’application Yousign. C’est une hypothèse à “haut risque”: si les utilisateurs ne comprennent pas cela, c’est l’ensemble de leur parcours utilisateur qui est remis en question.

Nous avons finalement listé pour l’ensemble de notre parcours utilisateur, 22 hypothèses, dont 50% à “hauts risques”. Au final, lors de la phase de design nous avons identifié comme à “haut risque”, de nombreuses hypothèses. Un grand nombre d’entre elles n’ont finalement pas été testées.

## Considérez chaque opportunité pour gagner du temps

Nous avons listé de nombreuses hypothèses à “haut risque” qui méritaient d’être testées. Une question se posait, comment les tester ? Dans un temps limité nous avons essayé de trouver des façons d’être aussi efficaces que possible.

Par example, nous avons décidé de limiter les tests aux seules hypothèses à “hauts risques”. Réduire le périmètre est une façon simple de gagner du temps. Oubliez cette idée qui consiste à penser que vous avez besoin de tester tous les éléments de votre solution design. Essayez de limiter au maximum le nombre scenarios et leurs longueurs.

Nous avons envisagé de réduire le niveau d’interactivité de nos prototypes. N’oubliez pas que vous pouvez tester un grand nombre de choses en montrant simplement des écrans “statiques”. C’est d’autant plus vrai pour les vues de type tableau de bord. Préparer un prototype en “point-and-click” est très consommateur en temps. Cependant parfois vous n’aurez d’autres choix que de tester des flows. Dans ce cas, vous ne pourrez pas éviter la création de prototypes “point-and-click”.

Nous avons programmé ni plus, ni moins, le nombre de tests utilisateurs que nous avions initialement prévus. 5 tests utilisateurs devraient être suffisants pour tester des hypothèses ayant un risque “faible” ou “moyen”. Programmez 10 tests utilisateurs si vous avez un grand nombre d’hypothèses à “hauts risques” à tester. Ce nombre dépend du niveau de risque des hypothèses que vous souhaitez tester. Vous devriez toujours programmer un test utilisateur supplémentaire dans le cas où un participant vous ferait faux bond. Nous voulions recruter des utilisateurs qui étaient rapidement disponibles pour participer à nos tests. Nous voulions également des utilisateurs “engagés”. C’est pour ces raisons que nous avons invité des utilisateurs depuis la liste d’attente de notre futur produit. Une solution alternative aurait été d’établir cette liste d’utilisateurs à partir de celle ayant déjà participé à des tests utilisateurs dans le passé. Recruter les utilisateurs les plus motivés prend du temps. Nous vous recommandons de créer un petit club d’utilisateurs engagés. Après chaque test, demandez aux utilisateurs s’ils seraient enclin à rejoindre le club. Ils le sont souvent. Vous gagnerez aussi en vitesse de recrutement pour vos prochaines sessions de tests utilisateurs.

Nous avons conduit nos 10 tests utilisateurs en deux rounds de 5, avec quelques jours de d’écart entre les deux. Cela s’est avéré pratique dans la mesure où après les premiers tests, il est rapidement apparu que la solution design initiale avait certaines lacunes. En nous basant sur ces premiers commentaires, nous avons amélioré le design de notre solution. Nous avons ensuite conduit notre deuxième round test avec un prototype amélioré.

## Commencez à coder avant la finalisation des tests utilisateurs

Les tests utilisateurs ne doivent pas interrompre trop longtemps votre processus de développement. N’attendez pas les résultats définitifs de vos tests utilisateurs. Prenez des paris “éclairés” et commencez à coder dès que vous êtes prêt.

Pour Workflows, cela nous a pris 13 jours pour conduire 10 tests utilisateurs. Pour autant, nous avons commencé à coder après la première semaine de tests utilisateurs (avant la fin de ces derniers). Les développeurs ont commencé à travailler dès que certaines hypothèses design à “hauts risques” avaient été validées. Paralléliser le travail nous a aidé à gagner au moins 2 semaines de développement.

Souvenez-vous que les tests utilisateurs sont un investissement en temps. Vous investissez du temps pour éviter des problèmes d’utilisabilité plus tard. Parallélisez votre travail autant que possible pour gagner votre course contre la montre.

Pour résumer:

* listez les hypothèses de votre parcours utilisateur,
* définissez le niveau de risque (faible, moyen, élevé) pour chaque hypothèse,
* conduisez vos tests utilisateurs seulement si vous avez un nombre décent d’hypothèses à “hauts risques”,
* limitez la dimension de vos tests autant que possible (écrans statiques au lieu de prototypes “point-and-click”, 5 tests au lieu de 10),
* commencez à coder aussi vite que possible (n’attendez pas les résultats finaux des tests).

_Nous discuterons des best practices sur comment conduire des tests utilisateurs dans un prochain article de blog_

[**Adrien Van Den Branden**](https://www.linkedin.com/in/adrienvandenbranden/) **&** [**Alban Carmet**](https://www.linkedin.com/in/twitalban/)