import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import s from '../common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={"email"} component={Input}
            validate={[required]} />
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} component={Input}
            validate={[required]} type= {"password"} />
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type={"checkbox"}
            validate={[]} /> remember me
        </div>
        {error && <div className={s.formSummaryError}>{error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToprops = (state) => ({
    isAuth: state.auth.isAuth

});

export default connect(mapStateToprops, {login})(Login);