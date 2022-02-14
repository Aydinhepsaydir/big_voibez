import React from 'react'
import { DesktopView, TabletView, MobileView } from '../components';

const PicsPage = () => {
  const [width, setWidth] = React.useState(typeof window !== 'undefined' && window.innerWidth);

  const tabletBreakpoint = 1000;
  const mobileBreakpoint = 500;

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);

      // Return a function from the effect that removes the event listener
      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  if ((width < tabletBreakpoint) && (width > mobileBreakpoint)) {
    return <TabletView />
  } else if (width < mobileBreakpoint) {
    return <MobileView />
  } else {
    return <DesktopView />
  }
}

export default PicsPage;
