import { useState } from 'react';
import Input from 'components/input';
import Button from 'components/button';
import Form, { FormGroup } from 'components/form';
import { GiBowTieRibbon } from 'react-icons/gi';
import { Wrapper, FormTitle, LinkStyle, Text } from './styles';
import { useAuthContext } from 'context/AuthContext';

export default function Login({ router }) {
  const { fn, state: ctx } = useAuthContext();

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = state;

    if (!email) {
      setError({
        ...error,
        email: 'Email Empty',
      });

      return;
    }

    if (!password) {
      setError({
        ...error,
        password: 'Error',
      });

      return;
    }

    fn.login(state);
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
          {ctx.error && (
            <div
              style={{
                marginBottom: '2rem',
                color: 'red',
              }}
            >
              {`*${ctx.error}`}
            </div>
          )}
          <GiBowTieRibbon className="ribbon-icon" />

          <FormTitle>Sign in</FormTitle>

          <Text>
            <span className="text">Need a gifty account?</span>
            <LinkStyle href="/signup">Register here</LinkStyle>
          </Text>

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

          <Button className="form-submit-btn" loading={ctx.formLoading} block>
            Login
          </Button>
        </Form>
      )}
    </Wrapper>
  );
}
