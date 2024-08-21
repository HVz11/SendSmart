import Navbar from '../../components/Navbar';
import AuthForm from '../../components/AuthForm';

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className="p-8">
                <h1 className="text-3xl font-bold">Login</h1>
                <AuthForm type="login" />
            </div>
        </div>
    );
};

export default Login;
