import React, { useEffect, useState } from "react";
import axios from "axios";
import './New.css';
import next from '../next.png'

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
    setQuotes([]); // Clear previous quotes immediately
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
      </div>
      <button className="fetch-button" onClick={handleFetchNewQuotes}>
        <img src={next}/>
      </button>
    </div>
  );
};

export default QuoteComponent;
