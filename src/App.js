import "./App.css";
import { useState } from "react";
import Resulit from "./componet/Resulit";
function App() {
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [resulit, setResulit] = useState();

  const doCalculte = (operter) => {
    if (operter === "+") {
      setResulit(parseInt(input1) + parseInt(input2));}
    if (operter === "-") {
      setResulit(parseInt(input1) - parseInt(input2));}
   if (operter === "/") {
        setResulit(parseInt(input1) / parseInt(input2));}
    if (operter === "*") {
          setResulit(parseInt(input1) * parseInt(input2));}
   if (operter === "%") {
            setResulit(parseInt(input1) % parseInt(input2));}
    
    }
    

 
  return (
    <>
      <div className="contniers">
        <h2>calculter </h2>
        <input
          type="text"
          onChange={(e) => setInput1(e.target.value)}
          className="form-control"
          aria-label="Server"
        />
        <input
          type="text"
          onChange={(e) => setInput2(e.target.value)}
          className="form-control mt-2"
          aria-label="Server"
        />
        <button
          type="button"
          onClick={() => doCalculte("+")}
          className="btn btn-secondary me-md-2 mt-3 g-col-4 "
        >
          +
        </button>
        <button
          type="button"
          onClick={() => doCalculte("-")}
          className="btn btn-secondary me-md-2 mt-3 g-col-4"
        >
          -
        </button>
        <button type="button"
         onClick={() => doCalculte("/")}
         className="btn btn-secondary me-md-2 mt-3">
          /
        </button>
        <button type="button" 
         onClick={() => doCalculte("*")}
         className="btn btn-secondary me-md-2 mt-3">
          *
        </button>
        <button type="button" 
         onClick={() => doCalculte("%")}
         className="btn btn-secondary me-md-2 mt-3">
          %
        </button>
       <Resulit Resulit={resulit}/>
      </div>
    </>
  );
}

export default App;
