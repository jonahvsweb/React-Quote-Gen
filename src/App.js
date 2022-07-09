import Quote from "./components/Quote";
import Footer from "./components/Footer";

function App() {
  const data = [
    {
      name: "Tito Puente",
      quote: "This is dope!",
    },
    {
      name: "Tito Puente",
      quote: "This is dope!",
    },
    {
      name: "Tito Puente",
      quote: "This is dope!",
    },
    {
      name: "Tito Puente",
      quote: "This is dope!",
    },
    {
      name: "Tito Puente",
      quote: "This is dope!",
    },
  ];

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
