import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './index.css';
import App from './App.tsx';
import { Projects } from './routes/Projects.tsx';
import { Contact } from './routes/Contact.tsx';
import { NotFound } from './routes/NotFound.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    /* pages below to be made */
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '*',
    element: <NotFound/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>,
);
