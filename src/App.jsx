import Attribution from "./components/Attribution";
import Signup from "./components/Signup";
import Success from "./components/Success";
import { useState } from "react";

function App() {
  const [isSubmitted] = useState(false);

  return (
    <>
      {isSubmitted ? <Success /> : <Signup />}
      <Attribution />
    </>
  );
}

export default App;
