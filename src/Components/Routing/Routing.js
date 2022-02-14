import React from "react";
import { Switch, Route } from "react-router-dom";
import Articles from "../Pages/Articles/Articles";
import Article from "../Pages/Article/Article";

function Routing() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route path="/article" component={Article} />
      </Switch>
    </div>
  );
}

export default Routing;
