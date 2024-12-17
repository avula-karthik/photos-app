import { useEffect, useState } from "react";
import "./App.css";
import Photos from "./Photos";

function getRandomUppercaseLetter() {
  const asciiCode = Math.floor(Math.random() * 26) + 65;
  return String.fromCharCode(asciiCode);
}

function App() {
  let [randomString, setRandomString] = useState("");
  useEffect(() => {
    setRandomString(getRandomUppercaseLetter());
  }, []);
  return (
    <div className="App">
      <h1>
        <b>Welcome to Gallery App ! - server #{randomString}</b>
        <b>Test</b>
        {/* refresh makes it fetch new letter everytime */}
      </h1>
      <Photos />
    </div>
  );
}

export default App;
