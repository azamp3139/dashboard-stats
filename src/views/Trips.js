import ReactECharts from 'echarts-for-react';
import { useEffect, useState } from 'react';

const Trips = ({ result = [] }) => {

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    generateChart();
    console.log('generate chart')
  }, [result])


  const generateChart = () => {
    let successJobs = result.filter(item => item.SuccessFlag === 1).length || 0;
    let abortedJobs = result.filter(item => item.AbrtCnt === 1).length || 0;
    let emergencyJobs = result.filter(item => item.EmerCnt === 1).length || 0;
    // let failedJobs = data.length - successJobs;
    let chartOptions = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'horizontal',
        left: 'center'
      },
      series: [
        {
          name: 'Jobs',
          type: 'pie',
          radius: '40%',
          data: [
            {
              value: successJobs, name: 'Success Jobs',
              itemStyle: {
                color: '#95D326'
              }
            },
            {
              value: abortedJobs, name: 'Aborted Jobs',
              itemStyle: {
                color: '#E53333'
              }
            },
            {
              value: emergencyJobs, name: 'Emergency Jobs',
              itemStyle: {
                color: '#E3D224'
              }
            }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    setChartOptions(chartOptions)
  }

  return (
    <div className='chart-wrapper chart-pie col-4 col-sm-12'>
      <div className='chart-container ' >
        <h2>Jobs Distribution</h2>
        <ReactECharts
          option={chartOptions}
          style={{ height: '300px', width: '100%' }}
        />
      </div>
    </div>
  )
}

export default Trips;