import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RouteLayout from './components/RouteLayout';

import NotFound from './pages/misc/NotFound';
import Landing from './pages/landing';

function App() {
  return (
    <Router>
      <Switch>
        <RouteLayout exact path="/">
          <Landing />
        </RouteLayout>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <div
        id="toast-container"
        className="fixed bottom-0 left-0 right-0 z-50 sm:bottom-auto sm:left-auto sm:top-16 sm:right-4"
      ></div>
    </Router>
  );
}

export default App;
