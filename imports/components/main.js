import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { green100, green500, green700 } from 'material-ui/styles/colors';
import MuiThemeable from 'material-ui/styles/muiThemeable';

class Main extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme({ userAgent: 'all' })}>
				<div id="main-view" className='container'>
					<RaisedButton label="todobutton"/>
					<h1>Todos</h1>
					<hr/>
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	};
}

const MainMui = (props, context) => (
	<Main {...props}/>
);
Main.contextTypes = { muiTheme: React.PropTypes.object, };

export default Main;
