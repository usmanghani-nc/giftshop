import { Ul, Item } from './styles';
import Link from 'components/link';

export default function ListComponent() {
  return (
    <Ul>
      <Item>
        <Link href="/" m={'0 3rem 0 0'}>
          Home
        </Link>
      </Item>
      <Item>
        <Link href="/anniversary" m={'0 3rem 0 0'}>
          Anniversary
        </Link>
      </Item>
      <Item>
        <Link href="/birthday" m={'0 3rem 0 0'}>
          Birthdays
        </Link>
      </Item>
      <Item>
        <Link href="/wedding" m={'0 3rem 0 0'}>
          Wedding
        </Link>
      </Item>
      <Item>
        <Link href="/eid" m={'0'}>
          Eid
        </Link>
      </Item>
    </Ul>
  );
}
