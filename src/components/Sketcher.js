import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Atrament } from 'atrament';
import { debounce } from 'throttle-debounce';

class Sketcher extends Component {

    static displayName = 'react-atrament';

    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        onDirty: PropTypes.func,
        onResize: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {width: props.width, height: props.height};
        this._callDirtyHandler = this.handleDirty.bind(this);
        this._callScrollHandler = debounce(150, this.handleScroll.bind(this));
    }

    componentDidMount() {
        if (!this.props.width) {
            this._canvas.style.width = '100%';
        }
        if (!this.props.height) {
            this._canvas.style.height = '100%';
        }
        this.scaleCanvas();

        if (this.props.onDirty && typeof this.props.onDirty === 'function') {
            this._canvas.addEventListener('dirty', this._callDirtyHandler);
        }

        if (!this.props.width || !this.props.height) {
            window.addEventListener('resize', this._callScrollHandler);
        }

        this._sketcher = new Atrament(this._canvas, this._canvas.offsetWidth, this._canvas.offsetHeight);
    }

    componentWillUnmount() {
        if (this.props.onDirty && typeof this.props.onDirty === 'function') {
            this._canvas.removeEventListener('dirty', this._callDirtyHandler);
        }

        if (!this.props.width || !this.props.height) {
            window.removeEventListener('resize', this._callScrollHandler);
        }
    }

    handleScroll() {
        this.scaleCanvas();
    }

    handleDirty(e) {
        this.props.onDirty(e);
    }

    fromDataURL(ctx, dataURL, dimensions) {
        const image = new Image();
        const width = dimensions.width / dimensions.ratio;
        const height = dimensions.height / dimensions.ratio;

        image.src = dataURL;
        image.onload = () => ctx.drawImage(image, 0, 0, width, height);
    }

    scaleCanvas() {
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        let width = (this.props.width || this._canvas.offsetWidth) * ratio;
        let height = (this.props.height || this._canvas.offsetHeight) * ratio;

        let data;
        if (this._sketcher) {
            data = this._sketcher.toImage();
        }

        this._canvas.width = width;
        this._canvas.height = height;

        const ctx = this._canvas.getContext('2d');
        ctx.scale(ratio, ratio);

        if (this._sketcher) {
            this.fromDataURL(ctx, data, {width, height, ratio});
        }
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
        return <canvas ref={ref => this._canvas = ref} />;
    }

}

export default Sketcher;
