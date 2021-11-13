import Input from 'components/input';
import Button from 'components/button';
import Form, { FormGroup } from 'components/form';

import { GiBowTieRibbon } from 'react-icons/gi';

import { Wrapper, FormTitle, LinkStyle, Text } from './styles';

export default function Login({}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    router.push('/');
  };

  return (
    <Wrapper>
      <Form submit={handleSubmit}>
        <GiBowTieRibbon className="ribbon-icon" />

        <FormTitle>Sign in</FormTitle>

        <Text>
          <span className="text">Need a gifty account?</span>
          <LinkStyle href="/signup">Register here</LinkStyle>
        </Text>

        <FormGroup>
          <Input border label="Email" placeholder="example@mail.com" />
        </FormGroup>

        <FormGroup>
          <Input border label="Password" placeholder="Your password" />
        </FormGroup>

        <Button className="form-submit-btn" block>
          Login
        </Button>
      </Form>
    </Wrapper>
  );
}
