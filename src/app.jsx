"use strict";
require("jquery");
var Bootstrap = require('react-bootstrap');

var React = require('react');

var App = React.createClass({
    render: function () {
        return (
            <div className='react_app btn-toolbar'>
                <Bootstrap.Button bsStyle='primary' bsSize='large'>hello</Bootstrap.Button>
            </div>
        );
    }
});

React.render(<App/>, document.body);
