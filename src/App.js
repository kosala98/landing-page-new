import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Components/style.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About1 from "./Components/About1";
import About2 from "./Components/About2";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About1 />
      <About2 />
      <Footer />
    </div>
  );
}

export default App;
