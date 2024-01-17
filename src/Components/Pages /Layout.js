import { Outlet, Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/navigationArray";
const Layout = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <nav>
        <div className="hero_area">
          <header className="header_section">
            <div className="header_top">
              <div className="container-fluid">
                <div className="contact_nav">
                  <a className="fa fa-phone" href="tel:555-123-4567">
                    Call : +91-7351334292{" "}
                  </a>
                  <a
                    className="fa fa-envelope"
                    href="mailto:upendrakumar3024@gmail.com"
                  >
                    <span>Email : upendra.vspl@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="header_bottom">
              <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                  <a className="navbar-brand" href="/">
                    <span>Inance</span>
                  </a>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className=""> </span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ">
                      {Navigation?.map((item, index) => {
                        return (
                          <li
                            className={
                              "nav-item  " +
                              (location.pathname === "/" ? "active" : " ")
                            }
                          >
                            <Link className="nav-link" to={item.title}>
                              {item.itemname}
                            </Link>
                          </li>
                        );
                      })}
                      {/* <li className={"nav-item"+(location.pathname==="/About"?"active":" ")}>
                        <Link className="nav-link" to="/About">About</Link>
                      </li>
                      <li className={"nav-item "+(location.pathname==="/service"?"active":"")}>
                        <Link className="nav-link" to="/service">Service</Link>
                      </li>
                      <li className={"nav-item"+(location.pathname==="/Contact"?"active":" ")}>
                        <Link className="nav-link" to="/Contact">Contact Us</Link>
  </li>*/}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </header>
        </div>
      </nav>
      <Outlet />
      <section className="info_section ">
        <div className="container">
          <h4>Get In Touch</h4>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="info_items">
                <div className="row">
                  <div className="col-md-4">
                    <a href="">
                      <div className="item ">
                        <div className="img-box ">
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <p>Lorem Ipsum is simply dummy text</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="">
                      <div className="item ">
                        <div className="img-box ">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <a href="tel:555-123-4567">+91-7351334292</a>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="">
                      <div className="item ">
                        <div className="img-box">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <p>demo@gmail.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-box">
          <h4>Follow Us</h4>
          <div className="box">
            <a href="">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayDateYear"></span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </footer>
    </>
  );
};
export default Layout;
