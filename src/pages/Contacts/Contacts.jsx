import { CenteredLoader } from 'App.styled';
import Loader from 'components/Loader';
import PhonebookContent from 'components/PhonebookContent';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

const Contacts = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { data: contacts, refetch } = useGetContactsQuery();

  useEffect(() => {
    if (isLoggedIn) {
      refetch();
    }
  }, [isLoggedIn, refetch]);

  return contacts ? (
    <PhonebookContent />
  ) : (
    <CenteredLoader>
      <Loader size={50} />
    </CenteredLoader>
  );
};

export default Contacts;
