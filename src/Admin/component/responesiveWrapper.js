import React from 'react';
import { useMediaQuery } from 'react-responsive';

const ResponsiveWrapper = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <div className={isDesktopOrLaptop || isTabletOrMobile ? "desktop" : "mobile"}>
      {children}
    </div>
  );
};

export default ResponsiveWrapper;