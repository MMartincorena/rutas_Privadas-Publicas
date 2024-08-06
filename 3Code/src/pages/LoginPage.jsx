// src/pages/LoginPage.js
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import axios from 'axios';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    try {
      const response = await axios.post('/api/login', values);
      dispatch(login({ user: response.data.user, token: response.data.token }));
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handleLogin}
      >
        {() => (
          <Form>
            <Field name="username" placeholder="Username" />
            <Field name="password" type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
