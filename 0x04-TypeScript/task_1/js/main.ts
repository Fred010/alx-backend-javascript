// /**
//  * Define the Teacher interface
//  * - firstName: string
//  * - lastName: string
//  * - fullTimeEmployee: boolean
//  * - yearsOfExperience?: number (optional)
//  * - location: string
//  * - [key: string]: any (allow any additional attribute)
//  */
// interface Teacher {
//   firstName: string;
//   lastName: string;
//   fullTimeEmployee: boolean;
//   yearsOfExperience?: number;
//   location: string;
//   [key: string]: any; // Allow any additional attribute
// }

// /**
//  * Function to create a Teacher object
//  * @param initialAttributes Initial attributes for the teacher
//  * @returns Teacher object
//  */
// const createTeacher = (initialAttributes: Teacher): Teacher => {
//   const teacher: Teacher = {
//     ...initialAttributes,
//   };
//   return teacher;
// };

// /**
//  * Function to render a Teacher object in the HTML document
//  * @param teacher Teacher object to render
//  */
// const renderTeacher = (teacher: Teacher): void => {
//   const container = document.createElement('div');
//   container.innerHTML = `
//     <h2>Teacher Information</h2>
//     <p>First Name: ${teacher.firstName}</p>
//     <p>Last Name: ${teacher.lastName}</p>
//     <p>Full Time Employee: ${teacher.fullTimeEmployee}</p>
//     <p>Location: ${teacher.location}</p>
//     ${teacher.yearsOfExperience ? `<p>Years of Experience: ${teacher.yearsOfExperience}</p>` : ''}
//     ${Object.keys(teacher)
//       .filter(key => !['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location'].includes(key))
//       .map(key => `<p>${key}: ${teacher[key]}</p>`)}
//   `;
//   document.body.appendChild(container);
// };

// // Create a teacher object with initial attributes
// const teacher3: Teacher = createTeacher({
//   firstName: 'John',
//   lastName: 'Doe',
//   fullTimeEmployee: false,
//   location: 'London',
//   contract: false, // Adding additional attribute
// });

// // Render the teacher object in the HTML document
// renderTeacher(teacher3);


// /**
//  * Define the Teacher interface
//  * - firstName: string
//  * - lastName: string
//  * - fullTimeEmployee: boolean
//  * - yearsOfExperience?: number (optional)
//  * - location: string
//  * - [key: string]: any (allow any additional attribute)
//  */
// interface Teacher {
//   firstName: string;
//   lastName: string;
//   fullTimeEmployee: boolean;
//   yearsOfExperience?: number;
//   location: string;
//   [key: string]: any; // Allow any additional attribute
// }

// /**
//  * Define the Directors interface that extends Teacher
//  * - numberOfReports: number
//  */
// interface Directors extends Teacher {
//   numberOfReports: number;
// }

// /**
//  * Function to create a Teacher object
//  * @param initialAttributes Initial attributes for the teacher
//  * @returns Teacher object
//  */
// const createTeacher = (initialAttributes: Teacher): Teacher => {
//   const teacher: Teacher = {
//     ...initialAttributes,
//   };
//   return teacher;
// };

// /**
//  * Function to render a Teacher object in the HTML document
//  * @param teacher Teacher object to render
//  */
// const renderTeacher = (teacher: Teacher): void => {
//   const container = document.createElement('div');
//   container.innerHTML = `
//     <h2>Teacher Information</h2>
//     <p>First Name: ${teacher.firstName}</p>
//     <p>Last Name: ${teacher.lastName}</p>
//     <p>Full Time Employee: ${teacher.fullTimeEmployee}</p>
//     <p>Location: ${teacher.location}</p>
//     ${teacher.yearsOfExperience ? `<p>Years of Experience: ${teacher.yearsOfExperience}</p>` : ''}
//     ${Object.keys(teacher)
//       .filter(key => !['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location'].includes(key))
//       .map(key => `<p>${key}: ${teacher[key]}</p>`)}
//   `;
//   document.body.appendChild(container);
// };

// // Create a teacher object with initial attributes
// const teacher3: Teacher = createTeacher({
//   firstName: 'John',
//   lastName: 'Doe',
//   fullTimeEmployee: false,
//   location: 'London',
//   contract: false, // Adding additional attribute
// });

// // Render the teacher object in the HTML document
// renderTeacher(teacher3);

// // Create a director object with initial attributes
// const director1: Directors = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullTimeEmployee: true,
//   location: 'London',
//   numberOfReports: 17,
// };

// // Render the director object in the HTML document
// renderTeacher(director1);



// // Define the Teacher interface
// interface Teacher {
//   firstName: string;
//   lastName: string;
//   fullTimeEmployee: boolean;
//   yearsOfExperience?: number;
//   location: string;
//   [key: string]: any; // Allow any additional attribute
// }

// // Function to create a Teacher object
// const createTeacher = (initialAttributes: Teacher): Teacher => {
//   const teacher: Teacher = {
//     ...initialAttributes,
//   };
//   return teacher;
// };

// // Function to render a Teacher object in the HTML document
// const renderTeacher = (teacher: Teacher): void => {
//   const container = document.createElement('div');
//   container.innerHTML = `
//     <h2>Teacher Information</h2>
//     <p>First Name: ${teacher.firstName}</p>
//     <p>Last Name: ${teacher.lastName}</p>
//     <p>Full Time Employee: ${teacher.fullTimeEmployee}</p>
//     <p>Location: ${teacher.location}</p>
//     ${teacher.yearsOfExperience ? `<p>Years of Experience: ${teacher.yearsOfExperience}</p>` : ''}
//     ${Object.keys(teacher)
//       .filter(key => !['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location'].includes(key))
//       .map(key => `<p>${key}: ${teacher[key]}</p>`)}
//     <p>Printed Teacher: ${printTeacher(teacher.firstName, teacher.lastName)}</p>
//   `;
//   document.body.appendChild(container);
// };

// // Function to print the teacher's name in a specific format
// const printTeacher = (firstName: string, lastName: string): string => {
//   return `${firstName.charAt(0)}. ${lastName}`;
// };

// // Interface for the printTeacher function
// interface printTeacherFunction {
//   (firstName: string, lastName: string): string;
// }

// // Create a teacher object with initial attributes
// const teacher3: Teacher = createTeacher({
//   firstName: 'John',
//   lastName: 'Doe',
//   fullTimeEmployee: false,
//   location: 'London',
//   contract: false, // Adding additional attribute
// });

// // Render the teacher object in the HTML document
// renderTeacher(teacher3);




// Define the StudentInterface interface
interface StudentInterface {
  firstName: string;
  lastName: string;
}

// Define the StudentClassInterface interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Define the StudentClass class
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(student: StudentInterface) {
    this.firstName = student.firstName;
    this.lastName = student.lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create an instance of the StudentClass
const student1: StudentInterface = {
  firstName: 'John',
  lastName: 'Doe',
};

const studentInstance = new StudentClass(student1);

// Test the methods
console.log(studentInstance.workOnHomework()); // Output: Currently working
console.log(studentInstance.displayName()); // Output: John
