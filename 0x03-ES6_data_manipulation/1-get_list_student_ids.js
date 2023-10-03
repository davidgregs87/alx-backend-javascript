export default function getListStudentIds(arr) {
  let objIds = [];
  if (Array.isArray(arr)) {
    objIds = arr.map((item) => item.id);
  }
  return objIds;
}
