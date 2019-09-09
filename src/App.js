import React from 'react';
import PropTypes from 'prop-types';

/* Class Approach
  - This maintains state
*/
class App extends React.Component {
  render() {
    let props = this.props
    return <h1>{props.txt}</h1>
  }
}

// Props type for the App
App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

// Default props for the App in case the props are not provided
App.defaultProps = {
  txt: "This is the default text"
}

export default App;
