import { useState, useEffect } from 'react';

const JobForm = ({ initialData, onSubmit, isLoading, submitLabel = 'Save Job' }) => {
    const [formData, setFormData] = useState({
        companyName: '',
        jobRole: '',
        status: 'Applied',
        jobType: 'Full-time',
        location: '',
        salary: '',
        appliedDate: new Date().toISOString().split('T')[0],
        jobLink: '',
        notes: '',
    });
}