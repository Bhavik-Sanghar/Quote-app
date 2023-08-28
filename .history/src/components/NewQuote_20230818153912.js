import React, { useEffect, useState } from "react";
import axios from "axios";
import './New.css'

const QuoteComponent = () => {
  const [quotes, setQuotes] = useState([]);
  const category = "inspirational";
  const apiKey = "EgtS4gqLsbjvHM2bBjKwBA==PYmsGLFQFXQzq0Na";

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=1`, // Fetching 5 quotes
        {
          headers: { "X-Api-Key": apiKey },
        }
      );
      setQuotes(response.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleFetchNewQuotes = () => {
    fetchQuotes();
  };

  return (
    <div className="quote-container">
      <h1>Elevate Your Day with Quotes</h1>
      <div className="card-container">
        {quotes.map((quote, index) => (
          <div key={index} className="card">
            <p className="quote-text">{quote.quote}</p>
            <p className="author">- {quote.author}</p>
          </div>
        ))}
              <button className="fetch-button" onClick={handleFetchNewQuotes}>
        Get New Quotes
      </button>
      </div>
    </div>
  );
};

export default QuoteComponent;
