import React, { Component } from 'react';

const withClass = (WrappedComponent, className) => {
  const withClass = class extends Component {
    render(props) {
      return (
        <div className={className}>
          <WrappedComponent ref={props.forwardedRef} {...this.props}/>
        </div>
      )
    }
  }
}

export default withClass;