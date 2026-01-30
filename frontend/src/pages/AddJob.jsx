import { useState } from 'react';
import API from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';



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
}