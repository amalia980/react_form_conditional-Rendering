import { useState } from 'react';


const Form = () => {

    const [user, setUser] = useState({ username: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(user))
        setUser({ username: "", password: "" });
    }

    const handleInput = (e) => {
        setUser({...user, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="username" 
                value={user.username}
                placeholder="Name..."
                onChange={handleInput}
                >
                    
                </input>
                <br></br>
                <input 
                type="text" 
                name="password" 
                value={user.password}
                placeholder="Password..."
                onChange={handleInput}
                >

                </input>
                <br></br>
                <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}

export default Form;