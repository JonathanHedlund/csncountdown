import React, { Component } from 'react'

class Money extends Component {
    constructor() {
        super();
        this.state = {
            money: "8 007",
            support: "2 478"
        }
    }
    render() {
        return (
            <div>
                <p>Studying full time (100%) will give you <em>{this.state.money}</em> SEK, where <em>{this.state.support}</em> SEK is financial support.</p>
            </div>
        )

    }
}

export default Money