// import { useState } from "react";
import "./styles/App.css";

function App() {
  // const [count, setCount] = useState(0);
  // onClick={() => setCount((count) => count + 1)}

  return (
    <>
      <section id="center">
        <h1>Hello World!</h1>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <span>Bottom Left</span>
        </div>
        <div id="social">
          <span>Bottom Right</span>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="spacer"></section>
    </>
  );
}

export default App;
