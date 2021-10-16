import React from 'react';
import UserInfos from './components/UserInfos';
import './index.css';

class App extends React.Component {
  render() {
  return (
    <div className="App">
     <h1>Random Users</h1>
     <UserInfos />
    </div>
  );
}
}

export default App;
