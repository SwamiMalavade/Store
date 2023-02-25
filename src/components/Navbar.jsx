import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light">
      <div className="container-fluid ">
        <a className="navbar-brand fw-bold text-light">Store</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/aboutus">
                About Us
              </Link>
            </li>
          </ul>
          <div className="justify-content-center">
            
              <Link to="/cart" className="nav-link text-light">
                View Cart
              <i className="bi bi-cart-check-fill fs-4 ms-1 me-5 align-self-center"></i>
              </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};
