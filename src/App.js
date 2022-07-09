import Quote from "./components/Quote";
import Footer from "./components/Footer";

function App() {
  return (
    <section>
      <div className="App">
        <h1>Quote Generator</h1>
        <Quote />
        <button>Generate quote</button>
      </div>
      <Footer />
    </section>
  );
}

export default App;
