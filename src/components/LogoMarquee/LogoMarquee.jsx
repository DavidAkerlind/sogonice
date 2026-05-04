import './LogoMarquee.css';

const logos = ['Sturebadet', 'AMAÍ AÇAÍ', 'Vana Spa'];

export default function LogoMarquee() {
	const items = [...logos, ...logos];
	return (
		<section className="sgn-marquee" aria-label="Våra kunder">
			<div className="sgn-container">
				<p className="sgn-marquee__title">
					Serveras på över 50 caféer & restauranger i Sverige
				</p>
			</div>
			<div className="sgn-marquee__track-wrap">
				<div className="sgn-marquee__track">
					{items.map((name, i) => (
						<div key={i} className="sgn-marquee__item">
							{name}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
