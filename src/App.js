import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { LabelContainer } from "./container/LabelContainer";

function App() {

  let componentRef = useRef();

  return (
    <>
      <ReactToPrint 
        trigger={() => { return <button>Print this out!</button> }}
        content={() => componentRef }/>
        <LabelContainer ref={ (el) => (componentRef = el) }/>
    </>
  );
}

export default App;
