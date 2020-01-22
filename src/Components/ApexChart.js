import React, { Component } from "react";
import Chart from "react-apexcharts";

class Apex extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          options: {},
          
          series: [],
          labels: ['A', 'B', 'C', 'D']
        }
      }
    
      render() {
        console.log(this.props)
        this.state.series = this.props.series
        
        return (
          <div>
          <div class="donut pull-right">
            <Chart options={this.state.options} series={this.state.series} type="donut" width="500" />
          </div>

          </div>
        );
      }
    }

export default Apex;