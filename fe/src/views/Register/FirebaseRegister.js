import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// material-ui

import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';

// third party
// import * as Yup from 'yup';
// import { Formik } from 'formik';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ==============================|| FIREBASE REGISTER ||============================== //

const FirebaseRegister = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [nipen, setNipen] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState(false);
  const navigate = useNavigate();

  const signupButton = async (e) => {
    e.preventDefault();

    if(!nipen || !namaLengkap || !email || !password){
      setError(true)
      return false
    }

    try {
      await axios.post("http://localhost:3000/api/users/signup", {
        nipen,
        namaLengkap,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      setError('Isi form')
    }
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      
        
          <form onSubmit={signupButton}>
            <TextField
              fullWidth
              label="NIPEN (Nomor Induk Pensiunan)"
              margin="normal"
              name="nipen"
              onChange={(e) => setNipen(e.target.value)}
              type="text"
              value={nipen}
              variant="outlined"
            />
            <FormControl fullWidth>
              {error && !nipen && <p style = {{color: "red"}}> Masukkan NIPEN</p>} 
            </FormControl>

            <TextField
              fullWidth
              label="Nama Lengkap"
              margin="normal"
              name="namalengkap"
              onChange={(e) => setNamaLengkap(e.target.value)}
              type="text"
              value={namaLengkap}
              variant="outlined"
            />
            <FormControl fullWidth>
              {error && !namaLengkap && <p style = {{color: "red"}}> Masukkan Nama Lengkap</p>} 
            </FormControl>
            
            <TextField
              fullWidth
              label="Email Address / Username"
              margin="normal"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              variant="outlined"
            />
            <FormControl fullWidth>
              {error && !email && <p style = {{color: "red"}}> Masukkan NIPEN</p>} 
            </FormControl>

            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                name="password"
                
                onChange={(e) => setPassword(e.target.value)}
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
            </FormControl>

            
            <Box mt={2}>
              <Button color="primary" fullWidth size="large" type="submit" variant="contained">
                Register
              </Button>
            </Box>
          </form>
        
     
    </>
  );
};

export default FirebaseRegister;
