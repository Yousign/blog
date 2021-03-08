import { BLOG_BASELINE } from '../lib/constants';
export default function Intro() {
  return (
    <section
      className="flex-row flex items-center md:justify-center bg-purple-light text-white bg-no-repeat bg-cover bg-center"
      style={{ height: 220, backgroundImage: 'url(/assets/pattern.svg)' }}
    >
      <div className="w-2/3 mx-auto text-center">
        <h1 className="text-2xl md:text-5xl tracking-tighter leading-tight mb-4">
          {BLOG_BASELINE}
        </h1>
      </div>
    </section>
  );
}
