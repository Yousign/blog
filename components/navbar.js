import Container from './container';
import Logo from './logo';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar">
      <Container>
        <div className="navbar--inner text-xl">
          <Link href="/">
            <a className="flex items-center">
              <Logo />
              <span className="ml-3">|</span>
              <span className="font-medium ml-2">Blog Engineering & Product </span>
            </a>
          </Link>

          <a
            href="https://www.welcometothejungle.co/fr/companies/yousign/jobs"
            className="ml-auto btn btn-primary"
          >
            On recrute !
          </a>
          <a href="https://yousign.com" className="ml-8 link text-white">
            yousign.com
          </a>
        </div>
      </Container>
    </div>
  );
}
