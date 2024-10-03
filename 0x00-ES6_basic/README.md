# ES6 Basics (ECMAScript 6)

Enhancements that aimed to make _JavaScript_ more powerful and easier to use.

### Variables and Constants
_let_ and _const_: These keywords provide block-scoped variable declarations, offering more control over variable lifetimes compared to var.

```javascript
let name = "Alice";
const age = 30;
```

### Arrow Functions
shorter syntax to declare functions
```
const greet = (name) => {
  console.log("Hello, " + name);
};
```
### Template Literals
_Multi-line strings_ and _variable interpolation_: Template literals allow for multi-line strings and the insertion of variables or expressions directly into the string.
```
onst message = `Hello, ${name}! You are ${age} years old.`;
```

### Destructuring Assignment
_Extracting values from arrays and objects_: Destructuring allows you to extract values from arrays and objects into variables, simplifying assignment.
```
const person = { name: "Bob", age: 25 };
const { name, age } = person;
```

### Classes
_Object-oriented programming_: ES6 introduced classes to support object-oriented programming in JavaScript, providing features like inheritance and encapsulation.
```class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

### Modules
_Code organization and reusability_: Modules allow you to organize your code into separate files and import them into other files, promoting code reusability and maintainability.
```
// utils.js
export const add = (a, b) => a + b;

// main.js
import { add } from './utils.js';
```

### Spread Operator
_Expanding arrays and objects_: The _spread operator (...)_ allows you to expand arrays and objects into individual elements or properties.
```
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
```
