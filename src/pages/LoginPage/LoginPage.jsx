import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
    const dispatch = useDispatch();

    const handleLogin = (credentials) => {
        dispatch(login(credentials));
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Login</h2>
            <LoginForm onSubmit={handleLogin} />
        </div>
    );
}
