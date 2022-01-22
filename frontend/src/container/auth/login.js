import { useState } from 'react';
import Input from 'components/input';
import Button from 'components/button';
import Form, { FormGroup } from 'components/form';
import { GiBowTieRibbon } from 'react-icons/gi';
import { Wrapper, FormTitle, LinkStyle, Text } from './styles';
import { useAuthContext } from 'context/AuthContext';

export default function Login({ router }) {
  const errorInit = {
    email: '',
    password: '',
  };

  const { fn, state: ctx } = useAuthContext();

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(errorInit);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleError = () => {
    const { email, password } = state;

    const e = {
      email: '',
      password: '',
      state: false,
    };

    setError(e);

    if (!email) {
      e['email'] = 'Email empty';
      e['state'] = true;
    }

    if (!password.length) {
      e['password'] = 'Password empty';
      e['state'] = true;
    }

    if (e.state) {
      setError(e);

      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const allSet = handleError();

    if (allSet) fn.login(state);
  };

  return (
    <Wrapper>
      {ctx.user?.data?._id ? (
        <Form submit={() => ''}>
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
              error={error.email}
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
              error={error.password}
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
