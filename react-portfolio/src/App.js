import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';



import './style.css';



function App() {
  return (
    <div className="App">
      <Header />
      <main>
      {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
