import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../layouts/Layout';

/* Eagerly loaded — above the fold */
import Home from '../pages/Home';

/* Lazy loaded — code-split per page */
const Mission        = lazy(() => import('../pages/Mission'));
const About          = lazy(() => import('../pages/About'));
const Services       = lazy(() => import('../pages/Services'));
const Products       = lazy(() => import('../pages/Products'));
const Contact        = lazy(() => import('../pages/Contact'));
const Team           = lazy(() => import('../pages/Team'));
const Gallery        = lazy(() => import('../pages/Gallery'));
const Career         = lazy(() => import('../pages/Career'));
const Apply          = lazy(() => import('../pages/Apply'));
const Portfolio      = lazy(() => import('../pages/Portfolio'));
const HireDevelopers = lazy(() => import('../pages/HireDevelopers'));
const FAQ            = lazy(() => import('../pages/FAQ'));
const Blog           = lazy(() => import('../pages/Blog'));
const PrivacyPolicy  = lazy(() => import('../pages/PrivacyPolicy'));
const Terms          = lazy(() => import('../pages/Terms'));
const NotFound       = lazy(() => import('../pages/NotFound'));
const Industries     = lazy(() => import('../pages/Industries'));
const Technologies   = lazy(() => import('../pages/Technologies'));
const BPOSolutions   = lazy(() => import('../pages/BPOSolutions'));
const AIAutomation   = lazy(() => import('../pages/AIAutomation'));

const Fallback = () => (
  <div className="min-h-screen bg-[#08090B] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

const Lazy = ({ children }) => <Suspense fallback={<Fallback />}>{children}</Suspense>;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,             element: <Home /> },
      { path: 'mission',         element: <Lazy><Mission /></Lazy> },
      { path: 'about',           element: <Lazy><About /></Lazy> },
      { path: 'services',        element: <Lazy><Services /></Lazy> },
      { path: 'products',        element: <Lazy><Products /></Lazy> },
      { path: 'team',            element: <Lazy><Team /></Lazy> },
      { path: 'career',          element: <Lazy><Career /></Lazy> },
      { path: 'apply',           element: <Lazy><Apply /></Lazy> },
      { path: 'gallery',         element: <Lazy><Gallery /></Lazy> },
      { path: 'contact',         element: <Lazy><Contact /></Lazy> },
      { path: 'portfolio',       element: <Lazy><Portfolio /></Lazy> },
      { path: 'hire-developers', element: <Lazy><HireDevelopers /></Lazy> },
      { path: 'faq',             element: <Lazy><FAQ /></Lazy> },
      { path: 'blog',            element: <Lazy><Blog /></Lazy> },
      { path: 'privacy-policy',  element: <Lazy><PrivacyPolicy /></Lazy> },
      { path: 'terms',           element: <Lazy><Terms /></Lazy> },
      { path: 'industries',      element: <Lazy><Industries /></Lazy> },
      { path: 'technologies',    element: <Lazy><Technologies /></Lazy> },
      { path: 'bpo-solutions',   element: <Lazy><BPOSolutions /></Lazy> },
      { path: 'ai-automation',   element: <Lazy><AIAutomation /></Lazy> },
      { path: '*',               element: <Lazy><NotFound /></Lazy> },
    ],
  },
]);

