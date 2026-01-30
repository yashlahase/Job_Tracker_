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

}