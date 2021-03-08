import { useEffect } from 'react';
import CookieConsent, { Cookies, getCookieConsentValue } from 'react-cookie-consent';
import Alert from '../components/alert';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { consentGranted, consentDenied } from '../lib/gtag';

export default function Layout({ preview, children }) {
  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove('_ga');
    Cookies.remove('_gat');
    Cookies.remove('_gid');
    consentDenied();
  };
  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === 'true') {
      consentGranted();
    }
  }, []);
  return (
    <>
      <div className="min-h-screen">
        <CookieConsent
          enableDeclineButton
          onAccept={consentGranted}
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
        >
          Yousign utilise des cookies sur ce site. Avec votre consentement, nous les utiliserons
          pour mesurer et analyser l&apos;utilisation du site (google analytics) conformément à
          notre{' '}
          <a href="https://yousign.com/fr-fr/confidentialite" className="link">
            politique de confidentialité
          </a>
        </CookieConsent>
        <Alert preview={preview} />
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
