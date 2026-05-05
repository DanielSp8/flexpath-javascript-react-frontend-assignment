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
