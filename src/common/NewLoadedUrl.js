import React, { Component } from 'react'

class NewLoadedUrl extends Component {
        //<p className="new-url">¡El perfil {this.props.profileURL} no existe!</p>    
    render() {
        return <div>
        {
            !this.props.errorGetId && this.props.profileId 
            ? <p className="new-url">¡Perfil #{this.props.profileId} cargado!</p> 
            : <div />
        }
        </div>
    }
}

export default NewLoadedUrl