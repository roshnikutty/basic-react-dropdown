import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DropDownCheck from './DropDownCheck';
import * as serviceWorker from './serviceWorker';

let colors = [{
    name: "Red",
    hex: "#F21B1B"
}, {
    name: "Blue",
    hex: "#1B66F2"
}, {
    name: "Green",
    hex: "#07BA16"
}];

ReactDOM.render(<DropDownCheck list={colors} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();