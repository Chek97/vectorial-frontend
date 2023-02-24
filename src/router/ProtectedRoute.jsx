import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, auth }) => {
    if (!auth.user && !auth.token) return (<Navigate to="/" />);

    return (children)
}
