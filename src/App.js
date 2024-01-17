import { useEffect, useState } from "react";

// Basic usage of useReducer
// import { useReducer } from "react";
// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({type: "increment"})}>+</button>
//       <button onClick={() => dispatch({type: "decrement"})}>-</button>
//       <button onClick={() => dispatch({type: "reset"})}>Reset</button>
//     </>
//   );
// }
// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "decrement":
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case "reset":
//       return {
//         ...state,
//         count: 0,
//       };
//     default:
//       return state;
//   }
// }

// export default App;


// Fetch Data
// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const res = await fetch("https://jsonplaceholder.org/posts");
//       const data = await res.json();
//       if (data) {setData(data)}
//     }
//     getData();
//   }, []);

//   return (
//     <>
//     <ul>
//       {data.map((i) => (
//         <li key={i.id}>{i.title}</li>
//       ))}
//     </ul>
//     </>
//   );
// }
// export default App;


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