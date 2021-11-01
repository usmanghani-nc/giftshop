import Button from 'components/button';
import Input from 'components/input';

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
    <div style={{ display: 'flex' }}>
      {/* <div style={gap}>
        <Button block loading>
          Button1{' '}
        </Button>
      </div>
      <div style={gap}>
        <Button secondary loading>
          Button1
        </Button>
      </div> */}
      <div style={gap}>
        <Button>Button2</Button>
      </div>
      <div style={gap}>
        <Button loading shadow>
          Button1
        </Button>
      </div>

      <div style={gap}>
        <Input placeholder="Jon Doe" label="Name" id="name" error="text name dada" />
      </div>

      <div style={gap}>
        <Input placeholder="Jon usman" id="name" type="email" error="EMaildada" />
      </div>
    </div>
  );
}
