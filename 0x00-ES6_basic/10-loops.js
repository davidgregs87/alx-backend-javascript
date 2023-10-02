export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (const item of array) {
    const elem = appendString + item;
    res.push(elem);
  }

  return res;
}
