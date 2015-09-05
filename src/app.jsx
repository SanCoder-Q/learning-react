"use strict";
require("jquery");
var Bootstrap = require('react-bootstrap');

var React = require('react');
var marked = require('marked');

var CommentBox = React.createClass({
    render: function () {
        return (
            <div className='commentBox'>
                Comment Box
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        return (
            <div className='commentList'>
                <CommentText author='SanCoder'>Hello! ```var React = require("react");```</CommentText>
                <CommentText author='Jackson'>World!</CommentText>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className='commentForm'>
                Comment Form
            </div>
        );
    }
});

var CommentText = React.createClass({
    render: function() {
        return (
            <div className='commentText'>
                <h2 className='commentAuthor'>
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={{__html: marked(this.props.children.toString(), {sanitize: true})}} />
            </div>
        );
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div className='app'>
                <h1>Comment Text</h1>
                <CommentList/>
                <CommentForm/>
            </div>
        );
    }
});

React.render(<App/>, document.body);
