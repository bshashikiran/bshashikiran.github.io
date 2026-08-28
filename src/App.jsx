import { BrowserRouter, Routes, Route } from "react-router-dom";

import DevLayout from "./pages/DevLayout";
import HrLayout from "./pages/HrLayout";
import Resume from "./pages/Resume";
import AnalyticsTracker from "./components/AnalyticsTracker";
import { ViewModeProvider, useViewMode } from "./context/ViewModeContext";

function MainContent() {
  const { mode } = useViewMode();
  return mode === "dev" ? <DevLayout /> : <HrLayout />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ViewModeProvider>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </ViewModeProvider>
    </BrowserRouter>
  );
}