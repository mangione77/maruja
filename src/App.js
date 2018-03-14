import React, { Component } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import NewLoadedUrl from './common/NewLoadedUrl'
import TableLayout from './components/TableLayout'
import findId from './utils/findFacebookId'

class App extends Component {
  constructor() {
    super()
    this.state = {
      profileUrl:'',
      profileId: '',
      errorGetId: ''
    }
  }

  onProfileUrlChange = (fbUrl) => {
    this.setState({
      profileUrl:fbUrl
    }, () => {
      findId(this.state.profileUrl)
        .then(response => {
          console.log(response)
          this.setState({
            profileId:response
          })
        })
        .catch(err => {
          this.setState({
            errorGetId: 404
          })
        })
    })
  }   

  render() {
    return (
      <div className="App">
        <AppHeader onProfileUrlChange={this.onProfileUrlChange} />
        <NewLoadedUrl profileURL={this.state.profileUrl} profileId={this.state.profileId} errorGetId={this.state.errorGetId} />
        <TableLayout profileId={this.state.profileId} />
      </div>
    );
  }
}

export default App;
