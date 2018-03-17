import React, { Component } from 'react'

class GenericTable extends Component {
    render() {
        var iconStyle = {
            "width":"20"
        }

        var emptyTRStyle = {
            "borderTop":"0"
        }
        return <table className="table options-table table-hover">
         <thead> 
            <tr>
            <th scope="col" style={iconStyle}>{this.props.categoryIcon}</th>
            <th scope="col">{this.props.categoryTitle}</th>  
            </tr>
            </thead>
        <tbody>
            {
                this.props.links 
                ? this.props.links.map(url => {
                    return <tr>
                    <td style={iconStyle}><span>{url.linkIcon}</span></td>
                    <td><a target="_blank" href={url.linkUrl}>{url.linkName}</a></td>
                </tr>
                })
                :<tr />
            }
        </tbody>
    </table>
    }
}

export default GenericTable