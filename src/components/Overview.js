import { useEffect, useState } from "react";
import data from '../data/NavigStatistics.json';
const overviewData = data.TotalStats[0];
const Overview = (props) => {
  return (
    <section>
      <div>
        <div>
          <h3>Total Distance</h3>
          <span>{overviewData.TotalDistanceTravelled}</span>
        </div>
        <div>
          <h3>Total Jobs Received</h3>
          <span>{overviewData.TotalJobsReceived}</span>
        </div>

        <div>
          <h3>Total Succesfull Jobs</h3>
          <span>{overviewData.SuccessfulJobs}</span>
        </div>
      </div>
    </section>
  )
}

export default Overview;