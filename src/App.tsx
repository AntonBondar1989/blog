import React, { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRoutes';
import Footer from './components/Footer';
import Header from './components/Header';
// import { video } from './other/pictures';

import "./styles/App.css";





const App: React.FC = () => {

  const [page, setPage] = useState(1);

  // Method to update data from parent to child
  const updatePage = (page: any) => {
    setPage(page);
  };

  return (
    <div className="App">
      <video className="video" autoPlay loop muted src='/img/video/video13.mp4'>
      </video>
      <BrowserRouter>
        <Header page={page} updatePage={updatePage} />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
