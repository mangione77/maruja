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
                <th scope="col" style={iconStyle}>{this.props.icon}</th>
                <th scope="col">{this.props.title}</th>  
            </tr>
            </thead>
            <tbody>
            <tr>
                <td style={iconStyle}><span>{this.props.photosIcon}</span></td>
                {
                    this.props.profileId 
                            ? <td><a target="_blank" href={`https://www.facebook.com/search/${this.props.profileId}/photos-by/`}>Fotos</a></td>    
                            : <td>Fotos</td>            
                }
            </tr>
            </tbody>
        </table>
        </div>
    }
}

export default OptionsTable