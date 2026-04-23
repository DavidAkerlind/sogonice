import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiAlertCircle } from 'react-icons/fi';
import './Kontakt.css';

const REQUIRED = ['namn', 'epost', 'samtycke'];

function validate(form) {
	const e = {};
	if (!form.namn.trim()) e.namn = 'Namn är obligatoriskt.';
	if (!form.epost.trim()) {
		e.epost = 'E-post är obligatoriskt.';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.epost)) {
		e.epost = 'Ange en giltig e-postadress.';
	}
	if (form.foretag.trim() && !form.arkund) {
		e.arkund = 'Vänligen ange om ni är kunder till SoGoNice idag.';
	}
	if (!form.samtycke) e.samtycke = 'Du måste godkänna för att skicka.';
	return e;
}

export default function Kontakt() {
	const [sent, setSent] = useState(false);
	const [sealing, setSealing] = useState(false);
	const formWrapRef = useRef(null);

	const [form, setForm] = useState({
		namn: '',
		epost: '',
		telefon: '',
		foretag: '',
		meddelande: '',
		arkund: '',
		kontaktvia: '',
		samtycke: false,
	});
	const [touched, setTouched] = useState({});
	const [submitAttempted, setSubmitAttempted] = useState(false);

	const errors = validate(form);
	const showError = (field) =>
		(touched[field] || submitAttempted) && errors[field];

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm((f) => ({
			...f,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const onBlur = (e) => {
		setTouched((t) => ({ ...t, [e.target.name]: true }));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setSubmitAttempted(true);
		if (Object.keys(errors).length > 0) {
			const firstError = REQUIRED.find((f) => errors[f]);
			if (firstError) {
				const el = e.target.elements[firstError];
				if (el) el.focus();
			}
			return;
		}
		// Trigger envelope-fold animation; show "sent" after it finishes
		setSealing(true);
	};

	const ErrorMsg = ({ field }) =>
		showError(field) ? (
			<AnimatePresence>
				<motion.span
					key={field + '-err'}
					className="sgn-kontakt__error"
					initial={{ opacity: 0, y: -4 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -4 }}
					transition={{ duration: 0.18 }}
					role="alert"
					aria-live="polite">
					<FiAlertCircle aria-hidden="true" />
					{errors[field]}
				</motion.span>
			</AnimatePresence>
		) : null;

	// Total animation timeline (seconds):
	// 0.0 - 0.7  : 4 triangle flaps fold in
	// 0.8 - 1.2  : seal stamps in
	// 1.6 - 2.3  : envelope flies off to the right
	// 2.3        : reveal "Tack!" message
	const FOLD = 0.7;
	const STAMP_DELAY = 0.8;
	const FLY_DELAY = 1.6;
	const REVEAL_AT = 2300;

	const handleAnimationStep = () => {
		// fallback in case onAnimationComplete doesn't fire
	};

	return (
		<section id="kontakt" className="sgn-kontakt sgn-section">
			<div className="sgn-container sgn-kontakt__inner">
				<motion.div
					className="sgn-kontakt__copy"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					<span className="sgn-eyebrow">Kontakt</span>
					<h2>
						Få en <em>offert</em> inom 24 timmar.
					</h2>
					<p>
						Vi vill gärna komma i kontakt med dig som gillar vårt
						koncept eller som bara vill ge oss tips eller råd.
					</p>
					<ul className="sgn-kontakt__info">
						<li>
							<FiMail />
							<a
								href="mailto:info@sogonice.com"
								aria-label="Maila SoGoNice">
								info@sogonice.com
							</a>
						</li>
						<li>
							<FiPhone />
							<a
								href="tel:+46201180010"
								aria-label="Ring SoGoNice">
								+46 20 11 80 10
							</a>
						</li>
						<li>
							<FiMapPin />
							<a
								href="https://www.google.com/maps/search/?api=1&query=Teknikv%C3%A4gen+17%2C+246+42+L%C3%B6ddek%C3%B6pinge"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Hitta till SoGoNice på Google Maps">
								SoGoNice, Teknikvägen 17, 246 42 Löddeköpinge
							</a>
						</li>
					</ul>
				</motion.div>

				<div className="sgn-kontakt__form-wrap" ref={formWrapRef}>
					<AnimatePresence mode="wait">
						{sent ? (
							<motion.div
								key="thanks"
								className="sgn-kontakt__form sgn-kontakt__thanks"
								initial={{ opacity: 0, scale: 0.96 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, ease: 'easeOut' }}>
								<div className="sgn-kontakt__sent">
									<h3>Tack!</h3>
									<p>Vi hör av oss inom 24 timmar.</p>
								</div>
							</motion.div>
						) : (
							<motion.div
								key="form"
								className="sgn-kontakt__form-stage"
								initial={{ opacity: 0, y: 20 }}
								whileInView={
									!sealing ? { opacity: 1, y: 0 } : undefined
								}
								viewport={{ once: true }}
								animate={
									sealing
										? {
												x: ['0%', '0%', '120%'],
												rotate: [0, 0, 8],
												opacity: [1, 1, 0],
											}
										: undefined
								}
								transition={
									sealing
										? {
												duration: 2.3,
												times: [0, FLY_DELAY / 2.3, 1],
												ease: 'easeIn',
											}
										: { duration: 0.5, delay: 0.1 }
								}
								onAnimationComplete={() => {
									if (sealing) {
										setTimeout(() => setSent(true), 0);
									}
								}}>
								<form
									className="sgn-kontakt__form"
									onSubmit={onSubmit}
									noValidate
									aria-busy={sealing}>
									{/* Namn */}
									<div className="sgn-kontakt__field">
										<label htmlFor="f-namn">
											<span>
												Namn{' '}
												<span className="sgn-req">
													*
												</span>
											</span>
										</label>
										<input
											id="f-namn"
											name="namn"
											value={form.namn}
											onChange={onChange}
											onBlur={onBlur}
											aria-describedby={
												showError('namn')
													? 'err-namn'
													: undefined
											}
											aria-invalid={!!showError('namn')}
											className={
												showError('namn')
													? 'is-error'
													: ''
											}
										/>
										<ErrorMsg field="namn" />
									</div>

									{/* E-post + Telefon */}
									<div className="sgn-kontakt__row">
										<div className="sgn-kontakt__field">
											<label htmlFor="f-epost">
												<span>
													E-post{' '}
													<span className="sgn-req">
														*
													</span>
												</span>
											</label>
											<input
												id="f-epost"
												name="epost"
												type="email"
												value={form.epost}
												onChange={onChange}
												onBlur={onBlur}
												aria-describedby={
													showError('epost')
														? 'err-epost'
														: undefined
												}
												aria-invalid={
													!!showError('epost')
												}
												className={
													showError('epost')
														? 'is-error'
														: ''
												}
											/>
											<ErrorMsg field="epost" />
										</div>
										<div className="sgn-kontakt__field">
											<label htmlFor="f-telefon">
												<span>Telefon</span>
											</label>
											<input
												id="f-telefon"
												name="telefon"
												type="tel"
												value={form.telefon}
												onChange={onChange}
												onBlur={onBlur}
											/>
										</div>
									</div>

									{/* Ev. företag */}
									<div className="sgn-kontakt__field">
										<label htmlFor="f-foretag">
											<span>Ev. företag</span>
										</label>
										<input
											id="f-foretag"
											name="foretag"
											value={form.foretag}
											onChange={onChange}
											onBlur={onBlur}
										/>
									</div>

									{/* Är ni kunder idag? */}
									<fieldset
										className={`sgn-kontakt__fieldset${showError('arkund') ? ' is-error' : ''}`}>
										<legend>
											Är ni kunder till SoGoNice idag?
											{form.foretag.trim() && (
												<span className="sgn-kontakt__required-mark">
													{' '}
													*
												</span>
											)}
										</legend>
										<div className="sgn-kontakt__radio-group">
											<label className="sgn-kontakt__radio-label">
												<input
													type="radio"
													name="arkund"
													value="ja"
													checked={
														form.arkund === 'ja'
													}
													onChange={onChange}
												/>
												Ja
											</label>
											<label className="sgn-kontakt__radio-label">
												<input
													type="radio"
													name="arkund"
													value="nej"
													checked={
														form.arkund === 'nej'
													}
													onChange={onChange}
												/>
												Nej
											</label>
										</div>
										<ErrorMsg field="arkund" />
									</fieldset>

									{/* Meddelande */}
									<div className="sgn-kontakt__field">
										<label htmlFor="f-meddelande">
											<span>Meddelande</span>
										</label>
										<textarea
											id="f-meddelande"
											name="meddelande"
											rows={6}
											value={form.meddelande}
											onChange={onChange}
											onBlur={onBlur}
											placeholder="Berätta gärna om hur många portioner ni serverar i veckan.."
										/>
									</div>

									{/* Kontaktval */}
									<fieldset className="sgn-kontakt__fieldset">
										<legend>
											Jag vill bli kontaktad via…
										</legend>
										<div className="sgn-kontakt__radio-group">
											<label className="sgn-kontakt__radio-label">
												<input
													type="radio"
													name="kontaktvia"
													value="epost"
													checked={
														form.kontaktvia ===
														'epost'
													}
													onChange={onChange}
												/>
												E-post
											</label>
											<label className="sgn-kontakt__radio-label">
												<input
													type="radio"
													name="kontaktvia"
													value="telefon"
													checked={
														form.kontaktvia ===
														'telefon'
													}
													onChange={onChange}
												/>
												Telefon
											</label>
										</div>
									</fieldset>

									{/* Samtycke */}
									<div className="sgn-kontakt__field">
										<label className="sgn-kontakt__samtycke">
											<input
												type="checkbox"
												name="samtycke"
												checked={form.samtycke}
												onChange={onChange}
												onBlur={onBlur}
												aria-invalid={
													!!showError('samtycke')
												}
											/>
											<span>
												<strong>
													Samtycke{' '}
													<span className="sgn-req">
														*
													</span>
												</strong>{' '}
												— Genom att klicka på
												&ldquo;Skicka&rdquo; så
												godkänner jag att de uppgifter
												jag fyllt i sparas i systemet.
											</span>
										</label>
										<ErrorMsg field="samtycke" />
									</div>
									<button
										type="submit"
										className="sgn-btn sgn-btn--primary"
										disabled={sealing}>
										Skicka
									</button>
									<p className="sgn-kontakt__fine">
										Vi svarar oftast samma dag. Inga
										spam-mejl, bara svar på din förfrågan.
									</p>

									{/* Envelope-fold overlay */}
									<AnimatePresence>
										{sealing && (
											<motion.div
												className="sgn-envelope"
												initial={{ opacity: 1 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
												aria-hidden="true">
												<motion.span
													className="sgn-envelope__flap sgn-envelope__flap--top"
													initial={{
														transform:
															'rotateX(-180deg)',
													}}
													animate={{
														transform:
															'rotateX(0deg)',
													}}
													transition={{
														duration: FOLD,
														ease: [
															0.6, 0.05, 0.2, 1,
														],
													}}
												/>
												<motion.span
													className="sgn-envelope__flap sgn-envelope__flap--bottom"
													initial={{
														transform:
															'rotateX(180deg)',
													}}
													animate={{
														transform:
															'rotateX(0deg)',
													}}
													transition={{
														duration: FOLD,
														ease: [
															0.6, 0.05, 0.2, 1,
														],
													}}
												/>
												<motion.span
													className="sgn-envelope__flap sgn-envelope__flap--left"
													initial={{
														transform:
															'rotateY(180deg)',
													}}
													animate={{
														transform:
															'rotateY(0deg)',
													}}
													transition={{
														duration: FOLD,
														ease: [
															0.6, 0.05, 0.2, 1,
														],
														delay: 0.05,
													}}
												/>
												<motion.span
													className="sgn-envelope__flap sgn-envelope__flap--right"
													initial={{
														transform:
															'rotateY(-180deg)',
													}}
													animate={{
														transform:
															'rotateY(0deg)',
													}}
													transition={{
														duration: FOLD,
														ease: [
															0.6, 0.05, 0.2, 1,
														],
														delay: 0.05,
													}}
												/>
												<motion.div
													className="sgn-envelope__seal"
													initial={{
														scale: 4,
														opacity: 0,
														rotate: -25,
													}}
													animate={{
														scale: 1,
														opacity: 1,
														rotate: -12,
													}}
													transition={{
														delay: STAMP_DELAY,
														duration: 0.35,
														ease: [
															0.2, 1.4, 0.4, 1,
														],
													}}>
													<span>SoGoNice</span>
													<small>SEALED</small>
												</motion.div>
											</motion.div>
										)}
									</AnimatePresence>
								</form>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
