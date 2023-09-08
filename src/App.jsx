import Attribution from "./components/Attribution";
import Signup from "./components/Signup";
import Success from "./components/Success";
import { useState } from "react";

function App() {
  const submitState = useState(false);
  const emailState = useState("");

  return (
    <>
      {submitState[0] ? (
        <Success emailState={emailState} submit={submitState[1]} />
      ) : (
        <Signup emailState={emailState} submit={submitState[1]} />
      )}
      <Attribution />
    </>
  );
}

export default App;
