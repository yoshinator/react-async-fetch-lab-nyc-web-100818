// create your App component here
import React from 'react'

export default class App extends React.Component {

  state = {
    list: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json').then(r => r.json())
    .then(resp => {
      this.setState({ list: resp.people })
    })
  }


  render() {
    return (
      <div>{this.state.list.map(p => <p key={p.name}>{p.name}</p>)}</div>
    )
  }
}