import { useEffect, useState } from 'react';

export const useCalendly = () => {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    const checkCalendlyLoaded = () => {
      if (typeof window !== 'undefined' && window.Calendly) {
        setIsCalendlyLoaded(true);
      } else {
        // Retry after a short delay
        setTimeout(checkCalendlyLoaded, 100);
      }
    };

    // Start checking immediately
    checkCalendlyLoaded();

    // Also listen for the script load event
    const handleScriptLoad = () => {
      setIsCalendlyLoaded(true);
    };

    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="calendly.com"]');
    if (existingScript) {
      existingScript.addEventListener('load', handleScriptLoad);
    }

    return () => {
      if (existingScript) {
        existingScript.removeEventListener('load', handleScriptLoad);
      }
    };
  }, []);

  return isCalendlyLoaded;
};