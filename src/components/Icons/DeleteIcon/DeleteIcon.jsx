import { DeleteIconStyled } from '../Icons.styled';
import { useMedia } from 'react-use';

const DeletIcon = ({ onHover }) => {
  const isLapTop = useMedia('(min-width: 900px)');

  return <DeleteIconStyled size={isLapTop ? 24 : 20} hover={`${onHover}`} />;
};

export default DeletIcon;
