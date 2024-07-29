import React, { useState } from "react";
import { useFormik } from "formik";
import { RegisterFormSchemas } from "../schemas/RegisterFormSchemas";


function Form2() {
  const [checkButton, SetCheckButton] = useState([false, false]);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      term: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: RegisterFormSchemas,
  });

  const combinedChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "queryTypeGeneral") {
      SetCheckButton([true, false]);
    }
    if (e.target.id === "queryTypeSupport") {
      SetCheckButton([false, true]);
    }

    formik.handleChange(e); // İkinci fonksiyonu çağırın
  };

  return (
    <form action="" onSubmit={formik.handleSubmit}>
      <div className="bg-white w-[600px] h-[600px] max-sm:h-auto max-sm:w-auto rounded-lg m-6">
        <div className="p-10">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <div className="flex gap-x-2 mt-4 w-full max-sm:flex-wrap">
            <div className="w-full">
              <label htmlFor="firstName">First Name *</label>
              <input
                className=" w-full"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                id="firstName"
                name="firstName"
              />
              <p>{formik.touched.firstName && formik.errors.firstName}</p>
            </div>

            <div className="w-full">
              <label htmlFor="lastName">Last Name *</label>
              <input
                className="w-full"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                id="lastName"
                name="lastName"
              />
              <p>{formik.touched.lastName && formik.errors.lastName}</p>
            </div>
          </div>

          <div className=" w-full flex flex-col justify-center my-3">
            <label htmlFor="email">Email Address *</label>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              id="email"
              name="email"
            />
            <p>{formik.touched.email && formik.errors.email}</p>
          </div>

          <div className=" w-full flex flex-col mt-4">
            <label htmlFor="queryType">Query Type *</label>
            <div className="flex justify-center gap-x-2 w-full  max-sm:flex-wrap max-sm:gap-y-3">
              <div
                className={` changeColor bg-gray-div flex justify-start items-center  bg-gre radio-group ${
                  checkButton[0] && "bg-[var(--Green200-l)]"
                }`}
              >
                <label>
                  <input
                    className="h-3 w-3 mx-3 bg-white checked:vcaret-pink-200 checked:to-orange-600 checked: checked:from-emerald-300
                    "
                    name="queryType"
                    id="queryTypeGeneral"
                    type="radio"
                    onChange={combinedChangeHandler}
                    value="checkButton1"
                    checked={checkButton[0]}
                  />

                  <span>General Enquiry</span>
                </label>
              </div>

              <div
                className={`changeColor bg-gray-div flex justify-start items-center radio-group  ${
                  checkButton[1] && "bg-[var(--Green200-l)]"
                }`}
              >
                <label>
                  <input
                    className="h-3 w-3 mx-3 "
                    name="queryType"
                    id="queryTypeSupport"
                    type="radio"
                    onChange={combinedChangeHandler}
                    value="checkButton2"
                    checked={checkButton[1]}
                  />
                  <span>Support Request</span>
                </label>
              </div>
            </div>
            <p>{formik.touched.queryType && formik.errors.queryType}</p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message">Message *</label>
            <textarea
              className="text-base h-32 p-2"
              onChange={formik.handleChange}
              value={formik.values.message}
              id="message"
              name="message"
            />
            <p>{formik.touched.message && formik.errors.message}</p>
          </div>

          <div className="mt-6">
            <input
              type="checkbox"
              className="h-3 w-3 mr-3"
              onChange={formik.handleChange}
              checked={formik.values.term}
              id="term"
              name="term"
            />
            <label htmlFor="term" className="term">
              I consent to being contacted by the team
            </label>
            <p>{formik.touched.term && formik.errors.term}</p>
          </div>

          <button type="submit" className="btn-green-form">
            Submit
          </button>
        </div>
      </div>
      <div className="flex items-center me-4"></div>
    </form>
  );
}

export default Form2;
