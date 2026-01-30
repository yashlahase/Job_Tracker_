import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <div className="notfound-bg">
                    <h1 className="notfound-text">404</h1>
                    <div className="notfound-overlay">
                        <div className="notfound-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon-2xl text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <h2 className="notfound-title">Page Not Found</h2>
                <p className="notfound-description">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>

                <div className="notfound-actions">
                    <Link to="/dashboard" className="btn-primary">
                        Go to Dashboard
                    </Link>
                    <Link to="/" className="btn-secondary">
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
