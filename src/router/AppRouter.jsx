import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage, RegisterPage, CreateUserPage, UsersPage } from '../pages';
import { ErrorRoute } from '../components';

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
        element: <UsersPage />,
        errorElement: <ErrorRoute />
    },
    {
        path: '/users/create',
        element: <CreateUserPage />,
        errorElement: <ErrorRoute />
    },
]);

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter;
