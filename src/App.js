import Quote from "./components/Quote";
import Footer from "./components/Footer";
import { data } from "./data/data";

function App() {
  return (
    <section>
      <div className="App">
        <h1>Quote Generator</h1>
        <Quote data={data} />
        <button>Generate quote</button>
      </div>
      <Footer />
    </section>
  );
}

export default App;
