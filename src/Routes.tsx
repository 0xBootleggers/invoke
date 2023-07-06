import { Routes as Router, Route } from "react-router-dom";

import { LayoutContainer } from "./components/LayoutContainer";
import { Home } from "./pages/Home";
import { Spike } from "./pages/Spike";
import { Success } from "./pages/Success";

export const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<LayoutContainer />}>
        <Route index element={<Home />} />
        <Route path={`invoke`} element={<Spike />} />
        <Route path={`success/:daoId`} element={<Success />} />
      </Route>
    </Router>
  );
};
