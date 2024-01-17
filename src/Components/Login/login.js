import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useReducer, useState } from "react";
import * as yup from "yup";
import axios from "axios";
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate()
  const defaultValue = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("please enter your email")
      .email("please enter  valid email"),
    password: yup.string().required("please enter your password").min("7"),
  });
  const handleSubmit = (values) => {
    console.log("values", values);

    axios
    .post("https://sangeeta.vdharasoftware.com/react-update.php",
    {...values},
    {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    }
         
      
       
      )
      .then(function (response) {
        // handle success
        console.log(response)
        
               

        

      })
      .catch(function (error) {
        // handle error
        console.log("API ERROR", error);
       
      })
      .finally(function () {
        // always executed
      });
  };
  const Forgot=()=>{
    navigate('/ForgotPassword')}
    const SignUp=()=>{
        navigate('/SignUp')}

  return (
    <div className="container">
      <Formik
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="col-md-12 mt-4">

            <Field
              type="text"
              name="email"
              placeholder="Enter your email"
              className="form-control"
            />
            <br />
            <p className="text-danger">
              <ErrorMessage name="email" />
            </p>
          </div>
          <div className="col-md-12 mt-4">
            <Field
              type="text"
              name="password"
              placeholder="Enter your password"
              className="form-control"
            />
            <br />
            <p className="text-danger">
              <ErrorMessage name="password" />
            </p>
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
         
          <button className="btn btn-primary" type="" onClick={()=>{SignUp()}}>
            SignUp
          </button>
      <button className="btn btn-primary" type=" submit" onClick={()=>{Forgot()}}>
            ForgotPassword
          </button>
          
        </Form>
      </Formik>
      
    </div>
  );
}

export default Login;
