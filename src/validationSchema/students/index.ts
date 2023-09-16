import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  student_grade: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
