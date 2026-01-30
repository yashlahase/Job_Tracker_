import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import API from '../api/axios';
import JobForm from '../components/JobForm';

const EditJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchJob = async () => {
            try {
                setIsLoading(true);
                const response = await API.get(`/jobs/${id}`);
                setJob(response.data);
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to fetch job');
            } finally {
                setIsLoading(false);
            }
        };

        fetchJob();
    }, [id]);

    const handleSubmit = async (formData) => {
        try {
            setIsSaving(true);
            setError('');
            await API.put(`/jobs/${id}`, formData);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update job');
        } finally {
            setIsSaving(false);
        }
    };

        if (isLoading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
            </div>
        );
    }

    if (error && !job) {
        return (
            <div className="page-container">
                <div className="error-card">
                    <div className="icon-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-xl text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="empty-title">Job Not Found</h2>
                    <p className="empty-description">{error}</p>
                    <Link to="/dashboard" className="btn-primary">
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        );
    }


        return (
        <div className="page-container">
            {/* Header */}
            <div className="page-header-content">
                <Link
                    to="/dashboard"
                    className="back-link"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Dashboard
                </Link>
                <h1 className="heading-primary">Edit Job</h1>
                <p className="text-description">Update job application details</p>
            </div>

            {/* Form Card */}
            <div className="form-card">
                {error && (
                    <div className="error-msg-sm">
                        {error}
                    </div>
                )}
                <JobForm
                    initialData={job}
                    onSubmit={handleSubmit}
                    isLoading={isSaving}
                    submitLabel="Update Job"
                />
            </div>
        </div>
    );
};

export default EditJob;


