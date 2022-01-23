import { SideBar } from './styles';
import List from './list';
import Logo from './logo';

export default function Bar({ active }) {
  return (
    <SideBar active={active}>
      <Logo />
      <List />
    </SideBar>
  );
}
