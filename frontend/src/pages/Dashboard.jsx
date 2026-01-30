import { useState, useEffect, useCallback } from 'react';


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

}