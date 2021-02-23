import React, { Component } from 'react'
import Logo from '../images/cdlogo.png'
export default class header extends Component {
    render() {
        return (
            <div>
                <header>
                    <img src={Logo} height={400} width={400} style={{textAlign:"center"}} />
                </header>
            </div>
        )
    }
}
