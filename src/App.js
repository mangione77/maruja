import React, { Component } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import NewLoadedUrl from './common/NewLoadedUrl'
import TableLayout from './components/TableLayout'

class App extends Component {
  constructor() {
    super()
    this.state = {
      profileUrl:''
    }
  }

  onProfileUrlChange = (fbUrl) => {
    this.setState({
      profileUrl:fbUrl
    })
  } 

  render() {
    return (
      <div className="App">
        <AppHeader onProfileUrlChange={this.onProfileUrlChange} />
        <NewLoadedUrl profileUrl={this.state.profileUrl} />
        <TableLayout />
      </div>
    );
  }
}

export default App;
