import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import ArticleList from './ArticleList';

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={ArticleList} />
          <Route path="/new" element={NewArticleForm} />
        </Routes>
      </div>
  );
}

export default App;
