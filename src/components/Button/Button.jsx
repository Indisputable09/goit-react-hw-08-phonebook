import PropTypes from 'prop-types';

const Button = ({ type = 'button', disabled = false, children, ...props }) => {
  return (
    <button type={type} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  isDeleting: PropTypes.bool,
  click: PropTypes.func,
};

export default Button;
