'use client'
import { Field, ErrorMessage } from "formik";
import React from "react";
import Textred from "./Textred";
const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-black text-2xl font-semibold">
        {label}:
      </label>
      <Field
        name={name}
        as="select"
        id={name}
        {...rest}
        className="text-black border-black border-x-2 border-y-2 p-2 text-lg"
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={Textred} />
    </div>
  );
};

export default Select;
