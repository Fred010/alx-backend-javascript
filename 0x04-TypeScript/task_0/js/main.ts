/**
 * Write an interface named Student that accepts the
 * following elements:
 * - firstName(string),
 * - lastName(string),
 * - age(number),
 * - location(string)
 */

export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

/**
 * Create two students, and create an array named studentsList
 * containing the two variables
 */

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'UK',
};

const student2: Student = {
  firstName: 'Alex',
  lastName: 'Sanchez',
  age: 29,
  location: 'New York',
};

const studentsList: Array<Student> = [
  student1,
  student2,
];


/**
 * - Using Vanilla Javascript, render a table and for each elements in the array,
 * append a new row to the table
 *
 * - Each row should contain the first name of the student and the location
 */

export const renderTable = (studentsList: Array<Student>): void =>  {
  // create table tag
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // insert headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);
// document.addEventListener("DOMContentLoaded", function() {
//   // Define the Student interface
//   interface Student {
//     firstName: string;
//     lastName: string;
//     age: number;
//     location: string;
//   }

//   // Create two students
//   const student1: Student = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 20,
//     location: "New York"
//   };

//   const student2: Student = {
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 22,
//     location: "Los Angeles"
//   };

//   // Create an array of students
//   const studentsList: Student[] = [student1, student2];

//   // Render the table
//   // Select the table body element using its id
//   const tableBody = document.querySelector("#student-table tbody");

//   // Check if the table body element exists
//   if (tableBody) {
//     // Loop through the array of students
//     studentsList.forEach(student => {
//       // Create a new table row element
//       const row = document.createElement("tr");

//       // Create a new table cell element for the first name
//       const firstNameCell = document.createElement("td");
//       // Set the text content of the first name cell to the student's first name
//       firstNameCell.textContent = student.firstName;

//       // Create a new table cell element for the location
//       const locationCell = document.createElement("td");
//       // Set the text content of the location cell to the student's location
//       locationCell.textContent = student.location;

//       // Append the first name cell to the table row
//       row.appendChild(firstNameCell);
//       // Append the location cell to the table row
//       row.appendChild(locationCell);

//       // Append the table row to the table body
//       tableBody.appendChild(row);
//     });
//   }
// });
