import React, { useEffect, useState } from "react";
import axios from "axios";
import './New.css';
import next from '../next.png';
import SocialMediaIcons from "./SocialMediaIcons";
import { TwitterShareButton, FacebookShareButton, LinkedinShareButton } from "react-share";

const QuoteComponent = () => {
  const [quotes, setQuotes] = useState([]);
  const category = "inspirational";const categories = [
    "age", "alone", "amazing", "anger", "architecture", "art", "attitude", "beauty", "best", "birthday",
    "business", "car", "change", "communication", "computers", "cool", "courage", "dad", "dating", "death",
    "design", "dreams", "education", "environmental", "equality", "experience", "failure", "faith", "family",
    "famous", "fear", "fitness", "food", "forgiveness", "freedom", "friendship", "funny", "future", "god",
    "good", "government", "graduation", "great", "happiness", "health", "history", "home", "hope", "humor",
    "imagination", "inspirational", "intelligence", "jealousy", "knowledge", "leadership", "learning", "legal",
    "life", "love", "marriage", "medical", "men", "mom", "money", "morning", "movies", "success"
  ];
  
  // Randomly select a category
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
  console.log(randomCategory);
  const apiKey = "EgtS4gqLsbjvHM2bBjKwBA==PYmsGLFQFXQzq0Na";

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=${randomCategory}`,
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
    setQuotes([]);
    fetchQuotes();
  };

  return (
    <>
      <SocialMediaIcons />
      <div className="quote-container">
        <h1>Elevate Your Day with Quotes</h1>
        <div className="card-container">
          {quotes.map((quote, index) => (
            <div key={index} className="card">
              <p className="quote-text">{quote.quote}</p>
              <p className="author">- {quote.author}</p>
              {/* Social Media Sharing Buttons */}
              {/* <div className="social-share-buttons">
              <TwitterShareButton title={quote.quote} url={window.location.href}>
                  Twitter
                </TwitterShareButton>
                <FacebookShareButton quote={quote.quote} url={window.location.href}>
                  Facebook
                </FacebookShareButton>
                <LinkedinShareButton summary={quote.quote} url={window.location.href}>
                  LinkedIn
                </LinkedinShareButton>
              </div> */}
            </div>
          ))}
        </div>
        <button className="fetch-button" onClick={handleFetchNewQuotes}>
          <abbr title="NEXT"><img id='next' src={next} alt="Next" /></abbr>
        </button>
      </div>
    </>
  );
};

export default QuoteComponent;
