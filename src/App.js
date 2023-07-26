// CSS
import "./App.css";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import Whatsapp from "./components/Whatsapp/Whatsapp";

function App() {
  return (
    <div className="App">
      <div className="center">
        <Header />
        <Home />
        <Whatsapp />
        <Footer />
      </div>
    </div>
  );
}

export default App;
