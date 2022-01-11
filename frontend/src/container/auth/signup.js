import { useState } from 'react';
import Input from 'components/input';
import Button from 'components/button';
import Form, { FormGroup } from 'components/form';
import { useAuthContext } from 'context/AuthContext';
import { GiBowTieRibbon } from 'react-icons/gi';

import { Wrapper, FormTitle, LinkStyle, Text } from './styles';

export default function Login({ router }) {
  const { fn, state: ctx } = useAuthContext();
  const [state, setState] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { fullName, email, password, confirmPassword } = state;

    if (!fullName) {
      setError({
        ...error,
        fullName: 'FullName Empty',
      });

      return;
    }

    if (!email) {
      setError({
        ...error,
        email: 'Email Empty',
      });

      return;
    }

    if (!fullName) {
      setError({
        ...error,
        fullName: 'Error',
      });

      return;
    }

    if (password !== confirmPassword) {
      setError({
        ...error,
        confirmPassword: 'Passowrd not match',
      });

      return;
    }

    fn.signup(state, () => router.push('/'));
  };

  return (
    <Wrapper>
      {ctx.user?.data?._id ? (
        <Form>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            You are already logged in {ctx.user.data.fullName}
          </h3>

          <Button block href="/">
            Back to shopping
          </Button>
        </Form>
      ) : (
        <Form submit={handleSubmit}>
          <GiBowTieRibbon className="ribbon-icon" />

          <FormTitle>Sign up</FormTitle>

          <Text>
            <span className="text">Already have an account?</span>
            <LinkStyle href="/login">Sign in here</LinkStyle>
          </Text>

          <FormGroup>
            <Input
              action={handleChange}
              border
              label="Full name"
              placeholder="Jhon wick"
              name="fullName"
              value={state.fullName}
            />
          </FormGroup>

          <FormGroup>
            <Input
              action={handleChange}
              border
              label="Email"
              placeholder="example@mail.com"
              name="email"
              value={state.email}
            />
          </FormGroup>

          <FormGroup>
            <Input
              action={handleChange}
              border
              label="Password"
              placeholder="Your password"
              name="password"
              type="password"
              value={state.password}
            />
          </FormGroup>

          <FormGroup>
            <Input
              action={handleChange}
              border
              label="Confirm password"
              placeholder="Retype your password"
              name="confirmPassword"
              type="password"
              value={state.confirmPassword}
            />
          </FormGroup>

          <Button className="form-submit-btn" loading={ctx.loading} block>
            Register
          </Button>
        </Form>
      )}
    </Wrapper>
  );
}
