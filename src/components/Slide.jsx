import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';
import { getStreams } from '../services/ApiTMDB';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Slide() {
	const [slide, setSlide] = useState([]);
	const [slidesPerView, setSlidesPerView] = useState(1);

	useEffect(() => {
		window.addEventListener('resize', function () {
			if (this.window.innerWidth > 760) {
				setSlidesPerView(2);
			} else if (this.window.innerWidth < 760) {
				setSlidesPerView(1);
			}
		});
	});

	useEffect(() => {
		async function getStreamsForSlide() {
			const streams = await getStreams();
			const slideEl = [streams[6], streams[1], streams[2], streams[10]];
			console.log(slideEl);
			setSlide(slideEl);
		}

		getStreamsForSlide();
	}, []);

	return (
		<Swiper
			style={{ height: `450px` }}
			modules={[Navigation, Pagination, A11y]}
			spaceBetween={0}
			slidesPerView={slidesPerView}
			navigation
			pagination={{ clickable: true }}>
			{slide.length > 1 &&
				slide?.map((stream) => (
					<SwiperSlide key={stream.id}>
						<div
							style={{
								backgroundImage: `url(https://image.tmdb.org/t/p/w500/${stream.backdrop_path})`,
								width: 'auto',
								height: '400px',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
								backgroundPosition: 'top',
								backgroundOrigin: 'border-box',
								display: 'flex',
								flexDirection: 'column',
								gap: '20px',
							}}>
							<p className="text-2xl sm:text-3xl md:text-4xl text-stone-100 font-extrabold pl-6 sm:pl-8 md:pl-12 pt-20">
								{stream.name}
							</p>
							<Link className="pl-6 sm:pl-8 md:pl-12">
								<Button>Go to Stream</Button>
							</Link>
						</div>
					</SwiperSlide>
				))}
			...
		</Swiper>
	);
}
