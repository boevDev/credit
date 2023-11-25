/* eslint-disable @typescript-eslint/no-unused-vars */
let userYear = 2;

const getYear: any = (year: number) => {
  Number(year);
  let x = year;
  let count = year % 100;

  if (count >= 10 && count <= 20) {
    return ' лет';
  } else {
    count = x % 10;
    if (count === 1) {
      return ' год';
    } else if (count >= 2 && count <= 4) {
      return ' года';
    } else {
      return ' лет';
    }
  }
};

export default getYear;
