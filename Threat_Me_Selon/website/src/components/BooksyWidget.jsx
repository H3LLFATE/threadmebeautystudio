import { useEffect, useRef, useState } from 'react';

// Client-provided widget reference: website/unique_booking_link
const BOOKSY_WIDGET_SRC = 'https://booksy.com/widget/code.js?id=748759&country=us&lang=en';
const BOOKSY_SCRIPT_ID = 'booksy-widget-script';

const BooksyWidget = () => {
  const widgetHostRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const moveWidgetIntoBookingCard = () => {
      const widget = window.__booksyWidgetContainer || document.querySelector('.booksy-widget-container');
      const host = widgetHostRef.current;

      if (widget && host && !host.contains(widget)) {
        host.appendChild(widget);
      }

      if (widget) {
        window.__booksyWidgetContainer = widget;
        setIsReady(true);
      }
    };

    const existingScript = document.getElementById(BOOKSY_SCRIPT_ID);
    if (existingScript) {
      moveWidgetIntoBookingCard();
      existingScript.addEventListener('load', moveWidgetIntoBookingCard);
      return () => existingScript.removeEventListener('load', moveWidgetIntoBookingCard);
    }

    const script = document.createElement('script');
    script.id = BOOKSY_SCRIPT_ID;
    script.type = 'text/javascript';
    script.src = BOOKSY_WIDGET_SRC;
    script.async = true;
    script.onload = moveWidgetIntoBookingCard;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="text-center">
      <p className="text-xs font-sans font-bold tracking-widest text-gray-500 uppercase mb-3">
        Book instantly online
      </p>
      <div ref={widgetHostRef} className="min-h-10 flex justify-center items-center">
        {!isReady && (
          <span className="text-sm font-light text-gray-500">Loading Booksy booking…</span>
        )}
      </div>
    </div>
  );
};

export default BooksyWidget;
