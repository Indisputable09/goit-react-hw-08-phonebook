import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonsBlock, Line } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import Loader from 'components/Loader';
import { showModalChange } from 'redux/modal/modalSlice';
import { getShowModal } from 'redux/modal/modalSelectors';
import ContactEditorModal from 'components/ContactEditorModal';
import { ListItemBlockButton } from 'components/Button/Button.styled';
import DeletIcon from 'components/Icons/DeleteIcon/DeleteIcon';
import EditIcon from 'components/Icons/EditIcon/EditIcon';

const ContactListItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const showModal = useSelector(getShowModal);
  const dispatch = useDispatch();
  const [onHover, setOnHover] = useState(false);

  const handleOnMouseOver = () => {
    setOnHover(true);
  };
  const handleOnMouseOut = () => {
    setOnHover(false);
  };

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
        <ListItemBlockButton
          onClick={handleShowModal}
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
        >
          <EditIcon onHover={onHover} />
        </ListItemBlockButton>
        <ListItemBlockButton
          onClick={handleDelete}
          disabled={isDeleting}
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
        >
          {isDeleting ? <Loader /> : <DeletIcon onHover={onHover} />}
        </ListItemBlockButton>
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
