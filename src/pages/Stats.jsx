import { useState, useEffect } from "react";
import Filters from "../components/Filters";
import Trips from "../views/Trips";

import data from '../data/NavigStatistics.json';
import JobsTrend from "../views/JobsTrend";
import DistanceTrend from "../views/DistanceTrend";
import '../styles/charts.css';
const jobsData = data.JobStats;

const Stats = (props) => {
  const [filters, setFilters] = useState({});
  const [finalData, setFinalResult] = useState([]);

  useEffect(() => {
    if (filters.startTime && filters.endTime && filters.startNode && filters.endNode) {
      getData();
    }
  }, [filters.startTime, filters.endTime, filters.startNode, filters.endNode, filters.timePeriod])

  const getData = () => {
    let finalResult = jobsData.filter(item => {
      if ((item.SNN === filters.startNode && item.ENN === filters.endNode)) {
        if (new Date(item.TS) >= new Date(filters.startTime) && new Date(item.TS) <= new Date(filters.endTime)) {
          return true;
        }
      }
      return false;
    })
    setFinalResult(finalResult);
  }

  const onFiltersChange = (data) => {
    console.log('filters data:', data);
    setFilters(data);
  }

  return (
    <section>
      <h1>Jobs Statistic View</h1>
      <Filters onFilterSave={onFiltersChange} />
      <div className="charts-main" >
        <Trips result={finalData} className="chart-container"/>
        <JobsTrend result={finalData} timePeriod={filters.timePeriod} className="chart-container"/>
        <DistanceTrend result={finalData} timePeriod={filters.timePeriod} className="chart-container" />
      </div>
    </section>
  )
}

export default Stats;