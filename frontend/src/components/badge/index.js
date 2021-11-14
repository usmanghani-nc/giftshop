import { BadgeStyles } from './styles';
export default function Badge({ children, className }) {
  return <BadgeStyles className={className}>{children}</BadgeStyles>;
}
