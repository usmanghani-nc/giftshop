import { FooterStyles, Grid, Copyright, Logo } from './styles';
import Link from 'components/link';
import Image from 'components/image';

export default function footer() {
  return (
    <FooterStyles>
      <div className="footer-container">
        <Grid>
          <div className="gird-item">
            <Logo>
              <Image src="/img/logo.svg" alt="Giftshop" />
            </Logo>
          </div>

          <div className="gird-item">
            <Copyright>
              <span className="yaer">© {new Date().getFullYear()} Copyright:</span>
              <Link className="link" href="https://usmanghanidev.com" target>
                Muhammad Usman Ghani
              </Link>
            </Copyright>
          </div>
        </Grid>
      </div>
    </FooterStyles>
  );
}
