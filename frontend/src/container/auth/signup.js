import Input from 'components/input';
import Button from 'components/button';
import Form, { FormGroup } from 'components/form';

import { GiBowTieRibbon } from 'react-icons/gi';

import { Wrapper, FormTitle, LinkStyle, Text } from './styles';

export default function Login({ router }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    router.push('/');
  };

  return (
    <Wrapper>
      <Form submit={handleSubmit}>
        <GiBowTieRibbon className="ribbon-icon" />

        <FormTitle>Sign up</FormTitle>

        <Text>
          <span className="text">Already have an account?</span>
          <LinkStyle href="/login">Sign in here</LinkStyle>
        </Text>

        <FormGroup>
          <Input border label="Full name" placeholder="Jhon wick" />
        </FormGroup>

        <FormGroup>
          <Input border label="Email" placeholder="example@mail.com" />
        </FormGroup>

        <FormGroup>
          <Input border label="Password" placeholder="Your password" />
        </FormGroup>

        <FormGroup>
          <Input
            border
            label="Confirm password"
            placeholder="Retype your password"
          />
        </FormGroup>

        <Button className="form-submit-btn" block>
          Register
        </Button>
      </Form>
    </Wrapper>
  );
}
