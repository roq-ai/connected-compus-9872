import { AssignmentInterface } from 'interfaces/assignment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  description?: string;
  teacher_id: string;
  created_at?: any;
  updated_at?: any;
  assignment?: AssignmentInterface[];
  user?: UserInterface;
  _count?: {
    assignment?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  teacher_id?: string;
}
