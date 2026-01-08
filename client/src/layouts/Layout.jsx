// import { Outlet } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import CustomCursor from '../components/CustomCursor';
// import SocialPopup from '../components/SocialPopup';
// import ScrollToTop from '../components/ScrollToTop';

// const Layout = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <CustomCursor />
//       <Navbar />
//       <main className="flex-grow pt-20">
//         <Outlet />
//       </main>
//       <SocialPopup />
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import CustomCursor from "../components/CustomCursor";
import SocialPopup from "../components/SocialPopup";

import usePWAInstall from "../hooks/usePWAInstall";

const Layout = () => {
  const { isInstallable, installApp } = usePWAInstall();
  const [showInstallPopup, setShowInstallPopup] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const ios =
      /iphone|ipad|ipod/.test(ua) &&
      !window.matchMedia("(display-mode: standalone)").matches;

    setIsIOS(ios);
  }, []);

  useEffect(() => {
    if (isInstallable || isIOS) {
      const timer = setTimeout(() => {
        setShowInstallPopup(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isInstallable, isIOS]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <CustomCursor />
      <Navbar />

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {showInstallPopup && (
        <div className="fixed bottom-4 left-4 right-4 z-[9999]">
          <div className="bg-black border border-white/20 rounded-xl p-4 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold">
                Install ADRS Techno App 🚀
              </p>
              <p className="text-gray-400 text-sm">
                Faster access & app-like experience
              </p>
            </div>

            <div className="flex gap-3">
              {!isIOS && isInstallable && (
                <button
                  onClick={installApp}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
                >
                  Install
                </button>
              )}

              {isIOS && (
                <span className="text-gray-300 text-sm">
                  Tap <b>Share</b> → <b>Add to Home Screen</b>
                </span>
              )}

              <button
                onClick={() => setShowInstallPopup(false)}
                className="text-gray-400 hover:text-white transition"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      )}

      <SocialPopup />
      <Footer />
    </div>
  );
};

export default Layout;
