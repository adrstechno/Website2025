import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import StickyMobileCTA from '../components/StickyMobileCTA';
import PageGL from '../components/PageGL';
import { useLenis } from '../hooks/useLenis';
import { ModalProvider } from '../context/ModalContext';

const Layout = () => {
  /* Initialise Lenis smooth scroll + sync with GSAP ScrollTrigger */
  useLenis();
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';

  return (
    <ModalProvider>
      <div className="min-h-screen flex flex-col bg-[#08090B]">
        <ScrollToTop />
        <CustomCursor />
        <Navbar />
        {/* pb-20 reserves space for StickyMobileCTA on lg:hidden screens */}
        <main className="flex-grow pt-20 pb-20 lg:pb-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              className="relative"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.38, ease: 'easeOut' }}
            >
              {!isHomeRoute && <PageGL routeKey={location.pathname} />}
              <div className={!isHomeRoute ? 'relative z-10' : undefined}>
                <Outlet />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <StickyMobileCTA />
      </div>
    </ModalProvider>
  );
};

export default Layout;
