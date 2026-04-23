import { useState } from "react";
 
export default function LoginForm( { onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            username: formData.get("username"),
            password: formData.get("password")
        };
        onSubmit(data);
    }


    return <>
    <div>
        <form className="login-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label> <br/>
                <input type="text" id="username" name="username"></input><br/>
            </div>

            <div>
                <label htmlFor="password">Password</label> <br/>
                <input type="password" id="password" name="password"></input><br/>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>

    </div>

    


    </>
}