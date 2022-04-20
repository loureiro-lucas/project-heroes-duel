import React from "react";
import Header from './components/Header'
import HeroesList from './components/HeroesList'
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Routes>
        <Route path='/' element={ <HeroesList /> } />
      </Routes>
    </div>
  );
};
