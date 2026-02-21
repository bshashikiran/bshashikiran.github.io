export default function SectionTitle({ title }) {
  return (
    <h2 className="text-2xl md:text-3xl mb-10 font-mono">
      <span className="text-gray-500 mr-2">shashi@portfolio</span>
      <span className="text-accent mr-2">$</span>
      <span className="text-accent">{title}</span>
      <span className="ml-1 text-accent vscode-cursor">_</span>
    </h2>
  );
}