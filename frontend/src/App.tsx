import React from 'react';
import logo from './logo.svg';
import { Header } from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './Pages/NotFoundPage';
import { AppFonts } from './Styles';
import { HomePage } from './Pages/HomePage';
import { Provider } from 'react-redux';
import { configureStore } from './Store';
import { RecipePage } from './Pages/RecipePage';
import { SearchResultPage } from './Pages/SearchResultPage';
import { AddRecipePage } from './Pages/AddRecipePage';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppFonts>
          <Header />
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="recipes/:recipeId" element={<RecipePage />} />
            <Route path="add" element={<AddRecipePage />} />
            <Route path="search" element={<SearchResultPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppFonts>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
