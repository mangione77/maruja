import React, { Component } from 'react'

class NewLoadedUrl extends Component {
    render() {
        return <div>
        {
            !this.props.errorGetId && this.props.profileId 
            ? <p className="new-url">¡Perfil #{this.props.profileId} cargado!</p> 
            : <p className="new-url">¡El perfil {this.props.profileURL} no existe!</p>
        }
        </div>
    }
}

export default NewLoadedUrl