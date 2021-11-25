import React, {SyntheticEvent} from 'react';

interface Props {
    show: boolean;
    loginUser: (login:string, password: string) => {message: string} | void;
}

interface State{
    name: string;
    password: string;
    error: string | null;
}

class Login extends React.Component<Props, State>{
    state = {
        name: '',
        password: '',
        error: null
    }

    handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const name = target.name as keyof State;
        this.setState({
            [name]: target.value,
            error: null
        } as Pick<State, keyof State>)
    }

    handleSubmit = (e:SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {name, password} = this.state;
        const error = this.props.loginUser(name, password);
        if (error) {
            this.setState({
                error: error.message
            })
        } else {
            this.setState({
                name: '',
                password: ''
            })
        }
    }

    render() {
        const { show } = this.props;
        const { name, password, error } = this.state;
        return (
            <div className={`menu profileMenu login ${show ? 'show' : 'hide'}`}>
                <form onSubmit={this.handleSubmit}>
                    <label>Login</label>
                    <input
                        type="text"
                        placeholder="Enter your login"
                        value={name}
                        onChange={this.handleChange}
                        name="name"
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={this.handleChange}
                        name="password"
                    />
                    {error && <p className="errorMessage">{error}</p>}
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default Login;
