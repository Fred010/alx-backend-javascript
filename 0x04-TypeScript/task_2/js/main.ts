// // Define DirectorInterface interface
// interface DirectorInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workDirectorTasks(): string;
// }

// // Define TeacherInterface interface
// interface TeacherInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workTeacherTasks(): string;
// }

// // Define Director class implementing DirectorInterface
// class Director implements DirectorInterface {
//   workFromHome(): string {
//     return "Working from home";
//   }

//   getCoffeeBreak(): string {
//     return "Getting a coffee break";
//   }

//   workDirectorTasks(): string {
//     return "Getting to director tasks";
//   }
// }

// // Define Teacher class implementing TeacherInterface
// class Teacher implements TeacherInterface {
//   workFromHome(): string {
//     return "Cannot work from home";
//   }

//   getCoffeeBreak(): string {
//     return "Cannot have a break";
//   }

//   workTeacherTasks(): string {
//     return "Getting to work";
//   }
// }

// // Define createEmployee function
// const createEmployee = (salary: number | string): Director | Teacher => {
//   if (typeof salary === "number" && salary < 500) {
//     return new Teacher();
//   } else {
//     return new Director();
//   }
// };

// // Test cases
// console.log(createEmployee(200));  // Teacher
// console.log(createEmployee(1000)); // Director
// console.log(createEmployee('$500')); // Director







// /**
//  * Define the DirectorInterface interface with the expected methods.
//  */
// interface DirectorInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workDirectorTasks(): string;
// }

// /**
//  * Define the TeacherInterface interface with the expected methods.
//  */
// interface TeacherInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workTeacherTasks(): string;
// }

// /**
//  * Create a class Director that implements DirectorInterface.
//  */
// class Director implements DirectorInterface {
//   workFromHome(): string {
//     return 'Working from home';
//   }

//   getCoffeeBreak(): string {
//     return 'Getting a coffee break';
//   }

//   workDirectorTasks(): string {
//     return 'Getting to director tasks';
//   }
// }

// /**
//  * Create a class Teacher that implements TeacherInterface.
//  */
// class Teacher implements TeacherInterface {
//   workFromHome(): string {
//     return 'Cannot work from home';
//   }

//   getCoffeeBreak(): string {
//     return 'Cannot have a break';
//   }

//   workTeacherTasks(): string {
//     return 'Getting to work';
//   }
// }

// /**
//  * Create a function createEmployee that returns either a Director or a Teacher instance based on the salary.
//  * @param salary The salary of the employee.
//  * @returns Either a Director or a Teacher instance.
//  */
// const createEmployee = (salary: number | string): Director | Teacher => {
//   if (typeof salary === 'number' && salary < 500) {
//     return new Teacher();
//   } else {
//     return new Director();
//   }
// };

// /**
//  * Check if the given employee is a Director.
//  * @param employee The employee to check.
//  * @returns True if the employee is a Director, false otherwise.
//  */
// const isDirector = (employee: Director | Teacher): employee is Director => {
//   return employee instanceof Director;
// };

// /**
//  * Execute the work tasks for the given employee.
//  * @param employee The employee for whom the work tasks should be executed.
//  */
// const executeWork = (employee: Director | Teacher): void => {
//   if (isDirector(employee)) {
//     console.log(employee.workDirectorTasks());
//   } else {
//     console.log(employee.workTeacherTasks());
//   }
// };

// // Test cases
// executeWork(createEmployee(200)); // Output: "Getting to work"
// executeWork(createEmployee(1000)); // Output: "Getting to director tasks"






/**
 * Define a String literal type named Subjects allowing a
 * variable to have the value Math or History only.
 */
type Subjects = 'Math' | 'History';

/**
 * Write a function named teachClass.
 * @param todayClass The class to teach.
 * @returns A string indicating the subject being taught.
 */
const teachClass = (todayClass: Subjects): string => {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    throw new Error('Invalid class');
  }
};

// Test cases
console.log(teachClass('Math')); // Output: "Teaching Math"
console.log(teachClass('History')); // Output: "Teaching History"
