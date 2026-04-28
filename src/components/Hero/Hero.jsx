import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import heroImg from '../../assets/hero-fruit.jpg';
import './Hero.css';

export default function Hero() {
	return (
		<section id="hem" className="sgn-hero">
			<div className="sgn-container sgn-hero__inner">
				<motion.div
					className="sgn-hero__copy"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: 'easeOut' }}>
					<span className="sgn-eyebrow">
						Naturligt fryst frukt & bär
					</span>
					<h1 className="sgn-hero__title">
						Naturligt gott
						<br />
						för ditt <em>café</em>.
					</h1>
					<p className="sgn-hero__lead">
						Vi levererar färdigportionerade påsar med fryst frukt
						och bär till caféer och restauranger i hela Sverige. 17
						smaker — noll krångel.
					</p>
					<div className="sgn-hero__cta">
						<a
							href="/#kontakt"
							className="sgn-btn sgn-btn--primary">
							Kontakta oss <HiArrowRight />
						</a>
						<a href="/#smaker" className="sgn-btn sgn-btn--ghost">
							Se våra smaker
						</a>
					</div>
					<ul className="sgn-hero__bullets">
						<li>✓ Snabb leverans i hela Sverige</li>
						<li>✓ Inget svinn — bara mixa & servera</li>
						<li>✓ 100% frukt och bär</li>
					</ul>
				</motion.div>

				<motion.div
					className="sgn-hero__media"
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}>
					<div className="sgn-hero__image-wrap">
						<img
							src={heroImg}
							alt="Smoothie bowl med färska bär, mango och granola"
							width={1024}
							height={1024}
							fetchPriority="high"
							loading="eager"
							decoding="async"
						/>
					</div>
					<motion.div
						className="sgn-hero__badge"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.6 }}>
						<strong>17</strong>
						<span>unika smaker</span>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
