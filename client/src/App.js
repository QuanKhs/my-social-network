import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from 'routes';
import Loading from 'components/Loading';

function App() {
  return (
    <div className="my__app">
      <Suspense fallback={Loading()}>
        <BrowserRouter>
          <Switch>
            {routes.map(({ component: Component, path, ...rest }, index) => {
              return (
                <Route component={Component} path={path} key={index} {...rest} />
              );
            })}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;