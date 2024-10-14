// Subject.ts
import { Subjects } from './Teacher';

export namespace Subjects {
    export class Subject {
        teacher: Subjects.Teacher;

        setTeacher(teacher: Subjects.Teacher) {
            this.teacher = teacher;
        }
    }
}
