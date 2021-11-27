import React from 'react'
import { useState } from 'react'

import styles from '../../../CSSFiles/Shopping/ShoppingTabs.module.css'
import Payment from './PaymentOptions/React_Flipcart_Payment'
import ShoppingCart from './React_FlipCart_ShoppingCart'
import ShoppingDetails from './React_Flipcart_Details'

function Tabs() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <>
      <section className={`${styles.tab_section}`}>
        <div className={`container ${styles.container_1}`}>
          <div className="row">
            <div className={`col-md-4 ${styles.shop_column}`}>
              <button
                className={`tabs ${
                  toggleState === 1
                    ? `w-100 py-2 px-4 ${styles.shop_button}  ${styles.active}`
                    : `w-100 ${styles.shop_button}`
                }`}
                onClick={() => toggleTab(1)}
              >
                Shopping Cart
              </button>
            </div>

            {toggleState === 1 ? (
              <div className={`col-md-4 ${styles.shop_column}`}>
                <button
                  className={`tabs ${
                    toggleState === 2
                      ? `w-100 py-2 px-4 ${styles.shop_button}`
                      : `w-100 py-2 px-4 ${styles.shop_button}`
                  }`}
                  
                  disabled
                >
                  Shopping Details
                </button>
              </div>
            ) : (
              <div className={`col-md-4 ${styles.shop_column}`}>
                <button
                  className={`tabs ${
                    toggleState === 2
                      ? `w-100 py-2 px-4 ${styles.shop_button.active} ${styles.active}`
                      : `w-100 py-2 px-4 ${styles.shop_button}`
                  }`}
                  onClick={() => toggleTab(2)}
                >
                  Shopping Details
                </button>
              </div>
            )}

            {toggleState === 2 || toggleState === 1 ? (
              <div className={`col-md-4 ${styles.shop_column}`}>
                <button
                  className={`tabs ${
                    toggleState === 3
                      ? `w-100 py-2 px-4 ${styles.shop_button}`
                      : `w-100 py-2 px-4 ${styles.shop_button}`
                  }`}
                 
                  disabled
                >
                  Payment Options
                </button>
              </div>
            ) : (
              <div className={`col-md-4 ${styles.shop_column}`}>
                <button
                  className={`tabs ${
                    toggleState === 2
                      ? `w-100 py-2 px-4 ${styles.shop_button}`
                      : `w-100 py-2 px-4 ${styles.shop_button}`
                  }`}
                  onClick={() => toggleTab(3)}
                >
                  Payment Options
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className={`${styles.content_tabs}`}>
        {toggleState === 1 && (
          <div>
            <ShoppingCart setToggleState={setToggleState} />
          </div>
        )}
        {toggleState === 2 && (
          <div>
            <ShoppingDetails setToggleState={setToggleState} />
          </div>
        )}

        {toggleState === 3 && (
          <div>
            <Payment setToggleState={setToggleState} />
          </div>
        )}
      </div>
    </>
  )
}

export default Tabs
