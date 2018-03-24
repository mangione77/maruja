import uuid from 'uuid'
import React, { Component } from 'react'

class GenericTable extends Component {
    render() {
        var headerIconStyle = {
            "paddingTop":"1",
            "paddingBottom":"0",
            "paddingLeft":"1",
            "paddingRight":"0",
            "fontSize":"1.3em"
        }

        var iconStyle = {
            "paddingTop":"1",
            "paddingBottom":"0",
            "paddingLeft":"1",
            "paddingRight":"0"
        }
        return <table className="table options-table table-hover" key={uuid()}>
         <thead key={uuid()}>          
            <tr className="links-table-header">
            <th scope="col"><span style={headerIconStyle}>{this.props.categoryIcon}</span></th>
            <th scope="col" className="link-category-title">{this.props.categoryTitle}</th>  
            </tr>
            </thead>
        <tbody>
            {
                this.props.links 
                ? this.props.links.map(url => {
                    return <tr className="link-list-item">
                    <td><span style={iconStyle}>{url.linkIcon}</span></td>
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