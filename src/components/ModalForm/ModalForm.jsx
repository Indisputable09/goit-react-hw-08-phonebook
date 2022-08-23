import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NAME_MATCH, SignupSchema } from 'constants/formConstants';
import { FormError } from 'components/ContactForm/ContactForm';
import { FormBlock, Input, Label } from './ModalForm.styled';
import Loader from 'components/Loader';
import { EditButton } from 'components/Button/Button.styled';

const ModalForm = ({ onSubmit, isUpdaiting }) => {
  const name = useSelector(state => state.modal.name);
  const number = useSelector(state => state.modal.number);
  const id = useSelector(state => state.modal.id);

  const handleSubmit = async (values, actions) => {
    await onSubmit({ name: values.name, number: values.number, id });
  };

  return (
    <Formik
      initialValues={{
        name,
        number,
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
            disabled={values.name === name && values.number === number}
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
  isUpdaiting: PropTypes.bool,
};

export default ModalForm;
