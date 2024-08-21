import Navbar from '../../components/Navbar';
import AuthForm from '../../components/AuthForm';

const Signup = () => {
    return (
        <div>
            <Navbar />
            <div className="p-8">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <AuthForm type="signup" />
            </div>
        </div>
    );
};

export default Signup;
