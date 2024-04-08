/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    const count = [0, 0];
    
    while (students.length) {
        const student = students.shift();
        count[student]++;
    }

    while (sandwiches.length) {
        console.log(count);
        console.log(sandwiches);
        const sandwich = sandwiches.shift();
        if (!count[sandwich]) {
            return sandwiches.length + 1;
        }
        count[sandwich]--;
    }
    
    return 0;
};