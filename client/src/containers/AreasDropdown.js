import React, { useState, Component }       from 'react';
import { connect }               from 'react-redux';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { bindActionCreators }    from 'redux';
import { getAreas } from '../actions/areas'

class AreaDropdown extends React.Component { 

    constructor (props) {
        super(props);
        this.state = { country: "", region: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.getAreas();
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
        let areas = [];
        // if (this.state.country !== '' || this.state.region !== ''){
        //     areas = this.props.areas.fileter(country, region => country.)
        // }
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

const mapStateToProps = state => {
    return {
        areas: state.areaReducer.areas,
        loading: state.areaReducer.loading,
    }
}

export default connect(mapStateToProps, {getAreas})(AreaDropdown);