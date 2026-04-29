import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import bannerImg from '../../assets/official_pictures/008_SoGoNice-@-The-Retreat-Club-258.png';
import './InspirationBanner.css';

export default function InspirationBanner() {
	return (
		<section
			className="sgn-banner"
			style={{ backgroundImage: `url(${bannerImg})` }}>
			<div className="sgn-banner__overlay" />
			<div className="sgn-container sgn-banner__inner">
				<motion.blockquote
					className="sgn-banner__quote"
					initial={{ opacity: 0, y: 32 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}>
					<span className="sgn-eyebrow sgn-banner__eyebrow">
						Upplev skillnaden
					</span>
					<p>
						"En smoothie kan förvandla hela
						<br />
						gästupplevelsen."
					</p>
					<a
						href="/#kontakt"
						className="sgn-btn sgn-btn--primary sgn-banner__cta">
						Kom igång idag <HiArrowRight />
					</a>
				</motion.blockquote>
			</div>
		</section>
	);
}
