import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import ArticleList from './ArticleList';
import NewArticleForm from './NewArticleForm';
import ArticleDetail from './ArticleDetail';
import EditArticleForm from './EditArticleForm';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<ArticleList />} />
          <Route path="/new" element={<NewArticleForm />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/article/:id/edit" element={<EditArticleForm />} />
        </Routes>
      </div>
  );
}

export default App;
