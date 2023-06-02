import React, { useState } from "react";
import { useNavigate } from 'react-router';
import axios from "axios";
import Cookies from "universal-cookie"
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  FormHelperText,
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

import { Formik } from 'formik';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ==============================|| FIREBASE LOGIN ||============================== //
const cookies = new Cookies();
const FirebaseLogin = ({ ...rest }) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  // const [login, setLogin] = useState(false);
  const [error,setError]=useState();
  const logInButton = async (e) => {
    // e.preventDefault();
    // try {
    //   await axios.post("http://localhost:3000/api/users/login", {
    //     email,
    //     password,
    //   });
    //  navigate('/dashboard/default')
      
    // } catch (error) {
    //   console.log(error.message);
    // }
    e.preventDefault();

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
        setError('Invalid Username or Password')
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
      <Formik
       
      >
        {({ errors, handleBlur, isSubmitting, touched}) => (
          <form noValidate onSubmit={logInButton} {...rest}>
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange= {(e) => setEmail(e.target.value)} 
              type="email"
              value={email}
              variant="outlined"
            />

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                name="password"
                onBlur={handleBlur}
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
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text">
                  {' '}
                  {errors.password}{' '}
                </FormHelperText>
              )}
            </FormControl>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="subtitle2" color="primary" sx={{ textDecoration: 'none' }}>
                  Forgot Password?
                </Typography>
              </Grid>
            </Grid>

            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box mt={2}>
              <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                Log In
              </Button>
              
              {error?<p className="text-danger">{error}</p>:null}  
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLogin;
