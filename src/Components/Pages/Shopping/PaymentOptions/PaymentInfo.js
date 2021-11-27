export default function PaymentInfo(values) {
  let errors = {}
  if (values.cardno.trim().length === 0) {
    errors.cardno = 'Card Number is required'
  } else if (values.cardno.length > 16) {
    errors.cardno = 'Card  must be 16 digits'
  } else if (values.cardno.length < 16) {
    errors.cardno = 'Card Number must be 16 digits'
  } else if (!/^\d+$/.test(values.cardno)) {
    errors.cardno = 'Card Number must be number'
  }

  if (!values.dateyear.trim().length) {
    errors.dateyear = 'pls enter date'
  } else if (
    !/^\d+$/.test(values.dateyear.slice(0, 2)) ||
    values.dateyear.slice(0, 2) > 12
  ) {
    errors.dateyear = 'month is not valid'
  } else if (values.dateyear[2] !== '/') {
    errors.dateyear = 'format is not valid'
  } else if (
    !/^\d+$/.test(values.dateyear.slice(3, 5)) ||
    values.dateyear.slice(3, 5) < 21
  ) {
    errors.dateyear = 'year is not valid'
  }

  if (!values.cvv.trim().length === 0) {
    errors.cvv = 'Username  is required'
  } else if (values.cvv.length < 3) {
    errors.cvv = 'provide 3 digit cvc number'
  }

  if (!values.cardholder.trim().length === 0) {
    errors.cardholder = 'Username  is required'
  } else if (!/^[a-z ,.'-]+$/i.test(values.cardholder)) {
    errors.cardholder = 'please correct the given Name'
  }

  return errors
}
