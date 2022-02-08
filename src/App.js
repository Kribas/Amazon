import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';


function App() {
  return (
    <div className="app">
         
      <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/signup" element={<SignUpScreen/>}/>
        </Routes>
    </div>
  );
}

export default App;
