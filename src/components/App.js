import { useState } from "react";
import "./App.css";
function App() {
  const [color, setColor] = useState("");
  const data = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
    "turquoise",
    "lavender",
    "crimson",
    "magenta",
  ];

  return (
    <div
      style={{
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex" }}>
        {data.map((value) => (
          <button
            className="button"
            onClick={() => setColor(value)}
            style={{ backgroundColor: value }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
