import { useEffect, useState } from 'react';
import Container from './container';
import CookieConsent, { Cookies, getCookieConsentValue } from 'react-cookie-consent';
import { consentGranted, consentDenied } from '../lib/gtag';

const CONTACT_MAIL = 'nbjmup;cmphAzpvtjho/jp';

function unCryptMailto(encryptedMail) {
  var n = 0;
  var mail = '';
  for (var i = 0; i < encryptedMail.length; i++) {
    n = encryptedMail.charCodeAt(i);
    if (n >= 8364) {
      n = 128;
    }
    mail += String.fromCharCode(n - 1);
  }
  return mail;
}

export default function Footer() {
  const [showCookieBar, setShowCookieBar] = useState(false);
  const today = new Date();
  const year = today.getFullYear();

  const href = unCryptMailto(CONTACT_MAIL);

  const onRemoveCookieConsent = () => {
    Cookies.remove('CookieConsent');
    setShowCookieBar(true);
  };

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove('_ga');
    Cookies.remove('_gat');
    Cookies.remove('_gid');
    consentDenied();
    setShowCookieBar(false);
  };
  const handleAcceptCookie = () => {
    consentGranted();
    setShowCookieBar(false);
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === undefined) {
      setShowCookieBar(true);
    }
    if (isConsent === 'true') {
      consentGranted();
    }
  }, [showCookieBar]);

  return (
    <footer className="navbar mt-8">
      <Container>
        <div className="footer--inner">
          <span>&copy; Yousign - {year}</span>
          <div className="md:hidden flex flex-col items-center">
            <a
              href="https://www.welcometothejungle.co/fr/companies/yousign/jobs"
              className="btn btn-primary my-4"
            >
              On recrute !
            </a>
            <a href="https://yousign.com" className="link text-white">
              yousign.com
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <a href="https://yousign.com/fr-fr/mentions" className="link my-4 md:my-0">
              Mentions légales
            </a>
            <a
              href="https://yousign.com/fr-fr/confidentialite"
              className="mb-4 md:ml-4 md:mb-0 link"
            >
              Politique de confidentialité
            </a>
            <a href={href} className="md:ml-4 link">
              Contactez-nous
            </a>
            <button onClick={onRemoveCookieConsent} className="md:ml-4 link">
              Gérer les cookies
            </button>
          </div>
        </div>
      </Container>
      {showCookieBar && (
        <CookieConsent
          enableDeclineButton
          onAccept={handleAcceptCookie}
          onDecline={handleDeclineCookie}
          buttonText="j'accepte"
          disableStyles={true}
          declineButtonText="je refuse"
          containerClasses="cookie-banner"
          buttonClasses="btn btn-primary mr-2"
          declineButtonClasses="btn btn-default"
          contentClasses="mb-4 leading-normal"
          flipButtons={true}
          location="none"
          debug={true}
        >
          Yousign utilise des cookies sur ce site. Avec votre consentement, nous les utiliserons
          pour mesurer et analyser l&apos;utilisation du site (google analytics) conformément à
          notre{' '}
          <a href="https://yousign.com/fr-fr/confidentialite" className="link">
            politique de confidentialité
          </a>
        </CookieConsent>
      )}
    </footer>
  );
}
