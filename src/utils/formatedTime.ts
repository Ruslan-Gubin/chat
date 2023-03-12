const formatedTime = new Intl.DateTimeFormat("ru", {
  hour: "2-digit",
  minute: "2-digit",
});
const formatedTimeYears = new Intl.DateTimeFormat("ru", {
  day: '2-digit',
  year: '2-digit',
  month: '2-digit',
});

export { formatedTime, formatedTimeYears }