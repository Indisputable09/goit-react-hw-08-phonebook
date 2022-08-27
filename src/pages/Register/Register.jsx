import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { authOperations } from 'redux/auth';
import { Paper } from '@mui/material';

const theme = createTheme();

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        console.log('Name');
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  // return (
  //   <ThemeProvider theme={theme}>
  //     {/* <Container component="main" maxWidth="xs"> */}
  //     <Grid container component="main" sx={{ height: '100vh' }}>
  //       <CssBaseline />
  //       <Grid
  //         item
  //         xs={false}
  //         sm={4}
  //         md={7}
  //         sx={{
  //           backgroundImage: 'url(https://source.unsplash.com/random)',
  //           backgroundRepeat: 'no-repeat',
  //           backgroundColor: t =>
  //             t.palette.mode === 'light' ? '#fcfc81' : t.palette.grey[900],
  //           backgroundSize: 'cover',
  //           backgroundPosition: 'center',
  //         }}
  //       />
  //       <Grid
  //         item
  //         xs={12}
  //         sm={8}
  //         md={5}
  //         component={Paper}
  //         elevation={6}
  //         sx={{
  //           backgroundColor: '#fcfc81',
  //         }}
  //         square
  //       ></Grid>
  //       <Box
  //         // sx={{
  //         //   marginTop: 8,
  //         //   display: 'flex',
  //         //   flexDirection: 'column',
  //         //   alignItems: 'center',
  //         // }}
  //         sx={{
  //           my: 8,
  //           mx: 4,
  //           display: 'flex',
  //           flexDirection: 'column',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
  //           <LockOutlinedIcon />
  //         </Avatar>
  //         <Typography component="h1" variant="h5">
  //           Sign up
  //         </Typography>
  //         <Box
  //           component="form"
  //           noValidate
  //           onSubmit={handleSubmit}
  //           sx={{ mt: 3 }}
  //         >
  //           <Grid container spacing={2}>
  // <Grid item xs={12}>
  //   <TextField
  //     autoComplete="given-name"
  //     name="name"
  //     required
  //     fullWidth
  //     id="name"
  //     label="Name"
  //     autoFocus
  //     type="text"
  //     onChange={handleChange}
  //   />
  // </Grid>
  // <Grid item xs={12}>
  //   <TextField
  //     required
  //     fullWidth
  //     id="email"
  //     label="Email Address"
  //     name="email"
  //     autoComplete="email"
  //     onChange={handleChange}
  //   />
  // </Grid>
  // <Grid item xs={12}>
  // <TextField
  //   required
  //   fullWidth
  //   name="password"
  //   label="Password"
  //   type="password"
  //   id="password"
  //   autoComplete="new-password"
  //   onChange={handleChange}
  // />
  // </Grid>
  //           </Grid>
  //           <Button
  //             type="submit"
  //             fullWidth
  //             variant="contained"
  //             sx={{ mt: 3, mb: 2 }}
  //             disabled={name === '' || email === '' || password === ''}
  //           >
  //             Sign Up
  //           </Button>
  //           <Grid container justifyContent="center">
  // <Grid item>
  //   <Link to="/login">Already have an account? Log in</Link>
  // </Grid>
  //           </Grid>
  //         </Box>
  //       </Box>
  //       {/* </Container> */}
  //     </Grid>
  //   </ThemeProvider>
  // );
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#fcfc81',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          sx={{
            backgroundColor: '#fcfc81',
          }}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                type="text"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link to="/login">Already have an account? Log in</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
