import React from 'react'
import { CartState } from '../../Store/MyContext'
import { Link } from 'react-router-dom'

import styles from '../../CSSFiles/Shopping/Card.module.css'
const Card = (props) => {
  const {
    state: { cart },
    dispatch,
  } = CartState()
  return (
    <>
      <div className={`card mb-5 ${styles.magnifier}`}>
        <div className="row g-0">
          <Link
            to={'/product/' + props.id}
            className={`d-flex justify-content-center pt-2`}
          >
            <div className="col-md-4 py-2">
              <img
                style={{ height: '100px' }}
                src={props.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </Link>
          <div className="col-md-12">
            <div className="card-body d-flex flex-column justify-content-center">
              <h5 className="card-title text-center">{props.title}</h5>
              <p className="card-text text-center">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p
                className={`card-text d-flex justify-content-center ${styles.ratings}`}
              >
                {props.ratings}
              </p>
              <p className="card-text text-center">${props.price}</p>
            </div>

            {cart.some((p) => p.id === props.id) ? (
              <div className={`mb-3`}>
                <button
                  className={`d-block m-auto px-4 py-2 bg-danger rounded`}
                  onClick={() =>
                    dispatch({
                      type: 'REMOVE_FROM_CART',
                      payload: props,
                    })
                  }
                >
                  Remove from Cart
                </button>
              </div>
            ) : (
              <div className={`mb-3`}>
                <button
                  className={`d-block m-auto px-4 py-2 bg-success rounded`}
                  onClick={() =>
                    dispatch({
                      type: 'ADD_TO_CART',
                      payload: props,
                    })
                  }
                >
                  Add to cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
