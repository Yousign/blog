import Container from './container';
import Logo from './logo';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <div className="navbar--inner text-xl">
          <Link href="/">
            <a className="flex items-center">
              <Logo className="hidden md:block" />
              <Logo isMonogram size={26} className="md:hidden" />
              <span className="ml-3 text-grey-medium">|</span>
              <span className="font-medium ml-2">Blog Engineering & Product </span>
            </a>
          </Link>

          <div className="ml-auto hidden md:block">
            <a
              href="https://www.welcometothejungle.co/fr/companies/yousign/jobs"
              className="btn btn-primary"
            >
              On recrute !
            </a>
            <a href="https://yousign.com" className="ml-8 link text-white">
              yousign.com
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
}
