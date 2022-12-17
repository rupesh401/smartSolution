import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import NavbarTrends from "./components/Navbar";
import Teams from "./components/Teams";
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="container-fluid p-0">
      <BrowserRouter>
        <NavbarTrends />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/teams" element={<Teams />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
