import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import Bookshelf from "../src/components/PersonalBookshelf/PersonalBookshelf";
import BookList from "../src/components/BookList/BookList";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<Bookshelf />} />
          <Route path = "Book" element = {<BookList />} />
       
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

