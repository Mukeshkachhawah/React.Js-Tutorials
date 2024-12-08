import React from 'react';

import ReactDOM from 'react-dom/client';

import Outlet from './cats/Outlet';
import './index3.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Outlet/>
    
  </React.StrictMode>
);