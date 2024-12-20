// Java.ts
import { Subjects } from './Teacher';
import { Subject } from './Subject';

export namespace Subjects {
  // Declaration merging to add optional attribute
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingJava
        ? `Available Teacher: ${this.teacher.firstName}`
        : 'No available teacher';
    }
  }
}
