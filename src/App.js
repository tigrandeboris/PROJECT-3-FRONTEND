import { Route, Switch } from 'react-router-dom';
import AnonRoute from './components/AnonRoute/AnonRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ProjectList from './pages/ProjectList/ProjectList';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/projects" exact component={ProjectList} />
        <AnonRoute exact path="/signup" component={Signup} redirectPath="/projects" />
        <AnonRoute exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
