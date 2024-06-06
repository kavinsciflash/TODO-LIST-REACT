import React, { useState } from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../assets/image.jpg'

import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const height = "40px";
  const labelOffset = -6;
  let focused;

  const validateForm = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit data
      console.log(formData);
      navigate('/todo')
    } else {
      // Form is invalid, display errors
      setErrors(errors);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square style={{ background: `url(${Image})` }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 7,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: '100%', mt: 3 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                type='email'
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ mt: 2 }}
                style={{ height }}
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                InputLabelProps={{
                  style: {
                    height,
                    ...(!focused && { top: `${labelOffset}px` }),
                  },
                }}
                inputProps={{
                  style: {
                    height,
                    padding: '0 14px',
                  },
                }}
              
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                style={{ height }}
                sx={{ mt: 3 }}
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                InputLabelProps={{
                  style: {
                    height,
                    ...(!focused && { top: `${labelOffset}px` }),
                  },
                }}
                inputProps={{
                  style: {
                    height,
                    padding: '0 14px',
                  },
                }}
              />
              <FormControlLabel
                sx={{ mt: 2 }}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Sign In
              </Button>
              {/* <Grid container justifyContent="space-between">
                <Grid item>
                  <Link href="#" variant="body2" style={{ textDecoration: 'none' }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" style={{ textDecoration: 'none' }}>
                    {"Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
