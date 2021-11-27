import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartState } from '../../../Store/MyContext'
import SCard from './React_flipcart_Card'
import { IoMdArrowDropdown } from 'react-icons/io'
import styles from '../../../CSSFiles/Shopping/ShoppingCart.module.css'

const ShoppingCart = (props) => {
  const [flag, setflag] = useState(false)
  const [value, setValue] = useState('')
  const [error, seterror] = useState(true)
  const [discount, setDiscount] = useState(false)
  const {
    state: { cart },
  } = CartState()

  let itemsprice = cart.reduce((a, c) => {
    return a + c.price * c.quantity
  }, 0)
  let taxprice = 0.18 * itemsprice
  let totalprice = itemsprice + taxprice

  if (discount) {
    totalprice = totalprice * 0.9
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value === 'BOOTCAMP2021') {
      setDiscount(true)

      seterror(false)
    } else {
      seterror(true)

      return
    }
  }

  return (
    <section className={`pb-2`} style={{ backgroundColor: ' #ece4db' }}>
      <div className="container pt-3">
        <h1 className={`mb-4`}>Shopping Cart</h1>
        <div className="row">
          {cart.length !== 0 ? (
            <div className="col-md-8">
              {cart.map((prod) => {
                return <SCard prod={prod} key={prod.id} />
              })}
            </div>
          ) : (
            <div
              className={`col-md-8 d-flex flex-column justify-content-center align-items-center ${styles.empty_cart}`}
            >
              <h4 className={`text-danger`}>Your cart is Empty</h4>
              <h4>Please add a item in a cart!</h4>
              <Link to="/">
                <button
                  className={`btn btn-success rounded py-2 px-5 mt-2 ${styles.zoom}`}
                >
                  Add items
                </button>
              </Link>
            </div>
          )}

          <div className="col-md-4">
            <div
              className="card"
              style={{ backgroundColor: 'rgb(234, 237, 237)' }}
            >
              <div className="card-body">
                <div className={`col-md-12`}>
                  <h2>Summary</h2>
                  <hr />
                  <div className="Coupon-code d-flex justify-content-between mb-2">
                    <h5>Coupon Code</h5>
                    <button
                      onClick={() => {
                        setflag(!flag)
                      }}
                    >
                      <IoMdArrowDropdown className={`${styles.increase}`} />
                    </button>
                  </div>
                  {flag && (
                    <form className={`d-flex justify-content-between`}>
                      <input
                        type="text"
                        className={`text-uppercase px-2 py-1 ${styles.block_input}`}
                        onChange={(e) => {
                          setValue(e.target.value)
                        }}
                      />
                      <button
                        type="submit"
                        className={`py-1 px-3 btn btn-success ${styles.block_button}`}
                        onClick={handleSubmit}
                      >
                        Apply
                      </button>
                    </form>
                  )}
                  {flag && error && (
                    <p className={`text-danger`}>Coupon code is not valid</p>
                  )}
                  {flag && !error && (
                    <p className={`text-success`}>
                      Your coupon code is applied!
                    </p>
                  )}
                </div>

                <hr />
                <div className="total-amount">
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

          {cart.length !== 0 && (
            <div>
              <div
                className={`btn btn-success me-3 px-5 ${styles.zoom}`}
                onClick={() => {
                  props.setToggleState(2)
                }}
              >
                Next
              </div>
              <div className={`d-inline-block`}>
                <Link to="/">
                  <button
                    type="submit"
                    className={`btn btn-secondary px-5 ${styles.zoom}`}
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ShoppingCart
