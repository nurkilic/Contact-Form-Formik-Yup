import * as yup from "yup";

import React from "react";

export const RegisterFormSchemas = yup.object().shape({
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Mail Formatında Giriniz")
    .required("This field is required"),
  queryType: yup.string().required("This field is required"),
  message: yup.string().required("This field is required"),
  
  term: yup
    .boolean()
    .oneOf([true], "To submit this form , please consent to being contacted")
    .required("This field is required"),

});
