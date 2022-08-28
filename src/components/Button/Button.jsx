import PropTypes from 'prop-types';

const Button = ({ type = 'button', disabled = false, children, ...props }) => {
  // console.log('~ props', props);
  return (
    <button type={type} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
// const Button = ({ type = 'button', children, isDeleting, click }) => {
//   return (
//     <ButtonStyled type={type} onClick={click} disabled={isDeleting}>
//       {children}
//     </ButtonStyled>
//   );
// };

Button.propTypes = {
  type: PropTypes.string,
  // children: PropTypes.string,
  isDeleting: PropTypes.bool,
  click: PropTypes.func,
};

export default Button;
