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

var commentListData = [
    {'author':'SanCoder', 'text':'```var React = require("react");```'},
    {'author':'Jackson', 'text':'```var Marked = require("marked");```'}
];

var CommentList = React.createClass({
    render: function() {
        var commentListItems = this.props.data.map(
            function(comment) {
                return (
                    <CommentText author={comment.author}>
                        {comment.text}
                    </CommentText>
                );
            }
        );

        return (
            <div className='commentList'>
                {commentListItems}
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
                <CommentList data={this.props.data}/>
                <CommentForm/>
            </div>
        );
    }
});

React.render(<App data={commentListData}/>, document.body);
