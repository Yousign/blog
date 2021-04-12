---
tags: []
title: Les nouveautés dans le composant Sécurité de Symfony
excerpt: Chaque nouvelle version de Symfony apporte son lot de nouveautés. Mais la
  version 5.1 propose un nouveau système d’authentification et ce système change le
  comportement interne de la sécurité Symfony, pour le rendre extensible et plus compréhensible.
coverImage: https://ys-storage-public-blogtech-content-bucket.s3.eu-west-3.amazonaws.com/maj-security-symfony
  copie 5@2x.png
date: 2020-12-31T23:00:00Z
authors:
- _data/authors/Smaïne.md

---
Chaque nouvelle version de Symfony apporte son lot de nouveautés. 🥰 Mais la version 5.1 propose un nouveau système d’authentification et ce système change le comportement interne de la sécurité Symfony, pour le rendre extensible et plus compréhensible.

![Symfony-secu-new.png](https://yousign.slite.com/api/files/qJqX78Jr7G/Symfony-secu-new.png "Résumé des nouveautés Symfony - Source : Symfony")

Dans cet article, je vous propose de faire un tour d’horizon de ce nouveau système et des autres nouvelles fonctionnalités.

3,2,1… Top à la vachette 🐮

## Activons le nouveau système

💡Pour utiliser le nouveau système, il faut tout d’abord update le security.yaml comme ceci :

    # config/packages/security.yaml
    security:
        enable_authenticator_manager: true

## Qu'est ce qui change ? 📚

Le workflow d'authentification est simplifié : dans le nouveau système, il n’y a qu’un Listener `AuthenticatorManagerListener` qui va passer la requête à un Authenticator manager `AuthenticatorManager` fourni par Symfony ; puis l'Authenticator manager va résoudre les Authenticators et retourner une Response.

Voici un schéma extrait [d'un article de Wouter](https://wouterj.nl/2020/04/authenticators-new-symfony-security) sur le sujet.

![image.png](https://yousign.slite.com/api/files/sOZsHphyZN/image.png "Source : Wouter J")

Désormais, tout est relié à un seul concept et une seule interface. Le concept est celui d’Authenticators et l’interface est la suivante :

`Symfony\Component\Security\Http\Authenticator\AuthenticatorInterface`

💡 L'Authenticator fonctionne de la même manière que Guard. Voici l'interface à implémenter pour créer un Authenticator :

    namespace Symfony\Component\Security\Http\Authenticator;
    
    interface AuthenticatorInterface
    {
      public function supports(Request $request): ?bool; 
        
      public function authenticate(Request $request): PassportInterface;
        
      public function createAuthenticatedToken(PassportInterface $passport, string $firewallName): TokenInterface;
        
      public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response;
        
      public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response;
    }

⚠️ Cette interface vient remplacer `GuardAuthenticatorInterface` qui fut introduit dans [la version Symfony 2.8](https://symfony.com/blog/new-in-symfony-2-8-guard-authentication-component) ; les méthodes `getUser` et `getCredentials` sont remplacées par une nouvelle méthode `authenticate()`.

Pour rappel, avec `Guards` la méthode `getCredentials` passait les `credentials` récupérés depuis une instance de `Symfony\Component\HttpFoundation\Request` à la méthode `getUser` , qui devait à son tour retourner un `User` pour poursuivre le workflow de connexion. Désormais, cette tâche est déléguée à une méthode `autenticate` qui doit retourner `PassportInterface` .

`PassportInterface` est une nouvelle notion : un **Passeport** est une classe qui va contenir les informations ayant besoin d’être validées durant le workflow d’authentification et ces informations seront transportées avec une nouvelle notion (_sinon c’est pas drôle_), qui est la notion de “**Badge**”, qui sert à ajouter des informations au passeport pour étendre la sécurité.

Dans le cas d’un Login soumis via un formulaire on aurait un Authenticator comme ceci :

    class LoginAuthenticator implements AuthenticatorInterface
    {
      // ...
        public function authenticate(Request $request): PassportInterface
        {
            $password = $request->request->get('password');
            $username = $request->request->get('username');
          
            return new Passport(
                new UserBadge($email), // Badge pour transporter l'user 
                new PasswordCredentials($password), // Badge pour transporter le password
                [new CsrfTokenBadge('login', $csrfToken)] // Badge pour transporter un token CSRF 
            );
        }
    } 

## Les badges en action 😎

`UserBadge` `PasswordCredentials` `CsrfTokenBadge` sont des badges qui doivent implémenter une interface `BadgeInterface.` . Cette interface a une méthode, `isResolved` , et celle-ci doit retourner `true` **pour tous les badges** pour que **l’authentification réussisse**.

## Petite explication sur qui fait quoi ❓

* `UserBadge` va résoudre l’utilisateur via un `Provider` défini dans la configuration ou un `callable` qu’on peut passer en deuxième argument du constructeur. 👤
* `PasswordCredentials` va checker le password. 🔐
* `CrsfTokenBadge` va checker que le token CRSF est valide. 🍪
* `Passport` va se charger de transporter tout ça. ✈️

💝 Voici le code qui boucle sur les badges pour confirmer l’authentification :

    namespace Symfony\Component\Security\Http\Authenticator\Passport;
    
    class Passeport
    {
      // ...
       public function checkIfCompletelyResolved(): void
       {
         // Dans notre exemple $this->badges contiens UserBadge, 
         // PasswordCredentials et CsrfTokenBadge
           foreach ($this->badges as $badge) {
               if (!$badge->isResolved()) {
                    throw new BadCredentialsException(
                        sprintf('Authentication failed security badge "%s" blabla)
                    );
               }
           }
       }
    }

Ce qui est vraiment pratique, c'est que vous pouvez ajouter vous-même des badges custom avec votre logique dans la méthode `isResolved` 👌.

## Un système plus extensible ✨

La nouvelle interface `AuthenticatorInterface` modifie aussi les arguments de la méthode `createAuthenticatedToken.` Dans `Guards` , on avait un `UserInterface` et le `firewall` dans les paramètres. Il était donc très difficile d’ajouter des informations custom au `Token` créé.

Dans le nouveau système, on récupère le `PassportInterface` retourné dans la méthode `authenticate` , il y a donc beaucoup plus de contexte pour créer notre token 🎉.

    class ApiAuthenticator implements AuthenticatorInterface
    {
        // ...
        public function authenticate(Request $request): PassportInterface
        {
            $oauthContext = "any additional context";
            $passport = new SelfValidatingPassport(new UserBadge($username), []);
            // on ajoute du context dont on peux se servir 
            // dans createAuthenticatedToken
            $passport->setAttribute('context', $oauthContext);
    
            return $passport;
        }
    
        public function createAuthenticatedToken(PassportInterface $passport, string $firewallName): TokenInterface
        {
            // récupère le contexte
            $context = $passport->getAttribute('context');
            return new CustomOauthToken($passport->getUser(), $context);
        }
    }

🔥 Si vous n'avez pas de besoins spécifiques, il est inutile de créer un Authenticator, Symfony met à disposition de nombreux authenticators :

* [FormLoginAuthenticator.php](https://github.com/symfony/security-http/blob/5.x/Authenticator/FormLoginAuthenticator.php)
* [HttpBasicAuthenticator.php](https://github.com/symfony/security-http/blob/5.x/Authenticator/HttpBasicAuthenticator.php)
* [JsonLoginAuthenticator.php](https://github.com/symfony/security-http/blob/5.x/Authenticator/JsonLoginAuthenticator.php)
* …

Pour les utiliser, il suffit juste de déclarer celui qui vous voulez :

    firewalls:
            main:
                form_login: ~ # FormLoginAuthenticator
                # OR
                http_basic: ~ # HttpBasicAuthenticato

🌠 Allons jusqu'à la version 5.2 (date d’écriture de l’article pour recenser d’autres nouveautés). Voici une liste non exhaustive :

* Des Events à gogo 🎁 ([CheckPassportEvent](https://github.com/symfony/security-http/blob/5.x/Event/CheckPassportEvent.php), [LoginSuccessEvent](https://github.com/symfony/security-http/blob/5.x/Event/LoginSuccessEvent.php) , [LogoutEvent](https://github.com/symfony/security-http/blob/5.x/Event/LogoutEvent.php), [SwitchUserEvent](https://github.com/symfony/security-http/blob/5.x/Event/SwitchUserEvent.php)…)
* Fin de l'[Anonymous User](https://symfony.com/doc/current/security.html#firewalls-authentication) : soit l’utilisateur est authentifié soit non et dans ce cas il n’y a pas de token dans “la sécurité”
* Apparition de `PUBLIC_ACCESS` dans l’access control du `security.yaml` pour autoriser les utilisateurs non authentifiés l’équivalent du bon vieux `IS_AUTHENTICATED_ANONYMOUSLY`
* [Login Throttling](https://symfony.com/blog/new-in-symfony-5-2-login-throttling) pour limiter le nombre de tentatives de connexion
* [Login Link](https://symfony.com/doc/current/security/login_link.html) pour authentifier un utilisateur via un lien (par email…)
* [Accorder l’accès aux utilisateurs non authentifié dans un Voter Custom](https://symfony.com/doc/current/security/experimental_authenticators.html#granting-anonymous-users-access-in-a-custom-voter)

Voilà les grosses nouveautés que j'ai pu relever. 😎

Merci de m'avoir lu n'hésitez pas à partager l'article si celui-ci vous a plu.

> **Source** : Pour écrire cet article je me suis appuyé de [la documentation](https://symfony.com/doc/current/security/experimental_authenticators.html), [d'un article de Wouter](https://wouterj.nl/2020/04/authenticators-new-symfony-security), [des slides de la présentation faîtes par Ryan Weaver à la SFCon 2020](https://speakerdeck.com/weaverryan/modern-security-with-symfonys-shiny-new-security-component) et **la meilleure documentation étant le code.** J’ai moi-même exploré ces nouveautés en ouvrant le vendor à coup de `ctrl+enter`🔦.