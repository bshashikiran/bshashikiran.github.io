export default function Container({ children, id }) {
  return (
    <div id={id} className="max-w-6xl mx-auto px-6 py-12">
      {children}
    </div>
  );
}