import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Layout from './Layout/Layout';
import Book from './component/CreateBook/CreateBook';
import BookList from './component/BookList/BookList';

function App() {
  return (
    <Layout>
      <Book />
      <BookList />
    </Layout>
  );
}

export default App;
