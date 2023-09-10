'use client'
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
const FormikContainer = () => {
  const Options=[
    {key:'Select an option',value:''},
    {key:'Love',value:'Love'},
    {key:'FriendShip',value:'FriendShip'},
    {key:'Life',value:'Life'}

  ];
  const radioOptions=[
    {key:'1',value:'A child'},
    {key:'2',value:'Myself'},
    {key:'3',value:'Another Adults'}
  ];
  const checkboxOptions=[
    {key:'1',value:'Love'},
    {key:'2',value:'Life'},
    {key:'3',value:'Lora'}
  ]
  const initialValues = {
    email: "",
    textarea:'',
    selectOption:'',
    radioButtons:'',
    checkBoxes:[],
    birhtDate:null
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid pattern").required("Required"),
    textarea:Yup.string().required("Required"),
    selectOption:Yup.string().required("Required"),
    radioButtons:Yup.string().required("Required"),
    checkBoxes: Yup.array().required('Required'),
    birhtDate:Yup.date().required('Required').nullable()
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  //   console.log("jdcb")
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="flex flex-col h-auto p-10  my-5 mx-[20%] border-2">
              <div className="my-4">
              <FormikControl
                control="input"
                label="Email"
                name="email"
                type="email"
              />
              </div>
              <div className="my-4">
              <FormikControl
                control="textarea"
                label="Description"
                name="textarea"
              />
              </div>
              <div className="my-4">
              <FormikControl
                control="select"
                label="Select a topic"
                name="selectOption"
                options={Options}
              />
              </div>
              <div className="my-4">
              <FormikControl
                control="radio"
                label="Select Your Choice"
                name="radioButtons"
                options={radioOptions}
              />
              </div>
              <div className="my-4">
              <FormikControl
                control="checkbox"
                label="Select Your Choice"
                name="checkBoxes"
                options={checkboxOptions}
              />
              </div>
              <div className="my-4">
              <FormikControl
                control="date"
                label="Select date"
                name="birhtDate"
              />
              </div>
              <button className="bg-black p-2 mb-5 w-32 text-white rounded px-4" type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormikContainer;
