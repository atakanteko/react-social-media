import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Layout from '../layout/Layout';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import ProtectedRoute from '../components/common/ProtectedRoute';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: '/',
                element: <Home /> 
            },
            {
                path: '/profile/:id',
                element: <Profile />
            }
        ]
    },
    {
        path: '/login',
        element: <Login /> 
    },
    {
        path: '/register',
        element: <Register />
    }
])