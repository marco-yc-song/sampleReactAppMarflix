import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

//exact 들어가면 반드시 일치해야됨
//Switch : 한번에 한 놈만 라우팅 시켜줌
export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/TV" exact component={TV} />
      <Route path="/TV/popular" render={() => <h1>popular!</h1>} />
      <Route path="/Search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
