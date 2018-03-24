import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import getFbIds from '../utils/getFbIdsInBulk'

class BulkUploader extends Component {
    constructor() {
        super()

        this.state = {
            inputUsernames: '',
            usernames: [],
            results: []
        }
    }

    handleUsernamesInput = (e) => {
        this.setState({
            inputUsernames: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let usernamesArray = this.state.inputUsernames.split(",")
        this.setState({
            usernames: usernamesArray
        }, () => {
            getFbIds(this.state.usernames)
                .then(response => {
                    this.setState({
                        results: response.results
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        })
    }

    render() {
        return <div>
            <header className="App-header">
                <Grid>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="App-title">Maruja</h1>
                        </Col>
                        <Col lg={4} lgOffset={4} md={12} sm={12}>
                            <Link to="/">Home</Link>
                        </Col>
                    </Row>
                </Grid>
            </header>
            <Grid>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <form className="form-group" onSubmit={this.handleSubmit}>
                            <label>Usernames:</label>
                            <textarea className="form-control" rows="5" id="comment" onChange={this.handleUsernamesInput}></textarea>
                        </form >
                        <button onClick={this.handleSubmit}>Send</button>
                    </Col>
                </Row>
                <Row>
                    {
                        this.state.results.length > 0
                            ? <Col lg={12} md={12} sm={12}>
                                <table>
                                    <thead>
                                        <tr className="links-table-header">
                                            <th scope="col" className="link-category-title">Resultados</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.results.map(result => {
                                                return <tr className="link-list-item">
                                                    <td><span>{result.username}</span></td>
                                                    <td>{result.id}</td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </Col>
                            : <div />
                    }
                </Row>
            </Grid>
        </div>
    }
}

export default BulkUploader