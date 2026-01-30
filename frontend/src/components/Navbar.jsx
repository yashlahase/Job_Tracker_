import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };


        return (
        <nav className="nav">
            <div className="container-main">
                <div className="nav-container">
                    {/* Logo */}
                    <Link to="/" className="nav-brand">
                        <div className="nav-logo">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon-lg text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="nav-title">
                            JobTracker
                        </span>
                    </Link>

                    {/* Desktop Menu  */}
                    <div className="nav-menu">
                        {isAuthenticated ? (
                            <>
                                <Link to="/dashboard" className="nav-link">
                                    Dashboard
                                </Link>
                                <Link to="/add-job" className="btn-primary">
                                    Add Job
                                </Link>
                                <div className="nav-actions">
                                    <div className="user-badge">
                                        <span className="text-sm font-medium text-white">
                                            {user?.name?.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <span className="user-name">{user?.name}</span>
                                    <button
                                        onClick={handleLogout}
                                        className="logout-btn"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                                <Link to="/register" className="btn-primary">
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>

        )
}