import React, {SyntheticEvent, useState} from 'react';

interface Props {
    show: boolean;
    loginUser: (login:string, password: string) => {message: string} | null;
}

const Login = ({ show, loginUser }: Props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: SyntheticEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<string>>) => {
        const target = e.target as HTMLInputElement;
        setValue(target.value);
        setError(null);
    }

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const error = loginUser(name, password);
        if (error) {
            setError(error.message);
        } else {
            setName('');
            setPassword('');
        }
    }

    return (
        <div className={`menu profileMenu login ${show ? 'show' : 'hide'}`}>
            <form onSubmit={handleSubmit}>
                <label>Login</label>
                <input
                    type="text"
                    placeholder="Enter your login"
                    value={name}
                    onChange={(e) => handleChange(e, setName)}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => handleChange(e, setPassword)}
                />
                {error && <p className="errorMessage">{error}</p>}
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;
