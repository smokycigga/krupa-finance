// Calendly integration utilities

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: {
        url: string;
        parentElement?: HTMLElement;
        prefill?: Record<string, any>;
        utm?: Record<string, any>;
      }) => void;
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, any>;
        utm?: Record<string, any>;
      }) => void;
      closePopupWidget: () => void;
    };
  }
}

export const openCalendlyPopup = (url: string, prefill?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.initPopupWidget({
      url: url,
      prefill: prefill || {}
    });
  } else {
    // Fallback: open in new tab if Calendly script hasn't loaded
    window.open(url, '_blank');
  }
};

export const initCalendlyInline = (element: HTMLElement, url: string, prefill?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.Calendly && element) {
    window.Calendly.initInlineWidget({
      url: url,
      parentElement: element,
      prefill: prefill || {},
      utm: {}
    });
  }
};

export const closeCalendlyPopup = () => {
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.closePopupWidget();
  }
};

// Event listener to detect when Calendly widget is loaded
export const onCalendlyLoad = (callback: () => void) => {
  if (typeof window !== 'undefined') {
    const checkCalendly = () => {
      if (window.Calendly) {
        callback();
      } else {
        setTimeout(checkCalendly, 100);
      }
    };
    checkCalendly();
  }
};