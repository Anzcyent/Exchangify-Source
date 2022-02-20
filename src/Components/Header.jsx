import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header><h1 style={{letterSpacing: 2, textShadow: "0px 0px 5px rgba(0,0,0,0.8)", color: "#E7EBC8", textAlign: "center", margin: "75px 0px"}}>Exchangify $</h1></header>
    )
  }
}

export default Header