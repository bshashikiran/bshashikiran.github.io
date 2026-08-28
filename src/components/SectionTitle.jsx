import { useViewMode } from "../context/ViewModeContext";

export default function SectionTitle({ title, hrTitle }) {
  const { mode } = useViewMode();
  const isDev = mode === "dev";

  if (!isDev) {
    return (
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
          <span className="w-1.5 h-6 bg-accent rounded-full inline-block" />
          {hrTitle || title.replace(/^(ls \.\/|cat |curl |pwd)/, "").replace(/_/g, " ").toUpperCase()}
        </h2>
      </div>
    );
  }

  return (
    <h2 className="text-2xl md:text-3xl mb-6 font-mono flex flex-wrap">
      <span className="text-gray-500 mr-2">shashi@portfolio</span>
      <span className="text-accent mr-2">$</span>

      <span className="text-accent break-all">
        {title}
        <span className="ml-1 text-accent vscode-cursor">_</span>
      </span>
    </h2>
  );
}