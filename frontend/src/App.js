import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/hello-world")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  return <div className="App">{message}</div>;
}

export default App;
