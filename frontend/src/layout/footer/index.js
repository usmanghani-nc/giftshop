import { FooterStyles } from './styles';

export default function footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div>
          <h5>Blue Ribbon</h5>
          <p>
            Here you can use rows and columns here to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div>
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-dark">Contact</h5>
          <ul>
            <li>
              <p>+92 308343435</p>
              <p>Mon - Fri, 8:00-22:00</p>
              <p>info@gmail.com</p>
              <p>sale@gmail.com</p>
            </li>
          </ul>
        </div>

        <div className="  ">
          <h5>Locat us</h5>
          <ul className="list-unstyled ">
            <li className="list-item">
              <p>Karachi, Nazimabad no1 </p>
              <p>Pakistan</p>
              <p>Mon - Fri, 8:00-22:00</p>
            </li>
          </ul>
        </div>

        <div>
          © 2019 Copyright:
          <a href="home.html">blueribbon.com</a>
        </div>
        <div>Copyright</div>
      </div>
    </FooterStyles>
  );
}
