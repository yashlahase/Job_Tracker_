import { useState } from 'react';
import API from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';
import JobForm from '../components/JobForm';



const AddJob = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        try {
            setIsLoading(true);
            setError('');
            await API.post('/jobs', formData);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to add job');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="page-container">
            {/* Header */}
            <div className="pageheader-content">
                <Link
                    to="/dashboard"
                    className="back-link"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Dashboard
                </Link>
                <h1 className="heading-primary">Add New Job</h1>
                <p className="text-description">Track a new job application</p>
            </div>

            {/* Form Card */}
            <div className="form-card">
                {error && (
                    <div className="error-msg-sm">
                        {error}
                    </div>
                )}
                <JobForm onSubmit={handleSubmit} isLoading={isLoading} submitLabel="Add Job" />
            </div>
        </div>
    );
};

export default AddJob;
