import Button from 'components/button';
import Input from 'components/input';
import Card from 'components/card';

import { useState } from 'react';

export default function Kit() {
  const [state, setState] = useState('');

  const gap = {
    margin: '20px',
    marginTop: '28px',
  };
  return (
    <div style={{}}>
      <div style={gap}>
        <Button action={() => setState('error')}>Button2</Button>
      </div>
      <div style={gap}>
        <Button loading shadow action={() => setState('')}>
          Button1
        </Button>
      </div>

      <div style={gap}>
        <Input placeholder="Jon Doe" label="Name" id="name" error={state} />
      </div>

      <div style={gap}>
        <Input placeholder="Jon usman" id="name" type="email" error={state} />
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4 , 1fr)',
            gridGap: '20px',
          }}>
          <div>
            <Card
              title="Heading"
              img="/img/arrival.jpg"
              description="dada tttnm,mjyad dadadahghjjj gdthyjy fsfy"
              price="$27"></Card>
          </div>
          <div>
            <Card
              title="Heading"
              img="/img/arrival.jpg"
              description="dada tttnm,mjyad dadadahghjjj gdthyjy fsfy"
              price="$27"></Card>
          </div>
          <div>
            <Card
              title="Heading"
              img="/img/arrival.jpg"
              description="dada tttnm,mjyad dadadahghjjj gdthyjy fsfy"
              price="$27"></Card>
          </div>
          <div>
            <Card
              title="Heading"
              img="/img/arrival.jpg"
              description="dada tttnm,mjyad dadadahghjjj gdthyjy fsfy"
              price="$27"></Card>
          </div>
          <div>
            <Card
              title="Heading"
              img="/img/arrival.jpg"
              description="dada tttnm,mjyad dadadahghjjj gdthyjy fsfy"
              price="$27"></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
