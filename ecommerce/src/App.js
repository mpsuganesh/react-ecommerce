import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Route from './Components/Router/Route';
import ProductFullDetail from './Components/ProductFullDetail/ProductFullDetail';
function App() {
  return (
    <div className="App">>
      <Header />
      <Route />
      <Footer />
    </div>
  );
}

export default App;
