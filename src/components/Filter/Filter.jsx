import { useDispatch, useSelector } from 'react-redux';
import { filterChange, getFilterValue } from 'redux/filterSlice';
// import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const handleChangeFilter = e => {
    const inputValue = e.target.value;
    dispatch(filterChange(inputValue));
    // setFilter(inputValue);
  };
  return (
    <Input
      type="text"
      onChange={handleChangeFilter}
      value={filter}
      placeholder="Search..."
    />
  );
};

// Filter.propTypes = {
//   handleChangeFilter: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };

export default Filter;
