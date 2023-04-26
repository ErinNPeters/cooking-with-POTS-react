import React from 'react';
import logo from './logo.svg';
import { Header } from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';
import { AppFonts } from './Styles';
import { HomePage } from './Pages/HomePage';
import { Provider } from 'react-redux';
import { configureStore } from './Store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
