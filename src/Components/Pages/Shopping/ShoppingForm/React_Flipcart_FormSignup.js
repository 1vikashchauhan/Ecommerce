import React, { useState } from "react";



import validateInfo from "./React_flipCart_validate";


const FormSignup = ({  setToggleState }) => {
 
  
  const [values, setValues] = useState({
    username: '',
    username1:'',
    username2:'',
    username3:'',
    username4:'',
    number1:'',
    number2:'',
  });

  const [errors, setErrors] = useState({
    username: '',
    username1:'',
    username2:'',
    username3:'',
    username4:'',
    number1:'',
    number2:'',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateInfo(values);
    if(Object.keys(error).length){
      
      setErrors(error);
    }
    else{
      setToggleState(3)
    }
  }

  return (
    <div className="ps-5">
      <h1>Shipping Details</h1>
      <hr className={`text-sm`}/>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p className={`text-danger mb-0`}>{errors.username}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="username1"
            value={values.username1}
            onChange={handleChange}
          />
          {errors.username1 && <p className={`text-danger mb-0`}>{errors.username1}</p>}
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
            name="username2"
            value={values.username2}
            onChange={handleChange}
          />
          {errors.username2 && <p className={`text-danger mb-0`}>{errors.username2}</p>}
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
            name="username3"
            value={values.username3}
            onChange={handleChange}
          />
          {errors.username3 && <p className={`text-danger mb-0`}>{errors.username3}</p>}
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
          <input
            type="text"
            className="form-control"
            id="inputCity"
            name="username4"
            value={values.username4}
            onChange={handleChange}
          />
          {errors.username4 && <p className={`text-danger mb-0`}>{errors.username4}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            name="number1"
            value={values.number1}
            onChange={handleChange}
          />
          {errors.number1 && <p className={`text-danger mb-0`}>{errors.number1}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            className="form-control"
            id="mobile"
            name="number2"
            value={values.number2}
            onChange={handleChange}
          />
          {errors.number2 && <p className={`text-danger mb-0`}>{errors.number2}</p>}
        </div>
        
        <div className="col-6">
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
       
        <div className="col-6">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              <h5>Next day Delievery</h5>
              <p>24 hours from checkout</p>
            </label>
          </div>
        </div>

        <div className={`d-flex justify-content-start mb-3`}>
        <div className="me-3">
          <button
            type="submit"
            className="btn btn-primary btn-success px-5 py-2 me-3"
          >
            Submit
          </button>
        </div>
        <div className={`d-inline-block`}>
            <button type="submit" className="btn btn-secondary px-5 py-2"
            onClick={() => {setToggleState(1)}}
            >
                Back
            </button>
      </div>
      </div>
      </form>

      
    </div>
  );
};

export default FormSignup;