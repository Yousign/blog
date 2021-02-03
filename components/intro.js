import Logo from '../components/logo';

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Logo />
      <h1 className="typography-display font-bold tracking-tighter leading-tight md:pr-8">
        Engineering & Product Blog.
      </h1>
    </section>
  );
}
