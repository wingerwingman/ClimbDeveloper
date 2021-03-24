import React, { Component } from 'react';
import { connect } from 'react-redux';
import AreasDropdown from '../containers/AreasDropdown.js';



class Areas extends Component {
    
    render() {
        
        return (
          <div className="Areas">
            <h2>Areas</h2>
            <h3>Select Country and state<AreasDropdown /></h3>
          </div>
        );
      }
    
    }

    
export default connect(null, { AreasDropdown })(Areas);