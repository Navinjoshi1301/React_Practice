import { useState } from "react";
function App() {
  // let counter = 15;

  let [counter, setCounter] = useState(15);
  const addValue = () => {
    if(counter <20)
    setCounter(counter + 1);
  };
  let removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    else{
      alert("counter is 0")
    }
  };
  return (
    <>
      <h1>hello wold</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
