import * as Yup from "yup"

// regex for real phone number
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({
  // Validate name
  name: Yup.string()
    .min(2, "This name is too short.")
    .max(50, "This name is too long.")
    .required("A name is required."),
  // Validate email address
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("An email address is required."),
  // Validate phone number
  phone: Yup.string()
    .matches(phoneRegExp, "Please enter a valid phone number.")
    .min(10, "This phone number is too short.")
    .max(50, "This phone number is too long.")
    .required("Please enter a phone number."),
  // Validate message
  message: Yup.string().required("Please enter a message."),
})

export default validationSchema
