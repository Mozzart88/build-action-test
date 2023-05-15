import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './components/MainForm/Form';
import SuccessForm from './components/SuccessForm/SuccessForm';
import ErrorPage from './components/Error/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/success' element={<SuccessForm />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
