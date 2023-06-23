import { Routes as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { LayoutContainer } from "./components/LayoutContainer";
import Name from "./pages/Name";
import Tokens from "./pages/Tokens";
import Members from "./pages/Members";
import Review from "./pages/Review";
import Success from "./pages/Success";
import { Spike } from "./pages/Spike";

export const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<LayoutContainer />}>
        <Route index element={<Home />} />
        <Route path={`spike`} element={<Spike />} />
        <Route path={`name`} element={<Name />} />
        <Route path={`tokens`} element={<Tokens />} />
        <Route path={`members/`} element={<Members />} />
        <Route path={`review/`} element={<Review />} />
        <Route path={`success/`} element={<Success />} />
      </Route>
    </Router>
  );
};
