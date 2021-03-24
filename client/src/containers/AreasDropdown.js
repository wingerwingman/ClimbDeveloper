import React, { useState }       from 'react';
import { connect }               from 'react-redux';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { bindActionCreators }    from 'redux';

class AreaDropdown extends React.Component { 

    constructor (props) {
        super(props);
        this.state = { country: "", region: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    selectCountry (val) {
        this.setState({ country: val });
    }
    
    selectRegion (val) {
        this.setState({ region: val });
    }

    handleChange(event) {
        return this.setState({ [event.target.name]: event.target.value });
    }

    render () {
        const { country, region } = this.state;
        return(
            <div>
                <CountryDropdown
                value={country}
                onChange={(val) => this.selectCountry(val)} />
                <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => this.selectRegion(val)} />
            </div>
        )
    }

}

export default (AreaDropdown);