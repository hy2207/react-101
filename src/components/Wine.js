import React, { Component } from 'react';

export class Wine extends Component {

    render() {
        if (!this.props.wine) {
            return null;
        }
        return (
            <div className="col s12 m12 l6">
                <h2 className="center-align">Wine details</h2>
                <div className="card horizontal">
                    <div className="card-image">
                        <img className="responsive-img wine-detail-image" alt="Wine bottle pic" src={`https://wines-api.herokuapp.com/api/wines/${this.props.wine.id}/image`} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h3>{this.props.wine.name}</h3>
                            <br />
                            <p><b>Appellation:</b> {this.props.wine.appellation.name}</p>
                            <p><b>Region:</b> {this.props.wine.appellation.region}</p>
                            <p><b>Color:</b> {this.props.wine.type}</p>
                            <p><b>Grapes:</b> 
                            {this.props.wine.grapes.map( (grape, i) => (
                                <div key = {i}>{grape}</div>  
                            ))}
                            </p>
                        </div>
                        <div className="card-action"></div>
                    </div>
                </div>
            </div>

        );
    }
}
