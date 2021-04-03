export const year2020 = [
  {
    day: "2020-01-05",
    temp: 1,
  },
  {
    day: "2020-01-10",
    temp: 2,
  },
  {
    day: "2020-02-05",
    temp: 1,
  },
  {
    day: "2020-02-10",
    temp: 2,
  },
  {
    day: "2020-03-05",
    temp: 1,
  },
  {
    day: "2020-03-10",
    temp: 2,
  },
  {
    day: "2020-04-05",
    temp: 1,
  },
  {
    day: "2020-04-10",
    temp: 2,
  },
  {
    day: "2020-05-05",
    temp: 1,
  },
  {
    day: "2020-05-10",
    temp: 2,
  },
  {
    day: "2020-06-05",
    temp: 1,
  },
  {
    day: "2020-06-10",
    temp: 2,
  },
  {
    day: "2020-07-05",
    temp: 1,
  },
  {
    day: "2020-07-10",
    temp: 2,
  },
  {
    day: "2020-08-05",
    temp: 1,
  },
  {
    day: "2020-08-10",
    temp: 2,
  },
  {
    day: "2020-09-05",
    temp: 1,
  },
  {
    day: "2020-09-10",
    temp: 2,
  },
  {
    day: "2020-10-05",
    temp: 1,
  },
  {
    day: "2020-10-10",
    temp: 2,
  },
  {
    day: "2020-11-05",
    temp: 1,
  },
  {
    day: "2020-11-10",
    temp: 2,
  },
  {
    day: "2020-12-05",
    temp: 1,
  },
  {
    day: "2020-12-10",
    temp: 2,
  },
];

export const getMaxTempPerMonth = (year) => {
  const result = [];

  year.forEach((entry) => {
    const month = entry.day.slice(0, 7);
    const index = result.findIndex((x) => x.month === month);

    if (index > -1) {
      if (result[index].temp < entry.temp) {
        result[index].temp = entry.temp;
      }
    } else {
      result.push({ month, temp: entry.temp });
    }
  });

  return result;
};
