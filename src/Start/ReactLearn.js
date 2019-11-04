import React, { Component } from 'react';

class LikeButton extends Component {
    static defaultProps = {
      wordings : {
        likedText : '取消',
        unLikedText : '点赞',
        likedEmoji : '😍'
      }
    }
    constructor () {
      super()
      this.state = {
        isLiked : false,
        count: 0
      }
    }
    handleChangeText() {
      this.setState({
        isLiked: !this.state.isLiked
      })
      console.log(this.state.isLiked)
      this.setState((prevState)=>{ return 0 })
      this.setState((prevState)=>{ return { count: prevState.count + 1 } })
      console.log(this.state.count)
    }
    render() {
      const wordings = this.props.wordings
      return (
        <div>
          <button onClick={this.handleChangeText.bind(this)} className='like-button'>
            <span className='like-text'>{this.state.isLiked ? wordings.likedText : wordings.unLikedText}</span>
            <span role='img'>{wordings.likedEmoji}</span>
          </button>
        </div>
      )
    }
  }
  class Title extends Component {
    handleClick(e) {
      console.log(e.target.innerHTML)
      console.log(this)
    }
    render () {
      return (
        <h1 onClick={this.handleClick}>React 小书</h1>
      )
    }
  }
  
  class Index extends Component {
    constructor() {
      super()
      this.state = {
      }
    }
    handleFresh() {
      this.setState({
        wordings : {
          likedText:'我要', unLikedText:'不要', likedEmoji:'👱‍♀'
        }
      })
    }
    render() {
      const users = [
        { username: 'Jerry', age: 21, gender: 'male' },
        { username: 'Tomy', age: 22, gender: 'male' },
        { username: 'Lily', age: 19, gender: 'female' },
        { username: 'Lucy', age: 20, gender: 'female' }
      ]
      return (
        <div>
          <Title />
          <LikeButton wordings={{ likedText:'赞', unLikedText:'已赞', likedEmoji:'🍉' }} />
          <LikeButton wordings={{ likedText:'喜欢', unLikedText:'不喜欢', likedEmoji:'🥝' }} />
          <LikeButton wordings={{ likedText:'我要', unLikedText:'不要', likedEmoji:'👱‍♀' }} />
          <LikeButton wordings={this.state.wordings}/>
          <div onClick={this.handleFresh.bind(this)}>React props 一旦传入，就不可以在组件内部对它进行修改，可以通过父级重新渲染的方式更新子组件</div>
          {
            users.map(i=>{
              return (
                <div key={i.age}>
                  <span>{i.username}</span>
                  <span>{i.age}</span>
                  <span>{i.gender}</span>
                </div>
              )
            })
          }
        </div>
      )
    }
  }