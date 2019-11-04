import React, {Component} from 'react'

export default (WrappedComponent, name) => {
  class NewComponent extends Component {
    constructor() {
      super()
      this.state = { data: null }
    }
    componentWillMount() {
      this.setState({ data: name })
    }
    render() {
      return <WrappedComponent data={this.state.data} />
    }
  }
  return NewComponent
}