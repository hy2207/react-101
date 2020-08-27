import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Regions} from './Regions';
import {WineList} from './WineList';
import {Wine} from './Wine';
import { fetchRegions, fetchWine, fetchWinesFrom } from '../services/Wines';

export class WineApp extends Component {

    state = {
        regions: [],
        selectedRegion: null,
        wines: [],
        selectedWine: null
    }
    
    componentDidMount(){
        fetchRegions()
            .then(regions => {
            this.setState(
                {
                    regions,
                    selectedRegion: regions[0],
                }, () => {
                    fetchWinesFrom(this.state.selectedRegion)
                    .then(wines => {
                        this.setState({
                            wines,
                            selectedWine: wines[0],
                        });
                    });
                }
            );
        });
    }

    onSelectRegion = (region) => {
        fetchWinesFrom(region)
            .then(wineData => {
                this.setState({
                    selectedRegion: region,
                    wines: wineData,
                    selectedWine: wineData[0],
                })
            })
    }

    onSelectWine = (id) => {
        fetchWine(id)
            .then(wineDetail =>
                this.setState({
                    selectedWine: wineDetail
                })
            )
    }

    render() {
        return (
            <div className="container">
                <h1 className="center-align">Open Wine Database</h1>
                <div className="row">
                    <Regions 
                        regions = {this.state.regions} 
                        region = {this.state.selectedRegion}
                        onSelectRegion = {this.onSelectRegion}
                    />
                    <WineList 
                        wines = {this.state.wines}
                        wine = {this.state.selectedWine}
                        onSelectWine = {this.onSelectWine}
                    />
                    <Wine 
                        wine = {this.state.selectedWine}
                    /> 
                </div>
            </div>

        );
    }
}