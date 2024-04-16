// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import users from './model/users';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import EditUser from './components/EditUser';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={() => <UserList users={users} />} />
        <Route path="/users/:userId" render={({ match }) => {
          const user = users.find(u => u.id === parseInt(match.params.userId, 10));
          return <UserDetails user={user} />;
        }} />
        <Route path="/edit-user/:userId" render={({ match }) => {
          const user = users.find(u => u.id === parseInt(match.params.userId, 10));
          return <EditUser user={user} />;
        }} />
        <Route path="/create-user" component={CreateUser} />
      </Router>
    </div>
  );
}

export default App;



