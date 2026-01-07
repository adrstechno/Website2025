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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import SocialPopup from "../components/SocialPopup";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔥 AUTO SCROLL FIX */}
      <ScrollToTop />

      <CustomCursor />
      <Navbar />

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <SocialPopup />
      <Footer />
    </div>
  );
};

export default Layout;
