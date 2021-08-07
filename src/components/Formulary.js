import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

export default function Formulary() {
  const validate = Yup.object({
    userName: Yup.string()
      .max(15, "Must be 15 characters or less.")
      .required("UserName is required."),
    email: Yup.string()
      .email("Email is invalid.")
      .required("Email is required."),
    textarea: Yup.string()
      .max(500, "Must be 500 characters or less.")
      .min(10, "Must be 10 characters or more.")
      .required("Text is required."),
  });

  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        textarea: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="form-detail">
          <Form>
            <TextField label="Username" name="userName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Query" name="textarea" type="textarea" />
            <button className="btn-submit" type="submit">
              SUBMIT A QUERY
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
