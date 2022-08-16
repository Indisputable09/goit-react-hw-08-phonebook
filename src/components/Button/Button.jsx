import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

const Button = ({ type = 'button', children, isDeleting, click }) => {
  return (
    <ButtonStyled type={type} onClick={click} disabled={isDeleting}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  // children: PropTypes.string,
  isDeleting: PropTypes.bool,
  click: PropTypes.func,
};

export default Button;
