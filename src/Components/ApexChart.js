import React, { Component } from "react";
import Chart from "react-apexcharts";

class Apex extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          options: {
            labels: ['A','A','B','D']
          },
          
          series: []
        }
      }
    
      render() {
        console.log(this.state.options)
        this.state.series = this.props.series
        // this.setState({
        //   options: {
        //     labels: []
        //   }
        // })
        this.state.options.labels = this.props.labels
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