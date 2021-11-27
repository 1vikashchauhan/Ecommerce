export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username  is required';
    }
    else if(!/^[a-z ,.'-]+$/i.test(values.username)){
        errors.username="please correct the given Name";

    }
    if (!values.username1.trim()) {
        errors.username1 = 'Username  is required';
      }
      else if(!/^[a-z ,.'-]+$/i.test(values.username1)){
          errors.username1="please correct the last Name";
  
      }
     
   
      if (!values.username2.trim()) {
        errors.username2 = 'Address  is required';
      }

    
      if (!values.username3.trim()) {
        errors.username3 = 'Address 2 is required';
      }
      
      if (!values.username4.trim()) {
        errors.username4 = 'city is required';
      }
      else if (values.username4.length > 10){
          errors.username4="maximum 10 character is required"
      }
      
     
  
    
    if (!values.number1) {
      errors.number1 = 'ZipCode is required';
    } else if (values.number1.length > 6) {
      errors.number1 = 'Zipcode needs to be maximum 6 characters ';
    }
  
    if (!values.number2) {
      errors.number2 = 'mobile no is required';
    }
    else if (!/^[6-9]\d{9}$/i.test(values.number2)){
      errors.number2="mobile no is wrong";
    }
    
    
    return errors;
  }