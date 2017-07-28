import React, { Component } from 'react';

import Sketcher from '../src';
import Controls from './Controls';

class Layout extends Component {

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h1 className="title">React-Atrament</h1>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <Controls />
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
