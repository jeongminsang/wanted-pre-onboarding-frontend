import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Header from "./Header";

function App() {
  // console.log(localStorage.token);
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/todo" element={localStorage.token !== undefined ? <Main /> : <Navigate to="/signin"/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
