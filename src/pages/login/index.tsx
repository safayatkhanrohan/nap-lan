import LoginForm from "../../components/forms/Login";

const Login = () => {
    return (
            <div className="p-4 sm:p-6 md:p-8">
                <div className="max-w-7xl mx-auto mb-10">
                    <div className="flex flex-col md:flex-row gap-0 md:gap-2 lg:gap-6 items-center max-w-[1146px] ml-auto justify-between mt-10 md:mt-16 lg:mt-20">
                        <div className="hidden md:flex items-center">
                            <img src="/images/login.png" alt="Login" className="max-w-[310px] lg:max-w-[460px]" />
                        </div>
                        <div>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Login;