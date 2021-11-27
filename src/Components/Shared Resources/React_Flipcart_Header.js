import React from 'react'
import { Link } from 'react-router-dom'
import { CartState } from '../../Store/MyContext'
import { BsCart4 } from 'react-icons/bs'
import styles from '../../CSSFiles/Home/Header.module.css'

const Header = () => {
  const {
    state: { cart },
  } = CartState()

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid mx-5">
          <Link to="/" className="navbar-brand">
            Lappy World
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link
                to="/"
                className={`nav-link text-lg text-center me-md-3 text-lg ${styles.common_wrapper}`}
                aria-current="page"
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-link text-lg text-center me-md-3 text-lg ${styles.common_wrapper}`}
              >
                About
              </Link>
              <Link
                to="/cart"
                className={`nav-link text-lg text-center me-md-3 text-lg ${styles.common_wrapper}`}
              >
                Our Shops
              </Link>

              <Link
                to="/cart"
                className={`nav-link text-center border rounded text-lg ${styles.cart_wrapper}`}
              >
                <BsCart4 className={`me-2`} />
                <span className={`me-2`}>Add to Cart</span>
                <span>{cart.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
