import { FooterStyles, Grid, Copyright } from './styles';
import Link from 'components/link';

export default function footer() {
  return (
    <FooterStyles>
      <div className="footer-container">
        <Grid>
          <div className="gird-item">
            <h2 className="heading">Gift Shop</h2>
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
