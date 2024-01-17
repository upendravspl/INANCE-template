import ReactDOM from "react-dom/client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useReducer, useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { useParams } from "react-router-dom";
import Update from "./Update";

const ContactUsForm = () => {

  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(false)
 
  const defaultValue = {
    name: "",
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("please enter your name"),
    email: yup
      .string()
      .required("please enter your email")
      .email("please enter  valid email"),
    password: yup.string().required("please enter your password").min("7"),
  });
  const handleSubmit = (values) => {
    console.log("values", values);

    axios
      .get("https://sangeeta.vdharasoftware.com/react-form.php",{
         params: values
      }
       
      )
      .then(function (response) {
        // handle success
        console.log(response);
        const {data} = response;
        setMessage(data.message)
        setStatus(data.status)
        

      })
      .catch(function (error) {
        // handle error
        console.log("API ERROR", error);
        setMessage(error.message)
      })
      .finally(function () {
        // always executed
      });
  };
  return (
    <>
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
                name="name"
                placeholder="Enter your name"
                className="form-control"
              />
              <br />
              <p className="text-danger">
                <ErrorMessage name="name" />
               
              </p>
            </div>
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
              submit
            </button>
            <div className={"text-"+(status?'success':'danger')}>{message}</div>
          
              </Form>
        </Formik>
      </div>
    </>
  );
};
export default ContactUsForm;
