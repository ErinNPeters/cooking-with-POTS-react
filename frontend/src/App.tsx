import React from 'react';
import logo from './logo.svg';
import { Header } from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';
import { AppFonts } from './Styles';
import { HomePage } from './HomePage';

function App() {
  return (
    <BrowserRouter>
      <AppFonts>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          {/* <Route path="search" element={<SearchPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppFonts>
    </BrowserRouter>
  );
}

export default App;
