import React, { useState } from "react";
import { useNavigate } from 'react-router';
import axios from "axios";
import Cookies from "universal-cookie"
// material-ui
// import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';

//  third party
// import * as Yup from 'yup';
// import { Formik } from 'formik';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


// ==============================|| FIREBASE LOGIN ||============================== //
const cookies = new Cookies();
const FirebaseLogin = ()=> {
  // const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const [login, setLogin] = useState(false);
  const [error,setError]=useState(false);
  const logInButton = async (e) => {
   
    e.preventDefault();

    if(!email || !password){
      setError(true)
      return false
    }
    const configuration = {
      method: "post",
      url: "http://localhost:3000/api/users/login",
      data: {
        email,
        password,
      },
    };
        
    axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        // window.location.href = "/auth";
        navigate('/dashboard/default')

        // setLogin(true);
      })
      .catch((error) => {
        console.log(error)
        setError('Email atau password salah')
      });
      
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
          <form onSubmit={logInButton}>
            <TextField
            
              fullWidth
              
              label="Email"
              margin="normal"
              name="email"
             
              onChange= {(e) => setEmail(e.target.value)} 
              type="email"
              value={email}
              variant="outlined"
              
            />
             <FormControl fullWidth>
            {error && !email && <p style = {{color: "red"}}> Masukkan email</p>} </FormControl>
            
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password"
              >Password</InputLabel>
              <OutlinedInput
              
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                name="password"
                onChange= {(e) => setPassword(e.target.value)}
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormControl fullWidth>
            {error && !password && <p style = {{color: "red"}}> Masukkan password</p>} </FormControl>
              {/* {errors.password && <p style = {{color: "red"}}> {errors.password}</p>} */}
               
            
            </FormControl>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="subtitle2" color="primary" sx={{ textDecoration: 'none' }}>
                  Forgot Password?
                </Typography>
              </Grid>
            </Grid>

          
              {/* <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box> */}
 
            <Box mt={2}>
              <Button color="primary"  fullWidth size="large" type="submit" variant="contained">
                Log In
              </Button>
              
              {error?<p className="text-danger">{error}</p>:null}
            </Box>
          </form>
       
    </>
  );
};

export default FirebaseLogin;
