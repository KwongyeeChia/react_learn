import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import './index.css';
import { observable } from 'mobx'

var appState = observable({
  timer: 0
})
@observer
class TimerView extends Component {
  onReset() {
    this.props.appState.restTimer()
  }
  render() {
    return (
      <button onClick={this.onReset.bind(this)}>
        Seconds passed: {this.props.appState.timer}
      </button>
    )
  }
}
ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'))
// import Header from './Header'
// import Content from './Content'
// import { Provider } from './react-redux'
// import { Provider } from 'react-redux'

// const themeReducer = (state, action) =>{
//   if (!state) return {
//     themeColor: 'red'
//   }
//   switch (action.type) {
//     case 'CHANGE_COLOR':
//       return {...state, themeColor: action.themeColor}
//     default :
//       return state
//   }
// }

// function createStore (reducer) {
//   let state = null
//   const listeners = []
//   const subscribe = (listener) => listeners.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listeners.forEach((listener) => listener())
//   }
//   dispatch({}) // 初始化 state
//   return { getState, dispatch, subscribe }
// }

// const store = createStore(themeReducer)

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div>Learn mobx</div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'))

// const appState = {
//   title: {
//     text: 'React.js 小书',
//     color: 'red',
//   },
//   content: {
//     text: 'React.js 小书内容',
//     color: 'blue'
//   }
// }

// function stateChanger (state, action) {
//   switch (action.type) {
//     case 'UPDATE_TITLE_TEXT':
//       state.title.text = action.text
//       break
//     case 'UPDATE_TITLE_COLOR':
//       state.title.color = action.color
//       break
//     default:
//       break
//   }
// }

// function createStore (state, stateChanger) {
//   const getState = () => state
//   const dispatch = (action) => stateChanger(state, action)
//   return { getState, dispatch }
// }

// const store = createStore(appState, stateChanger)

// function renderTitle (title) {
//   const titleDOM = document.getElementById('title')
//   titleDOM.innerHTML = title.text
//   titleDOM.style.color = title.color
// }
// function renderContent (content) {
//   const contentDOM = document.getElementById('content')
//   contentDOM.innerHTML = content.text
//   contentDOM.style.color = content.color
// }

// function renderApp (appState) {
//   renderTitle(appState.title)
//   renderContent(appState.content)
// }

// renderApp(store.getState())
// store.dispatch({type: 'UPDATE_TITLE_TEXT',text: 'helo'})
// store.dispatch({type: 'UPDATE_TITLE_COLOR',color: 'green'})
// renderApp(store.getState())
// ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

