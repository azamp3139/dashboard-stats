import '../styles/overview.css';
import data from '../data/NavigStatistics.json';
const overviewData = data.TotalStats[0];
const Overview = (props) => {
  let successRate = Math.round((overviewData.SuccessfulJobs / overviewData.TotalJobsReceived) * 100)
  return (
    <section>
      <div className='overview-wrapper'>
        <div className='card-container col-2 col-sm-12'>
          <div className='card-title'><span>Total Distance</span></div>
          <span className='card-val'>{overviewData.TotalDistanceTravelled}</span>
        </div>
        <div className='card-container col-2 col-sm-12'>
          <div className='card-title'><span>Total Jobs Received</span></div>
          <span className='card-val'>{overviewData.TotalJobsReceived}</span>
        </div>

        <div className='card-container col-2 col-sm-12'>
          <div className='card-title'><span>Total Succesfull Jobs</span></div>
          <span className='card-val'>{overviewData.SuccessfulJobs}</span>
        </div>

        <div className='card-container col-2 col-sm-12'>
          <div className='card-title'><span>Jobs Success Rate</span></div>
          <span className='card-val'>{successRate}%</span>
        </div>
      </div>
    </section>
  )
}

export default Overview;