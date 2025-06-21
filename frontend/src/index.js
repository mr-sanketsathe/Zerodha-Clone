import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Landing_page/Home/HomePage';
import AboutPage from './Landing_page/About/AboutPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <HomePage/>
      <AboutPage/>
    </div>

  </React.StrictMode>
);


