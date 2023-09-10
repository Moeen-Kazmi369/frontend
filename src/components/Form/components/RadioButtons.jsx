'use client'
import { Field, ErrorMessage } from "formik";
import React from "react";
import Textred from "./Textred";
const RadioButtons = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-black text-2xl font-semibold">
        {label}:
      </label>
      <Field
        name={name}
        id={name}
        {...rest}
        className="text-black border-black border-x-2 border-y-2 p-2 text-lg"
      >
        {(props) => {
            const{field,...rest}=props;
        return  options.map((option) => {
            return (
              <React.Fragment key={option}>
              <div>
                <input
                  type='radio'
                  id={option}
                  {...field}
                  value={option}
                  checked={(field.value) === (option)}
                  className="mx-2"
                />
                <label htmlFor={option} className="font-semibold">
                  {option}
                </label>
                </div>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={Textred} />
    </div>
  );
};

export default RadioButtons;
