import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createGrade } from 'apiSdk/grades';
import { gradeValidationSchema } from 'validationSchema/grades';
import { AssignmentInterface } from 'interfaces/assignment';
import { StudentInterface } from 'interfaces/student';
import { getAssignments } from 'apiSdk/assignments';
import { getStudents } from 'apiSdk/students';
import { GradeInterface } from 'interfaces/grade';

function GradeCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: GradeInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createGrade(values);
      resetForm();
      router.push('/grades');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<GradeInterface>({
    initialValues: {
      score: 0,
      comments: '',
      assignment_id: (router.query.assignment_id as string) ?? null,
      student_id: (router.query.student_id as string) ?? null,
    },
    validationSchema: gradeValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Grades',
              link: '/grades',
            },
            {
              label: 'Create Grade',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Grade
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Score"
            formControlProps={{
              id: 'score',
              isInvalid: !!formik.errors?.score,
            }}
            name="score"
            error={formik.errors?.score}
            value={formik.values?.score}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('score', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.comments}
            label={'Comments'}
            props={{
              name: 'comments',
              placeholder: 'Comments',
              value: formik.values?.comments,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<AssignmentInterface>
            formik={formik}
            name={'assignment_id'}
            label={'Select Assignment'}
            placeholder={'Select Assignment'}
            fetcher={getAssignments}
            labelField={'name'}
          />
          <AsyncSelect<StudentInterface>
            formik={formik}
            name={'student_id'}
            label={'Select Student'}
            placeholder={'Select Student'}
            fetcher={getStudents}
            labelField={'first_name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/grades')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'grade',
    operation: AccessOperationEnum.CREATE,
  }),
)(GradeCreatePage);
