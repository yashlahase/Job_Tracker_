import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';
import NotFound from './pages/NotFound';

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


const GuestRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="spinner"></div>
            </div>
        );
    }

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};


function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="full-screen">
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/register"
                                element={
                                    <GuestRoute>
                                        <Register />
                                    </GuestRoute>
                                }
                            />
                            <Route
                                path="/login"
                                element={
                                    <GuestRoute>
                                        <Login />
                                    </GuestRoute>
                                }
                            />
                            <Route
                                path="/dashboard"
                                element={
                                    <ProtectedRoute>
                                        <Dashboard />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/add-job"
                                element={
                                    <ProtectedRoute>
                                        <AddJob />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/edit-job/:id"
                                element={
                                    <ProtectedRoute>
                                        <EditJob />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
