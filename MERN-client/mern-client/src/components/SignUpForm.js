import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../common.css"

const BACKEND_URI = "http://localhost:3001/api/";

// functional component
function SignUpForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    return (
    <div className="center-div">
        <h1>Sign Up</h1>
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

                var res = await fetch(BACKEND_URI + "register", requestOptions);
                alert((await res.json())["msg"]);
                setEmail("");
                setPassword("");
            }}>Sign Up</button>
            <br/>
            <p>Already Registered ? </p> <Link to='/login'> Sign In Here</Link>
    </div>);
}

export default SignUpForm;