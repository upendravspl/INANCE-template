import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import { useState } from "react";
import Swal from "react-sweetalert2";

const UpdateSection = () => {
  const [message, setMessage] = useState("");
  /* const [status, setStatus] = useState(false)*/
  const formData = JSON.parse(localStorage.getItem("editableItem"));
  const defaultValue = formData;
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
      .post(
        "https://sangeeta.vdharasoftware.com/react-update.php",
        { ...values },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log("API ERROR", error);
      })
      .finally(function () {
        // always executed
      });
  };
  const handleUpdate = () => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
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
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleUpdate}
            >
              submit
            </button>
            <div>{message}</div>
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default UpdateSection;
