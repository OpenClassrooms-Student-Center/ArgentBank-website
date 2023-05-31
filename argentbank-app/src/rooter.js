import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import Root from './routes/root';
import ErrorPage from './pages/error-pages';
import { Login } from './pages/login';
import { User } from './pages/user';
import { Profile } from './pages/profile';

export const router = createBrowserRouter([
	{
		path: '',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'Login',
				element: <Login />,
			},
			{
				path: 'User',
				element: <User />,
				children: [
					{
						path: ':id',
						element: <Profile />,
					},
				],
			},
		],
	},
]);
