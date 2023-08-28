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
        `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=`, // Fetching 5 quotes
        {
          headers: { "X-Api-Key": apiKey },
        }
      );
      console.log(response)
      setQuotes(response.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="quote-container">
      <div className="card-container">
      <h1></h1>
        {quotes.map((quote, index) => (
          <div key={index} className="card">
            <p className="quote-text">{quote.quote}</p>
            <p className="author">- {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteComponent;
