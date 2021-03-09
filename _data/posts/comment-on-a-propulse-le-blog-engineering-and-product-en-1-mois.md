---
tags: []
title: Comment on a propulsé le blog Engineering and Product en 1 mois
excerpt: ''
coverImage: https://ys-storage-public-blogtech-content-bucket.s3.eu-west-3.amazonaws.com/1-launch-blog.jpg
date: 2021-03-15T07:00:00.000+00:00
authors:
- _data/authors/kevindubourg.md

---
## La genèse du blog

_A long time ago in a galaxy far_, _far away_.... Nous avions évoqué la création d'un blog Tech sans jamais vraiment nous lancer, car nous étions peu, nous avions conscience du temps et de l'énergie demandés, ce qui manquait cruellement. Autant dire que notre plan de charge était bien rempli et les raisons de procrastiner sur la mise en œuvre du blog étaient nombreuses.

Mais depuis fin 2020, l'équipe Engineering & Product grandit constamment et nous sommes dans une phase de recrutement importante. Nous prenons conscience avec les nouveaux arrivants, qu'ils soient internes ou freelances, que leur expérience chez Yousign et au sein des équipes P&E est très positive. Nous avions envie de partager ces expériences et leur expertise sur un vaste panels de sujets en dehors de Yousign. La mise en œuvre d'un blog dédié apparaissait donc comme la solution pour nous, afin d'expliquer ce que nous faisons, comment nous le faisons chez Yousign et ce que les équipes en tirent.

Ok, mais comment réussir, dans un délai aussi court, à mettre en place un projet pour lequel on peine à trouver du temps ? Deux mots : compromis et collaboration.

## De la conception à la réalisation

L'objectif principal est la mise en œuvre et la publication rapide du blog. Il faut donc aller vite tout en assurant un bon équilibre entre la forme et le fond. La to-do list est assez longue, mais tout est une histoire de compromis 😎 .

#### **Les spécifications**

* Simple
* Évolutif
* Rapidité de déploiement
* Facilité dans l'exploitation
* Interface d'administration pour l'édition des articles par des profils non-tech (pas besoin de faire une PR pour éditer un article 😉 )
* Statistiques d'accès au blog pour comprendre son usage avec un respect du consentement lié au RGPD 👮‍♂️
* Approuvé par notre team Design

#### **La solution technique**

Après un rapide sondage auprès de l'équipe, nous arrivons de façon unanime à la conclusion qu'il nous faut une solution technique simple (on écarte donc les applications comme Wordpress relativement lourde à maintenir). Quoi de mieux qu'un site statique ?

[Jérôme Boileux](https://www.linkedin.com/in/jeromeboileux/?originalSubdomain=fr), dev front, prend donc le sujet avec l'énergie qu'on lui connaît et propose une solution basée sur :

* Github (Repository pour la gestion du code du blog)
* React / Next JS (Framework React pour notamment la génération de page statique)
* Vercel (Plateforme de déploiement et d'hébergement de site statique)
* Forestry (CMS d'admin pour faciliter l'édition des Markdown)

En 48h, Jérôme délivre une première version du blog qui répond à la majorité de nos besoins 🔥. L'équipe SRE (Site Reliability Engineering) met à disposition un pointeur DNS [https://blog.yousign.io](https://blog.yousign.io "https://blog.yousign.io") (via OctoDNS mais on y reviendra dans un article dédié 🤩 ) . À cette étape, nous avons un MVP du blog et sommes en mesure d'éditer de façon très simple via le Markdown et Forestry (CMS admin) les articles.

#### **La forme**

Pendant ce temps, l'équipe Design d'[Antoine Visonneau](https://www.linkedin.com/in/antoinevisonneau/?originalSubdomain=fr) a souhaité nous accompagner sur la mise en œuvre du blog afin qu'il soit en cohérence avec l'image de Yousign, tout en ayant sa propre identité. Un workshop a été nécessaire pour se caler sur l'attendu et faire des compromis, afin de sortir le blog rapidement avec la collaboration de l'équipe Design, malgré leur roadmap chargée.

On décide donc d'avoir une approche MVP et d'itérer progressivement sans quoi l'objectif de sortie rapide serait mis à mal. L'équipe nous fournit dans un délai d'une semaine les maquettes, autant dire qu'ils ont fait un super boulot en un temps record 🚀.

[Jérôme Boileux](https://www.linkedin.com/in/jeromeboileux/?originalSubdomain=fr) intègre ces maquettes dans la foulée ; quelques itérations à coup de margin et de padding suffisent pour obtenir une première version qualitative de notre blog Engineering & Product.

#### **Le fond**

Il est clair que la technique et l'apparence du blog sont importantes, mais c'est bien les articles, les sujets abordés et la qualité du contenu qui comptent vraiment.

À cette étape ce ne sont pas les idées d'article qui manquent, nous sommes donc très prolifiques dans le premier listing. Néanmoins, on se rend rapidement compte que la rédaction ne peut pas tenir sur un nombre restreint de rédacteurs. De plus, même si l'exercice de l'écriture n'est pas toujours simple, il me semble important que tout le monde puisse s'y essayer. Je crois beaucoup à la force du groupe et je suis persuadé qu'à trente nous sommes plus forts pour proposer un contenu varié et régulier.

Nous avons donc demandé à chaque collaborateur de l'équipe E&P de se positionner sur les thèmes d'articles que nous avions déjà pré-listés, vorie de proposer de nouveaux sujets. Exercice réussi, car nous obtenons une liste d'une quarantaine d'idées ! Et la majorité des personnes de l'équipes se sont proposées pour écrire les différents articles. Les freelances prennent également part à l'intiative, l'engouement est général. 🙌

## De la planification à la rédaction

[Marion Ravut](https://www.linkedin.com/in/marion-ravut/), Product Marketing Lead chez Yousign, prend part activement depuis le début à la mise en œuvre de ce blog. Ensemble, nous priorisons et planifions les articles, tâche qui n'est pas si simple, car nous avons beaucoup de sujets pertinents dans nos tablettes ! J'aurai donc le privilège de publier les premiers articles du blog, dont celui-ci qui permet de lancer officiellement et avec beaucoup de plaisir le début d'une série d'articles autour de la Tech, du Product, de la Data, de la Securité, de la Conformité mais aussi des sujets plus transverses. Tout un programme 🔥.

## Le début de la suite

Le challenge était là - Trouver le temps, les compétences, les bons outils, les sujets pertinents... - mais on a réalisé qu'avec de la volonté, de l'agilité et le collectif, on arrive à lever des ⛰️ (ok, ici une colline soyons modestes). Et nous sommes très satisfaits du résultat.

Nous sommes aussi heureux de pouvoir, au travers de ce blog Engineering & Product, expliquer et partager ce que nous faisons chez Yousign et nous espérons qu'il donnera envie à nos lecteurs de rejoindre l'aventure.

À très vite pour la suite 😉

[**Kevin Dubourg**](https://www.linkedin.com/in/kevin-dubourg-586351146/) **- Engineering Director, Yousign**