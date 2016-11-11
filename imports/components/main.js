import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { green100, green500, green700 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: green500,
		primary2Color: green700,
		primary3Color: green100,
	},
}, {
	avatar: { borderColor: null, },
	// userAgent: global.navigator.userAgent,
	userAgent: 'all',
	// userAgent: req.headers['user-agent'],
});
// console.log('navigator', navigator);

class Main extends Component {
	render() {
		return (
			<div id="main-view" className='container'>
			<RaisedButton label="todobutton"/>
                <h1>Todos</h1>
                <hr/>
                {this.props.children}
         	 </div>
		);
	}
};

const MainMui = (props) => (
	// <MuiThemeProvider muiTheme={muiTheme}>
	<Main {...props}/>
	// </MuiThemeProvider>
);

// const MainMui = () => (
// <Main />
// );
// Main.propTypes = { children: PropTypes.object, };
export default Main;