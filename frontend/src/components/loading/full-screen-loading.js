import { FullScreenStyles } from './styles';
import Image from 'components/image';

export default function fullScreeLoading() {
  return (
    <FullScreenStyles>
      <div className="image-box">
        <Image src="/img/logo.svg" alt="logo image" />
      </div>
    </FullScreenStyles>
  );
}
