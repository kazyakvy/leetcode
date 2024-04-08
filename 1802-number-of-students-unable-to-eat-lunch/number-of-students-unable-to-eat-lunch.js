/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    while (
        students.length &&
        (!students.every(el => el === students[0]) || sandwiches[0] === students[0])
    ) {
        const student = students.shift();
        console.log(students);
        console.log(sandwiches);
        if (student === sandwiches[0]) {
            sandwiches.shift();
            continue;
        }
        students.push(student);
    }
    return students.length;
};