import { GradeInterface } from 'interfaces/grade';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  first_name: string;
  last_name: string;
  student_grade: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  grade?: GradeInterface[];
  organization?: OrganizationInterface;
  _count?: {
    grade?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  student_grade?: string;
  organization_id?: string;
}
