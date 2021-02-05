import Container from './container';

export default function Footer() {
  return (
    <footer className="bg-swamp border-t-4 border-turquoiseBlue text-white mt-8">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center">
          <h3 className="typography-title2 tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            The simpler way of saying yes
          </h3>
          <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <a href="https://yousign.com/" className="mx-3 font-bold hover:underline">
              Visit yousign.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
