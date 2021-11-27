import React from 'react'
import { Link } from 'react-router-dom'
import '../../../CSSFiles/Home/ContinueShoping.css'

const ContinueShopping = () => {
  return (
    <section
      className={`py-5 d-flex justify-content-center align-items-center bg-muted px-5 height_Shoping `}
    >
      <div className={` d-flex flex-column align-items-center`}>
        <div>
          <h1 className={`mb-3`}>Your Order has been placed.</h1>
        </div>
        <div>
          <h5 className={`mb-3`}>Thank You For purchasing Item</h5>
        </div>
        <div>
          <Link to="/" className="linked">
            <button className={`btn btn-success`}>Continue Shopping</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContinueShopping
