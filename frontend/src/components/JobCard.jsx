import { Link } from 'react-router-dom';

const JobCard = ({ job, onDelete }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Applied':
                return 'status-applied';
            case 'Interview':
                return 'status-interview';
            case 'Offer':
                return 'status-offer';
            case 'Rejected':
                return 'status-rejected';
            default:
                return 'status-applied';
        }
    };
    
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <div className="job-card">
            <div className="job-card-content">
                {/* Main Info */}
                <div className="job-info">
                    <div className="job-header">
                        <h3 className="job-title">{job.companyName}</h3>
                        <span className={`job-status ${getStatusClass(job.status)}`}>
                            {job.status}
                        </span>
                    </div>
                    <p className="job-role">{job.jobRole}</p>

                    <div className="job-meta">
                        <div className="job-meta-item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>{job.jobType}</span>
                        </div>

                        {job.location && (
                            <div className="job-meta-item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{job.location}</span>
                            </div>
                        )}

                        {job.salary && (
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{job.salary}</span>
                            </div>
                        )}

                        <div className="job-meta-item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{formatDate(job.appliedDate)}</span>
                        </div>
                    </div>

                    {job.notes && (
                        <p className="job-notes">{job.notes}</p>
                    )}
                </div>

                {/* Actions */}
                <div className="job-actions">
                    {job.jobLink && (
                        <a
                            href={job.jobLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="job-action-link"
                            title="View Job Posting"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                    <Link
                        to={`/edit-job/${job._id}`}
                        className="job-action-edit"
                        title="Edit Job"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </Link>
                    <button
                        onClick={() => onDelete(job._id)}
                        className="job-action-delete"
                        title="Delete Job"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
