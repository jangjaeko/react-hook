import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import useTab from "./views/useTab";
import useEffect from "./views/UseEffect";
import useTitleex from "./views/useTitleex";
import useClickex from "./views/useClickex";
import useCon from "./views/usecon";
import PreventLeave from "./views/PreventLeave";
import BeforeLeave from "./views/BeforeLeave";
import FadeIn from "./views/FadeIn";
import Network from "./views/Network";
import Scrollex from "./views/Scrollex";
import imageFull from "./views/imageFull";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ paddingTop: "75px", minHeight: "calc(100vh - 80px" }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/useTab" component={useTab} />
            <Route exact path="/useeffect" component={useEffect} />
            <Route exact path="/usetitle" component={useTitleex} />
            <Route exact path="/useclick" component={useClickex} />
            <Route exact path="/useconfirm" component={useCon} />
            <Route exact path="/preventleave" component={PreventLeave} />
            <Route exact path="/beforeleave" component={BeforeLeave} />
            <Route exact path="/fadein" component={FadeIn} />
            <Route exact path="/network" component={Network} />
            <Route exact path="/scroll" component={Scrollex} />
            <Route exact path="/imagefull" component={imageFull} />
          </Switch>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
