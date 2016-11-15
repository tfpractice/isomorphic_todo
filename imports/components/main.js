import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Main extends Component {
  render() {
    return (
     <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: 'all' })}>
       <div id='main-view' className='container'>
         <h1>Tasks</h1>
         <hr/>
         {this.props.children}
       </div>
     </MuiThemeProvider>
    );
  };
}

Main.contextTypes = { muiTheme: React.PropTypes.object, };

export default Main;
