import { Link } from 'react-router-dom';

export default function Banner() {
	return (
		<div className="common_padding-inline background_banner h-screen">
			<h1 className="flex items-center justify-center h-[65dvh] mx-auto w-full md:max-w-[75dvw] text-center font-semibold text-2xl sm:text-3xl lg:text-5xl capitalize background_gradien-text">
				the best video streaming in the world! focused on the consumer and their
				entertainment
			</h1>

			<Link
				to="/home"
				className="text-lg sm:text-xl text-white ml-4 md:ml-20 lg:ml-40 delay-150 hover:border-b-2 border-white">
				Go to Home &rarr;
			</Link>
		</div>
	);
}
