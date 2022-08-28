import { EditIconStyled } from '../Icons.styled';
import { useMedia } from 'react-use';

const EditIcon = ({ onHover }) => {
  const isLapTop = useMedia('(min-width: 900px)');

  return <EditIconStyled size={isLapTop ? 24 : 20} hover={`${onHover}`} />;
};

export default EditIcon;
