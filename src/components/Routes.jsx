import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ResultContextProvider } from '../context/ResultContextProvider';
import Results from './Results';

const Routes = () => {
    return (
        <div className="p-4">
            {/* <ResultContextProvider> */}
            <Switch>
                <Route exact path="/">
                    <Redirect to="/search" />
                </Route>
                <Route path={['/search', '/images', '/news', '/videos']}>
                    <Results />
                </Route>
            </Switch>
            {/* </ResultContextProvider> */}
        </div>
    );
};

export default Routes;