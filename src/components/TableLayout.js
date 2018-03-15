import React, { Component } from 'react'
import OptionsTable from './OptionsTable'
import { Grid, Row, Col } from 'react-bootstrap'


class TableLayout extends Component {
    constructor() {
        super()
        this.state = {
            infoIcon: 'ℹ',
            photosIcon: '📷'
        }
    }
    render() {
        return <div>
                    <OptionsTable 
                        photosIcon={this.state.photosIcon}
                        profileId={this.props.profileId}                        
                    />
        </div>
    }
}

export default TableLayout