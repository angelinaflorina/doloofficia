function offseti(date, step) {
  date = new Date(+date);
  step = step || 1;
  return Math.floor(step), date;
}
