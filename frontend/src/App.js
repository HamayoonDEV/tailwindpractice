import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Feature from "./components/Feature/Feature";
import Testomonial from "./components/testomonial/Testomonial";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Feature />
      <Testomonial />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
