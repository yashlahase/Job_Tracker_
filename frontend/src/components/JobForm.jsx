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

        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

        return (
        <form onSubmit={handleSubmit} className="form-group">
            <div className="grid-form">
                {/* Company Name */}
                <div>
                    <label htmlFor="companyName" className="input-label">
                        Company Name <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Google"
                        className="input-field"
                    />
                </div>

                {/* Job Role */}
                <div>
                    <label htmlFor="jobRole" className="input-label">
                        Job Role <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="text"
                        id="jobRole"
                        name="jobRole"
                        value={formData.jobRole}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Software Engineer"
                        className="input-field"
                    />
                </div>

                {/* Status */}
                <div>
                    <label htmlFor="status" className="input-label">
                        Status
                    </label>
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="select-field"
                    >
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Offer">Offer</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>

                {/* Job Type */}
                <div>
                    <label htmlFor="jobType" className="input-label">
                        Job Type
                    </label>
                    <select
                        id="jobType"
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                        className="select-field"
                    >
                        <option value="Full-time">Full-time</option>
                        <option value="Internship">Internship</option>
                        <option value="Remote">Remote</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>

                {/* Location */}
                <div>
                    <label htmlFor="location" className="input-label">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g., New York, NY"
                        className="input-field"
                    />
                </div>

                {/* Salary */}
                <div>
                    <label htmlFor="salary" className="input-label">
                        Salary
                    </label>
                    <input
                        type="text"
                        id="salary"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        placeholder="e.g., $100,000 - $120,000"
                        className="input-field"
                    />
                </div>

                {/* Applied Date */}
                <div>
                    <label htmlFor="appliedDate" className="input-label">
                        Applied Date <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="date"
                        id="appliedDate"
                        name="appliedDate"
                        value={formData.appliedDate}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>

                {/* Job Link */}
                <div>
                    <label htmlFor="jobLink" className="input-label">
                        Job Link
                    </label>
                    <input
                        type="url"
                        id="jobLink"
                        name="jobLink"
                        value={formData.jobLink}
                        onChange={handleChange}
                        placeholder="https://..."
                        className="input-field"
                    />
                </div>
            </div>

            {/* Notes */}
            <div>
                <label htmlFor="notes" className="input-label">
                    Notes
                </label>
                <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any additional notes about this application..."
                    className="input-field resize-none"
                />
            </div>

            {/* Submit Button */}
            <div className="form-actions">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="form-submit-min"
                >
                    {isLoading ? (
                        <div className="form-spinner" />
                    ) : (
                        submitLabel
                    )}
                </button>
            </div>
        </form>
    );
};

export default JobForm;


