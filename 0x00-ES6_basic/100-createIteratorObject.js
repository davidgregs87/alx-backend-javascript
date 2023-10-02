export default function createIteratorObject(report) {
  const iter = [];
  for (const value of Object.values(report)) {
    for (const item of Object.values(value)) {
      iter.push(...item);
    }
  }
  return iter;
}
