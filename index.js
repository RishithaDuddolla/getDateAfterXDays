const addDate = require("date-fns/addDays");
function newDatefunction(days) {
  let newDate = addDate(new Date(2020, 06, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
}
module.exports = newDatefunction;
