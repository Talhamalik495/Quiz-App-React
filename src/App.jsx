import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Quiz />
    </div>
  );
}

export default App;
