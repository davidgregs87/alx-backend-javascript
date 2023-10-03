export default function cleanSet(set, startString) {
  if (!set || !startString || typeof startString !== 'string' || !(set instanceof Set)) {
    return '';
  }

  const res = [];
  for (const elem of set) {
    if (typeof elem === 'string' && elem.startsWith(startString)) {
      const newElem = elem.substring(startString.length);

      if (newElem && newElem !== elem) {
        res.push(newElem);
      }
    }
  }
  return res.join('-');
}
