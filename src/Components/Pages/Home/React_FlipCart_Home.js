import React, { useState } from 'react'
import { debounce } from 'lodash'

import styles from '../../../CSSFiles/Home/Home.module.css'

import Card from '../../Shared Resources/React_Flipcart_Card'
import { CartState } from '../../../Store/MyContext'

const getfiltereditems = (query, state) => {
  if (!query) {
    return state
  }
  return state.filter((e) => e.title.includes(query))
}

const Home = () => {
  const {
    state: { state },
  } = CartState()
  const [query, setquery] = useState('')
  const filteredItems = getfiltereditems(query, state)

  var debouncedOnChange = debounce(function (value) {
    setquery(value)
  }, 1000)

  return (
    <div className={styles.main_wrapper}>
      <section className={`${styles.section}`}>
        <form className="d-flex w-50 py-5 mx-auto ">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              debouncedOnChange(e.target.value)
            }}
          />
        </form>
      </section>

      <section className="container">
        <div className="wrapper py-4 d-flex flex-column align-items-center">
          <h1>Product Listing</h1>
          <p>The best site where you find everything</p>
        </div>
        <div>
          <div className="row">
            {filteredItems.map((prod) => {
              return (
                <div className="col-md-4 col-xs-12">
                  <Card {...prod} key={prod.id} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
