import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../CSSFiles/Home/footer.module.css'

const Footer = () => {
  return (
    <div className={`container`}>
      <hr className={`${styles.horizontal_color}`} />
      <div
        className={`d-flex justify-content-center align-items-center pt-2 pb-1 `}
      >
        <Link to="/">
          <p className={`me-4 ${styles.links}`}>
            <span className={`me-3 fw-medium ${styles.spans}`}>Home</span>
            <span>|</span>
          </p>
        </Link>

        <Link to="/about">
          <p className={`me-4 ${styles.links}`}>
            <span className={`me-3`}>About Us</span>
            <span>|</span>
          </p>
        </Link>

        <Link to="/cart">
          <p className={`me-4 ${styles.links}`}>
            <span className={`me-3`}>Our Shops</span>
          </p>
        </Link>
      </div>
      <div className={`d-flex justify-content-center align-items-center `}>
        <p className={`fw-bolder ${styles.copyright}`}>@copyright Lappy</p>
      </div>
    </div>
  )
}

export default Footer
