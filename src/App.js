import { useEffect, useState } from "react";

// Basic usage of useEffect
function App() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > 0) {
      console.log("useEffect!");
      document.title = ` (${index})`;
    }
  }, [index]);

  return (
    <>
      <h1>{index}</h1>
      <button onClick={() => setIndex(index + 1)}>Click</button>
    </>
  );
}

export default App;
