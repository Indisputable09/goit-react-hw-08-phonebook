import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonsBlock, Line } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { showModalChange } from 'redux/modal/modalSlice';
import { getShowModal } from 'redux/modal/modalSelectors';
import ContactEditorModal from 'components/ContactEditorModal';

const ContactListItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const showModal = useSelector(getShowModal);
  const dispatch = useDispatch();

  const handleShowModal = () => {
    dispatch(showModalChange({ name, number, id }));
  };

  const handleDelete = async () => {
    try {
      await deleteContact(id);
      toast.success('Contact deleted successfully!');
    } catch (error) {
      toast.error('Something went wrong. Please, try again.');
    }
  };

  return (
    <>
      <Line>
        {name}: <span>{number}</span>
      </Line>
      <ButtonsBlock>
        <Button onClick={handleShowModal}>Edit</Button>
        <Button onClick={handleDelete} disabled={isDeleting}>
          {isDeleting ? <Loader /> : 'Delete'}
        </Button>
      </ButtonsBlock>
      {showModal && <ContactEditorModal handleShowModal={handleShowModal} />}
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
