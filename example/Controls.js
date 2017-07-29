import React, { Component } from 'react';

import Control from './Control';

class Controls extends Component {

    handleClear() {
        
    }

    handleThickness() {

    }

    handleSmoothing() {

    }

    handleMode() {

    }

    onHandleColour() {

    }

    handleOpacity() {

    }

    render() {
        return (
            <form>
                <div className="field">
                    <button className="button is-primary" type="button" onClick={this.handleClear.bind(this)}>clear</button>
                </div>
                <Control label="Thickness">
                    <input type="range" min="1" max="40" onChange={this.handleThickness.bind(this)} value="2" step="0.1" autoComplete="off" />
                </Control>
                <Control label="Smoothing">
                    <input className="checkbox" type="checkbox" onChange={this.handleSmoothing.bind(this)} checked autoComplete="off" />
                </Control>
                <Control label="Mode">
                    <div className="select">
                        <select onChange={this.handleMode.bind(this)}>
                            <option value="draw" default>Draw</option>
                            <option value="fill" default>Fill</option>
                            <option value="erase" default>Erase</option>
                        </select>
                    </div>
                </Control>
                <Control label="Colour">
                    <input type="color" onChange={this.onHandleColour.bind(this)} value="#000" autoComplete="off" />
                </Control>
                <Control label="Opacity">
                    <input type="range" min="0" max="1" onChange={this.handleOpacity.bind(this)} value="1" step="0.05" autoComplete="off" />
                </Control>
            </form>
        );
    }

}

export default Controls;
