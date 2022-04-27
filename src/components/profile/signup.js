import {useState} from "react";
import * as service from "../../services/auth-service";
import {useNavigate} from "react-router-dom";
import OutsideClickHandler from 'react-outside-click-handler';

const usernamePattern = /^[A-Za-z0-9_]*$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const isValidUsername = (password) => usernamePattern.test(password);
const isValidPassword = (password) => passwordPattern.test(password);

const Signup = () => {
    const [newUser, setNewUser] = useState({});
    const [password, setPassword] = useState("");
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [isPasswordValid, setPasswordValid] = useState(false);
    const [username, setUsername] = useState("");
    const [usernameTouched, setUsernameTouched] = useState(false);
    const [isUsernameValid, setUsernameValid] = useState(false);
    const [signupClicked, setSignupClicked] = useState(false);
    const [resetClicked, setResetClicked] = useState(false);
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        if (!usernameTouched) setUsernameTouched(true);
        const { target: { value } } = e;
        const isValid = isValidUsername(value);
        setUsername(value?.trim() || '');
        setUsernameValid(isValid);
        if (isValid) {
            setNewUser({...newUser, username: username});
        }
    }

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

    const signup = () => {
        if (!signupClicked) setSignupClicked(true);
        service.signup(newUser)
            .then(() => navigate('/home'))
            .catch(e => alert(e));
    }

    const reset = () => {
        if (!resetClicked) setResetClicked(true);
        service.reset(newUser)
            .then(() => navigate('/home'))
            .catch(e => alert(e));
    }

    return (
        <div>
            <h1>Signup</h1>
            <OutsideClickHandler
            onOutsideClick={() => {
              setUsernameTouched(false);
              }}>
            <input className="mb-2 form-control"
                   required
                   error={(usernameTouched && (!username || (username && !isUsernameValid)))}
                   onChange={handleUsernameChange}
                   onTouchEnd={(e) => setUsernameTouched(false)}
                    value={username}
                   placeholder="username" type="username"/>
            <span class="help-block"> {(usernameTouched && !username && "Username is required")}</span>
            <span class="help-block"> {(usernameTouched
                && ("Username can only contain Letters, Numbers, and underscore(_)"))}</span>
                </OutsideClickHandler>
                <OutsideClickHandler
                onOutsideClick={() => {
                    setPasswordTouched(false);
                }}>
            <input className="mb-2 form-control"
                   required
                   error={(passwordTouched && (!password || (password && !isPasswordValid)))}
                   onChange={handlePasswordChange}
                   value={password}
                   placeholder="password" type="password"/>
            <span class="help-block"> {(passwordTouched && !password && "Password is required")}</span>
            <span class="help-block"> {(passwordTouched
                && ("Password should have minimum eight characters, at least one uppercase letter, " 
                + "one lowercase letter, one number and one special character"))}</span>
                </OutsideClickHandler>
            <input className="mb-2 form-control"
                   onChange={(e) =>
                       setNewUser({...newUser, email: e.target.value})}
                   placeholder="email" type="email"/>
            <button onClick={signup}
                    disabled={(!password || (password && !isPasswordValid) || !username || (username && !isUsernameValid))}
                    className="btn btn-primary mb-5 form-control">Signup
            </button>
            <button onClick={reset}
                    disabled={(!password || (password && !isPasswordValid) || !username || (username && !isUsernameValid))}
                    className="btn btn-primary mb-5 form-control">Reset
            </button>
            <span class="help-block"> {((signupClicked || resetClicked) && usernameTouched
             && !username && "Username is required")}</span>
            <span class="help-block"> {((signupClicked || resetClicked) && usernameTouched
             && username && !isUsernameValid 
                && ("Username can only contain Letters, Numbers, and underscore(_)"))}</span>
            <span class="help-block"> {((signupClicked || resetClicked) && passwordTouched
             && !password && "Password is required")}</span>
            <span class="help-block"> {((signupClicked || resetClicked) && passwordTouched
             && password && !isPasswordValid 
                && ("Password should have minimum eight characters, at least one uppercase letter, " 
                + "one lowercase letter, one number and one special character"))}</span>
        </div>
    );
}
export default Signup;