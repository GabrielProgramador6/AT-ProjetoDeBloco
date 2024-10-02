import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Banner from './pages/Banner';
import NotFound from './UI/NotFound';
import Main from './pages/Main';
import HomePage from './UI/HomePage';

export default function App() {
	const router = createBrowserRouter([
		{
			element: <Banner />,
			path: '/',
		},
		{
			element: <AppLayout />,

			children: [
				{
					element: <Main />,
					path: '/home',
					children: [{ element: <HomePage />, path: '/home' }],
				},
			],
		},
		{ element: <NotFound />, path: '*' },
	]);

	return <RouterProvider router={router} />;
}
