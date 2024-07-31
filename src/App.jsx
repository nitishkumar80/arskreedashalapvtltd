
import "./App.css";
import About from "./components/About";
import Admission from "./components/Admission";
import Contact from "./components/Contact";
import Blog from "./components/Contact";
import MyFooter from "./components/Footer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import Services from "./components/Services";


function App() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Product/>
<Contact/>
      <Newsletter/>
      <Admission/>
      <MyFooter/>
    </>
  );
}

export default App;
