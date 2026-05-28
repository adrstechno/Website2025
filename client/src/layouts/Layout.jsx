import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import StickyMobileCTA from '../components/StickyMobileCTA';
import { useLenis } from '../hooks/useLenis';
import { ModalProvider } from '../context/ModalContext';

const Layout = () => {
  /* Initialise Lenis smooth scroll + sync with GSAP ScrollTrigger */
  useLenis();

  return (
    <ModalProvider>
      <div className="min-h-screen flex flex-col bg-[#08090B]">
        <ScrollToTop />
        <CustomCursor />
        <Navbar />
        {/* pb-20 reserves space for StickyMobileCTA on lg:hidden screens */}
        <main className="flex-grow pt-20 pb-20 lg:pb-0">
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <StickyMobileCTA />
      </div>
    </ModalProvider>
  );
};

export default Layout;
