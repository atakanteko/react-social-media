import { Link } from "react-router-dom";

const Register = () => {
    return(
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Social Life</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non rerum atque porro maiores dolore enim, voluptatem qui ea dicta nisi facere dolor consequuntur est assumenda maxime nulla voluptatum laudantium.
                    </p>
                    <span>Do you have an account?</span>
                   <Link to="/login">
                        <button type="button">
                            Login
                        </button>
                   </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input 
                            type="text" 
                            name="username"
                            placeholder="Username" 
                        />
                        <input 
                            type="email" 
                            name="emial"
                            placeholder="Email" 
                        />
                         <input 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                        />
                        <button type="submit">
                            register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;