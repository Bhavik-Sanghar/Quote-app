import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import { fetchQuote } from '../../../quote-app/src/QuoteService';

function QuoteDisplay() {
    const API_URL = 'https://api.adviceslip.com/advice';

async function fetchQuote() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching quote:', error);
    return null;
  }
}

  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function fetchRandomQuote() {
      const quoteData = await fetchQuote();
      setQuote(quoteData);
    }
    fetchRandomQuote();
  }, []);

  return (
    <div className="quote-display">
      {quote && (
        <div className="quote-container">
           <img
            
          />
          <Quote text={quote.} />
        </div>
      )}
    </div>
  );
}

export default QuoteDisplay;
