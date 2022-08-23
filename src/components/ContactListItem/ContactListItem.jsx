import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonsBlock, Line } from './ContactListItem.styled';
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/contacts/contactsSlice';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import ModalForm from 'components/ModalForm';
import { CloseButton } from 'components/Button/Button.styled';
import { showModalChange } from 'redux/modal/modalSlice';
import { getShowModal } from 'redux/modal/modalSelectors';

const ContactListItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [updateContact, { isLoading: isUpdaiting }] =
    useUpdateContactMutation();
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

  const handleUpdateContact = async fields => {
    try {
      await updateContact(fields);
      dispatch(showModalChange());
      toast.success('Contact edited successfully!');
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
      {showModal && (
        <Modal onClose={handleShowModal}>
          <CloseButton onClick={handleShowModal}>
            <AiOutlineCloseCircle size={20} />
          </CloseButton>
          <ModalForm onSubmit={handleUpdateContact} isUpdaiting={isUpdaiting} />
        </Modal>
      )}
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
