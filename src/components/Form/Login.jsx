"use client";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import FormikControl from "./components/FormikControl";
const Appointment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const patientTypeOptions = ["A child", "Myself", "Another Adults"];
  const patientMedicalQ1Options = ["Yes", "No"];
  const patientMedicalQ2Options = [
    "How my child's speech sounds",
    "How my child's speech sounds",
    "How my child's speech sounds",
    "How my child's speech sounds",
    "How my child's speech sounds",
    "How my child's speech sounds",
    "other",
  ];
  const AgeOptions = [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 40, 41, 42, 43, 44, 45,
    46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
  ];
  const initialValues = {
    patientType: "",
    patientAge: "",
    patientMedicalQ1: "",
    patientMedicalQ2: "",
    patientMedicalQ3: "",
    patientMedicalQ4: "",
  };
  const validationSchemaStep1 = Yup.object({
    patientType: Yup.string().required("Required"),
  });

  const validationSchemaStep2 = Yup.object({
    patientAge: Yup.string().required("Required"),
  });

  const validationSchemaStep3 = Yup.object({
    patientMedicalQ1: Yup.string().required("Required"),
  });

  const validationSchemaStep4 = Yup.object({
    patientMedicalQ2: Yup.array().required("Required"),
  });

  const validationSchemaStep5 = Yup.object({
    patientMedicalQ3: Yup.string().required("Required"),
  });

  const validationSchemaStep6 = Yup.object({
    patientMedicalQ4: Yup.array().required("Required"),
  });

  const validationSchemas = [
    validationSchemaStep1,
    validationSchemaStep2,
    validationSchemaStep3,
    validationSchemaStep4,
    validationSchemaStep5,
    validationSchemaStep6,
  ];

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const nextStep = (values, formik) => {
    validationSchemas[currentStep - 1]
      .validate(values)
      .then(() => {
        setCurrentStep(currentStep + 1);
      })
      .catch((errors) => {
        formik.setErrors(errors);
      });
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemas[currentStep - 1]}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form className="flex flex-col text-black h-auto p-10 my-5 mx-[20%] border-2">
              {currentStep === 1 && (
                <>
                  <div className="my-4">
                    <FormikControl
                      control="radio"
                      label="Who needs speech therapy?"
                      name="patientType"
                      options={patientTypeOptions}
                    />
                  </div>
                  <button
                    className="bg-black p-2 mb-5 w-32 text-white rounded px-4"
                    type="submit"
                    onClick={()=>nextStep(formik.values,formik)}
                  >
                    Next
                  </button>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <div className="my-4">
                    <FormikControl
                      control="select"
                      label="Your child age in years"
                      name="patientAge"
                      options={AgeOptions}
                    />
                  </div>
                  <button
                    className="bg-black p-2 mb-5 w-32 text-white rounded px-4"
                    type="submit"
                    onClick={prevStep}
                  >
                    Previous
                  </button>
                  <button
                    className="bg-black p-2 mb-5 w-32 text-white rounded px-4"
                    type="submit"
                    onClick={()=>nextStep(formik.values,formik)}
                  >
                    Next
                  </button>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <div className="my-4">
                    <FormikControl
                      control="radio"
                      label="Is there a medical diagnosis that has affected their communication abilities?"
                      name="patientMedicalQ1"
                      options={patientMedicalQ1Options}
                    />
                  </div>
                  <button
                    className="bg-black p-2 mb-5 w-32 text-white rounded px-4"
                    type="submit"
                    onClick={prevStep}
                  >
                    Previous
                  </button>
                  <button
                    className="bg-black p-2 mb-5 w-32 text-white rounded px-4"
                    type="submit"
                    onClick={()=>nextStep(formik.values,formik)}
                  >
                    Next
                  </button>
                </>
              )}
              {currentStep === 4 && (
                <>
                  <div className="my-4">
                    <FormikControl
                      control="checkbox"
                      label="What are your concerns regarding your child? Check all that apply."
                      name="patientMedicalQ2"
                      options={patientMedicalQ2Options}
                    />
                  </div>
                  <button
                    className="bg-black p-2 mb-5 w-32 text-white rounded px-4"
                    type="submit"
                    onClick={prevStep}
                  >
                    Previous
                  </button>
                  <button
                    className="bg-black p-2 mb-5 w-32 text-white rounded px-4"
                    type="submit"
                    onClick={()=>nextStep(formik.values,formik)}
                  >
                    Next
                  </button>
                </>
              )}
              {currentStep === 5 && (
                <>
                  <div className="my-4">
                    <FormikControl
                      control="radio"
                      label="Has your child had speech therapy before?"
                      name="patientMedicalQ3"
                      options={patientMedicalQ1Options}
                    />
                  </div>
                  <button
                    className="bg-black p-2 mb-5 w-32 text-white rounded px-4"
                    type="submit"
                    onClick={prevStep}
                  >
                    Previous
                  </button>
                  <button
                    className="bg-black p-2 mb-5 w-32 text-white rounded px-4"
                    type="submit"
                    onClick={()=>nextStep(formik.values,formik)}
                  >
                    Next
                  </button>
                </>
              )}
              {currentStep === 6 && (
                <>
                  <div className="my-4">
                    <FormikControl
                      control="checkbox"
                      label="Which are applicable for your child? Check all that apply"
                      name="patientMedicalQ4"
                      options={patientMedicalQ2Options}
                    />
                  </div>
                  <button
                    className="bg-black p-2 mb-5 w-32 text-white rounded px-4"
                    type="submit"
                    onClick={prevStep}
                  >
                    Previous
                  </button>
                  <button
                    className="bg-black p-2 mb-5 w-32 text-white rounded px-4"
                    type="submit"
                  >
                    Submit
                  </button>
                </>
              )}
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Appointment;
