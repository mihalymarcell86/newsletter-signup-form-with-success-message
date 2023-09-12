import Attribution from "./components/Attribution";
import Signup from "./components/Signup";
import Success from "./components/Success";
import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailState = useState("");

  return (
    <>
      {isSubmitted ? (
        <Success emailState={emailState} submit={setIsSubmitted} />
      ) : (
        <Signup emailState={emailState} submit={setIsSubmitted} />
      )}
      <Attribution />
    </>
  );
}

export default App;
