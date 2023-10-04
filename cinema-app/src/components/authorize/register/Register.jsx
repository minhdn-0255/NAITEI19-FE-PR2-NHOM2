import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { register } from "../../../redux/slices/auth";
import { clearMessage } from "../../../redux/slices/message";
import "./Register.scss"
const Register = () => {
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    passwordAgain: "",
    phonenumber: "",
  };
  const handleRegister = (formValue) => {
    const { username, email, password, phonenumber } = formValue;
    setSuccessful(false);
    dispatch(register({ username, email, password, phonenumber }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };
  return (
    <div className="col-md-12 signup-form">
      <div className="card card-container">
      <div className="card-body">
        <div className="login_label">
          <h3>Đăng ký</h3>
        </div>
        <Formik initialValues={initialValues} onSubmit={handleRegister}>
          <Form>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Tài khoản</label>
                  <Field name="username" type="text" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Mật khẩu</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Nhập lại mật khẩu</label>
                  <Field
                    name="passwordAgain"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="passwordAgain"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="phone">
                  <label htmlFor="phonenumber">
                    Số điện thoại
                  </label>
                  <Field
                    name="phonenumber"
                    type="phonenumber"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="phonenumber"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn  btn-block">
                   Đăng ký 
                  </button>
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>
      <div className="login-image">
        <img src="https://media.lottecinemavn.com/Media/WebAdmin/c07918028d7e45c7b50df72dc7531f9a.jpg" alt="" />
      </div>
      {message && (
        <div className="form-group">
          <div
            className={
              successful ? "alert alert-success" : "alert alert-danger"
            }
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};
export default Register;

