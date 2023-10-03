export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];

  const res = students
    .filter((student) => student.location === city)
    .map((item) => {
      const student = item;
      for (const el of newGrades) {
        if (student.id === el.studentId) {
          student.grade = el.grade;
        }
      }

      if (!student.grade) {
        student.grade = 'N/A';
      }

      return student;
    });
  return res;
}
