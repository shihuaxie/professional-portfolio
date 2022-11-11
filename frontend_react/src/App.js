import React from "react";

//import all containers from one file 'index.js' from container
import { About, Header, Footer, Skills, Testimonial, Work } from "./container";
//import all components from one file 'index.js' from components
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
