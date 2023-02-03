import React, { useState } from "react";
import { makeStyles } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Login = () => {
    const Submit =()=>{
        alert("O bhiii pehly account to bna per login kr bara aya log in hony")
    }
    const [text, settext]=useState("show")
    const [type, settype]=useState("password")
    const show =()=>{
      if(type==="password"){
settype("text")
settext("Hide")
      }
else{
  settype("password")
  settext("Show")
}
      
    }
  return (
    <>
      <div className="contianer">
        <div className="form">
          <h1>Log in</h1>
          <div className="inputFeild">
            <TextField
              id="outlined-basic"
              label="@username"
              style={{ width: "60%" }}
            />
            
          </div>
          <div className="inputFeild">
            <TextField
              id="outlined-basic"
              label="Password"
              type={type}
              style={{ width: "60%" }}
            />
               <span onClick={show}>{text}</span>

          </div>

          <p className="para">
            If Don't have account? <Link to="/"> Sign up</Link>
          </p>
          <div className="btn">
            <Button
              variant="contained"
              color="primary"
              style={{ width: "60%" }}
              onClick={Submit}
            >
              log in
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
