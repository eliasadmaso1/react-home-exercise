import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ArticleProvider } from "./Components/Context/Context";

import Routing from "./Components/Routing/Routing";
import { useState } from "react";

function App() {
  const [articleContext,setArticleContext] = useState({});
  return (
    <>
      <ArticleProvider value={{articleContext,setArticleContext}}>
        <Router>
          <Routing />
        </Router>
      </ArticleProvider>
    </>
  );
}

export default App;
