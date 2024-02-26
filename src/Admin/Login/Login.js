import { useNavigate } from "react-router-dom"
import "../css/login.css"
import { useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI } from "../../API/authAPI.js";

function Login() {
     const [userName, setUsername] = useState("")
     const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async () => {
        // const userLogin = {
        //     username: userName,
        //     password: password,
        //     role: 1
        // }
        // try {
        //     const token = await loginAPI(userLogin)
        //     if (token) {
        //         localStorage.setItem("admin", JSON.stringify(token))
        //         toast.success("Logged in successfully!")
        //         navigate("/home")
        //     }
        // } catch (error) {
        //     console.log(error)
        //     const errorResponse = error.response.data.errMessage
        //     toast.error(errorResponse)
        // }
        navigate("/user-manager");
    }
    
    return (
        <>
        <div className="containers">
            <div className="box">
                <h1 align="center" >Login</h1>
                <div className="inputBox">            
                User name
                <input type="text" name="username" placeholder="username" required onChange={(e) => setUsername(e.target.value)}/> 
                </div>
                <div className="inputBox">
                Password
                    <input type="password" name="password" placeholder="password" required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="text-center">
                    <button type="button"  onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>

        
    </>
    )
}

export default Login