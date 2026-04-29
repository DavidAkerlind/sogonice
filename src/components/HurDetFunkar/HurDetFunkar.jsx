import { motion } from 'framer-motion';
import { FiPackage, FiThermometer, FiCoffee } from 'react-icons/fi';
import imgBestall from '../../assets/official_pictures/002_So-Go-Nice-Vadstena-004.png';
import imgFrvara from '../../assets/official_pictures/004_SoGoNice-@-The-Retreat-Club-1.png';
import imgMixa from '../../assets/official_pictures/027_SoGoNice-@-The-Retreat-Club-9.png';
import './HurDetFunkar.css';

const steps = [
	{
		icon: <FiPackage />,
		title: '1. Beställ',
		desc: 'Välj smaker och antal påsar — vi levererar fritt i hela Sverige.',
		img: imgBestall,
	},
	{
		icon: <FiThermometer />,
		title: '2. Förvara fryst',
		desc: 'Påsarna är färdigportionerade och håller i frysen i upp till 12 månader.',
		img: imgFrvara,
	},
	{
		icon: <FiCoffee />,
		title: '3. Mixa & servera',
		desc: 'Töm en påse i mixern, tillsätt vätska och servera på 60 sekunder.',
		img: imgMixa,
	},
];

export default function HurDetFunkar() {
	return (
		<section className="sgn-how sgn-section">
			<div className="sgn-container">
				<div className="sgn-how__head">
					<span className="sgn-eyebrow">Så enkelt är det</span>
					<h2>Från frys till gäst på en minut.</h2>
				</div>
				<div className="sgn-how__grid">
					{steps.map((s, i) => (
						<motion.div
							key={s.title}
							className="sgn-how__step"
							style={{ backgroundImage: `url(${s.img})` }}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.5, delay: i * 0.1 }}>
							<div className="sgn-how__step-inner">
								<div className="sgn-how__icon">{s.icon}</div>
								<h3>{s.title}</h3>
								<p>{s.desc}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
