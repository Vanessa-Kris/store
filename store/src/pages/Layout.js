import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white" style={{ height: '70px' }}>
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
            <Link to="/about">About Us</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li class="nav-item">
            <Link to="/faq">FAQ</Link>
          </li>
          <li class="nav-item">
            <Link to="/policy">Store Policies</Link>
          </li>
          <li class="nav-item">
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li class="nav-item">
            <Link to="/shop">Shop</Link>
          </li>
          <li class="nav-item">
            <Link to="/booking">Book online</Link>
          </li>
        </ul>
        </div>
        </div>
      </nav>

      <Outlet />

      <footer className= "text-center fixed-bottom p-3" style={{ background: '#0001', height: '50px', position: 'relative' }}> ©2023 by Stunners. </footer>
    </>
  )
};

export default Layout;
