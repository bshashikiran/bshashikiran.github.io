import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ViewModeContext = createContext({
  mode: 'recruiter', // 'recruiter' | 'dev'
  setMode: () => {},
  toggleMode: () => {},
});

const STORAGE_KEY = 'portfolio.view_mode';

export function ViewModeProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [mode, setModeState] = useState(() => {
    const queryView = searchParams.get('view');
    if (queryView === 'dev' || queryView === 'recruiter') {
      return queryView;
    }
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'dev' || saved === 'recruiter') {
        return saved;
      }
    }
    return 'recruiter';
  });

  useEffect(() => {
    const queryView = searchParams.get('view');
    if (queryView && (queryView === 'dev' || queryView === 'recruiter') && queryView !== mode) {
      setModeState(queryView);
      localStorage.setItem(STORAGE_KEY, queryView);
    }
  }, [searchParams, mode]);

  useEffect(() => {
    document.body.classList.remove('mode-dev', 'mode-recruiter');
    document.body.classList.add(`mode-${mode}`);
  }, [mode]);

  const setMode = (newMode) => {
    setModeState(newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('view', newMode);
      return next;
    }, { replace: true });
    window.gtag?.('event', 'view_mode_change', { mode: newMode });
  };

  const toggleMode = () => {
    const next = mode === 'dev' ? 'recruiter' : 'dev';
    setMode(next);
  };

  return (
    <ViewModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  return useContext(ViewModeContext);
}
