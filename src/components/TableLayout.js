import React, { Component } from 'react'
import OptionsTable from '../common/OptionsTable'
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
        <Grid>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <OptionsTable 
                        photosIcon={this.state.photosIcon}
                        profileId={this.props.profileId}                        
                    />
                </Col>     
            </Row>
        </Grid>    
        </div>
    }
}

export default TableLayout