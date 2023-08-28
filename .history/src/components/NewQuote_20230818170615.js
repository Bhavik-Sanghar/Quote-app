import React, { useEffect, useState } from "react";
import axios from "axios";
import './New.css'

const QuoteComponent = () => {
  const [quotes, setQuotes] = useState([]);
  const category = "inspirational";
  const apiKey = "EgtS4gqLsbjvHM2bBjKwBA==PYmsGLFQFXQzq0Na";
  const [animate, setAnimate] = useState(false); // State to trigger animation

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
      setAnimate(false); // Reset animation state
      setTimeout(() => {
        setQuotes(response.data);
        setAnimate(true); // Trigger animation
      }, 0); // Wait for the next tick to trigger animation
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className={`quote-container ${animate ? "animate" : ""}`}>
      <h1>Elevate Your Day with Quotes</h1>
      <div className="card-container">
        {quotes.map((quote, index) => (
          <div key={index} className="card">
            <p className="quote-text">{quote.quote}</p>
            <p className="author">- {quote.author}</p>
          </div>
        ))}
      </div>
      <button className="fetch-button" onClick={fetchQuotes}>
        Get New Quotes
      </button>
    </div>
  );
};

export default QuoteComponent;
