import React, { useEffect, useState } from "react";
import axios from "axios";

const QuoteComponent = () => {
  const [quotes, setQuotes] = useState([]);
  const category = "happiness";
  const apiKey = "YOUR_API_KEY";

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          headers: { "X-Api-Key": "EgtS4gqLsbjvHM2bBjKwBA==PYmsGLFQFXQzq0Na" },
        }
      );
      setQuotes(response.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div>
      <h1>Quotes about {category}</h1>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote.quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteComponent;
