import React, { Suspense,Component, lazy } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Loader from '../Loader/Loader';
  const PoroductList = lazy(() => import('../ProductList/ProductList'));
  const PoroductFullDetails = lazy(() => import('../ProductFullDetail/ProductFullDetail'));
  const Home = lazy(() => import('../Home/Home'));
  const Routes = () => {
    return (
    <Suspense fallback ={<Loader/>}>
            <Switch>
                <Route exact path="/search.html">
                    <PoroductList />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/product-list/:categoryId" component={PoroductList}>
                </Route>
                <Route exact path="/product-details/:urlkey" component={PoroductFullDetails} >
                  </Route>
            </Switch>
        </Suspense>
    );

};

export default Routes;

