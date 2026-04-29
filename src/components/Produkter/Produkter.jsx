import { motion } from 'framer-motion';
import { LuBlend } from 'react-icons/lu';
import { FaGlassWhiskey } from 'react-icons/fa';
import { PiMartiniFill } from 'react-icons/pi';
import { MdRiceBowl } from 'react-icons/md';
import imgSmoothie from '../../assets/official_pictures/017_So-Go-Nice-Vadstena-022.png';
import imgFruitshake from '../../assets/official_pictures/016_SoGoNice-@-The-Retreat-Club-191.png';
import imgMocktail from '../../assets/official_pictures/So-Go-Nice-Vadstena-124-604x403.jpg';
import imgBowl from '../../assets/official_pictures/So-Go-Nice-Vadstena-372-446x669.jpg';
import './Produkter.css';

const items = [
	{
		name: 'Smoothie',
		desc: 'Den klassiska — krämig och frisk.',
		Icon: LuBlend,
		img: imgSmoothie,
	},
	{
		name: 'FruitShake®',
		desc: 'Vår signaturprodukt med extra textur.',
		Icon: FaGlassWhiskey,
		img: imgFruitshake,
	},
	{
		name: 'Mocktail',
		desc: 'Alkoholfria drinkar i restaurangklass.',
		Icon: PiMartiniFill,
		img: imgMocktail,
	},
	{
		name: 'Smoothie Bowl',
		desc: 'Toppad med granola, frukt och bär.',
		Icon: MdRiceBowl,
		img: imgBowl,
	},
];

export default function Produkter() {
	return (
		<section className="sgn-prod sgn-section">
			<div className="sgn-container">
				<div className="sgn-prod__head">
					<span className="sgn-eyebrow">Produktkategorier</span>
					<h2>
						Fyra sätt att <em>servera</em> magin.
					</h2>
				</div>
				<div className="sgn-prod__grid">
					{items.map((p, i) => (
						<motion.article
							key={p.name}
							className="sgn-prod__card"
							style={{ backgroundImage: `url(${p.img})` }}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: i * 0.08 }}>
							<div className="sgn-prod__card-inner">
								<span className="sgn-prod__icon" aria-hidden>
									<p.Icon />
								</span>
								<h3>{p.name}</h3>
								<p>{p.desc}</p>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
