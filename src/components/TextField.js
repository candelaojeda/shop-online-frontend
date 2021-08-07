import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={field.name} className="label">
        {label}
      </label>
      <input
        className={`input ${meta.touched && meta.error && "invalid"}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
