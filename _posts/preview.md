---
title: Comment nous sommes passés d'une organisation Tech et Produit à une organisation
  Engineering avec le Produit
excerpt: En 2020, portée par la crise sanitaire et l'émergence de nouveaux comportements,
  l'entreprise a connu une croissance exponentielle. Cela nous a paru comme le bon
  moment pour repenser le pôle Tech sur tous les aspects - Structure, organisation,
  vision, recrutement - mais également de s'assurer que la nouvelle vision serait
  connue et partagée par toutes les équipes Yousign. Cette réorganisation s'est effectuée
  en plusieurs étapes.
coverImage: https://ys-storage-public-blogtech-content-bucket.s3.eu-west-3.amazonaws.com/pattern-IT-team-orga
  (2).jpg
date: 2020-03-16T05:35:07Z
author:
  name: Kevin Dubourg
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"

---
Yousign a l'ambition de devenir le leader de la signature électronique en Europe. En 2020, portée par la crise sanitaire et l'émergence de nouveaux comportements, l'entreprise a connu une croissance exponentielle.

Cette croissance a généré une augmentation importante des équipes business pour répondre à la demande, ce qui a naturellement amplifié l'effet funnel sur les équipes techniques et révélé plusieurs défaillances dans la structure du pôle Tech :

* Le nombre de profils techniques dans l'ensemble des teams est insuffisant
* Les équipes techniques sont dé-focus régulièrement par des changements de priorisation, de périmètre produit mais aussi de mission (Features vs RUN/MCO)
* Le Product Director est devenu un point central de contention, partagé entre les sujets techniques qui ne sont pas son cœur de métier, la qualité et la vision produit.
* L'arbitrage ne peut pas s'effectuer en cycle court et nécessite très souvent de remonter au CTO.
* La gestion des OKR est différente entre le produit, les équipes développement et les équipes plus transverses comme la DATA et les SRE. Ce dé-synchronisme en terme d'objectifs ralenti notre capacité à délivrer puisque les équipes ne sont pas alignées sur des points de rencontre définis (OKR communs).
* Perte de cohérence et de fluidité entre les stakeholders, la tech et le produit

Cela nous a paru comme le bon moment pour repenser le pôle Tech sur tous les aspects - Structure, organisation, vision, rectrutement - mais également de s'assurer que la nouvelle vision serait connue et partagée par toutes les équipes Yousign. Cette réorganisation s'est effectuée en plusieurs étapes.

## Notre ancien modèle d'organisation

Jusque récemment, chez Yousign, le Product Director gérait le périmètre produit, mais il était également en charge de la gestion fonctionnelle et opérationnelle des profils tech - développeurs et QA. Les équipes SRE et DATA étaient quant à elles managées directement par le CTO.

###### ![blog-schema1.png](https://yousign.slite.com/api/files/AciiGS84\~q/blog-schema1.png "L'organisation Tech & Produit d'origine chez Yousign")

## **1 - Rapprocher le produit et la tech, oui mais comment ?**

Rapprocher le produit et la tech sous la dénomination Product & Engineering semblait déjà être une bonne idée, mais insuffisant comme plan d'action 😉. En effet, il nous semblait primordial de créer de la cohérence et un sens commun, puisque l'Engineering devait accompagner le produit dans son évolution.

1. Durant l'année, Romain, Product Director, et Antoine, CTO, ont réalisé des interviews de boites SaaS afin de comprendre comment ils ont géré le scale des équipes, leur organisation, mais aussi et surtout collecter leur feedback sur les succès et les obstacles rencontré.
2. Dès le milieu de l'année, le rapprochement de l'Engineering et du Produit était envisagée à plusieurs niveaux : managérial, avec les deux postes de Director, mais aussi au niveau des équipes avec la création de "squads" intégrant un leader technique pour les développeurs et un Product Manager.
3. Durant l'été nous avons travaillé sur la création d'un MVP dans un mode task force regroupant l'ensemble des compétences produit mais aussi technique (dev front et back, PM, QA, SRE ...). Ce mode de fonctionnement a été un vrai succès à tout niveau, il a été très bien vécu par les équipes mais également par le management. Cette expérience a donc été inspirante dans la mise en place de nos futures squads et nous avons commencé à dessiner une approche pluridisciplinaire de celles-ci.

## **2 - Créer le poste d'Engineering Director**

Début septembre, le poste d'Engineering Director, pendant du Product Director, est créé et on m'en confie la responsabilité. L'objectif principal est d'avoir le maximum de consistance au niveau du Produit et de la Tech. Cette étape permet de mettre en place un management bicéphale au niveau des équipes mais aussi dans les échanges avec les stakeholders.

Romain et moi nous connaissons depuis plus de 15 ans et avons mené ensemble des side-projects, comme des soirées bien arrosées. Mais surtout, cette complicité facilite le démarrage avec des automatismes, de la confiance et beaucoup de transparence. Les ingrédients principaux sont donc réunis pour mener à bien les grands challenges que nous allons rencontrer.

## **3 - Définir la vision Product & Engineering et la partager en interne**

À partir de là, les choses vont très vite car il y a beaucoup d'attente de la part des équipes, mais également de toute l'entreprise. Les changements autour du produit sont stratégiques pour une solution SaaS en BtoB.

Là est toute la difficulté : traiter une multitude de sujets inhérents à la mise en oeuvre d'une organisation et d'un plan de recrutement tout à fait exclusif chez Yousign.

Nous avions à coeur que la mise en oeuvre de cette nouvelle organisation soit partagée par tous et que la vision soit commune. Nous avons donc, en moins de 4 semaines, initiés les principaux sujets à adresser :

