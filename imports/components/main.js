import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class Main extends Component {
	render() {
		return (
			<div id="main-view" className='container'>
			 	<RaisedButton label="TodoButton" />
                <h1>Todos</h1>
                <hr/>
                {this.props.children}
          </div>
		);
	}
};

const MainMui = () => (
	<MuiThemeProvider>
      <Main />
    </MuiThemeProvider>
);
// Main.propTypes = { children: PropTypes.object, };
export default MainMui;