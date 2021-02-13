export default function Intro() {
  return (
    <section
      className="flex-col md:flex-row flex items-center md:justify-center bg-purple-light text-white"
      style={{ height: 360, backgroundImage: 'url(/assets/pattern.svg)' }}
    >
      <div className="w-2/3 mx-auto text-center">
        <h1 className="text-5xl tracking-tighter leading-tight mb-4">
          In iaculis risus pretium diam sagittis, at sollicitudin{' '}
          <strong className="text-black">augue pellentesque</strong>
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis metus ligula. Ut sed
          faucibus orci, at vulputate sapien. Vestibulum iaculis id urna ut condimentum.{' '}
        </p>
      </div>
    </section>
  );
}
