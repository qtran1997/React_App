import validator from "validator";
import isEmpty from "../util/isEmpty";

const validateRegisterInput = data => {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.fname = !isEmpty(data.fname) ? data.fname : "";
  data.lname = !isEmpty(data.lname) ? data.lname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!validator.isLength(data.username, { min: 5, max: 18 })) {
    errors.username = "Username must be between 5 and 18 characters.";
  }

  if (!validator.isLength(data.fname, { min: 2, max: 30 })) {
    errors.fname = "First Name must be between 2 and 30 characters.";
  }

  if (!validator.isLength(data.lname, { min: 2, max: 30 })) {
    errors.lname = "Last Name must be between 2 and 30 characters.";
  }

  if (validator.isEmpty(data.username)) {
    errors.username = `Username field is required.`;
  }

  if (validator.isEmpty(data.fname)) {
    errors.fname = `First Name field is required.`;
  }

  if (validator.isEmpty(data.lname)) {
    errors.lname = `Last Name field is required.`;
  }

  if (validator.isEmpty(data.email)) {
    errors.email = `Email field is required.`;
  }

  if (!validator.isEmail(data.email)) {
    errors.email = `Email is invalid.`;
  }

  if (validator.isEmpty(data.password)) {
    errors.password = `Password field is required.`;
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = `Confirm Password field is required.`;
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = `Passwords must match.`;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateRegisterInput;
