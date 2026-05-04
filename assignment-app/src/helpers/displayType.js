export const displayType = (cardTitle) => {
  switch (cardTitle) {
    case "App Usage Time (min/day)":
      return "Minutes";
    case "Screen On Time (hours/day)":
      return "Hours";
    case "Number of Apps Installed":
      return "Apps";
    case "Age":
      return "Years Old";
  }
};
