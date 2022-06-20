import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Header from './components/header';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Header />
      <Login />
      <Footer/>
    </div>

  );
}

export default App;
