import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return <footer className="navbar-fixed-bottom Footer">
            <div className="container Footer">
                <div className="row">
                    <p className="footer-text"><b>Aviso</b>: No guardamos ningún tipo de información. No tenemos afiliación ninguna con Facebook.</p>
                    <p>Quieres conseguir las ID's de muchos usuarios a la vez? <Link to="/bulk-ids">Click aquí</Link></p>
                </div>
            </div>
        </footer>
    }
}

export default Footer