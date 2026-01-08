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
import CustomCursor from "../components/CustomCursor";
import SocialPopup from "../components/SocialPopup";
import ScrollToTop from "../components/ScrollToTop";

import usePWAInstall from "../hooks/usePWAInstall";

const Layout = () => {
  /* ======================= PWA GLOBAL LOGIC ======================= */
  const { deferredPrompt } = usePWAInstall();
  const [showInstallPopup, setShowInstallPopup] = useState(false);

  const isMobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent);
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

  useEffect(() => {
    if (!isMobile) return;

    // ✅ popup tabhi aayega jab install possible ho
    if (deferredPrompt || isIOS) {
      const timer = setTimeout(() => {
        setShowInstallPopup(true);
      }, 1500); // 1.5 sec after site open

      return () => clearTimeout(timer);
    }
  }, [deferredPrompt, isMobile, isIOS]);

  const handleInstall = async () => {
    // 🍎 iOS behavior (expected)
    if (isIOS) {
      alert("Tap Share → Add to Home Screen");
      return;
    }

    // 🤖 Android / Chrome
    if (!deferredPrompt) {
      alert("Install option not ready yet. Please try again.");
      return;
    }

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setShowInstallPopup(false);
  };
  /* ================================================================ */

  return (
    <div className="min-h-screen flex flex-col">
      {/* AUTO SCROLL FIX */}
      <ScrollToTop />

      <CustomCursor />
      <Navbar />

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* ======================= PWA INSTALL POPUP ======================= */}
      {showInstallPopup && (
        <div className="fixed bottom-4 left-4 right-4 z-[9999]">
          <div className="bg-black border border-white/20 rounded-xl p-4 flex items-center justify-between shadow-xl">
            <div>
              <p className="text-white font-semibold">
                Install ADRS Techno App 🚀
              </p>
              <p className="text-gray-400 text-sm">
                Faster access & app-like experience
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleInstall}
                disabled={!deferredPrompt && !isIOS}
                className={`px-4 py-2 rounded-lg font-semibold transition
                  ${
                    !deferredPrompt && !isIOS
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-purple-600 hover:bg-purple-700 text-white"
                  }
                `}
              >
                Install
              </button>

              <button
                onClick={() => setShowInstallPopup(false)}
                className="text-gray-400 text-sm"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ================================================================ */}

      <SocialPopup />
      <Footer />
    </div>
  );
};

export default Layout;
