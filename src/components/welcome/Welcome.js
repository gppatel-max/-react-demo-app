import React from 'react';

function Welcome(props) {
    let name = props.match.params.name || props.name || 'no name provided';
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
        </div>
    );
}
export default Welcome;