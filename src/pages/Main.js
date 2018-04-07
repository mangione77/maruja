import React, { Component } from 'react'
import AppHeader from '../components/AppHeader'
import NewLoadedUrl from '../common/NewLoadedUrl'
import TableLayout from '../components/TableLayout'

class Main extends Component {
    render(){
        return <main> 
            <AppHeader onProfileUrlChange={this.props.onProfileUrlChange} />
            <NewLoadedUrl profileURL={this.props.profileUrl} profileId={this.props.profileId} errorGetId={this.props.errorGetId} />
            <TableLayout profileId={this.props.profileId} onResetData={this.props.onResetData} />
        </main>
    }
}

export default Main