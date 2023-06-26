
function generateRandomTimeStamp() {
  const startDate = new Date('2010-01-01');
  const endDate = new Date('2023-12-31');
  const timeDiff = endDate.getTime() - startDate.getTime();
  const randomTime = Math.random() * timeDiff;
  const randomTimeStamp = new Date(startDate.getTime() + randomTime).getTime();
  return randomTimeStamp;
}

function groupByYear(data) {
  var response = {};
  data.forEach(function (d) {
    let date = new Date(d.TS);
    let year = date.getFullYear();

    if (!response[year]) {
      response[year] = {
        year: year,
        jobs: 0,
        distance: 0,
        successJobs: 0,
        failedJobs: 0,
      };
    }

    response[year].jobs += 1;
    response[year].distance += d.Distance;
    if (d.SuccessFlag === 1) {
      response[year].successJobs += 1;
    }
    else {
      response[year].failedJobs += 1;
    };
  });
  let finalData = Object.keys(response).map(key => response[key]);
  return finalData;
}

function groupByMonth(data) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var response = {};
  data.forEach(function (d) {
    let date = new Date(d.TS);
    let month = monthNames[date.getMonth()];

    if (!response[month]) {
      response[month] = {
        month: month,
        jobs: 0,
        distance: 0,
        successJobs: 0,
        failedJobs: 0,
      };
    }

    response[month].jobs += 1;
    response[month].distance += d.Distance;
    if (d.SuccessFlag === 1) {
      response[month].successJobs += 1;
    }
    else {
      response[month].failedJobs += 1;
    };
  });

  let finalData = Object.keys(response).map(key => response[key]);
  return sortByMonth(finalData);

}

function sortByMonth(data) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return data.sort(function (a, b) {
    return monthNames.indexOf(a.month) - monthNames.indexOf(b.month);
  });

}

export { generateRandomTimeStamp, groupByYear, groupByMonth };