import * as React from 'react';


interface Props {
    error: string;
    onSubmit: Function;
    onRegister: Function;
    onForgotPassword: Function;
}

class LoginForm extends React.Component<Props, any> {
    constructor(props, state) {
        super(props, state);
        this.state = { username: '', password: '', error: null, submitting: false };
    }

    componentWillReceiveProps(nextProps) {
        const { error } = this.props;
        if (nextProps.error && nextProps.error !== error) {
            this.setState({ error: nextProps.error, submitting: false });
        }
    }

    updateValue = (property, value) => {
        this.setState({ [property]: value, error: null });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        this.setState({ submitting: true });
    }

    render() {
        const { username, password, error, submitting } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                {error && <div>{error}</div>}
                <div className="form-element form-input">
                    <input id="username" value={username} onChange={(e) => this.updateValue('username', e.target.value)} className="form-element-field" placeholder=" " type="email" required />
                    <div className="form-element-bar" />
                    <label className="form-element-label" htmlFor="username">{'Username/Email'}</label>
                </div>
                <div className="form-element form-input mb-3">
                    <input id="password" value={password} onChange={(e) => this.updateValue('password', e.target.value)} className="form-element-field" placeholder=" " type="password" required />
                    <div className="form-element-bar" />
                    <label className="form-element-label" htmlFor="password">{'Password'}</label>
                </div>
                <div className="d-flex mb-4">
                    <a onClick={() => {}} className="ml-auto text-primary f-14" href="javascript:;" data-toggle="modal" data-target="#userForgotPassword">{'Forgot Password?'}</a>
                </div>
                <div className="mb-4">
                    <button type="submit" className="btn btn-block btn-lg btn-warning" disabled={submitting}>
                        {(submitting) ? 'Logging in...' : 'Login'}</button>
                </div>
            </form>
        );
    }
}

export default LoginForm;
