import { useState } from "react";
import Container from "./components/Container/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      text: "Task 1",
      checkStatus: false,
    },
    {
      id: 2,
      text: "Task 2",
      checkStatus: false,
    },
    {
      id: 3,
      text: "Task 3",
      checkStatus: false,
    },
  ]);

  return (
    <div className="App">
      <Header />

      <Container />

      <Footer />
    </div>
  );
}

export default App;
