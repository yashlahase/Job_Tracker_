import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import API from '../api/axios';


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
}