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
        ))} <button className="btn btn-one" onClick={handleFetchNewQuotes}>
           Get New Quotes
      </button>
      <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
      </div>
    </div>
  );
};

export default QuoteComponent;
