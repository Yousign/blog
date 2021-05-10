export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tighter leading-tight mb-6">
      {children}
    </h1>
  );
}
