"use client";

import { useFormik } from "formik";
import * as yup from "yup";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

export default function Page() {
  const formSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required").email("Invalid email"),
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    password: yup.string().required("Password is required"),
    bio: yup.string().required("Bio is required"),
    confirmPassword: yup.string().required("Confirm password is required").oneOf([yup.ref("password"), ""], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      bio: "",
      confirmPassword: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      
      const valuesToSend = {
        username: values.username,
        email: values.email,
        first_name: values.first_name,
        last_name: values.last_name,
        password: values.password,
        bio: values.bio,
      };

      console.log(valuesToSend);
      
    },
  });

  return (
    <Container component="main" sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", padding: "40px", width: "100vh"}}>
        <Typography variant="h4" sx={{display: "flex", alignItems: "center"}}>
          <PersonIcon sx={{fontSize: "50px"}}/>
          Sign Up
          </Typography>
        <form onSubmit={formik.handleSubmit}>

          <div style={{display: "flex"}}>
          <TextField
            fullWidth
            id="first_name"
            name="first_name"
            label="First Name"
            variant="outlined"
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.first_name}
            error={
              formik.touched.first_name && Boolean(formik.errors.first_name)
            }
            helperText={formik.touched.first_name && formik.errors.first_name}
            InputLabelProps={{style: {color: "black"}}}
            sx={{width: "50%"}}
          />

          <TextField
            fullWidth
            id="last_name"
            name="last_name"
            label="Last Name"
            variant="outlined"
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.last_name}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
            InputLabelProps={{style: {color: "black"}}}
            sx={{width: "50%", marginLeft: "10px"}}
          />
          </div>

          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.username}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            InputLabelProps={{style: {color: "black"}}}

          />

          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputLabelProps={{style: {color: "black"}}}

          />

          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputLabelProps={{style: {color: "black"}}}

          />

          <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            InputLabelProps={{style: {color: "black"}}}

          />

          <TextField
            fullWidth
            id="bio"
            name="bio"
            label="Bio"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.bio}
            error={formik.touched.bio && Boolean(formik.errors.bio)}
            helperText={formik.touched.bio && formik.errors.bio}
            InputLabelProps={{style: {color: "black"}}}

          />

          <Button type="submit" variant="contained" color="primary" sx={{alignItems: "center"}}>
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
