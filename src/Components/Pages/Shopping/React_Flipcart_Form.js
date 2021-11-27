import React from 'react'

const Shoppingform = () => {
  return (
    <div className="ps-5">
      <h1>Shipping Details</h1>
      <hr />
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" id="lastname" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected active>
              Uttar Pradesh
            </option>
            <option selected>Haryana</option>
            <option selected>Punjab</option>
            <option selected>Delhi</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-md-6">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <input type="number" className="form-control" id="mobile" />
        </div>
        <hr />
        <div className="col-md-5 border border-dark">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              <h5>Free Shipping</h5>
              <p>Between 2-5 Working Days</p>
            </label>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-5 border border-dark">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              <h5>Next day Delievery</h5>
              <p>12 hours from checkout</p>
            </label>
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}

export default Shoppingform
