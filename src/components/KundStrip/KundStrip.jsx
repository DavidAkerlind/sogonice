import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import img1 from '../../assets/official_pictures/013_SoGoNice-@-The-Retreat-Club-39.png';
import img2 from '../../assets/official_pictures/SoGoNice-@-The-Retreat-Club-208-604x403.jpg';
import img3 from '../../assets/official_pictures/022_SoGoNice-@-The-Retreat-Club-129.png';
import img4 from '../../assets/official_pictures/011_So-Go-Nice-Vadstena-336.png';
import './KundStrip.css';

const kunder = [
	{ img: img1, name: 'The Retreat Club', ort: 'Stockholm' },
	{ img: img2, name: 'Café Bloom', ort: 'Göteborg' },
	{ img: img3, name: 'Spa & Bistro', ort: 'Malmö' },
	{ img: img4, name: 'Restaurang Vadstena', ort: 'Vadstena' },
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
