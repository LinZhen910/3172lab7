import React from 'react';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header" role="banner">
          <h1>Art Gallery</h1>
          <Navigation />
        </header>
        <main role="main">
          <Gallery />
        </main>
        <footer role="contentinfo">
          <p>&copy; 2024 Art Gallery. All rights reserved.</p>
          <p>Images sourced from public domain art collections.</p>
        </footer>
      </div>
  );
}

export default App;