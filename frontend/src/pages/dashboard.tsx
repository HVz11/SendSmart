import Navbar from '../components/Navbar';
import DashboardForm from '../components/DashboardForm';
import EmailSenderForm from '../components/EmailSenderForm';
import { useAuth } from '../lib/auth';

const Dashboard = () => {
    useAuth(); // Protect route

    return (
        <div>
            <Navbar />
            <div className="p-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <DashboardForm />
                <div className="mt-8">
                    <h2 className="text-2xl font-bold">Send Emails</h2>
                    <EmailSenderForm />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
