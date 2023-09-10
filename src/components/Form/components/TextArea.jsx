'use client'
import React from 'react'
import { Field,ErrorMessage } from 'formik';
import Textred from './Textred';
const TextArea = (props) => {
    const {name,label,...rest} = props;
  return (
    <div className='flex flex-col'>
        <label htmlFor={name} className="text-black text-2xl font-semibold">{label}:</label>
        <Field name={name} as='textarea' id={name} {...rest} className="text-black border-black border-x-2 border-y-2 p-2 text-lg"/>
        <ErrorMessage name={name} component={Textred} />
    </div>
  )
}

export default TextArea;