import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

import rod01 from '../../assets/smaker-rod-01.jpg';
import rod02 from '../../assets/smaker-rod-02.jpg';
import rod03 from '../../assets/smaker-rod-03.jpg';
import rod04 from '../../assets/smaker-rod-04.jpg';
import rod05 from '../../assets/smaker-rod-05.jpg';
import rod06 from '../../assets/smaker-rod-06.jpg';
import rod07 from '../../assets/smaker-rod-07.jpg';
import gul01 from '../../assets/smaker-gul-01.jpg';
import gul02 from '../../assets/smaker-gul-02.jpg';
import gron01 from '../../assets/smaker-gron-01.jpg';
import gron02 from '../../assets/smaker-gron-02.jpg';
import gron03 from '../../assets/smaker-gron-03.jpg';
import gron04 from '../../assets/smaker-gron-04.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import './Smaker.css';

const KATEGORIER = [
	{
		id: 'rod',
		namn: 'RÖD',
		farg: '#a72547',
		smaker: [
			{ nr: '01', namn: 'Banan, Jordgubb', img: rod01 },
			{ nr: '02', namn: 'Jordgubb, Ananas, Mango, Kiwi', img: rod02 },
			{ nr: '03', namn: 'Jordgubb, Blåbär', img: rod03 },
			{ nr: '04', namn: 'Mango, Jordgubb, Melon', img: rod04 },
			{ nr: '05', namn: 'Rödbeta, Banan, Hallon', img: rod05 },
			{
				nr: '06',
				namn: 'Jordgubb, Svarta vinbär, Granatäpple',
				img: rod06,
			},
			{ nr: '07', namn: 'Jordgubb, Mango, Blåbär, Acai', img: rod07 },
		],
	},
	{
		id: 'gul',
		namn: 'GUL',
		farg: '#e89b3c',
		smaker: [
			{ nr: '01', namn: 'Mango, Passionsfrukt, Ananas', img: gul01 },
			{ nr: '02', namn: 'Mango, Papaya, Ananas', img: gul02 },
		],
	},
	{
		id: 'gron',
		namn: 'GRÖN',
		farg: '#3d6e3d',
		smaker: [
			{
				nr: '01',
				namn: 'Broccoli, Selleri, Spenat, Banan, Ananas',
				img: gron01,
			},
			{
				nr: '02',
				namn: 'Äpple, Banan, Broccoli, Ingefära, Morot, Spenat',
				img: gron02,
			},
			{ nr: '03', namn: 'Mango, Ananas, Spenat, Grönkål', img: gron03 },
			{
				nr: '04',
				namn: 'Banan, Grönkål, Avokado, Citronzest',
				img: gron04,
			},
		],
	},
];

export default function Smaker() {
	const [aktiv, setAktiv] = useState('rod');
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const aktivKategori = KATEGORIER.find((k) => k.id === aktiv);

	return (
		<section id="smaker" className="sgn-smaker sgn-section">
			<div className="sgn-container sgn-smaker__head">
				<div>
					<span className="sgn-eyebrow">Smaker</span>
					<h2 className="sgn-smaker__title">
						13 smaker i tre färger.
						<br />
						<em>En enda enkel rutin.</em>
					</h2>
				</div>
				<p className="sgn-smaker__lead">
					Varje påse är en färdig portion — välj smak, förvara fryst,
					mixa & servera. Allt utan svinn.
				</p>
				<div className="sgn-smaker__nav">
					<button
						ref={prevRef}
						aria-label="Föregående smak"
						className="sgn-smaker__arrow"
						type="button">
						<HiArrowLeft />
					</button>
					<button
						ref={nextRef}
						aria-label="Nästa smak"
						className="sgn-smaker__arrow"
						type="button">
						<HiArrowRight />
					</button>
				</div>
			</div>

			<div className="sgn-container sgn-smaker__tabs">
				{KATEGORIER.map((k) => (
					<button
						key={k.id}
						type="button"
						className={`sgn-smaker__tab ${aktiv === k.id ? 'is-active' : ''}`}
						onClick={() => setAktiv(k.id)}
						style={{
							'--tab-color': k.farg,
						}}>
						<span
							className="sgn-smaker__tab-dot"
							style={{ background: k.farg }}
						/>
						{k.namn}
						<span className="sgn-smaker__tab-count">
							{k.smaker.length}
						</span>
					</button>
				))}
			</div>

			<div className="sgn-smaker__slider">
				<Swiper
					key={aktiv}
					modules={[Navigation, Pagination, A11y]}
					slidesPerView={1.2}
					spaceBetween={20}
					breakpoints={{
						640: { slidesPerView: 2.2, spaceBetween: 24 },
						900: { slidesPerView: 3.2, spaceBetween: 28 },
						1200: { slidesPerView: 4, spaceBetween: 32 },
					}}
					pagination={{ clickable: true }}
					onBeforeInit={(swiper) => {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
					}}
					navigation={{
						prevEl: prevRef.current,
						nextEl: nextRef.current,
					}}>
					{aktivKategori.smaker.map((s) => (
						<SwiperSlide key={s.nr}>
							<article className="sgn-smaker__card">
								<div className="sgn-smaker__img">
									<img
										src={s.img}
										alt={s.namn}
										loading="lazy"
										width={400}
										height={400}
									/>
									<span
										className="sgn-smaker__badge"
										style={{
											background: aktivKategori.farg,
										}}>
										{aktivKategori.namn} {s.nr}
									</span>
								</div>
								<div className="sgn-smaker__body">
									<span
										className="sgn-smaker__dot"
										style={{
											background: aktivKategori.farg,
										}}
										aria-hidden
									/>
									<h3>{s.namn}</h3>
								</div>
							</article>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
