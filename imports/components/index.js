import React, { PropTypes } from 'react';

// const Main = (children) => (
//     <div id="main-view">
//         <h1>Todos</h1>

//         <hr />

//         {children}

//       </div>
// );

// Main.propTypes = { children: PropTypes.object };
// export default Main;
export default class MainView extends React.Component {
	static propTypes = {
		children: PropTypes.object
	};

	render() {
		return (
			<div id="main-view">
        <h1>Todos</h1>

        <hr />

        {this.props.children}
      </div>
		);
	}
}