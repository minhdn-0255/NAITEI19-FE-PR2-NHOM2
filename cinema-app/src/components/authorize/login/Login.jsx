import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { login } from "../../../redux/slices/auth";
import { clearMessage } from "../../../redux/slices/message";
import "./Login.scss";
const Login = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const initialValues = {
    email: "",
    password: "",
  };
  const handleLogin = (formValue) => {
    const { email, password } = formValue;
    setLoading(true);
    dispatch(login({ email, password }))
      .unwrap()
      .then((data) => {
        // navigate("/profile");
        console.log("324234", data);
        if (+data?.EC === 200) {
          if (data?.role === 1) {
            navigate("/admin/user");
          } else {
            navigate("/");
          }
        }
        //window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if (isLoggedIn) {
    //get user role
    let userRole = JSON.parse(localStorage.getItem("user")).role;
    if (userRole === 1) {
      return <Navigate to="/admin/user" />;
    }
    return <Navigate to="/" />;
  }
  return (
    <div className="col-md-12 login-form">
      <div className="card card-container">
        <div className="card-body">
          <div className="login_label">
            <h3>Đăng nhập & tạo tài khoản</h3>
          </div>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="text" className="form-control" />
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
                <button
                  type="submit"
                  className="btn  btn-block"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Đăng nhập</span>
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="login-image">
          <img
            className="image"
            src="https://media.lottecinemavn.com/Media/WebAdmin/c07918028d7e45c7b50df72dc7531f9a.jpg"
            alt=""
          />
        </div>
        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
