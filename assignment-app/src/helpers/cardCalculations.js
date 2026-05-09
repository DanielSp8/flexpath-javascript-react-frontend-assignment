export const giveAverageMinutes = (data) => {
  if (data.length === 0) return 0;
  const average =
    data
      .map((item) => parseInt(item["App Usage Time (min/day)"]))
      .reduce((sum, val) => sum + val, 0) / data.length;

  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: "0",
  }).format(average);
};

export const giveMedianMinutes = (data) => {
  if (data.length === 0) return 0;
  const sortedData = data
    .map((item) => parseInt(item["App Usage Time (min/day)"]))
    .sort((a, b) => a - b);
  const middle = Math.floor(sortedData.length / 2);

  return sortedData.length % 2 !== 0
    ? new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: "0",
        maximumFractionDigits: "2",
      }).format(sortedData[middle])
    : new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: "0",
        maximumFractionDigits: "2",
      }).format((sortedData[middle] + sortedData[middle - 1]) / 2);
};

export const giveOnScreenTimeAvg = (data) => {
  if (data.length === 0) return 0;
  const average =
    data
      .map((item) => parseInt(item["Screen On Time (hours/day)"]))
      .reduce((sum, val) => sum + val, 0) / data.length;
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: "0",
  }).format(average);
};

export const giveOnScreenTimeMedian = (data) => {
  if (data.length === 0) return 0;
  const sortedData = data
    .map((item) => parseInt(item["Screen On Time (hours/day)"]))
    .sort((a, b) => a - b);
  const mid = Math.floor(sortedData.length / 2);
  // Ternary expression:  if the data given is not even, return the middle of the array
  //   Otherwise, return the center (median) by calculating the two center numbers and dividing by 2.
  return sortedData.length % 2 !== 0
    ? sortedData[mid]
    : (sortedData[mid - 1] + sortedData[mid]) / 2;
};

export const giveNumOfAppsInstalledAvg = (data) => {
  if (data.length === 0) return 0;
  const average =
    data
      .map((item) => parseInt(item["Number of Apps Installed"]))
      .reduce((sum, val) => sum + val, 0) / data.length;
  return Math.round(average);
};

export const giveNumOfAppsInstalledMedian = (data) => {
  if (data.length === 0) return 0;
  const sortedData = data
    .map((item) => parseInt(item["Number of Apps Installed"]))
    .sort((a, b) => a - b);
  const mid = Math.floor(sortedData.length / 2);
  return sortedData.length % 2 !== 0
    ? sortedData[mid]
    : (sortedData[mid - 1] + sortedData[mid]) / 2;
};

export const giveAgeAvg = (data) => {
  if (data.length === 0) return 0;
  const average =
    data
      .map((item) => parseInt(item["Age"]))
      .reduce((sum, val) => sum + val, 0) / data.length;
  return Math.round(average);
};

export const giveAgeMedian = (data) => {
  if (data.length === 0) return 0;
  const sortedData = data
    .map((item) => parseInt(item["Age"]))
    .sort((a, b) => a - b);
  const mid = Math.floor(sortedData.length / 2);
  return sortedData.length % 2 !== 0
    ? sortedData[mid]
    : (sortedData[mid - 1] + sortedData[mid]) / 2;
};
