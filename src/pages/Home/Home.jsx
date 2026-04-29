import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import LogoMarquee from '../../components/LogoMarquee/LogoMarquee';
import Smaker from '../../components/Smaker/Smaker';
import HurDetFunkar from '../../components/HurDetFunkar/HurDetFunkar';
import Produkter from '../../components/Produkter/Produkter';
import KundStrip from '../../components/KundStrip/KundStrip';
import InspirationBanner from '../../components/InspirationBanner/InspirationBanner';
import Kontakt from '../../components/Kontakt/Kontakt';
import Footer from '../../components/Footer/Footer';
import FloatingCta from '../../components/FloatingCta/FloatingCta';
import '../../index.css';
import './Home.css';

export default function Home() {
	return (
		<div className="sgn-page">
			<Navbar />
			<main>
				<Hero />
				<LogoMarquee />
				<Smaker />
				<HurDetFunkar />
				<Produkter />
				<KundStrip />
				<InspirationBanner />
				<Kontakt />
			</main>
			<Footer />
			<FloatingCta />
		</div>
	);
}
