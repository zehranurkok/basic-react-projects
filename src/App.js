import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.org/posts");
      const data = await res.json();
      if (data) {setData(data)}
    }
    getData();
  }, []);

  return (
    <>
    <ul>
      {data.map((i) => (
        <li key={i.id}>{i.title}</li>
      ))}
    </ul>
    </>
  );
}

export default App;

// Basic usage of useEffect
// function App() {

//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     if (index > 0) {
//       console.log("useEffect!");
//       document.title = ` (${index})`;
//     }
//   }, [index]);

//   return (
//     <>
//       <h1>{index}</h1>
//       <button onClick={() => setIndex(index + 1)}>Click</button>
//     </>
//   );
// }

// export default App;
