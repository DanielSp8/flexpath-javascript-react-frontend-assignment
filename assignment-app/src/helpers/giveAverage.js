export const giveAverage = (data, cardTitle) => {
  return Math.round(
    data
      .map((item) => parseInt(item[cardTitle]))
      .reduce((sum, val) => sum + val, 0) / data.length,
  );
};
