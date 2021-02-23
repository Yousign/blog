import Container from './container';

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="navbar mt-8">
      <Container>
        <div className="navbar--inner">
          <span>&copy; Yousign - {year}</span>
          <a href="https://yousign.com/fr-fr/mentions" className="ml-auto link">
            Mentions légales
          </a>
          <a href="https://yousign.com/fr-fr/confidentialite" className="ml-4 link">
            Politique de confidentialité
          </a>
        </div>
      </Container>
    </footer>
  );
}
