import Input from 'components/input';
import Button from 'components/button';
import Form, { FormGroup } from 'components/form';
import { Wrapper, FormTitle } from './styles';

export default function Login({ router }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <Form submit={handleSubmit}>
        <FormTitle>Login</FormTitle>

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
