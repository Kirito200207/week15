import React from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Services from './components/Services.jsx';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
      <Services />
    </div>
  );
}

export default App; 