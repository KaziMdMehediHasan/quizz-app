import React from 'react'
import Form from '../Form'
import Illustration from '../Illustration'
import classes from '../../styles/Signup.module.css';
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import Button from '../Button';
import signupLogo from '../../assets/images/signup.svg'
const SignUp = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration logo={signupLogo} />
                <Form className={`${classes.signup}`}>
                    <TextInput icon="person" type="text" placeholder="Enter name" />
                    <TextInput icon="alternate_email" type="text" placeholder="Enter email" />
                    <TextInput icon="lock" type="password" placeholder="Enter password" />
                    <TextInput icon="lock_clock" type="password" placeholder="Confirm password" />
                    <Checkbox text="I agree to the Terms &amp; Conditions" />
                    <Button><span>Submit Now</span></Button>
                    <div class="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>
            </div>
        </>
    )
}

export default SignUp