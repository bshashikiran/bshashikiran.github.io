import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.("config", "G-9MVDQVBQM5", {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
}