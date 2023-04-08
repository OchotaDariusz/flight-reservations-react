import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import App from './App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    // loader: rootLoader,
    // errorElement: <ErrorPage />,
    // children: [
    //     {
    //         path: 'test',
    //         element: <Test />,
    //         loader: testLoader,
    //         lazy: lazyFn
    //     }
    // ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
