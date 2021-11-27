import React from 'react'
import { useParams } from 'react-router-dom'

import { CartState } from '../../../Store/MyContext'
import styles from '../../../CSSFiles/SingleProduct/SingleProduct.module.css'

const SingleProduct = () => {
  const { state, dispatch } = CartState()
  const data = state.state
  const cart = state.cart
  const { id } = useParams()

  const filteredArray = data.filter((c) => c.id == id)
  return (
    <div className={styles.single_wrapper}>
      <div data-testid="todo-1" className="container pt-5">
        <div className="container-fliud">
          <div className={`row ${styles.wrapper}`}>
            <div className={`col-md-6 ${styles.preview}`}>
              <div className={`${styles.preview_pic} ${styles.tab_content}`}>
                <div className={`h-100 w-100${styles.add_class}`}>
                  <img src={filteredArray[0].image} alt="hello" />
                </div>
              </div>
            </div>

            <div className={`card col-md-6 ${styles.card_1}`}>
              <div className={`${styles.details}`}>
                <h3 className={`col-md-6 ${styles.product_title}`}>
                  {filteredArray[0].title}
                </h3>
                <div className={`${styles.rating}`}>
                  <div className={`${styles.stars}`}>
                    {filteredArray[0].ratings}
                  </div>
                  <span>2 reviews</span>
                </div>
                <p className={`${styles.product_description}`}>
                  {filteredArray[0].description}
                </p>
                <h6 className={`${styles.price}`}>
                  current price: <span>${filteredArray[0].price}</span>
                </h6>

                <div className={`${styles.action}`}>
                  {cart.some((p) => p.id === filteredArray[0].id) ? (
                    <button
                      className={`btn btn-danger ${styles.add_to_cart}`}
                      variant="danger"
                      onClick={() =>
                        dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: filteredArray[0],
                        })
                      }
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className={`btn btn-success ${styles.add_to_cart}`}
                      onClick={() =>
                        dispatch({
                          type: 'ADD_TO_CART',
                          payload: filteredArray[0],
                        })
                      }
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.review}`}>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-md-12 d-flex justify-content-start py-4`}>
              <h5>Reviews</h5>
            </div>
          </div>

          <div className={`row`}>
            <div
              className={`col-md-12 bg-white py-3 px-5 mb-3 rounded-top ${styles.review_style}`}
            >
              <h6>Vikash Chauhan {filteredArray[0].ratings}</h6>
              <p>
              This app very nice and trusted app all the products and gadgets good sharp time delivery future many offers in this app future sales app
              </p>
            </div>

            <div
              className={`col-md-12 bg-white py-3 px-5 mb-3 rounded-top ${styles.review_style}`}
            >
              <h6>Reena Panday {filteredArray[0].ratings}</h6>
              <p>
              This app very nice and trusted app all the products and gadgets good sharp time delivery future many offers in this app future sales app
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
