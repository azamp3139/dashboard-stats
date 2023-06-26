import '../styles/filters.css';
import { useRef, useState } from 'react';
import { NODES } from '../data/filters';



const Filters = (props) => {
  const [startTime, setStartTime] = useState('2020-01-20T00:00');
  const [endTime, setEndTime] = useState(`${new Date().toISOString().split('T')[0]}T00:00`);

  const startNodeRef = useRef('');
  const endNodeRef = useRef('');
  const timePeriod = useRef('');
  const startTimeChangeHandler = (e) => {
    console.log('start time change', e);
    setStartTime(e.target.value);
  }
  const endTimeChangeHandler = (e) => {
    console.log('End time change', e);
    setEndTime(e.target.value);
  }
  const saveFilter = (e) => {
    const startTimeStamp = new Date(startTime).getTime();
    const endTimeStamp = new Date(endTime).getTime();
    // let dataFilter = jobStatsData.filter(job => {
    //   return (job.TS >= startTimeStamp && job.TS <= endTimeStamp)
    // });
    let filterObj = {
      startTime: startTimeStamp,
      endTime: endTimeStamp,
      startNode: startNodeRef.current.value,
      endNode: endNodeRef.current.value,
      timePeriod: timePeriod.current.value

    }
    props.onFilterSave(filterObj);
  }

  return (
    <section>
      <div className="filter-wrapper">
        <div className='filter-container'>
          <label htmlFor="startTime"> Start Date</label>
          <input
            type="datetime-local"
            name="startTime"
            id="startTime"
            value={startTime}
            onChange={startTimeChangeHandler} />
        </div>
        <div className='filter-container'>
          <label htmlFor="endTime"> End Date</label>
          <input
            type="datetime-local"
            name="endTime"
            id="endTime"
            value={endTime}
            onChange={endTimeChangeHandler} />
        </div>

        <div className='filter-container'>
          <label htmlFor="startNode">Start Node</label>
          <select name="startNode" ref={startNodeRef}>
            {NODES.map(nodeName => {
              return (
                <option key={nodeName} value={nodeName}>{nodeName}</option>
              )
            })}
          </select>
        </div>

        <div className='filter-container'>
          <label htmlFor="endNode">End Node</label>
          <select name="endNode" ref={endNodeRef}>
            {NODES.map(nodeName => {
              return (
                <option key={nodeName} value={nodeName}>{nodeName}</option>
              )
            })}
          </select>
        </div>
        <div className='filter-container'>
          <label htmlFor="timePeriod">Time Period</label>
          <select name="timePeriod" ref={timePeriod}>
            <option value="year">Yearly</option>
            <option value="month">Monthly</option>
          </select>
        </div>
        <div className='filter-container'>
          <button onClick={saveFilter} className='btn'>Apply Filters</button>
        </div>
      </div>
    </section>
  )
}

export default Filters;