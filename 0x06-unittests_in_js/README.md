# **Unit Testing in JavaScript**

This document explains how to set up and run unit tests for the `full_server` project.

## **Introduction to Unit Testing**

Unit tests are automated tests written to verify the behavior of individual pieces of code (units), such as functions or methods. Writing unit tests helps ensure that code behaves as expected and makes it easier to catch bugs early during development.

In this project, we will use **Jest** as the testing framework to write and execute unit tests.

---

## **Getting Started**

### **1. Install Jest**

Jest is a popular testing framework for JavaScript applications. Install it using npm:

```bash
npm install --save-dev jest
```

Update the `package.json` file to add a test script:

```json
"scripts": {
  "test": "jest"
}
```

### **2. Project Structure**

To organize unit tests, create a `tests` directory in the root of the project:

```
full_server/
├── controllers/
├── routes/
├── tests/
│   ├── utils.test.js
│   ├── AppController.test.js
│   ├── StudentsController.test.js
├── utils.js
├── server.js
.babelrc
package.json
```

### **3. Write Unit Tests**

Unit tests for each module should be placed in the `tests` directory. Each test file should follow the naming convention `<module>.test.js`.

---

## **Writing Tests**

Below are examples of unit tests for the `full_server` project:

### **Testing `readDatabase` Function**

Create `tests/utils.test.js`:

```javascript
import { readDatabase } from '../utils';
import fs from 'fs';

jest.mock('fs'); // Mock the file system module

describe('readDatabase', () => {
  it('should return a promise that resolves to student data', async () => {
    const mockData = 'firstName,lastName,age,field\nJohn,Doe,20,CS\nJane,Smith,22,SWE';
    fs.readFile.mockImplementation((filePath, encoding, callback) => {
      callback(null, mockData);
    });

    const data = await readDatabase('test.csv');
    expect(data).toEqual({
      CS: ['John'],
      SWE: ['Jane'],
    });
  });

  it('should reject the promise if the file cannot be read', async () => {
    fs.readFile.mockImplementation((filePath, encoding, callback) => {
      callback(new Error('Cannot load the database'), null);
    });

    await expect(readDatabase('test.csv')).rejects.toThrow('Cannot load the database');
  });
});
```

### **Testing AppController**

Create `tests/AppController.test.js`:

```javascript
import AppController from '../controllers/AppController';

describe('AppController', () => {
  it('should return "Hello Holberton School!"', () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    AppController.getHomepage(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('Hello Holberton School!');
  });
});
```

### **Testing StudentsController**

Create `tests/StudentsController.test.js`:

```javascript
import StudentsController from '../controllers/StudentsController';
import { readDatabase } from '../utils';

jest.mock('../utils'); // Mock the readDatabase function

describe('StudentsController', () => {
  describe('getAllStudents', () => {
    it('should return a list of students grouped by field', async () => {
      const mockData = {
        CS: ['John', 'Alice'],
        SWE: ['Bob', 'Jane'],
      };
      readDatabase.mockResolvedValue(mockData);

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      await StudentsController.getAllStudents(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith(
        'This is the list of our students\n' +
          'Number of students in CS: 2. List: John, Alice\n' +
          'Number of students in SWE: 2. List: Bob, Jane'
      );
    });

    it('should return 500 if the database cannot be loaded', async () => {
      readDatabase.mockRejectedValue(new Error('Cannot load the database'));

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      await StudentsController.getAllStudents(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Cannot load the database');
    });
  });
});
```

---

## **Running Tests**

1. Run all tests:
   ```bash
   npm test
   ```

2. Run specific tests:
   ```bash
   npx jest tests/utils.test.js
   ```

3. Run tests with coverage:
   ```bash
   npx jest --coverage
   ```

   This generates a coverage report showing how much of your code is covered by the tests.

---

## **Best Practices**

- **Write small, focused tests**: Each test should cover one specific aspect of the function.
- **Mock dependencies**: Use Jest's mocking capabilities to isolate the unit under test.
- **Test both success and failure cases**: Ensure you test both expected outputs and error scenarios.

---

## **Additional Resources**

- [Jest Documentation](https://jestjs.io/)
- [Writing Unit Tests in JavaScript](https://www.freecodecamp.org/news/how-to-write-unit-tests-in-javascript/)
- [Mocking in Jest](https://jestjs.io/docs/mock-functions)
