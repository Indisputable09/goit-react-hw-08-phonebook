import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { useAddUserMutation } from 'redux/authAPI';
import { loggedIn } from 'redux/authSlice';

const Register = () => {
  const [addUser, { data: addUserData, isSuccess }] = useAddUserMutation();

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isSuccess) {
      dispatch(loggedIn(addUserData.token));
      console.log('~ addUserData.token', addUserData.token);
    }
  }, [addUserData, dispatch, isSuccess]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
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
    await addUser({ name, email, password });
    // setName('');
    // setEmail('');
    // setPassword('');
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
