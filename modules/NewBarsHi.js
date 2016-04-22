import React, { Component } from 'react';

export default class NewBarsHi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

  componentDidMount() {
    this.Highcharts(this.state.data);
  }

  componentWillReceiveProps({ data }) {
    this.setState({ data });
    this.Highcharts(data);
  }
  Highcharts = (data) => {
    const container = document.querySelector('#container');
    window.chart = new Highcharts.Chart({
      chart: {
        renderTo: container,
        height: 400,
        type: 'column',
      },
      series: [{ data }],
    });
  }
  render() {
    return (<div id='container'> </div>);
  }
}