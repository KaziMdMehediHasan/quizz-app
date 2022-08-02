import React from 'react'
import Illustration from '../Illustration';
import loginLogo from '../../assets/images/login.svg';
import Form from '../Form';
import TextInput from '../TextInput';
import Button from '../Button';
import classes from '../../styles/Login.module.css';
const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration logo={loginLogo} />

                <Form className={classes.login}>
                    <TextInput icon="alternate_email" type="text" placeholder="Enter email" />
                    <TextInput icon="lock" type="password" placeholder="Enter password" />
                    <Button><span>Submit Now</span></Button>
                    <div className="info">
                        Don't have an account?
                        <a href="signup.html">Signup </a> instead.
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Login