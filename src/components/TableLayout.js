import React, { Component } from 'react'
import GenericTable from '../common/GenericTable'
import { Grid, Row, Col } from 'react-bootstrap'
import buildUrls from '../utils/Links'

class TableLayout extends Component {
    constructor() {
        super()
        this.state = {
            infoIcon: 'ℹ',
            photosIcon: '📷'
        }
    }
    render() {
        if (this.props.profileId) {
            var links = buildUrls(this.props.profileId)
        }
        return <Grid fluid>
            <Row>
                {
                    this.props.profileId
                        ? links.map(link => {
                            return <Col lg={4} md={6} sm={12}>
                                <GenericTable
                                    categoryIcon={link.categoryIcon}
                                    categoryTitle={link.categoryTitle}
                                    links={link.links}
                                />
                            </Col>
                        })
                        : <div />
                }
                </Row>
            </Grid >
    }
}

export default TableLayout