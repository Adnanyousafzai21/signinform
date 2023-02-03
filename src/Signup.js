import React from "react";
import { makeStyles } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import { useState } from "react";
// import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import { Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
const Signup = () => {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    birthday: "",
    phone: "",
    password: "",
    address: "",
    select_city:"",
    select_country:"",
    confrim_password: "",
  };
  // const formit = useFormik({});

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: Yup.object({
        fname: Yup.string().min(2, "At least 2 charcter").required("required"),
        lname: Yup.string().min(2, "At least 2 charcter").required("required"),
        email: Yup.string().email("email invalid").required("require"),
        password: Yup.string()
          .min(8, "Atleast eight charcter")
          .max(12, "At least 8 charcter")
          .required("required"),
          confrim_password: Yup.string()
          .required("require")
          .oneOf([Yup.ref("password"), null], "password must match"),
          birthday: Yup.string().required("required"),
          phone: Yup.string().required("required").min(5,"Atleast five charcter"),
          select_city: Yup.string().required("required"),
          select_country: Yup.string().required("required"),
          address: Yup.string().required("required")
      }),
      onSubmit: (values) => {
        console.log("🚀 ~ file: Signup.js:57 ~ Signup ~ values", values)
      },
    });
      

  return (
    <>
      <div className="contianer">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="inputFeild">
            <div className="fristname">
              <TextField
                id="outlined-basic"
                label="F/Name"
                onChange={handleChange}
                style={{ width: "100%" }}
                name="fname"
                value={values.fname}
                onBlur={handleBlur}
              />
              {touched.fname && errors.fname ? <p>{errors.fname}</p> : null}
            </div>
            <div className="fristname">
              <TextField
                className="LName"
                id="outlined-basic"
                label="L/Name"
                style={{ width: "100%" }}
                onChange={handleChange}
                name="lname"
                value={values.lname}
                onBlur={handleBlur}
              />
              {touched.lname && errors.lname ? <p>{errors.lname}</p> : null}
            </div>
          </div>
          <div className="inputFeild">
            <div className="email-adress">
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                style={{ width: "100%" }}
                onChange={handleChange}
                name="email"
                value={values.email}
                onBlur={handleBlur}
              />
              {touched.email && errors.email ? <p>{errors.email}</p> : null}
            </div>
          </div>

          <div className="inputFeild">
            <div className="fristname">
              <TextField
                id="outlined-basic"
                label=""
                type="date"
                style={{ width: "100%" }}
                onChange={handleChange}
                name="birthday"
                value={values.birthday}
                onBlur={handleBlur}
              />
              {touched.birthday && errors.birthday ? (<p>{errors.birthday}</p>) : null}
            </div>
            <div className="fristname">
              <TextField
                id="outlined-basic"
                label="Mobile"
                type="number"
                style={{ width: "100%" }}
                onChange={handleChange}
                name="phone"
                value={values.phone}
                onBlur={handleBlur}
              />
              {touched.phone && errors.phone ? (<p>{errors.phone}</p> ): null}
            </div>
          </div>
          <div className="inputFeild">
          <div className="fristname">
            <FormControl
              variant="outlined"
              // className={classes.formControl}
              style={{ width: "100%" }}
              onChange={handleChange}
              name="select_city"
              value={values.select_city}
              onBlur={handleBlur}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Select-city
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                label="select-contry"
                onChange={handleChange}
                name="select_city"
                value={values.select_city}
                onBlur={handleBlur}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>karachi</MenuItem>
                <MenuItem value={20}>peshawer</MenuItem>
                <MenuItem value={30}>lahour</MenuItem>
              </Select>
            </FormControl>
            {touched.select_city && errors.select_city ? (<p>{errors.select_city}</p> ): null}
            </div>
            <div className="fristname">
            <FormControl
              variant="outlined"
              // className={classes.formControl}
              style={{ width: "100%" }}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Select-country
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                label="select-contry"
                onChange={handleChange}
                name="select_country"
                value={values.select_country}
                onBlur={handleBlur}
              >
                <MenuItem value=""> <em>None</em> </MenuItem>
                 <MenuItem value={10}>Paksitan</MenuItem>
                <MenuItem value={20}>India</MenuItem>
                <MenuItem value={30}>Chaina</MenuItem>
              </Select> 
            </FormControl>
            {touched.select_country && errors.select_country ? (<p>{errors.select_country}</p>) :null}
            </div>
            </div> 
          <div className="inputFeild">
          <div className="email-adress">
            <TextField
              id="outlined-basic"
              label="Address"
              style={{ width: "100%" }}
              onChange={handleChange}
              name="address"
              value={values.address}
              onBlur={handleBlur}
            />
             {touched.address && errors.address ? <p>{errors.address}</p> : null}
          </div>
          </div>

          {/* <RadioGroup
            aria-label="gender"
            name="gender1"
            onChange={handleChange}
          >
            <div className="inputFeild">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </div>
          </RadioGroup> */}

          <div className="inputFeild">
            <div className="fristname">
              <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                style={{ width: "100%" }}
                onChange={handleChange}
                name="password"
                value={values.password}
                onBlur={handleBlur}
              />
              {touched.password && errors.password ? (
                <p>{errors.password}</p>
              ) : null}
            </div>
            <div className="fristname">
              <TextField
                id="outlined-basic"
                label="Confrim password"
                type="password"
                style={{ width: "100%" }}
                onChange={handleChange}
                name="confrim_password"
                value={values.confrim_password}
                onBlur={handleBlur}
              />
              {touched.confrim_password && errors.confrim_password ? (
                <p>{errors.confrim_password}</p>
              ) : null}
            </div>
          </div>
          <p className="para">
            Already have account? <a href="./login"> login</a>
          </p>
          <div className="btn">
            <Button
              variant="contained"
              color="primary"
              style={{ width: "97%" }}
              type="submit"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
