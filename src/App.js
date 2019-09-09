import React from 'react';

/* Class Approach
  - This maintains state
*/
class App extends React.Component {
  render() {
    return (
      <Button> I <Heart /> Button </Button>
    )
  }
}

const Button = (props) => <button> {props.children} </button>

const Heart = () => <span>&hearts;</span>

export default App;
