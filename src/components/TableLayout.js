import React, { Component } from 'react'
import GenericTable from '../common/GenericTable'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import uuid from 'uuid/v4'
import buildUrls from '../utils/Links'
import Footer from './Footer'

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
            var firstRow = links.slice(0, 3)
            var secondRow = links.slice(3, 8)
        }
        return <div className="tableLayout-wrapper">
            <Grid fluid>
                <Row>
                    {
                        this.props.profileId
                            ? firstRow.map(link => {
                                return <Col lg={4} md={6} sm={12} key={uuid()}>
                                    <GenericTable
                                        categoryIcon={link.categoryIcon}
                                        categoryTitle={link.categoryTitle}
                                        links={link.links}
                                        key={uuid()}
                                    />
                                </Col>
                            })
                            : <div />
                    }
                </Row>
                <Row>
                    {
                        this.props.profileId
                            ? secondRow.map(link => {
                                return <Col lg={4} md={6} sm={12} key={uuid()}>
                                    <GenericTable
                                        categoryIcon={link.categoryIcon}
                                        categoryTitle={link.categoryTitle}
                                        links={link.links}
                                        key={uuid()}
                                    />
                                </Col>
                            })
                            : <div />
                    }
                </Row>
                <Row>
                    {
                        this.props.profileId
                        ? <Col lg={4} lgOffset={4} md={12} sm={12}>
                                <Button onClick={this.props.onResetData}>Reset Data</Button>
                            </Col>
                        : <div></div>
                    }
                </Row>
            </Grid >
        </div>
    }
}

export default TableLayout