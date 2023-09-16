import * as yup from 'yup';

export const assignmentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  due_date: yup.date().required(),
  course_id: yup.string().nullable().required(),
});
