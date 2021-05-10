import Link from 'next/link';
import { BLOG_TITLE } from 'lib/constants';
import Container from './container';
import Logo from './logo';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <div className="navbar--inner">
          <Link href="/">
            <a className="flex items-center">
              <Logo className="hidden md:block" />
              <Logo isMonogram size={26} className="md:hidden" />
              <span className="ml-3 text-grey-medium">|</span>
              <span className="font-medium ml-2">{BLOG_TITLE}</span>
            </a>
          </Link>

          <div className="ml-auto hidden md:block">
            <a
              href="https://www.welcometothejungle.co/fr/companies/yousign/jobs"
              className="btn btn-primary transition delay-150 duration-300 ease-in-out transform hover:scale-105"
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
