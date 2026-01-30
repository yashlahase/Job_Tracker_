import { useState, useEffect, useCallback } from 'react';
import API from '../api/axios';


const Dashboard = () => {
    const [jobs, setJobs] = useState([]);
    const [stats, setStats] = useState({
        total: 0,
        Applied: 0,
        Interview: 0,
        Offer: 0,
        Rejected: 0,
    });
    const [filters, setFilters] = useState({
        search: '',
        status: 'all',
        jobType: 'all',
        sort: 'newest',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');


    const fetchJobs = useCallback(async () => {
        try {
            setIsLoading(true);
            setError('');

            const params = new URLSearchParams();
            if (filters.search) params.append('search', filters.search);
            if (filters.status !== 'all') params.append('status', filters.status);
            if (filters.jobType !== 'all') params.append('jobType', filters.jobType);
            if (filters.sort) params.append('sort', filters.sort);

            const response = await API.get(`/jobs?${params.toString()}`);
            setJobs(response.data.jobs);
            setStats(response.data.stats);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch jobs');
        } finally {
            setIsLoading(false);
        }
    }, [filters]);

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);

    const handleDelete = async (jobId) => {
    if (!window.confirm('Are you sure you want to delete this job?')) {
        return;
    }

    try {
        await API.delete(`/jobs/${jobId}`);
        setJobs(jobs.filter((job) => job._id !== jobId));
        // Update stats
        const deletedJob = jobs.find((job) => job._id === jobId);
        if (deletedJob) {
            setStats((prev) => ({
                ...prev,
                total: prev.total - 1,
                [deletedJob.status]: prev[deletedJob.status] - 1,
            }));
        }
    } catch (err) {
        alert(err.response?.data?.message || 'Failed to delete job');
    }
    };

    return (
        <div className="page-wrapper">
            {/* Header */}
            <div className="page-header">
                <div>
                    <h1 className="heading-primary">Dashboard</h1>
                    <p className="text-description">Track and manage your job applications</p>
                </div>
                <Link to="/add-job" className="btn-add">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Job
                </Link>
            </div>

            {/* Stats Cards */}
            <StatsCards stats={stats} />

            {/* Filters */}
            <Filters filters={filters} onFilterChange={setFilters} />

            {/* Error Message */}
            {error && (
                <div className="error-msg">
                    {error}
                </div>
            )}

            {/* Loading State */}
            {isLoading ? (
                <div className="loading-container-sm">
                    <div className="spinner"></div>
                </div>
            ) : jobs.length === 0 ? (
                /* Empty State */
                <div className="empty-state">
                    <div className="icon-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className="empty-title">No jobs found</h2>
                    <p className="empty-description">
                        {filters.search || filters.status !== 'all' || filters.jobType !== 'all'
                            ? 'Try adjusting your filters to find jobs'
                            : 'Start by adding your first job application'}
                    </p>
                    {!(filters.search || filters.status !== 'all' || filters.jobType !== 'all') && (
                        <Link to="/add-job" className="btn-add">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add Your First Job
                        </Link>
                    )}
                </div>
            ) : (
                /* Job List */
                <div className="job-list">
                    {jobs.map((job) => (
                        <JobCard key={job._id} job={job} onDelete={handleDelete} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;



