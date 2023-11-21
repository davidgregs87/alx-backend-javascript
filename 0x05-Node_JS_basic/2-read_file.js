const fs = require('fs');

module.exports = function countStudents(pathname) {
  try {
    const data = fs.readFileSync(pathname, 'utf-8');
    const lines = data.split('\n');
    const students = lines.slice(1, -1);
    const noOfStudent = students.length;
    const obj = {};

    students.forEach((students) => {
      const d = students.split(',');
      const field = d[d.length - 1];

      if (!obj[field]) {
        obj[field] = {};
        obj[field].firstname = [];
        obj[field].count = 1;
      } else {
        obj[field].count += 1;
      }
      obj[field].firstname.push(d[0]);
    });

    console.log(`Number of students: ${noOfStudent}`);

    for (const [field, value] of Object.entries(obj)) {
      const firstnames = value.firstname.join(', ');
      console.log(
        `Number of students in ${field}: ${value.count}. List: ${firstnames}`,
      );
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};
