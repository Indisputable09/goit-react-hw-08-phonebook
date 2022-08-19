import { Formik } from 'formik';
import PropTypes from 'prop-types';
import {
  FormError,
  NAME_MATCH,
  SignupSchema,
} from 'components/ContactForm/ContactForm';
import { FormBlock, Input, Label } from './ModalForm.styled';
import Loader from 'components/Loader';
import { EditButton } from 'components/Button/Button.styled';

const ModalForm = ({ onSubmit, nameValue, numberValue, isUpdaiting, id }) => {
  console.log('~ id', id);
  // console.log('~ nameValue', nameValue);
  const handleSubmit = async (values, actions) => {
    // console.log('~ values', values);
    await onSubmit(values);

    // actions.setSubmitting(false);
    // actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: nameValue,
        number: numberValue,
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <FormBlock>
          <Label htmlFor="contactName">Name</Label>
          <Input
            id="contactName"
            type="text"
            name="name"
            pattern={NAME_MATCH}
            autoComplete="off"
            placeholder="Name"
            required
          />
          <FormError name="name" />
          <Label htmlFor="phone">Number</Label>
          <Input
            id="phone"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="Number"
            autoComplete="off"
            required
          />
          <FormError name="number" />
          <EditButton
            type="submit"
            disabled={
              values.name === nameValue && values.number === numberValue
            }
          >
            {isUpdaiting ? <Loader /> : 'Edit'}
          </EditButton>
        </FormBlock>
      )}
    </Formik>
  );
};

ModalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  numberValue: PropTypes.string.isRequired,
  isUpdaiting: PropTypes.bool,
};

export default ModalForm;
