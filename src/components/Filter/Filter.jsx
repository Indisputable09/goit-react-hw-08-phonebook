import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

const Filter = ({ handleChangeFilter, filter }) => {
    return (
        <Input type="text" onChange={handleChangeFilter} value={filter} placeholder='Search...' />
    )
}

Filter.propTypes = {
    handleChangeFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}

export default Filter;