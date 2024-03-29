import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './pages/About';
import HistorySample from './pages/HistorySample';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Profiles from './pages/Profiles';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path='/profile/:username' component={Profile} />
        <Route path='/profiles' component={Profiles} />
        <Route path='/history' component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
