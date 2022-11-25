import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non rerum atque porro maiores dolore enim, voluptatem qui ea dicta nisi facere dolor consequuntur est assumenda maxime nulla voluptatum laudantium.
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button type="button">
                            register now
                        </button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input 
                            type="text" 
                            name="username"
                            placeholder="Username" 
                        />
                         <input 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                        />
                        <button type="submit">
                            login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;