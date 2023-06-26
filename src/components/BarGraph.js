import ReactECharts from 'echarts-for-react';

const BarGraph = (props) => {
  return (
    <div className="bar-graph-container">
      <ReactECharts
        option={props.chartOptions}
        style={{ height: '300px', width: '100%' }}
      />

    </div>
  )
}

export default BarGraph;