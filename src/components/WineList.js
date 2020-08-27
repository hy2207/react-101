import React, { Component } from 'react';

export class WineList extends Component {

    onSelectWine = (wine) => {
        this.props.onSelectWine(wine);
    }

    render() {
        return (
            <div className="col s12 m6 l3">
                <h2 className="center-align">Wines</h2>
                <div className="collection">
                    {this.props.wines.map(wine => (
                        <a 
                            href = "#!" className = {'collection-item ' + (this.props.wine.id === wine.id ? 'active' : '') }
                            key = {wine.id}
                            onClick = {e => this.onSelectWine(wine.id)}
                        >
                            {wine.name}
                        </a>
                    ))}  
                </div>
            </div>
        );
    }
}
