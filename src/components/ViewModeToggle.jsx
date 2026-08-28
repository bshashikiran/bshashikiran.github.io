import { useViewMode } from "../context/ViewModeContext";
import { MdOutlineBadge, MdTerminal } from "react-icons/md";

export default function ViewModeToggle() {
  const { mode, toggleMode } = useViewMode();
  const isRecruiter = mode === "recruiter";

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        type="button"
        onClick={toggleMode}
        aria-label={`Switch to ${isRecruiter ? "Terminal / Dev" : "Recruiter / Clean"} view`}
        title={`Switch to ${isRecruiter ? "Terminal / Dev" : "Recruiter / Clean"} view`}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-800 bg-card/90 backdrop-blur hover:border-accent text-xs font-mono transition-all shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5"
      >
        {isRecruiter ? (
          <>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/10 text-accent">
              <MdOutlineBadge className="text-sm" />
            </span>
            <span className="text-gray-300 font-medium">Recruiter View</span>
            <span className="text-[10px] text-gray-500 border border-gray-700/60 px-1.5 py-0.2 rounded-full hover:border-gray-500">
              Dev Mode ↵
            </span>
          </>
        ) : (
          <>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/10 text-accent">
              <MdTerminal className="text-sm" />
            </span>
            <span className="text-accent font-medium">Terminal Mode</span>
            <span className="text-[10px] text-gray-400 border border-gray-700/60 px-1.5 py-0.2 rounded-full hover:border-gray-500">
              HR View ↵
            </span>
          </>
        )}
      </button>
    </div>
  );
}
