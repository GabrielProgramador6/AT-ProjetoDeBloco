import { Outlet } from 'react-router-dom';
import Header from '../UI/Header';
import Footer from '../UI/Footer';

export default function AppLayout() {
	return (
		<div className="background_main min-h-screen flex flex-col">
			<Header />

			<div className="flex-1">
				<Outlet />
			</div>

			<Footer />
		</div>
	);
}
