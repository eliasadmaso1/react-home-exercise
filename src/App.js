import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Routing from "./Components/Routing/Routing";

function App() {
  return (
    <>
      <Router>
        <Routing />
      </Router>
    </>
  );
}

export default App;
