"use strict";
global.$ = require("jquery");

var Bootstrap = require('react-bootstrap');
var React = require('react');

var CommentBox = require('./comment-box');

var App = React.createClass({
    render: function () {
        return (
            <div className='app'>
                <CommentBox source={this.props.url} pollInterval={this.props.loadInterval}/>
            </div>
        );
    }
});

React.render(<App url='./comment' loadInterval={200000}/>, document.body);
