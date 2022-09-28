import { useNavigate } from 'react-router-dom';

const BACKEND_URI = "http://localhost:3001/api/";

function Profile(props) {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }

    const email = sessionStorage.getItem("curr_email");
    return (<div>
        <button onClick={async (e) =>  {
                alert("in")
                var res = await fetch(BACKEND_URI + "logout");
                alert((await res.json())["msg"]);

                if(res.status == 200) {
                    sessionStorage.removeItem("curr_email");

                    // sessionStorage.setItem(curr_password, password);
                    navigateToLogin();
                }
            }}>Logout</button>
        <h2> Welcome, {email} </h2>
        
    </div>);
}

export default Profile;