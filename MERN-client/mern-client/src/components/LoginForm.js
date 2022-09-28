import "../common.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BACKEND_URI = "http://localhost:3001/api/";

// functional component
function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile');
    }

    return (
    <div className="center-div">
        <h1>Login</h1>
        <form>
            <label>Email Id : </label>
            <br/>
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <label>Password : </label>
            <br/>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>         
        </form>
        <button onClick={async (e) =>  {
                // send fetch (POST) request to server
                const requestOptions = {
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({ email : email, password : password })
                };

                var res = await fetch(BACKEND_URI + "login", requestOptions);
                alert((await res.json())["msg"]);
                setEmail("");
                setPassword("");
                if(res.status == 200) {
                    sessionStorage.setItem("curr_email", email);
                    // sessionStorage.setItem(curr_password, password);
                    navigateToProfile();
                }
            }}>Login</button>
            <br/>
            <p>Do not have an account ? </p> <Link to='/signup'> Sign Up Here</Link>
    </div>);
}

export default LoginForm;