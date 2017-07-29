import React, { Component } from 'react';

import Sketcher from '../src';
import Controls from './Controls';

class Layout extends Component {

    handleClear() {
        this.sketcher.clear();
    }

    handleThickness(thickness) {
        this.sketcher.weight = parseFloat(thickness);
    }

    handleSmoothing(checked) {
        this.sketcher.smoothing = checked;
    }

    handleMode(mode) {
        this.sketcher.mode = mode;
    }

    handleOpacity(opacity) {
        this.sketcher.opacity = parseFloat(opacity);
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h1 className="title">React-Atrament</h1>
                            <h2 className="subtitle">responsive example</h2>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <Controls
                                onClear={this.handleClear.bind(this)}
                                onChangeThickness={this.handleThickness.bind(this)}
                                onToggleSmoothing={this.handleSmoothing.bind(this)}
                                onChangeMode={this.handleMode.bind(this)}
                                onChangeOpacity={this.handleOpacity.bind(this)} />
                        </div>
                        <div className="column">
                            <Sketcher ref={ref => this.sketcher = ref} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Layout;
