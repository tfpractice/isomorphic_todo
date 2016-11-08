import React, { PropTypes } from 'react';

const Main = ({ children }) => (
    <div id="main-view">
        <h1>Todos</h1>

        <hr />

        {children}

      </div>
);

Main.propTypes = { children: PropTypes.object };
export default Main;