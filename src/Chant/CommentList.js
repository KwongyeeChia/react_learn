import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
  static defaultProps = {
    comments: PropTypes.array
  }
  render() {
    const { comments } = this.props
    return (
      <div>{comments.map((i, index) => {
        return <Comment key={index} comment={i} />
      })}</div>
    )
  }
}

export default CommentList