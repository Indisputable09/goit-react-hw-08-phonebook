import { useMedia } from 'react-use';
import { EditIconStyled } from '../Icons.styled';

const EditIcon = () => {
  const isLapTop = useMedia('(min-width: 900px)');

  return <EditIconStyled size={isLapTop ? 24 : 20} />;
};

export default EditIcon;
