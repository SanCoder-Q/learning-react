"use strict";
var Bootstrap = require('react-bootstrap');

var React = require('react');
var marked = require('marked');

var CommentList = React.createClass({
    render: function () {
        var commentListItems = this.props.data.map(
            function (comment) {
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
    handleSubmit: function (e) {
        e.preventDefault();
        var author = React.findDOMNode(this.refs.author).value.trim();
        var text = React.findDOMNode(this.refs.text).value.trim();
        if (!author || !text) {
            return;
        }
        this.props.onCommentSubmit({
            author: author,
            text: text
        });
        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.text).value = '';
        return;
    },
    render: function () {
        return (
            <form className='commentForm' onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Your name ...' ref='author'/>
                <input type='text' placeholder='Say something ...' ref='text'/>
                <input type='submit' value="Post"/>
            </form>
        );
    }
});

var CommentText = React.createClass({
    render: function () {
        return (
            <div className='commentText'>
                <h2 className='commentAuthor'>
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={{__html: marked(this.props.children.toString(), {sanitize: true})}}/>
            </div>
        );
    }
});

var CommentBox = React.createClass({
    loadDataFromServer: function () {
        $.getJSON(this.props.source)
            .done(function (data) {
                this.setState({data: data});
            }.bind(this));
    },
    handleCommentSubmit: function (comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax({
            url: this.props.source,
            type: 'post',
            data: JSON.stringify(comment),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
        })
            .done(function (data) {
                console.log('POST: success!');
                this.setState({data: data});
            }.bind(this))
            .fail(function (xhr, status, err) {
                console.log('POST: fail!');
                console.error(this.props.url, status, err.toString());
            }.bind(this));
    },
    getInitialState: function () {
        return {data: []};
    },
    componentDidMount: function () {
        this.loadDataFromServer();
        setInterval(this.loadDataFromServer, this.props.pollInterval);
    },
    render: function () {
        return (
            <div className='commentBox'>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
});

module.exports = CommentBox;
