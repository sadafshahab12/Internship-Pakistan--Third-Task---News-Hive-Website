import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Politics from "./components/Politics";
import Sports from "./components/Sports";
import Tech from "./components/Tech";
import Business from "./components/Business";
import Footer from "./components/Footer";
import NewsLetter from "./components/ui/NewsLetter";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/business" element={<Business/>} />
        </Routes>
        <NewsLetter/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
