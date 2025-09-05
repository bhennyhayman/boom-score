
export const createDate = (string) => {
  const str = string.slice(0,10);
  const date = new Date(str);

  return date.toDateString();
}

export const todayDate = () => {
  const date = new Date()
  return date.toLocaleDateString("en-GB", { 
  weekday: "short", year: "numeric", month: "short", day: "numeric" 
});
}

