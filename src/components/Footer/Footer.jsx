import {
	FaInstagram,
	FaFacebook,
	FaLinkedin,
	FaWhatsapp,
} from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
	return (
		<footer className="sgn-footer">
			<div className="sgn-container sgn-footer__inner">
				<div className="sgn-footer__brand">
					<span className="sgn-footer__logo">● SoGoNice</span>
					<p>
						Naturligt frysta frukt- och bärblandningar för svenska
						caféer & restauranger.
					</p>
				</div>
				<div className="sgn-footer__cols">
					<div>
						<h4>Sidor</h4>
						<a href="/">Hem</a>
						<a href="#smaker">Smaker</a>
						<a href="/kundportratt">Våra Kunder</a>
						<a href="#kontakt">Kontakt</a>
					</div>
					<div>
						<h4>Kontakt</h4>
						<a href="mailto:info@sogonice.com">info@sogonice.com</a>
						<a href="tel:+46201180010">+46 20 11 80 10</a>
						<a
							href="https://www.google.com/maps/search/?api=1&query=Teknikv%C3%A4gen+17%2C+246+42+L%C3%B6ddek%C3%B6pinge"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Hitta till SoGoNice på Google Maps">
							<address style={{ fontStyle: 'normal' }}>
								SoGoNice
								<br />
								Teknikvägen 17
								<br />
								246 42 Löddeköpinge
							</address>
						</a>
					</div>
					<div>
						<h4>Följ oss</h4>
						<div className="sgn-footer__social">
							<a
								href="https://www.instagram.com/sogonice/"
								aria-label="Instagram"
								target="_blank"
								rel="noopener noreferrer">
								<FaInstagram />
							</a>
							<a
								href="https://www.facebook.com/sogonice"
								aria-label="Facebook"
								target="_blank"
								rel="noopener noreferrer">
								<FaFacebook />
							</a>
							<a
								href="https://www.linkedin.com/company/sogonice/?trk=ppro_cprof&originalSubdomain=se"
								aria-label="LinkedIn"
								target="_blank"
								rel="noopener noreferrer">
								<FaLinkedin />
							</a>
							<a
								href="https://web.whatsapp.com/send?phone=46706546661&text="
								aria-label="WhatsApp"
								target="_blank"
								rel="noopener noreferrer">
								<FaWhatsapp />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="sgn-container sgn-footer__bottom">
				<span>© {new Date().getFullYear()} SoGoNice AB</span>
				<span>Endast tillgängligt i Sverige</span>
			</div>
		</footer>
	);
}
