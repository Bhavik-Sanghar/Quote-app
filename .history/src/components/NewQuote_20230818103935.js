import React, { useEffect, useState } from "react";
import axios from "axios";

const QuoteComponent = () => {
  const [quotes, setQuotes] = useState([]);
  const category = "happiness";
  const apiKey = "EgtS4gqLsbjvHM2bBjKwBA==PYmsGLFQFXQzq0Na";

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=5`, // Fetching 5 quotes
        {
          headers: { "X-Api-Key": apiKey },
        }
      );
      console.log(response)
      setQuotes(response.data.quotes);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="quote-container">
      {/* <h1>Quotes about {category}</h1>
      <div className="card-container">
        {quotes.map((quote, index) => (
          <div key={index} className="card">
            <p className="quote-text">{quote.quote}</p>
            <p className="author">- {quote.author}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default QuoteComponent;
