"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
    TextField,
    Button,
    Container,
    Typography,
} from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useAuth } from "@/context/session";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const formSchema = yup.object().shape({
        username: yup
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
            username: "",
            password: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            setLoading(true);
            login(values).then((res) => {
                if (!res.session)
                    setError(res.message);
                else
                    router.push("/profile");
            });
        },
    });

    if (loading)
    {
        return (
            <Container component="main" maxWidth="xs" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px", minHeight: "83vh" }}>
                <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                    <LockOpenIcon sx={{ fontSize: "50px" }} />
                    <Typography variant="h4" sx={{ marginLeft: "10px" }}>
                        Logging In...
                    </Typography>
                </div>
            </Container>
        );
    }

    return (
        <Container component="main" maxWidth="xs" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px", minHeight: "83vh" }}>
            <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                <LockOpenIcon sx={{ fontSize: "50px" }} />
                <Typography variant="h4">
                    Login
                </Typography>
            </div>
            <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
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
                    InputLabelProps={{ style: { color: "black" } }}
                />
                <TextField
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    InputLabelProps={{ style: { color: "black" } }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: "16px" }}>
                    Login
                </Button>
            </form>
        </Container>
    );
}
