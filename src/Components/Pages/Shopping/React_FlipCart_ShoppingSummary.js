import React from 'react'

import styles from '../../../CSSFiles/Shopping/ShoppingSummary.module.css'
import { CartState } from '../../../Store/MyContext'

const ShoppingSummary = () => {
  
  const {
    state: { cart },
  } = CartState()

  const itemsprice = cart.reduce((a, c) => {
    return a + c.price * c.quantity
  }, 0)
  const taxprice = 0.18 * itemsprice
  const totalprice = itemsprice + taxprice

  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <div className={`row`}>
            <div className={`col-md-12`}>
              <h3>Summary</h3>
              <hr />
            </div>

            <div
              className={`${
                cart.length === 0 ? `${styles.no_product}` : `${styles.product}`
              }`}
              style={{ overflow: 'auto' }}
            >
              {cart.length !== 0 &&
                cart.map((m) => {
                  return (
                    <div className={`row mb-2`}>
                      <div className={`col-md-6`}>
                        <img src={m.image} alt="" />
                      </div>

                      <div
                        className={`col-md-6 d-flex flex-column justify-content-center align-items-center`}
                      >
                        <h6>{m.title}</h6>
                        <p>${m.price}</p>
                      </div>
                    </div>
                  )
                })}
            </div>

            <div className={`col-md-12`}>
              <hr />
              <div className=" total-amount">
                <div className="d-flex justify-content-between">
                  <p>SUBTOTAL</p>
                  <p>{itemsprice}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>SHIPPING</p>
                  <p>FREE</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>TAX</p>
                  <p>{parseInt(taxprice)}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Total</p>
                  <p>{parseInt(totalprice)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingSummary
