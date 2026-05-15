import LoginForm from "../components/LoginForm";

export default function Login() {
    const handleLogin = async (data) => {
        console.log(data)
    };

    return (
        <>
            <h1>Login</h1>
            <LoginForm onSubmit={handleLogin} />
        </>
    )
}