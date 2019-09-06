import React from 'react';

/* Class Approach
  - This maintains state
*/
class App extends React.Component {
  render() {
    // return <h1>Hello JSX....!</h1>
    return React.createElement('h1', null, 'Hello Create Element...!')
  }
}

/* JSX approach
  - This is stateless
*/
// const App = () => <h1>Hello, I am State Less </h1>

export default App;
