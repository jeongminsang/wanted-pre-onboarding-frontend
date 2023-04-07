import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
