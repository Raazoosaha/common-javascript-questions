//filter object and find unique
const inputObj = [
  { name: "John" },
  { name: "Jane" },
  { name: "Jane" },
  { name: "John" },
];
function uniqueObj(arrayofObj) {
  const reduced = arrayofObj.reduce((accumulator, current) => {
    const exist = accumulator.some((item) => item.name === current.name);
    if (!exist) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
  return reduced;
}
console.log(uniqueObj(inputObj));
