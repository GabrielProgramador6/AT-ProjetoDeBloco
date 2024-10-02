import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<>
			<main className="grid h-screen place-items-center background_banner px-6 py-24 sm:py-32 lg:px-8">
				<div className="text-center">
					<p className="text-base font-semibold text-white">404</p>
					<h1 className="mt-4 text-4xl font-bold tracking-tight background_gradien-text sm:text-5xl">
						Page not found
					</h1>
					<p className="mt-6 text-base leading-7 text-white">
						Sorry, we couldn’t find the page you’re looking for.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link className="text-sm font-semibold text-white">
							Go back home <span aria-hidden="true">&rarr;</span>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
