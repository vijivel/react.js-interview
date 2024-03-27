import React from 'react';

// Higher-Order Component to provide a toggle functionality
const withToggle = (WrappedComponent) => {
  return class WithToggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        toggle: false
      };
    }

    toggle = () => {
      this.setState(prevState => ({
        toggle: !prevState.toggle
      }));
    }

    render() {
      return <WrappedComponent {...this.props} toggle={this.toggle} toggleState={this.state.toggle} />;
    }
  }
}

// Example usage of the HOC
const MyComponent = ({ toggle, toggleState }) => (
  <div>
    <button onClick={toggle}>Toggle</button>
    {toggleState && <p>Toggle State: ON</p>}
  </div>
);

const EnhancedComponent = withToggle(MyComponent);

export default EnhancedComponent;