1. Faire un constat de notre organisation actuelle (forces et faiblesses)
2. Présenter la stratégie et notre vision
3. Définir une organisation au niveau macro Product & Engineering
4. Définir le rattachement des squads et teams transverses (Product ou Engineering)
5. Définir les concepts de squads pluridisciplinaires, leur composition et fonctionnement
6. Définir les rôles (Product Manager, Engineering Manager ...)
7. Définir les interactions et des responsabilités de chacun
8. Découper les squads par rapport à notre besoin actuel
9. Définir le plan de recrutement des 30 profils Product & Engineering

La présentation de ces étapes s'est faite en deux phases :

* La première phase consistait à définir de façon globale l'ensemble des grandes étapes du projet et obtenir un accord collégial du board Yousign, afin que ces changements soient validés par tous et partie intégrante de la stratégie d'entreprise.
* La seconde phase consistait à présenter aux équipes ces changements et les mettre en oeuvre (je reviendrai après sur cette phase).

## 4 - Apprendre en marchant

La plus grande difficulté à ce stade a été de devoir définir dans un délai court un grand nombre de concepts et une nouvelle organisation sur un nombre d'inconnues importantes - Comment doit-on découper nos squads ? Verticalité vs horizontalité ? Transition d'un mode d'équipe par domaine technique en squad pluridisciplinaire ? Quid du recrutement (nombre, répartition, délais) ? Lead Tech or not Lead Tech ?

Passé notre frustration des premières heures sur le fait que nous pourrions proposer l'organisation du siècle, nous avons décidé d'avancer par petit pas et rester modestes sur ce changement. Nous sommes persuadés qu'il n'existe pas "une" organisation mais "notre" organisation, il n'était donc pas question de tenter de recopier des modèles que nous avions pu voir ailleurs, mais bien de prendre ce qui nous semblait le plus intéressant et de se l'approprier dans notre contexte, avec nos besoins.

Aussi, l'approche empirique restait la meilleure des armes pour s'assurer de créer la meilleure des organisations. Nous avons donc proposé une organisation embryonnaire mais suffisamment construite pour démarrer notre mutation et aussi notre plan de recrutement. Nous avons communiqué à l'équipe notre vision, en insistant sur un point très important qui était que nous ne souhaitions pas poser un couvercle de plomb, mais bien poser les bases d'un système qui permettrait la co-construction et des itérations multiples au fur et à mesure de nos avancements.

## 5 - Mettre en oeuvre notre vision et voir les premiers résultats

L'étape à laquelle nous sommes actuellement, c'est l'exécution de ce plan et la mise en place progressive de cette nouvelle organisation. Mais comme un plan ne se déroule jamais sans accroc, nous itérons régulièrement pour l'adapter et l'agilité reste la clé.

L'approche en squads pluridisciplinaires est effective et nous constatons déjà des impacts positifs. Il faut toutefois maintenir une communication horizontale forte pour de pas perdre la consistance entre les équipes (l'éternelle bataille entre verticalité et horizontalité).

![blog-schema2.png](https://yousign.slite.com/api/files/k_fKmhlooy/blog-schema2.png "La nouvelle organisation Engineering & Product de Yousign")

La comitologie évolue donc progressivement pour maintenir cet équilibre instable (weekly et daily au sein de la squad), nous envisageons déjà des points réguliers entre les Engineering Managers et les Product Managers des squads. Nous pensons aussi qu'il est important que les Engineers ne travaillent pas dans un environnement étanche et puissent continuer à échanger, débattre, s'informer... Pour cela nous organisons des moments d'échange entre les personnes des mêmes domaines techniques (back, front, QA ...) au fur et à mesure que l'équipe s'agrandie.

Notre plan de recrutement est aujourd'hui bien lancé, et l'arrivée de ces nouveaux collaborateurs challengent notre organisation, mais c'est le but. Nous souhaitons garder le cap et notre vision, mais continuer à adapter notre organisation au contexte et besoin actuels est indispensable (agilité et itération).

Avec Romain, nous avions anticipé dès le départ que le découpage des squads par domaine technologique côté produit (application, api ...) plutôt que fonctionnel (billing, users ...) serait limité à moyen terme. Néanmoins, l'anticipation trop rapide d'un découpage précis et fonctionnel peut être contre productif. En effet, à cette étape nous n'avons pas assez de visibilité pour permettre un découpage efficace et proche de nos besoins. Nous avons donc pris le parti d'avoir une approche empirique et de le mettre en oeuvre quand le besoin sera plus présent et évident.

## **Il n'est pas encore l'heure du bilan**

Il est encore trop tôt pour avoir une vue éclairée et sage de nos changements, néanmoins vu de l'intérieur, nous percevons déjà l'impact sur la consistance de l'approche Product & Engineering.

Les équipes quant à elles apprécient la cohésion et la cohérence de notre delivery. Le reste est encore devant nous, mais nous sommes confiants de l’horizon qui se dessine à la proue. Personnellement, je retire une information essentielle de ces dernières semaines, c'est qu'il faut être prêt à changer ou remodeler les plans sans cesse et sans aucune frustration. Dans un contexte de scale-up l'organisation et certains processus ne sont valables que durant un court instant.

C'est le début de la suite, nous reviendrons prochainement avec de nouvelles informations (petit spoil pour un autre article, mais nous avons déjà remis en cause la notion de Lead Tech fraîchement présentée).

**Kevin Dubourg - Engineering Director, Yousign**