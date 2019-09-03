import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "Components/Header";

import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

//exact 들어가면 반드시 일치해야됨
//Switch : 한번에 한 놈만 라우팅 시켜줌
//Redirect : 특정 패스를 다른 패스로 리디렉션 시켜줌(지금은 나머지 주소를 전부 루트로보냄)
export default () => (
  <Router>
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/TV" component={TV} />
        <Route path="/TV/popular" render={() => <h1>popular!</h1>} />
        <Route path="/Search" component={Search} />
        {/* :id에서 : 뒷부분은 무엇이든 되어도 된다는 의미  */}
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />

        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);

//router for movie detail

//router for show detail
