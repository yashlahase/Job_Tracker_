

const Home = () => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <div className="full-screen flex-center">
                <div className="spinner"></div>
            </div>
        );
    }

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return <Navigate to="/login" replace />;
};
