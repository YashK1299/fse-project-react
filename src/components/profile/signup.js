import {useState} from "react";
import * as service from "../../services/auth-service";
import {useNavigate} from "react-router-dom";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const isValidPassword = (password) => passwordPattern.test(password);

const Signup = () => {
    const [newUser, setNewUser] = useState({});
    const [password, setPassword] = useState("");
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [isPasswordValid, setPasswordValid] = useState(false);
    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        if (!passwordTouched) setPasswordTouched(true);
        const { target: { value } } = e;
        const isValid = isValidPassword(value);
        setPassword(value?.trim() || '');
        setPasswordValid(isValid);
        if (isValid) {
            setNewUser({...newUser, password: password});
        }
    }

    const signup = () =>
        service.signup(newUser)
            .then(() => navigate('/home'))
            .catch(e => alert(e));
    const reset = () =>
        service.reset(newUser)
            .then(() => navigate('/home'))
            .catch(e => alert(e));
    return (
        <div>
            <h1>Signup</h1>
            <input className="mb-2 form-control"
                   onChange={(e) =>
                       setNewUser({...newUser, username: e.target.value})}
                   placeholder="username"/>
            <input className="mb-2 form-control"
                   required
                   error={(passwordTouched && (!password || (password && !isPasswordValid)))}
                   onChange={handlePasswordChange}
                   value={password}
                   placeholder="password" type="password"/>
            <span class="help-block"> {(passwordTouched && !password && "Password is required")}</span>
            <span class="help-block"> {(passwordTouched && password && !isPasswordValid 
                && ("Invalid Password: Password should have minimum eight characters, at least one uppercase letter, " 
                + "one lowercase letter, one number and one special character"))}</span>
            <input className="mb-2 form-control"
                   onChange={(e) =>
                       setNewUser({...newUser, email: e.target.value})}
                   placeholder="email" type="email"/>
            <button onClick={signup}
                    disabled={(!password || (password && !isPasswordValid))}
                    className="btn btn-primary mb-5 form-control">Signup
            </button>
            <button onClick={reset}
                    disabled={(!password || (password && !isPasswordValid))}
                    className="btn btn-primary mb-5 form-control">Reset
            </button>
        </div>
    );
}
export default Signup;