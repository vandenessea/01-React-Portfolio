import React from "react";

//Below we are imoporting our portfolio file from our componets folder
import Portfolio from "./componets/Portfolio";
import ContactInfo from "./componets/ContactInfo";
import Card from "./componets/Card";
import Carousel from "./componets/Carousel";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
//import  from './componets/Card';
import "./App.css";
//import { Navbar } from 'react-bootstrap';

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `portfolio` and rendering it in the return method.

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <ContactInfo />
      <div className="wrapper">
        <Carousel />
        <Card className= "absolute-card" />
      </div>
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
