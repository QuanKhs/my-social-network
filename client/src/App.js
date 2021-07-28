import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from 'routes';
import Loading from 'components/Loading';
import Notify from 'components/Notify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { refreshToken } from 'redux/actions/authAction';

function App() {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());

  }, [dispatch])

  return (
    <div className="my__app">
      <Notify />
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