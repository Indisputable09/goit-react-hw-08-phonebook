import { ImBin } from 'react-icons/im';
import { useMedia } from 'react-use';
import { theme } from 'theme';

const DeletIcon = ({ onHover }) => {
  const isLapTop = useMedia('(min-width: 900px)');

  return (
    <ImBin
      size={isLapTop ? 24 : 20}
      fill={onHover ? theme.colors.white : theme.colors.black}
    />
  );
};

export default DeletIcon;
