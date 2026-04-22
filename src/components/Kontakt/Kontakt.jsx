import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiAlertCircle } from 'react-icons/fi';
import ReCAPTCHA from 'react-google-recaptcha';
import './Kontakt.css';

// Replace with your real site key from https://www.google.com/recaptcha/admin
// The key below is Google's public test key — always passes, use only in development.
const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

const REQUIRED = ['namn', 'efternamn', 'epost', 'samtycke'];

function validate(form) {
	const e = {};
	if (!form.namn.trim()) e.namn = 'Förnamn är obligatoriskt.';
	if (!form.efternamn.trim()) e.efternamn = 'Efternamn är obligatoriskt.';
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
	const [captchaToken, setCaptchaToken] = useState(null);
	const [captchaError, setCaptchaError] = useState(false);
	const recaptchaRef = useRef(null);
	const [form, setForm] = useState({
		namn: '',
		efternamn: '',
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
		if (!captchaToken) {
			setCaptchaError(true);
		}
		if (Object.keys(errors).length > 0 || !captchaToken) {
			const firstError = REQUIRED.find((f) => errors[f]);
			if (firstError) {
				const el = e.target.elements[firstError];
				if (el) el.focus();
			}
			return;
		}
		setSent(true);
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

				<motion.form
					className="sgn-kontakt__form"
					onSubmit={onSubmit}
					noValidate
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}>
					{sent ? (
						<div className="sgn-kontakt__sent">
							<h3>Tack!</h3>
							<p>Vi hör av oss inom 24 timmar.</p>
						</div>
					) : (
						<>
							{/* Namn + Efternamn */}
							<div className="sgn-kontakt__row">
								<div className="sgn-kontakt__field">
									<label htmlFor="f-namn">
										<span>
											Förnamn{' '}
											<span className="sgn-req">*</span>
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
											showError('namn') ? 'is-error' : ''
										}
									/>
									<ErrorMsg field="namn" />
								</div>
								<div className="sgn-kontakt__field">
									<label htmlFor="f-efternamn">
										<span>
											Efternamn{' '}
											<span className="sgn-req">*</span>
										</span>
									</label>
									<input
										id="f-efternamn"
										name="efternamn"
										value={form.efternamn}
										onChange={onChange}
										onBlur={onBlur}
										aria-describedby={
											showError('efternamn')
												? 'err-efternamn'
												: undefined
										}
										aria-invalid={!!showError('efternamn')}
										className={
											showError('efternamn')
												? 'is-error'
												: ''
										}
									/>
									<ErrorMsg field="efternamn" />
								</div>
							</div>

							{/* E-post + Telefon */}
							<div className="sgn-kontakt__row">
								<div className="sgn-kontakt__field">
									<label htmlFor="f-epost">
										<span>
											E-post{' '}
											<span className="sgn-req">*</span>
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
										aria-invalid={!!showError('epost')}
										className={
											showError('epost') ? 'is-error' : ''
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

							{/* Är ni kunder idag? — visas alltid men krävs om företag är ifyllt */}
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
											checked={form.arkund === 'ja'}
											onChange={onChange}
										/>
										Ja
									</label>
									<label className="sgn-kontakt__radio-label">
										<input
											type="radio"
											name="arkund"
											value="nej"
											checked={form.arkund === 'nej'}
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
								<legend>Jag vill bli kontaktad via…</legend>
								<div className="sgn-kontakt__radio-group">
									<label className="sgn-kontakt__radio-label">
										<input
											type="radio"
											name="kontaktvia"
											value="epost"
											checked={
												form.kontaktvia === 'epost'
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
												form.kontaktvia === 'telefon'
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
										aria-invalid={!!showError('samtycke')}
									/>
									<span>
										<strong>
											Samtycke{' '}
											<span className="sgn-req">*</span>
										</strong>{' '}
										— Genom att klicka på
										&ldquo;Skicka&rdquo; så godkänner jag
										att de uppgifter jag fyllt i sparas i
										systemet.
									</span>
								</label>
								<ErrorMsg field="samtycke" />
							</div>

							{/* CAPTCHA */}
							<div className="sgn-kontakt__captcha">
								<ReCAPTCHA
									ref={recaptchaRef}
									sitekey={RECAPTCHA_SITE_KEY}
									onChange={(token) => {
										setCaptchaToken(token);
										if (token) setCaptchaError(false);
									}}
									onExpired={() => setCaptchaToken(null)}
								/>
								{captchaError && (
									<AnimatePresence>
										<motion.span
											className="sgn-kontakt__error"
											initial={{ opacity: 0, y: -4 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -4 }}
											transition={{ duration: 0.18 }}
											role="alert"
											aria-live="polite">
											<FiAlertCircle aria-hidden="true" />
											Vänligen bekräfta att du inte är en
											robot.
										</motion.span>
									</AnimatePresence>
								)}
							</div>

							<button
								type="submit"
								className="sgn-btn sgn-btn--primary">
								Skicka
							</button>
							<p className="sgn-kontakt__fine">
								Vi svarar oftast samma dag. Inga spam-mejl, bara
								svar på din förfrågan.
							</p>
						</>
					)}
				</motion.form>
			</div>
		</section>
	);
}
