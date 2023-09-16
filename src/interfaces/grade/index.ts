import { AssignmentInterface } from 'interfaces/assignment';
import { StudentInterface } from 'interfaces/student';
import { GetQueryInterface } from 'interfaces';

export interface GradeInterface {
  id?: string;
  score: number;
  comments?: string;
  assignment_id: string;
  student_id: string;
  created_at?: any;
  updated_at?: any;

  assignment?: AssignmentInterface;
  student?: StudentInterface;
  _count?: {};
}

export interface GradeGetQueryInterface extends GetQueryInterface {
  id?: string;
  comments?: string;
  assignment_id?: string;
  student_id?: string;
}
