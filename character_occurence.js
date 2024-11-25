//Write a JS function to count the occurence of each character in a string
function characterOccurence(string) {
  let arrayString = [...string];
  let occurenceCount = new Map();
  for (const element of arrayString) {
    if (occurenceCount.has(element)) {
      occurenceCount.set(element, occurenceCount.get(element) + 1);
    } else {
      occurenceCount.set(element, 1);
    }
  }
  return [...occurenceCount];
}
console.log(characterOccurence("rajusaha"));
