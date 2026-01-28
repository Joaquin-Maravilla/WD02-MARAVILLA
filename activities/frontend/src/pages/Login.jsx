import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import "./Login.css"

const Login = () => {
    const [errors, setErrors] = useState ({});
    const [loading, setLoading] = useState();

    return (
        <Card title = "Welcome Back!">
            <form className="login-form">
                <Input
                label="Email"
                type="email"
                name="email"
                error={errors.email}
                placeholder="Enter Your Email. "
                required
                />
                <Input
                label="Password"
                type="password"
                name="password"
                error={errors.password}
                placeholder="Enter Your Password. "
                required
                />

                <Button type="submit" loading={loading}>
                    Login
                </Button>

                <p className="aut-link">Don't have an account? Register here. </p>
            </form>
        </Card>
    );
};

export default Login;