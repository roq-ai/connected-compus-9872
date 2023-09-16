import * as yup from 'yup';

export const gradeValidationSchema = yup.object().shape({
  score: yup.number().integer().required(),
  comments: yup.string().nullable(),
  assignment_id: yup.string().nullable().required(),
  student_id: yup.string().nullable().required(),
});
