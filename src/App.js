import { useEffect, useState } from "react";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import { data } from "./data/data";

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
    <section>
      <div className="App">
        <h1>Quote Generator</h1>
        {isLoading ? <p>Quote is loading...</p> : <Quote data={quote} />}}
        <button onClick={randomize}>Generate quote</button>
      </div>
      <Footer />
    </section>
  );
}

export default App;
