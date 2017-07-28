import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Atrament } from 'atrament';

class Sketcher extends Component {

    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        color: PropTypes.string,
        onDirty: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {width: props.width, height: props.height};
        this._callDirtyHandler = this.handleDirty.bind(this);
    }

    componentDidMount() {
        this.calculateDimensions();

        if (this.props.onDirty && typeof this.props.onDirty === 'function') {
            this.canvas.addEventListener('dirty', this._callDirtyHandler);
        }
        this._sketcher = new Atrament(this.canvas);
    }

    componentWillUnmount() {
        if (this.props.onDirty && typeof this.props.onDirty === 'function') {
            this.canvas.removeEventListener('dirty', this._callDirtyHandler);
        }
    }

    handleDirty(e) {
        this.props.onDirty(e);
    }

    calculateDimensions() {
        let width = this.props.width;
        let height = this.props.height;

        if (!width && this.wrapper) {
            width = this.wrapper.offsetWidth;
        }

        if (!height && this.wrapper) {
            height = this.wrapper.offsetHeight;
        }

        this.setState({width, height});
    }

    clear() {
        this._sketcher.clear();
    }

    set weight(weight) {
        this._sketcher.weight = weight;     // in pixels
    }

    set colour(colour) {
        this._sketcher.color = colour;
    }

    set mode(mode) {
        if (!['erase', 'fill', 'draw'].includes(mode)) {
            throw new Error('Invalid sketcher mode');
        }

        this._sketcher.mode = mode;
    }

    set smoothing(smoothing) {
        this._sketcher.smoothing = !!smoothing;
    }

    set adaptiveStroke(adaptiveStroke) {
        this._sketcher.adaptiveStroke = !!adaptiveStroke;
    }

    set opacity(opacity) {
        if (opacity < 0 || opacity > 1) {
            throw new Error('Opacity out of range [0, 1]');
        }

        this._sketcher.opacity = opacity;
    }

    render() {
        return (
            <div
                style={{
                    width: this.props.width ? `${this.props.width}px` : '100%',
                    height: this.props.height ? `${this.props.height}px` : '100%'
                }}
                ref={ref => this.wrapper = ref}
            >
                <canvas width={this.state.width} height={this.state.height} ref={ref => this.canvas = ref} />
            </div>
        );
    }

}

export default Sketcher;
