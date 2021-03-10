import Container from './container';

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
  const today = new Date();
  const year = today.getFullYear();

  const href = unCryptMailto(CONTACT_MAIL);

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
          </div>
        </div>
      </Container>
    </footer>
  );
}
