import LoginForm from "../components/LoginForm";

export default function Create() {
    const handleCreate = async (data) => {
        console.log(data)
    };

    return (
        <>
            <h1>Login</h1>
            <LoginForm onSubmit={handleCreate} />
        </>
    )
}