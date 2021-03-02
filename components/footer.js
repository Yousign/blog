import Container from './container';

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

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
            <a href="https://yousign.com/fr-fr/confidentialite" className="md:ml-4 link">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
