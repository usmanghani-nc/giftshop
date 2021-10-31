import Button from 'components/button';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Kit() {
  const [state, setState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => setState(false));
    }, 5000);
  }, []);

  const gap = {
    margin: '20px',
  };

  return (
    <div>
      <div style={gap}>
        <Button block loading>
          Button1{' '}
        </Button>
      </div>
      <div style={gap}>
        <Button secondary loading>
          Button1
        </Button>
      </div>
      <div style={gap}>
        <Button loading>Button1</Button>
      </div>
      <div style={gap}>
        <Button loading={state} href="/">
          Button1
        </Button>
      </div>
      <div style={gap}>
        <Button loading={state} href="/" secondary>
          Button1
        </Button>
      </div>
    </div>
  );
}
