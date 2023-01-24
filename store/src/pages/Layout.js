import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
      <a class="navbar-brand" href="#Home">Stunners</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/blogs">About Us</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact">FAQ</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact">Store Policies</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact">Testimonials</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact">Shop</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact">Book online</Link>
          </li>
        </ul>
        </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
