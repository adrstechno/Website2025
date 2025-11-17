import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Mission from '../pages/Mission';
import About from '../pages/About';
import Services from '../pages/Services';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Team from '../pages/Team';
import Workshop from '../pages/Workshop';
import Gallery from '../pages/Gallery';
import Career from '../pages/Career';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'mission',
        element: <Mission />,
      },
        {
          path: 'about',
          element: <About />,
        },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'workshop',
        element: <Workshop />,
      },
      {
        path: 'career',
        element: <Career />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);
