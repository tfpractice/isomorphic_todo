import React, { Component, PropTypes } from 'react';

export default class Main extends Component {
    render() {
        return (
          <div id="main-view" className='container'>
                <h1>Todos</h1>
                <hr/>
                {this.props.children}
          </div>
          );
    }
}
;

// Main.propTypes = { children: PropTypes.object, };
// export default Main;
