const fs = require('fs');

function countStudents(pathname) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathname, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        resolve(data);
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
      }
    });
  });
}

module.exports = countStudents;
