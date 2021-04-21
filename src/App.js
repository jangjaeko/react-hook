import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import useTab from "./views/useTab";
import useEffect from "./views/UseEffect";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ paddingTop: "75px", minHeight: "calc(100vh - 80px" }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/useTab" component={useTab} />
            <Route exact path="/useeffect" component={useEffect} />
          </Switch>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
