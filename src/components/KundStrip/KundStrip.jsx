import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import cafe1 from '../../assets/kund-cafe-1.jpg';
import cafe2 from '../../assets/kund-cafe-2.jpg';
import rest1 from '../../assets/kund-restaurang-1.jpg';
import rest2 from '../../assets/kund-restaurang-2.jpg';
import './KundStrip.css';

const kunder = [
	{ img: cafe1, name: 'Café Nord', ort: 'Stockholm' },
	{ img: cafe2, name: 'Bistro Lykke', ort: 'Göteborg' },
	{ img: rest1, name: 'Vinbaren', ort: 'Malmö' },
	{ img: rest2, name: 'Restaurang Ek', ort: 'Uppsala' },
];

export default function KundStrip() {
	return (
		<section className="sgn-strip sgn-section">
			<div className="sgn-container">
				<div className="sgn-strip__head">
					<div>
						<span className="sgn-eyebrow">Våra Kunder</span>
						<h2>Caféer som redan älskar SoGoNice.</h2>
					</div>
					<a href="/kundportratt" className="sgn-btn sgn-btn--ghost">
						Se alla våra kunder <HiArrowRight />
					</a>
				</div>
				<div className="sgn-strip__grid">
					{kunder.map((k, i) => (
						<motion.a
							key={k.name}
							href="/kundportratt"
							className="sgn-strip__card"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: i * 0.08 }}>
							<img
								src={k.img}
								alt={`${k.name} i ${k.ort}`}
								loading="lazy"
							/>
							<div className="sgn-strip__overlay">
								<strong>{k.name}</strong>
								<span>{k.ort}</span>
							</div>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
}
