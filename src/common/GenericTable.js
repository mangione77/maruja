import React, { Component } from 'react'

class GenericTable extends Component {
    render() {
        var iconStyle = {
            "width":"20"
        }

        var emptyTRStyle = {
            "borderTop":"0"
        }
        return <div>
        <table className="table options-table table-hover">
        {
            this.props.Urls !== undefined 
            ? <thead> 
            <tr>
            <th scope="col" style={iconStyle}>{this.props.headerIcon}</th>
            <th scope="col">{this.props.headerTitle}</th>  
            </tr>
            </thead>
            : <thead style={emptyTRStyle}><tr><td></td></tr></thead>
                
        } 
        <tbody>
        {
            this.props.Urls !== undefined 
            ? this.props.Urls.map(url => {
                return <tr>
                    <td style={iconStyle}><span>{url.linkIcon}</span></td>
                    <td><a target="_blank" href={url.linkUrl}>{url.linkName}</a></td>
                </tr>
            })
            : <tr><td style={emptyTRStyle}></td></tr>
        }            
        </tbody>
    </table>
    </div>
    }
}

export default GenericTable