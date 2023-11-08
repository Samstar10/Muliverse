import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import ArticleList from './ArticleList';
import NewArticleForm from './NewArticleForm';
import ArticleDetail from './ArticleDetail';

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<ArticleList />} />
          <Route path="/new" element={<NewArticleForm />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
  );
}

export default App;
