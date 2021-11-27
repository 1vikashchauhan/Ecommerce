import React, { useState } from 'react'

import styles from '../../../../CSSFiles/Payment/Payment.module.css'
import ShoppingSummary from '../React_FlipCart_ShoppingSummary'
import PaymentInfo from './PaymentInfo'
import { useHistory } from 'react-router'

const Payment = ({ setToggleState }) => {
  const history = useHistory()

  const [values, setValues] = useState({
    cardno: '',
    dateyear: '',
    cvv: '',
    cardholder: '',
  })

  const [errors, setErrors] = useState({
    cardno: '',
    dateyear: '',
    cvv: '',
    cardholder: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const error = PaymentInfo(values)
    if (Object.keys(error).length) {
      setErrors(error)
    } else {
      history.push('/continue_shopping')
    }
  }

  return (
    <>
      <section className={`py-3 ${styles.payment_wrapper}`}>
        <div className="container">
          <div className={`row`}>
            <div className={`col-md-8`}>
              <div className={`card`}>
                <div className={`card-body`}>
                  <div className={`row mb-2`}>
                    <div className={`col-1 text-center m-auto`}>
                      <input type="radio" id="card" name="credit_card" />
                    </div>
                    <div className={`col-11 ps-0`}>
                      <h4>Credit Card</h4>
                    </div>
                  </div>

                  <form>
                    <div className={`row`}>
                      <div className="col-md-12 mb-3">
                        <input
                          type="tel"
                          name="cardno"
                          placeholder="Card Number"
                          className={`w-100 py-1 px-3`}
                          value={values.cardno}
                          onChange={handleChange}
                        />
                        {errors.cardno && (
                          <p className={`text-danger mb-0`}>{errors.cardno}</p>
                        )}
                      </div>
                    </div>

                    <div className={`row mb-3`}>
                      <div className="col-6">
                        <input
                          type="tel"
                          name="dateyear"
                          placeholder="MM/YY"
                          value={values.dateyear}
                          maxLength="5"
                          className={`w-100 py-1 px-3`}
                          onChange={handleChange}
                        />
                        {errors.dateyear && (
                          <p className={`text-danger mb-0`}>
                            {errors.dateyear}
                          </p>
                        )}
                      </div>

                      <div className="col-6">
                        <input
                          type="tel"
                          name="cvv"
                          placeholder="CVV"
                          maxLength="3"
                          value={values.cvv}
                          className={`w-100 py-1 px-3`}
                          onChange={handleChange}
                        />
                        {errors.cardholder && (
                          <p className={`text-danger mb-0`}>
                            {errors.cardholder}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className={`row`}>
                      <div className="col-md-12">
                        <input
                          type="tel"
                          name="cardholder"
                          value={values.cardholder}
                          placeholder="Card Holder Name"
                          className={`w-100 py-1 px-3`}
                          onChange={handleChange}
                        />
                        {errors.cardno && (
                          <p className={`text-danger mb-0`}>{errors.cardno}</p>
                        )}
                      </div>
                    </div>

                    <div className={`pt-3`}>
                      <button
                        className={`btn btn-success px-5 py-2 me-3`}
                        type="submit"
                        onClick={handleSubmit}
                      >
                        PayNow
                      </button>
                      <button
                        className={`btn btn-secondary px-5 py-2`}
                        onClick={() => setToggleState(2)}
                      >
                        Back
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className={`col-md-4`}>
              <ShoppingSummary />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Payment
