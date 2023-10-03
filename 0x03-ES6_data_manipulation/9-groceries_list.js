export default function groceriesList() {
  const groceries = new Map();
  const items = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  const keys = Array.from(Object.keys(items));

  keys.map((item) => groceries.set(item, items[item]));
  return groceries;
}
