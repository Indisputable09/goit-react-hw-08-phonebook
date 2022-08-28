import { MdOutlineEdit } from 'react-icons/md';
import { useMedia } from 'react-use';
import { theme } from 'theme';

const EditIcon = ({ onHover }) => {
  const isLapTop = useMedia('(min-width: 900px)');

  return (
    <MdOutlineEdit
      size={isLapTop ? 24 : 20}
      fill={onHover ? theme.colors.white : theme.colors.black}
    />
  );
};

export default EditIcon;
