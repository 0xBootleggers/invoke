import { Routes as Router, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { LayoutContainer } from './components/LayoutContainer';
import Name from './pages/Name';
import Tokens from './pages/Tokens';
import Members from './pages/Members';
import Review from './pages/Review';
import Success from './pages/Success';
import { TARGET_DAO } from './targetDao';

const routePath = `molochv3/${
  TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID
}/${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS}`;

export const Routes = () => {
  return (
    <Router>
      <Route path='/' element={<LayoutContainer />}>
        <Route index element={<Home />} />
        <Route path={`${routePath}/name`} element={<Name />} />
        <Route path={`${routePath}/tokens`} element={<Tokens />} />
        <Route path={`${routePath}/members/`} element={<Members />} />
        <Route path={`${routePath}/review/`} element={<Review />} />
        <Route path={`${routePath}/success/`} element={<Success />} />
      </Route>
    </Router>
  );
};
