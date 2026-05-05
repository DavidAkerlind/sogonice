import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FloatingCta from '../../components/FloatingCta/FloatingCta';

import cafe1 from '../../assets/kund-cafe-1.jpg';
import cafe2 from '../../assets/kund-cafe-2.jpg';
import cafe3 from '../../assets/kund-cafe-3.jpg';
import rest1 from '../../assets/kund-restaurang-1.jpg';
import rest2 from '../../assets/kund-restaurang-2.jpg';
import rest3 from '../../assets/kund-restaurang-3.jpg';

import '../../index.css';
import './Kundportratt.css';

const kunder = [
	{
		img: cafe1,
		name: 'Sture badet',
		ort: 'Stockholm',
		typ: 'spa',
		citat: 'Våra gäster älskar de fräscha smakerna varje morgon.',
		produkter: ['Smoothie', 'Smoothie Bowl'],
	},
	{
		img: cafe2,
		name: 'AMAÍ AÇAÍ',
		ort: 'Stockholm',
		typ: 'cafe',
		citat: 'Sparar oss massor av tid utan att tumma på kvaliteten.',
		produkter: ['FruitShake®', 'Smoothie'],
	},
	{
		img: rest1,
		name: 'Vana Spa',
		ort: 'Stockholm',
		typ: 'spa',
		citat: 'Mocktails som faktiskt smakar något — gästerna kommer tillbaka.',
		produkter: ['Mocktail'],
	},
];

const filters = [
	{ id: 'alla', label: 'Alla' },
	{ id: 'cafe', label: 'Caféer' },
	{ id: 'spa', label: 'Spa' },
];

export default function Kundportratt() {
	const [filter, setFilter] = useState('alla');
	const [lightbox, setLightbox] = useState({ open: false, idx: 0 });
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace('#', '');
			const el = document.getElementById(id);
			if (el) el.scrollIntoView({ behavior: 'smooth' });
		}
	}, [location]);

	useEffect(() => {
		const prev = document.title;
		document.title = 'Våra Kunder — SoGoNice';
		const metaDesc = document.querySelector('meta[name="description"]');
		const prevDesc = metaDesc?.getAttribute('content');
		metaDesc?.setAttribute(
			'content',
			'Möt över 200 caféer och restauranger i Sverige som serverar SoGoNice varje dag. Läs deras berättelser.',
		);
		return () => {
			document.title = prev;
			if (metaDesc && prevDesc)
				metaDesc.setAttribute('content', prevDesc);
		};
	}, []);

	const visa = kunder.filter((k) => filter === 'alla' || k.typ === filter);
	const slides = visa.map((k) => ({ src: k.img, alt: k.name }));

	return (
		<div className="sgn-page">
			<Navbar />
			<main>
				<section className="sgn-kp__hero">
					<div className="sgn-container">
						<span className="sgn-eyebrow">Våra Kunder</span>
						<h1>
							Berättelser från caféer
							<br />& restauranger i hela <em>Sverige</em>.
						</h1>
						<p>
							Möt några av de över 200 verksamheter som serverar
							SoGoNice till sina gäster varje dag.
						</p>
					</div>
				</section>

				<section className="sgn-kp__list sgn-section">
					<div className="sgn-container">
						<div className="sgn-kp__filters">
							{filters.map((f) => (
								<button
									key={f.id}
									className={`sgn-kp__filter ${
										filter === f.id ? 'is-active' : ''
									}`}
									onClick={() => setFilter(f.id)}>
									{f.label}
								</button>
							))}
						</div>
						<div className="sgn-kp__grid">
							{visa.map((k, i) => (
								<motion.article
									key={k.name}
									className="sgn-kp__card"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.2 }}
									transition={{
										duration: 0.45,
										delay: (i % 3) * 0.08,
									}}>
									<button
										type="button"
										className="sgn-kp__img"
										onClick={() =>
											setLightbox({ open: true, idx: i })
										}
										aria-label={`Visa större bild av ${k.name}`}>
										<img
											src={k.img}
											alt={`${k.name} i ${k.ort}`}
											loading="lazy"
										/>
									</button>
									<div className="sgn-kp__body">
										<h3>{k.name}</h3>
										<span className="sgn-kp__ort">
											{k.ort}
										</span>
										<p className="sgn-kp__citat">
											"{k.citat}"
										</p>
										<div className="sgn-kp__badges">
											{k.produkter.map((p) => (
												<span
													key={p}
													className="sgn-kp__badge">
													{p}
												</span>
											))}
										</div>
									</div>
								</motion.article>
							))}
						</div>
					</div>
				</section>

				<section className="sgn-kp__cta sgn-section">
					<div className="sgn-container sgn-kp__cta-inner">
						<h2>
							Vill du också bli <em>kund?</em>
						</h2>
						<p>Få en offert med smakprover inom 24 timmar.</p>
						<Link
							to="/#kontakt"
							className="sgn-btn sgn-btn--accent">
							Kontakta oss
						</Link>
					</div>
				</section>
			</main>
			<Footer />
			<FloatingCta />

			<Lightbox
				open={lightbox.open}
				index={lightbox.idx}
				close={() => setLightbox({ ...lightbox, open: false })}
				slides={slides}
			/>
		</div>
	);
}
