import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Control from './Control';

class Controls extends Component {

    static propTypes = {
        onClear: PropTypes.func.isRequired,
        onChangeThickness: PropTypes.func.isRequired,
        onToggleSmoothing: PropTypes.func.isRequired,
        onChangeMode: PropTypes.func.isRequired,
        onChangeOpacity: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {checked: true, thickness: 2, colour: '#000000', opacity: 1};
    }

    handleClear() {
        this.props.onClear();
    }

    handleThickness(e) {
        this.props.onChangeThickness(e.target.value);
        this.setState({thickness: e.target.value});
    }

    handleSmoothing(e) {
        this.props.onToggleSmoothing(e.target.checked);
        this.setState({checked: e.target.checked});
    }

    handleMode(e) {
        this.props.onChangeMode(e.target.value);
    }

    onHandleColour(e) {
        this.props.onChangeColour(e.target.value);
        this.setState({colour: e.target.value});
    }

    handleOpacity(e) {
        this.props.onChangeOpacity(e.target.value);
        this.setState({opacity: e.target.value});
    }

    render() {
        return (
            <form>
                <div className="field">
                    <button className="button is-primary" type="button" onClick={this.handleClear.bind(this)}>clear</button>
                </div>
                <Control label="Thickness">
                    <input
                        type="range"
                        min="1" max="40"
                        onChange={this.handleThickness.bind(this)}
                        value={this.state.thickness}
                        step="0.1"
                        autoComplete="off" />
                </Control>
                <Control label="Smoothing">
                    <input
                        className="checkbox"
                        type="checkbox"
                        onChange={this.handleSmoothing.bind(this)}
                        checked={this.state.checked}
                        autoComplete="off" />
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
                    <input
                        type="color"
                        onChange={this.onHandleColour.bind(this)}
                        value={this.state.colour}
                        autoComplete="off" />
                </Control>
                <Control label="Opacity">
                    <input
                        type="range"
                        min="0" max="1"
                        onChange={this.handleOpacity.bind(this)}
                        value={this.state.opacity}
                        step="0.05"
                        autoComplete="off" />
                </Control>
            </form>
        );
    }

}

export default Controls;
