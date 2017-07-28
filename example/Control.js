import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Control extends Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired
    }

    render() {
        return (
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    {this.props.children}
                </div>
            </div>
        );
    }

}

export default Control;
