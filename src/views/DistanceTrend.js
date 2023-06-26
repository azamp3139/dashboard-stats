import { useEffect, useState } from 'react';
import { groupByMonth, groupByYear } from '../utils/dateUtil';
import BarGraph from '../components/BarGraph';

const DistanceTrend = ({ result = [], timePeriod = 'year' }) => {

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    generateChart();
    console.log('generate chart: ', result)
  }, [result])


  const generateChart = () => {
    let groupedData = [];

    groupedData = (timePeriod === 'year') ? groupByYear(result) : groupByMonth(result);
    let dimension = timePeriod;
    let transformedData = Object.keys(groupedData).map(key => groupedData[key]);
    let x_axis = transformedData.map(item => item[dimension]);
    let y_axis = transformedData.map(item => item.distance);
    let options = {
      grid: {
        // left: '1%',
        right: '6%',
        bottom: 30,
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: x_axis,
        axisLabel: {
          rotate: 30
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: y_axis,
          type: 'bar',
          barMaxWidth: 40
        }
      ]
    };

    setChartOptions(options)
  }

  return (
    <div className='chart-wrapper col-4 col-sm-12'>
      <div className='chart-container '>
        <h2>Distance Trend</h2>
        <BarGraph chartOptions={chartOptions} />
      </div>
    </div>
  )
}

export default DistanceTrend;