import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'; // Import your main application component
import RegistrationForm from './RegistrationForm';
import UserView from './UserView';
import UserEdit from './UserEdit';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/register" component={RegistrationForm} />
        <Route path="/users/:userId/edit" component={UserEdit} />
        <Route path="/users" component={UserView} />
        
      </Switch>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
