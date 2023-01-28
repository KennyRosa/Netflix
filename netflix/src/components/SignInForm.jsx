import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./form-field.css";
import "./netflix.css";
import { Card, Col, Button, Row } from "react-bootstrap";
import logo from "../assets/images/netflix/logo.png";

const validationLogin = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .min(2, "Minimum 2 characters")
    .max(255, "Max 255 characters")
    .required("Required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .max(100, "Max 100 characters")
    .required("Required"),
});

function SignInForm() {
  const userLoginData = {
    email: "",
    password: "",
    tenantId: "U03SPNRSUPJ",
  };

  return (
    <div className="header-image">
      <nav>
        <img src={logo} className="netflix-logo" alt="" />
      </nav>
      <Card>
        <Card.Body>
          <Row className="form-center">
            <Col lg={9} md={8} sm={12}>
              <Formik
                enableReinitialize={true}
                initialValues={userLoginData}
                validationSchema={validationLogin}
              >
                <Form className="form-field-netflix">
                  <div className="mb-3">
                    <label htmlFor="email"></label>
                    <Field
                      type={"email"}
                      className="form-control"
                      name="email"
                      placeholder="Email"
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password"></label>
                    <Field
                      type={"password"}
                      className="form-control"
                      name="password"
                      placeholder="Password"
                    />
                    <ErrorMessage name="password" component="div" />
                  </div>
                  <Button
                    variant="primary"
                    className="sign-in-btn"
                    type="submit"
                  >
                    Sign in
                  </Button>
                </Form>
              </Formik>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignInForm;
