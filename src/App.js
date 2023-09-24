import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import UserView from './UserView';
import UserEdit from './UserEdit';

function App() {
  return (
    <Router>
      <div>
        <h1>User Management App</h1>
        <Switch>
          <Route path="/register" component={RegistrationForm} />
          <Route path="/users/:userId/edit" component={UserEdit} />
          <Route path="/users" component={UserView} />
          <Route exact path="/" component={UserView} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
