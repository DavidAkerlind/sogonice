import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import './FloatingCta.css';

export default function FloatingCta() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const onScroll = () => setShow(window.scrollY > 400);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const scrollToContact = (e) => {
		e.preventDefault();
		const el = document.getElementById('kontakt');
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		} else {
			window.location.href = '/#kontakt';
		}
	};

	return (
		<div className={`sgn-fab ${show ? 'is-show' : ''}`}>
			<a
				href="https://wa.me/46812345678"
				target="_blank"
				rel="noreferrer"
				className="sgn-fab__btn sgn-fab__btn--wa"
				aria-label="Chatta med oss på WhatsApp">
				<FaWhatsapp />
				<span className="sgn-fab__pulse" aria-hidden />
			</a>
			<button
				type="button"
				onClick={scrollToContact}
				className="sgn-fab__btn sgn-fab__btn--primary">
				<HiMail />
				<span>Kontakta oss</span>
			</button>
		</div>
	);
}
