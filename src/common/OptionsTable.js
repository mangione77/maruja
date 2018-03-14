import React, { Component } from 'react'

class OptionsTable extends Component {
    render() {
        {
            var iconStyle = {
                "width":"20"
            }

            var tdIcon = {
                "height":"20",
                "margin-right":"5"
            }
        }
        return <div>
            <table className="table options-table">
            <thead>
            <tr>
                <th scope="col" style={iconStyle}>🕵</th>
                <th scope="col">Perfil</th>  
            </tr>
            </thead>
            <tbody>
            <tr>
                <td style={iconStyle}><span>📷</span></td>
                {
                    this.props.profileId 
                            ? <td><a target="_blank" href={`https://www.facebook.com/search/${this.props.profileId}/photos-by/`}>Fotos</a></td>    
                            : <td>Fotos</td>            
                }
            </tr>
            <tr>
            <td style={iconStyle}><span>📹</span></td>
            {
                this.props.profileId 
                        ? <td><a target="_blank" href={`https://www.facebook.com/search/${this.props.profileId}/videos-by/`}>Videos</a></td>    
                        : <td>Videos</td>            
            }
            </tr>
            <tr>
            <td style={iconStyle}><span>👩‍👦‍👦</span></td>
            {
                this.props.profileId 
                        ? <td><a target="_blank" href={`https://www.facebook.com/search/${this.props.profileId}/groups/`}>Grupos</a></td>    
                        : <td>Grupos</td>            
            }
            </tr>
            </tbody>
        </table>
        </div>
    }
}

export default OptionsTable