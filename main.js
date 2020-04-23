/******************
 * YOUR CODE HERE *
 ******************/

const Grade = (assignment, score) => {
    return {
    assignment,
    score,
    }
}

const Term = () => {
    return {
    grades: [],
    
    addGrade: function(assignment, score) {
        const grade = Grade(assignment, score);
        this.grades.push(grade);
    },
}
}

const Course = (name) => {
    return {
        name,
        terms: [Term()],
        
        addTerm: function() {
            const term = Term();
            this.terms.push(term);
        }
    }
}

const Student = (name, course, term = 1) => {
    return {
        name,
        course,
        term,
        courses: [Course(course)],
        
        addCourse: function(course) {
            this.courses.push(Course(course));
            this.course = course;
        },
        
        getAverage: function(courseToFind = this.course, termIndex = this.term - 1) {
            let foundCourse;
            for (const course of this.courses) {
                if (course.name === courseToFind) {
                    foundCourse = course;
                }
            }
            
            const grades = foundCourse.terms[termIndex].grades;
            if (grades.length === 0) {
                return 'No grades yet.'
            }
            
            let sum = 0;
            for (const grade of grades) {
                sum += grade.score;
            }
            
            return sum / grades.length;
        },
    }
}


const courseItem = document.createElement('new-course');
const termItem =  document.createElement('new-term');
const nameItem = document.createElement('new-grade-assignment');
const studentInfo = document.createElement('student-info')

courseItem.innerText = `Course: ${student.course}`;
termItem.innerText = `Term: ${student.term}`;
nameItem.innerText = `Name: ${student.name}`;
studentInfo.innerText = `Student: ${student.name}`;

studentInfo.classList.add('student-info');
studentInfo.appendChild(courseItem);
studentInfo.appendChild(termItem);
studentInfo.appendChild(nameItem);
someParentElement.appendChild(studentInfo);


const printName = function(names) {
    for (const name of names) {
    printName(name);
    }
}

printName(names);





