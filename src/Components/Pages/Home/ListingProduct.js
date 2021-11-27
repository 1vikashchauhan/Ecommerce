import React from 'react'
import Card from '../../Shared Resources/React_Flipcart_Card'

import { CartState } from '../../../Store/MyContext'

const ListingProduct = (props) => {
  const {
    state: { state },
  } = CartState()

  return (
    <>
      <section className="container">
        <div className="wrapper py-4 d-flex flex-column align-items-center">
          <h1>Product Listing</h1>
          <p>Best product in the market</p>
        </div>
        <div>
          <div className="row">
            {state.map((prod) => {
              return (
                <div className="col-md-4 col-xs-12">
                  <Card {...prod} key={prod.id} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default ListingProduct
