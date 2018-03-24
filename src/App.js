import React, { Component } from 'react'
import './App.css'
import Main from './pages/Main'
import Footer from './components/Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import findId from './utils/findFacebookId'
import BulkUploader from './pages/BulkUploader' 

class App extends Component {
  constructor() {
    super()
    this.state = {
      profileUrl: '',
      profileId: '',
      errorGetId: ''
    }
  }

  onProfileUrlChange = (fbUrl) => {
    this.setState({
      profileUrl: fbUrl
    }, () => {
      findId(this.state.profileUrl)
        .then(response => {
          this.setState({
            profileId: response
          })
        })
        .catch(err => {
          this.setState({
            errorGetId: err
          })
        })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={(props) =>
            <Main {...props}
              onProfileUrlChange={this.onProfileUrlChange}
              profileURL={this.state.profileUrl}
              profileId={this.state.profileId}
              errorGetId={this.state.errorGetId}
              profileId={this.state.profileId}
            />
          }
          />
          <Route path="/bulk-ids" component={BulkUploader} />
          <Route path="/" component={Footer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
