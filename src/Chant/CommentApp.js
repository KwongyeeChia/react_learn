import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import InputWithUserName from './InputWithUserName'


class CommentApp extends Component {

  constructor() {
    super()
    this.state = {
      comments: []
    }
  }
  componentWillMount() {
    this._loadComments()
  }
  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }

  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  handleSubmitComment(comment) {
    console.log(comment)
    let { comments } = this.state
    comments.push(comment)
    this._saveComments(comments)
    this.setState({
      comments: comments
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <InputWithUserName />
        <InputWithUserName />
        {/* <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList  comments={this.state.comments}/> */}
      </div>
    )
  }
}

export default CommentApp