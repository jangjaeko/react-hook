import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import useInput from "./views/useInput";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ paddingTop: "75px", minHeight: "calc(100vh - 80px" }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/useInput" component={useInput} />
          </Switch>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
