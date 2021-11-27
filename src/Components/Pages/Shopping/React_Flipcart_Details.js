import React from 'react'

import Form from './ShoppingForm/React_Flipcart_Form'
import ShoppingSummary from './React_FlipCart_ShoppingSummary'
import styles from '../../../CSSFiles/Home/React_Flipcart_Detail.module.css'

const ShoppingDetails = ({ setToggleState }) => {
  return (
    <section className={`${styles.color}`}>
      <div className="details-wrapper container pt-5">
        <div className="row">
          <div className="col-lg-8">
            <Form setToggleState={setToggleState} />
          </div>

          <div className="col-lg-4">
            <ShoppingSummary />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShoppingDetails
