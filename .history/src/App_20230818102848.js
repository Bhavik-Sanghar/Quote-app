import React from 'react';
import './styles.css';
import QuoteDisplay from './components/QuoteDisplay';
import QuoteComponent from '.components/NewQuote'

function App() {
  return (
    <div className="App">
      {/* <h1>Beautiful Quotes</h1>
      <QuoteDisplay /> */}
      <QuoteComponent/>


    </div>
  );
}

export default App;
