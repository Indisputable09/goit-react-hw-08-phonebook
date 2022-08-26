import { useDispatch, useSelector } from 'react-redux';
import { filterChange, getFilterValue } from 'redux/filterSlice';
import { Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const handleChangeFilter = e => {
    const inputValue = e.target.value;
    dispatch(filterChange(inputValue));
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

export default Filter;
