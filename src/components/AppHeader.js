import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class AppHeader extends Component {
    constructor() {
        super()
        this.state = {
            inputText:''
        }
    }

    textHandler = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }

    buttonSubmitHandler = (e) => {
        e.preventDefault()
        this.props.onProfileUrlChange(this.state.inputText)
    }

    render() {
        return <header className="App-header">
        <Grid>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <Link className="header-link" to="/"><h1 className="App-title">Maruja</h1></Link>
                </Col>
                <Col lg={4} lgOffset={4} md={12} sm={12}>
                    <div className="input-group">
                        <input type="text" className="form-control input-fb-id" 
                                value={this.state.inputText} 
                                onChange={this.textHandler} 
                                data-toggle="popover" 
                                data-trigger="hover" 
                                data-placement="bottom" 
                                />
                        <span className="input-group-btn">
                                <button className="btn btn-default " onClick={this.buttonSubmitHandler} type="button">🔎</button>
                        </span>
                    </div>
                </Col>    
            </Row>
        </Grid>        
      </header>
    }
}

export default AppHeader