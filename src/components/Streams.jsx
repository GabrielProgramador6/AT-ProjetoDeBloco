import { useEffect, useState } from 'react';
import { getStreams } from '../services/ApiTMDB';

export default function Streams() {
	const [streams, setStreams] = useState([]);

	useEffect(() => {
		async function fecthStreams() {
			const stream = await getStreams();
			setStreams(stream);
		}

		fecthStreams();
	}, []);

	//flex flex-wrap items-center justify-between gap-2 md:gap-6

	return (
		<section className="common_padding grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
			{streams?.map((stream, i) => (
				<div
					key={i}
					className="max-sm:col-span-1 col-span-auto flex flex-col gap-2 sm:w-52 sm:h-52 md:w-60 md:h-52 lg:w-72 cursor-pointer">
					<img
						src={`https://image.tmdb.org/t/p/w500/${stream.backdrop_path}`}
						alt=""
					/>
					<p className="text-lg text-stone-100 font-extrabold">{stream.name}</p>
				</div>
			))}
		</section>
	);
}
