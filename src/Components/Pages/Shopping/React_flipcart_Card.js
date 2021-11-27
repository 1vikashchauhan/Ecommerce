import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { CartState } from '../../../Store/MyContext'

const SCard = (props) => {
  const {
    state: { cart },
    dispatch,
  } = CartState()

  const product = props.prod
  const handleClickPlus = (e) => {
    dispatch({
      type: 'INCREMENT_ITEM',
      payload: product,
    })
  }

  const handleClickMinus = () => {
    dispatch({
      type: 'DECREMENT_ITEM',
      payload: product,
    })
  }
  return (
    <>
      <div className={`row`}></div>
      <div className={`row`}>
        <div className={`col-md-4 m-auto`}>
          <img
            src={product.image}
            alt="..."
            className={`img-fluid w-100 m-auto`}
          />
        </div>
        <div
          className={`col-md-8 mb-3 px-4 py-2 rounded`}
          style={{ backgroundColor: 'rgb(234,237,237)' }}
        >
          <div className={`row`}>
            <div className={`col-8`}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
            <div
              className={`col-4 d-flex justify-content-center align-items-center`}
            >
              <div>
                <AiOutlinePlus onClick={(e) => handleClickPlus(e)} />
                <div>
                  <h2>{product?.quantity}</h2>
                </div>
                <AiOutlineMinus onClick={handleClickMinus} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SCard
