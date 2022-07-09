import { useEffect, useState } from "react";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import { data } from "./data/data";
import "./styles/styles.css";

function App() {
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const randomize = () => {
    const randomNumber = Math.floor(Math.random() * data.length);
    setQuote(data[randomNumber]);
  };

  useEffect(() => {
    randomize();
    setIsLoading(false);
  }, []);

  return (
    <section className="page">
      <div className="container">
        <h1>Quote Generator</h1>
        {isLoading ? (
          <p className="loading">Quote is loading...</p>
        ) : (
          <div className="quote-container">
            <Quote data={quote} />
          </div>
        )}
        <button onClick={randomize}>Generate quote</button>
      </div>
      <Footer />
    </section>
  );
}

export default App;
