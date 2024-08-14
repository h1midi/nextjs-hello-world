import React, { useState } from 'react';
import {DesktopNavLinks} from './desktop-nav-links';
import {LogoLink} from './logo-link';
import {MobileDrawer} from './mobile-drawer';
import {MobileMenuButton} from './mobile-menu-button';
import { useLocale } from 'next-intl';


export function Navbar({contactRef}) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const localActive = useLocale();
    const isRTL = localActive === 'ar';
    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
      };
    return (
        <>
          <div className="hidden relative py-6 sm:flex justify-between p-4 bg-white shadow-md">
            <LogoLink />
            <DesktopNavLinks contactRef={contactRef}/>
          </div>
          <div className="sm:hidden relative flex flex-row my-4 p-4">
          {isRTL ? (
                    <>
                        <MobileMenuButton onClick={handleDrawerToggle} />
                        <div className="flex-grow" />
                        <LogoLink />
                    </>
                ) : (
                    <>
                        <LogoLink />
                        <div className="flex-grow" />
                        <MobileMenuButton onClick={handleDrawerToggle} />
                    </>
                )}
                    <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} contactRef={contactRef}/>
          </div>
        </>
      );
    }