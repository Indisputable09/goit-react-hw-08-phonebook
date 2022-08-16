import { Box } from 'components/Box';
import { Link } from 'react-router-dom';
// import { BackLink } from '../MovieDetails/MovieDetails.styled';

const Error = () => {
  return (
    <Box as="div" p="4" display="flex">
      <Link to="/">Go home</Link>
      <Box
        as="b"
        textAlign="center"
        mx="auto"
        mt="5"
        fontSize="l"
        color="accent"
      >
        Error. Page couldn't be found.
      </Box>
    </Box>
  );
};

export default Error;
