export default function PostTitle({ children }) {
  return (
    <h1 className="typography-display tracking-tighter leading-tight md:leading-none mb-8 text-center md:text-left">
      {children}
    </h1>
  );
}
