import "./styles.css";
import { useState } from "react";
import Navbar from "./Components/Navbar.js";
import TextForm from "./Components/TextForm.js";

export default function App() {
  const [mode, setMode] = useState("Dark");
  const toggleMode = () => {
    if (mode === "Light") {
      setMode("Dark");
    } else {
      setMode("Light");
    }
  };
  return (
    <div className={`App ${mode}`}>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <TextForm mode={mode} />
    </div>
  );
}
