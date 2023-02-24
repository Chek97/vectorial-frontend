import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage, RegisterPage, CreateUserPage, UsersPage } from '../pages';
import { ErrorRoute } from '../components';
import { ProtectedRoute } from './ProtectedRoute';

const auth = JSON.parse(localStorage.getItem("user")) || "";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
        errorElement: <ErrorRoute />
    },
    {
        path: '/register',
        element: <RegisterPage />,
        errorElement: <ErrorRoute />
    },
    {
        path: '/users',
        element: (
            <ProtectedRoute auth={auth}>
                <UsersPage />
            </ProtectedRoute>
        ),
        errorElement: <ErrorRoute />
    },
    {
        path: '/users/create',
        element: (
            <ProtectedRoute auth={auth}>
                <CreateUserPage />
            </ProtectedRoute>
        ),
        errorElement: <ErrorRoute />
    },
]);

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter;
