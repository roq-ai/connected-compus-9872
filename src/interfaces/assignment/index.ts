import { GradeInterface } from 'interfaces/grade';
import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface AssignmentInterface {
  id?: string;
  name: string;
  description?: string;
  due_date: any;
  course_id: string;
  created_at?: any;
  updated_at?: any;
  grade?: GradeInterface[];
  course?: CourseInterface;
  _count?: {
    grade?: number;
  };
}

export interface AssignmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  course_id?: string;
}
