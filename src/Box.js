import React, { Component } from 'react';
import './Box.css'

class Box extends Component {
  constructor() {
  	super()
    this.toggle = this.toggle.bind(this)
  	this.state = { }
  }

  componentDidMount() {
    var state = {}
    var backs = false
    var mult = 0
    var mod_i = 0

    for(var i = 0; i < 256; i++) {
      if(i && (i % 16 == 0)) {
    	backs = !backs
    	mult++
      }
      if(backs) {
        mod_i = ((mult*16) + (15 - (i % 16)))
        state[`led-${mod_i}`] = { illum: false, disp: `${mod_i}`}
      } else {
        state[`led-${i}`] = { illum: false, disp: `${i}`}
      }
    }
    this.setState( state )
  }

  toggle(key) {
  	const state = {...this.state[key]}
  	state.illum = !state.illum
  	this.setState({ [key]: state})
  }

  render() {
    return (
      <div className="Box">
        <div className="wrapper">
          {
          	Object.keys(this.state)
          	.map((key) => { 
          	  return <div className={`col ${this.state[key].illum ? 'fill':'blank'}`} key={key} onClick={() => {this.toggle(key)}}>{this.state[key].disp}</div>
          	})
          }
        </div>
      </div>
    );
  }
}

export default Box;
