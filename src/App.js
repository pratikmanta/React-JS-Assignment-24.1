import React, { Component } from 'react';
import UserList from './UserList';

// contains App component with UserList component

class App extends Component {
  render() {
    return (
      <div className="container text-center">
      <UserList title="User List"/>
      </div>
    );
  }
}

export default App;
