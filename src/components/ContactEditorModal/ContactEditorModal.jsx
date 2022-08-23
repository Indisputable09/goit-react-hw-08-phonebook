import PropTypes from 'prop-types';
import { CloseButton } from 'components/Button/Button.styled';
import Modal from 'components/Modal';
import ModalForm from 'components/ModalForm';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useUpdateContactMutation } from 'redux/contacts/contactsSlice';
import { showModalChange } from 'redux/modal/modalSlice';

const ContactEditorModal = ({ handleShowModal }) => {
  const [updateContact, { isLoading: isUpdaiting }] =
    useUpdateContactMutation();
  const dispatch = useDispatch();

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
      <Modal onClose={handleShowModal}>
        <CloseButton onClick={handleShowModal}>
          <AiOutlineCloseCircle size={20} />
        </CloseButton>
        <ModalForm onSubmit={handleUpdateContact} isUpdaiting={isUpdaiting} />
      </Modal>
      ;
    </>
  );
};

ContactEditorModal.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
};

export default ContactEditorModal;
