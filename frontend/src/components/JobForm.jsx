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

        useEffect(() => {
        if (initialData) {
            setFormData({
                companyName: initialData.companyName || '',
                jobRole: initialData.jobRole || '',
                status: initialData.status || 'Applied',
                jobType: initialData.jobType || 'Full-time',
                location: initialData.location || '',
                salary: initialData.salary || '',
                appliedDate: initialData.appliedDate
                    ? new Date(initialData.appliedDate).toISOString().split('T')[0]
                    : new Date().toISOString().split('T')[0],
                jobLink: initialData.jobLink || '',
                notes: initialData.notes || '',
            });
        }
    }, [initialData]);

}