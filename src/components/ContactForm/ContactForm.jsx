import { Formik, ErrorMessage } from 'formik';
import { Notify } from 'notiflix';
import Loader from 'components/Loader';
import { FormContainer, Input, Label } from './ContactForm.styled';
import { AddButton } from 'components/Button/Button.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsSlice';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { NAME_MATCH, SignupSchema } from 'constants/formConstants';

export const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name} render={message => Notify.failure(message)} />
  );
};

const ContactForm = () => {
  const [addContact, { data: contactData, isLoading: isPosting }] =
    useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const name = e.target.name.value;
      const number = e.target.number.value;
      const contactsName = contacts.find(contact => contact.name === name);
      const contactsNumber = contacts.find(
        contact => contact.number === number
      );
      const contact = { name, number };

      if (contactsName) {
        Swal.fire({
          title: 'Error!',
          text: `Sorry, ${name} is already in your contacts`,
          icon: 'error',
          confirmButtonText: 'Got it',
        });
        return;
      }
      if (contactsNumber) {
        Swal.fire({
          title: 'Error!',
          text: `Sorry, ${number} is already in your contacts`,
          icon: 'error',
          confirmButtonText: 'Got it',
        });
        return;
      }
      await addContact(contact);
      toast.success('Contact added successfully!');
      e.target.reset();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Please, try again.');
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
    >
      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          pattern={NAME_MATCH}
          placeholder="Name"
          required
        />
        <FormError name="name" />
        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Number"
          required
        />
        <FormError name="number" />
        <AddButton type="submit">
          {isPosting ? <Loader /> : 'Add contact'}
        </AddButton>
      </FormContainer>
    </Formik>
  );
};

export default ContactForm;
