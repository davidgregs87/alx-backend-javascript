const fs = require('fs');
const http = require('http');
const url = require('url');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

function countStudents (pathname) {
  const res = [];
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
            `Number of students in ${field}: ${value.count}. List: ${firstnames}`
          );
        }
        resolve(res.join('\n'));
      }
    });
  });
}

const server = http.createServer((request, resp) => {
  const { pathname } = url.parse(request.url, true);

  if (pathname === '/') {
    resp.write('Hello Holberton School!');
    resp.end();
  } else if (pathname === '/students') {
    const studentReport = [];
    studentReport.push('This is the list of our students');

    countStudents(DB_FILE)
      .then((data) => {
        studentReport.push(data);
        resp.write(studentReport.join('\n'));
        resp.end();
      });
  }
});

const PORT = 1245;
const app = server.listen(PORT, () => process.stdout.write(`Listening on port ${PORT}\n`));

module.exports = app;
