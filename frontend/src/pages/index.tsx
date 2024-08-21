import Navbar from '../components/Navbar';
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="p-8">
                <h1 className="text-4xl font-bold">Welcome to SendSmart</h1>
                <p className="mt-4 text-lg">
                    Automate your email sending process with our easy-to-use platform. Whether you need to send personalized emails or bulk emails,
                    we've got you covered.
                </p>
            </div>
        </div>
    );
};

export default Home;
