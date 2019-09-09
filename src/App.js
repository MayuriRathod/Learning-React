import React from 'react';

class App extends React.Component {
  render() {
    // 1. To check isRequired condition
    // return <Title />
    // 2. To check type condition 
    // return <Title text={false} />
    // 3. Correct conditions
    return <Title text="Correct condition...!" />
  }
}

const Title = (props) => <h1> Title: {props.text} </h1>

Title.propTypes = {
  // props - All the props
  // propName - Name of the prop
  // component - Component
  text(props, propName, component) {
    // Condition for isRequired
    if(!(propName in props)) {
      return new Error(`missing ${propName} in ${component} component`)
    }
    // Condition for type check
    else if(typeof props[propName] !== 'string') {
      return new Error(`Expected ${propName} to have type "string" instead of "${typeof props[propName]}" in ${component} component`)
    }
  }
}

export default App;
