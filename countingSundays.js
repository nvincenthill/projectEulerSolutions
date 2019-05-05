// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

const howManySundaysInMonthOverTime = (startDay, endDay, day) => {
  let currentDate = new Date(startDay);
  let endDate = new Date(endDay);
  let result = 0;

  while (JSON.stringify(currentDate) !== JSON.stringify(endDate)) {
    if (currentDate.getDate() === 1 && currentDate.getDay() === day) {
      result += 1;
    }
    currentDate = new Date(
      currentDate.setTime(currentDate.getTime() + 1 * 86400000)
    );
  }

  return result;
};

// tests
// console.log(
//   howManySundaysInMonthOverTime('January 1, 1901', 'December 31, 2000', 0)
// ); // 171
