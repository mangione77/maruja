import React, { Component } from 'react'
import OptionsTable from '../common/OptionsTable'
import { Grid, Row, Col } from 'react-bootstrap'

class TableLayout extends Component {
    render() {
        return <div>
        <Grid>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <OptionsTable />
                </Col>    
                <Col lg={4} md={6} sm={12}>
                    <OptionsTable />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <OptionsTable />
                </Col>  
            </Row>
        </Grid>    
        </div>
    }
}

export default TableLayout