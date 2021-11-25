import React from "react";
import Header from './components/Header'
import HeroesList from './components/HeroesList'
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <HeroesList />
    </div>
  );
};
