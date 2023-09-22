"use client";

import { useFormik } from "formik";
import * as yup from "yup";
import {
  TextField,
  Button,
  Container,
  Typography,
} from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function LoginPage() {
    const formSchema = yup.object().shape({
        usernameOrEmail: yup
          .string()
          .required("Username or Email is required")
          .test("is-email", "Invalid email format", function (value) {
            if (value && value.includes("@")) {

                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                value
              );
            }

            return true;
          }),
        password: yup.string().required("Password is required"),
      });

  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
        console.log(values);
    },
  });

  return (
    <Container component="main" maxWidth="xs" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px", minHeight: "83vh" }}>
      <div style={{justifyContent: "center", alignItems: "center", display: "flex"}}>
      <LockOpenIcon sx={{ fontSize: "50px" }} />
      <Typography variant="h4">
        Login
      </Typography>
      </div>
      <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
        <TextField
          fullWidth
          id="usernameOrEmail"
          name="usernameOrEmail"
          label="Username or Email"
          variant="outlined"
          margin="normal"
          onChange={formik.handleChange}
          value={formik.values.usernameOrEmail}
          error={formik.touched.usernameOrEmail && Boolean(formik.errors.usernameOrEmail)}
          helperText={formik.touched.usernameOrEmail && formik.errors.usernameOrEmail}
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
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: "16px" }}>
          Login
        </Button>
      </form>
    </Container>
  );
}
