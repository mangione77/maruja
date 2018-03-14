import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

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
                    <h1 className="App-title">Maruja</h1>
                    <p>Toda la información pública, en un sólo lugar.</p>
                    <p>👉Usuario del perfil a checkear👈</p>
                </Col>
                <Col lg={4} lgOffset={4} md={12} sm={12}>
                    <div className="input-group">
                        <input type="text" className="form-control" value={this.state.inputText} onChange={this.textHandler} placeholder="Ejemplo: facebook.com/zuck"/>
                        <span className="input-group-btn">
                                <button className="btn btn-default" onClick={this.buttonSubmitHandler} type="button">🔎</button>
                        </span>
                    </div>
                </Col>    
            </Row>
        </Grid>        
      </header>
    }
}

export default AppHeader