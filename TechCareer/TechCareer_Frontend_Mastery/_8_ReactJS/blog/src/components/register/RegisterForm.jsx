import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import ReusabilityTextInput from "./ReusabilityTextInput";
import { Alert } from "@mui/material";

const RegisterForm = () => {
  // State
  // Form State
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Loading State
  const [loading, setLoading] = useState(false);

  // Multiple Request State
  const [multipleRequest, setMultipleRequest] = useState(false);

  // Error
  const [errors, setErrors] = useState({});

  // isFormValid
  const [isFormValid, setIsFormValid] = useState(false);

  ////////////////////////////////////////////////

  // Form Data hepsi doluysa
  useEffect(() => {
    const { username, email, password, confirmPassword } = formData;
    if (username && email && password && confirmPassword) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }

    // Fetch
    // Axios (npm i axios)
    // fetch('')
  }, [formData]);

  // Handle
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Username
    if (formData.username.trim().length < 3) {
      tempErrors.username = "Kullanıcı adı için az 3 karakter girmelisiniz.";
      isValid = false;
    }

    // EMail
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(formData.email)) {
      tempErrors.email = "Email için doğru karakterler giriniz.";
      isValid = false;
    }

    // Password
    if (formData.password.length < 6) {
      tempErrors.password = "Şifre için en az 6 karakter girmelisiniz.";
      isValid = false;
    }

    // Re-Password
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Şifreler birbirine uymuyor.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Submit
  let handleSubmit = async (e) => {
    // Browser dursun, bir şey yapmasın
    e.preventDefault();

    // Loading çalışmaya başlasın
    setLoading(true);

    // Çoklu İsteği Kapatma
    setMultipleRequest(false);

    // Validate
    if (validate()) {
      // Loading Çalışsın
      setLoading(false);

      alert("Kayıt olundu");
      // Form submission logic here
      console.log(formData);
      console.log(formData.username);
      console.log(formData.password);
      console.log(formData.email);   

      // POST
      // Submit Fetch API
      fetch(
        "https://66ed10e0380821644cdb2edb.mockapi.io/api/v1/blog/react_project",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            username:formData.username,
            password:formData.password,
            email:formData.email
          })
        }
      ).then(response=>response.json()).then(data=>{
        console.log("Success", data)
      }       
      ).catch(err=>{
        console.log("ERROR",err)
      })
    }
  };

  // Return
  return (
    <>
      <h1 className="text-center display-4 text-primary text-uppercase mb-4 mt-4">
        Register
      </h1>

      <form onSubmit={handleSubmit} className="mb-5">
        {/* Username */}
        <div className="form-group mb-4">
          <label>Kullanıcı Adı:</label>
          <input
            type="text"
            name="username"
            className="form-control"
            onChange={handleChange}
            value={formData.username}
          />
          {/* {errors.username && <p style={{color:'red'}}>{errors.username}</p>} */}

          {errors.username && (
            <div
              class="alert alert-info alert-dismissible fade show mt-2"
              role="alert"
            >
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
              <strong>Validation</strong>{" "}
              {errors.username && (
                <p style={{ color: "blue" }}>{errors.username}</p>
              )}
            </div>
          )}
          {errors.username && (
            <Alert
              variant="outlined"
              severity="error"
              sx={{
                marginTop: 3, // 8px*3=24px
              }}
            >
              {errors.username && (
                <p style={{ color: "blue" }}>{errors.username}</p>
              )}
            </Alert>
          )}
        </div>

        {/* Email */}
        {/* <div className="form-group mb-4">
          <label>Email:</label>
          <input type="email" 
          name="email" 
          
          className="form-control"
          onChange={handleChange}
          value={formData.email}/>
          {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
        </div> */}

        <ReusabilityTextInput
          label="Email"
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        {/* Password */}
        {/* <div className="form-group mb-4">
          <label>Şifre:</label>
          <input type="password" 
          name="password" 
          
          className="form-control"
          onChange={handleChange}
          value={formData.password}/>
          {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
        </div> */}

        <ReusabilityTextInput
          label="Şifre"
          type="password"
          name="password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        {/* Re-Password */}
        {/* <div className="form-group mb-4">
          <label>Şifre Tekrarı:</label>
          <input type="password" 
          name="confirmPassword" 
           
          className="form-control"
          onChange={handleChange}
          value={formData.confirmPassword}/>
          {errors.confirmPassword && <p style={{color:'red'}}>{errors.confirmPassword}</p>}
        </div> */}

        <ReusabilityTextInput
          label="Şifre Tekrarı"
          type="password"
          name="confirmPassword"
          className="form-control"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={!isFormValid}
          className="btn btn-primary me-3"
        >
          {loading && (
            <div class="d-flex justify-content-center align-items-center">
              <div
                class="spinner-border text-secondary spinner-border-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          Kayıt Ol
        </button>
        <button type="reset" className="btn btn-danger">
          Temizle
        </button>
      </form>
    </>
  );
};

// Export
export default RegisterForm;
