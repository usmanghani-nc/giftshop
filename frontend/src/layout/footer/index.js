import { FooterStyles, Grid, Copyright } from './styles';
import Link from 'components/link';

export default function footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Grid>
          <div className="gird-item">
            <h2 className="heading">Gift Shop</h2>
            <p>
              I did this project for my programming skills to improve and learn new tech on the way
              do best practices that other dev uses day by day. Stack use in this project (NEXT.JS,
              NODE.JS, MONGODB) for stlyes i use stlyed-component state management react context API
            </p>
          </div>

          <div className="gird-item">
            <h2 className="heading-sm">Contact me</h2>
            <ul>
              <li>
                <p>usmanghanidev@gmail.com</p>
                <p>+92 3082875363</p>
              </li>
            </ul>
          </div>
        </Grid>
      </div>
      <Copyright>
        <span className="yaer">© {new Date().getFullYear()} Copyright:</span>
        <Link className="link" href="https://github.com/usmanghanidev">
          Muhammad Usman Ghani
        </Link>
      </Copyright>
    </FooterStyles>
  );
}
