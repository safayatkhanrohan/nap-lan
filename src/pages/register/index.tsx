import SignupForm from "../../components/forms/Signup";

const Register = () => {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-0 md:gap-2 lg:gap-6 items-center max-w-[1146px] ml-auto justify-between mt-10 md:mt-16 lg:mt-20">
                    <div className="hidden md:flex items-center">
                        <img src="/images/signup.png" alt="Signup" className="max-w-[350px] lg:max-w-[500px]" />
                    </div>
                    <div>
                        <SignupForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;