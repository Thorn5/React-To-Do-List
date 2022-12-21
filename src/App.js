import { useState } from "react";
import Container from "./components/Container/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Container />

      <Footer />
    </div>
  );
}

export default App;
