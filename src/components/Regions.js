import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Regions extends Component {

    onSelectRegion = (region) => {
        this.props.onSelectRegion(region);
    };

    render() {
        return (
            <div className="col s12 m6 l3">
                <h2 className="center-align">Regions</h2>
                <div className="collection">
                    {
                        this.props.regions.map(region =>
                            <a href="#!" className={'collection-item ' + (this.props.region === region ? 'active' : '')}
                                key={region}
                                onClick = {e => this.onSelectRegion(region)}>
                                {region}
                            </a>
                        )

                    }
                </div>
            </div>
        );
    }

}