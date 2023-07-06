import { Routes as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { LayoutContainer } from "./components/LayoutContainer";
import { Spike } from "./pages/Spike";
import Success from "./pages/Success";

export const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<LayoutContainer />}>
        <Route index element={<Home />} />
        <Route path={`invoke`} element={<Spike />} />
        <Route path={`success`} element={<Success />} />
      </Route>
    </Router>
  );
};
