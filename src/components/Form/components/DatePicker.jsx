'use client'
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from "formik";
import Textred from "./Textred";
const Datepicker = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-black text-2xl font-semibold">
        {label}:
      </label>
      <Field
        name={name}
        className="text-black border-black border-x-2 border-y-2 p-2 text-lg"
      >
        {(props) => {
          const { field, form } = props;
          const { setFieldValue } = form;
          const { value } = field;
          {/* console.log(value); */}
          return (
            <DatePicker
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
              className="text-black border-black border-x-2 border-y-2 p-2 text-lg"
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={Textred} />
    </div>
  );
};

export default Datepicker;
