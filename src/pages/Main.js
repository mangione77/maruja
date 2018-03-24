import AppHeader from '../components/AppHeader'
import NewLoadedUrl from '../common/NewLoadedUrl'
import TableLayout from '../components/TableLayout'
import React, { Component } from 'react'

class Main extends Component {
    render(){
        return <main> 
            <AppHeader onProfileUrlChange={this.props.onProfileUrlChange} />
            <NewLoadedUrl profileURL={this.props.profileUrl} profileId={this.props.profileId} errorGetId={this.props.errorGetId} />
            <TableLayout profileId={this.props.profileId} />
        </main>
    }
}

export default Main