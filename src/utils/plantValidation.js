import * as yup from 'yup';

const plantValidationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is Required'),
  species: yup.string().trim(),
  photoUri: yup.mixed().required('Need an photo'),
  waterFrequency: yup
    .number()
    .positive()
    .integer()
    .min(1)
    .required('Water Frequency is Required'),
});

export { plantValidationSchema };
