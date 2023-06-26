import { useEffect, useState } from 'react';
import { groupByMonth, groupByYear } from '../utils/dateUtil';
import BarGraph from '../components/BarGraph';

const JobsTrend = ({ result = [], timePeriod = 'year' }) => {

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    generateChart();
  }, [result])


  const generateChart = () => {
    // let failedJobs = data.length - successJobs;
    let groupedData = [];

    groupedData = (timePeriod === 'year') ? groupByYear(result) : groupByMonth(result);
    let dimension = timePeriod;
    let transformedData = Object.keys(groupedData).map(key => groupedData[key]);
    let dimensions = Object.keys(groupedData);
    let options = {
      grid: {
        left: '8%',
        right: '8%',
        bottom: 30,
      },
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: [dimension, 'jobs', 'successJobs', 'failedJobs'],
        source: transformedData
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
        { type: 'bar', barMaxWidth: 40 },
        { type: 'bar', barMaxWidth: 40 },
        { type: 'bar', barMaxWidth: 40 },
      ]
    };

    setChartOptions(options)
  }

  return (
    <div className='chart-wrapper col-4 col-sm-12'>
      <div className='chart-container  '>
        <h2>Jobs Trend</h2>
        <BarGraph chartOptions={chartOptions} />
      </div>
    </div>
  )
}

export default JobsTrend;