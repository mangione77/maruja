import React, { Component } from 'react'

class NewLoadedUrl extends Component {
    render() {
        return <div>
        {
            this.props.profileUrl ? <p>¡Perfil {this.props.profileUrl} cargado!</p> : <div />
        }
        </div>
    }
}

export default NewLoadedUrl