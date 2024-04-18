import { useState, React } from 'react'
import "../App.css"

export default function SignUpForm({ setToken }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/signup", {
                    method: "POST",
                    body: JSON.stringify({ username, password })
                });
            const result = await response.json();
            console.log(result);
            setToken(result.token)
        } catch(error){
            setError(error.message);
        }
        
    }
    return (
        <>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} required type="text" minLength="8"/>
                </label>
                <label>
                    Password: <input value={password} onChange={(e) => setPassword(e.target.value)} required type="text" minLength="5"/>
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}