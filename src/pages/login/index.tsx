import LoginForm from "../../components/forms/Login";

const Login = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 my-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-4/5">
                    <img src="/images/login.png" alt="Login" className="max-w-full" />
                </div>
                <div className="pl-6">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login;