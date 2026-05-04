import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus } from 'react-icons/hi';
import { faq } from '../../data/faq';
import { faqJsonLd } from '../../lib/jsonLd';
import './FAQ.css';

export default function FAQ() {
	const [open, setOpen] = useState(0);

	return (
		<section
			id="faq"
			className="sgn-faq sgn-section"
			aria-label="Vanliga frågor">
			<div className="sgn-container sgn-faq__inner">
				<div className="sgn-faq__head">
					<span className="sgn-eyebrow">Vanliga frågor</span>
					<h2>
						Allt du <em>undrar</em> innan du beställer.
					</h2>
					<p>
						Hittar du inte svaret? Skicka ett meddelande nedan så
						hör vi av oss inom 24 timmar.
					</p>
				</div>
				<ul className="sgn-faq__list">
					{faq.map((item, i) => {
						const isOpen = open === i;
						return (
							<li
								key={item.q}
								className={`sgn-faq__item ${isOpen ? 'is-open' : ''}`}>
								<button
									type="button"
									className="sgn-faq__q"
									aria-expanded={isOpen}
									onClick={() => setOpen(isOpen ? -1 : i)}>
									<span>{item.q}</span>
									<HiPlus
										className="sgn-faq__icon"
										aria-hidden
									/>
								</button>
								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											key="content"
											className="sgn-faq__a-wrap"
											initial={{ height: 0, opacity: 0 }}
											animate={{
												height: 'auto',
												opacity: 1,
											}}
											exit={{ height: 0, opacity: 0 }}
											transition={{
												duration: 0.28,
												ease: [0.4, 0, 0.2, 1],
											}}>
											<div className="sgn-faq__a">
												<p>{item.a}</p>
												<a
													href={`#kontakt?topic=${encodeURIComponent(item.q)}`}
													className="sgn-faq__cta"
													onClick={(e) => {
														e.preventDefault();
														const url = new URL(
															window.location
																.href,
														);
														url.searchParams.set(
															'topic',
															item.q,
														);
														window.history.replaceState(
															{},
															'',
															url,
														);
														document
															.getElementById(
																'kontakt',
															)
															?.scrollIntoView({
																behavior:
																	'smooth',
															});
													}}>
													Fråga oss om detta →
												</a>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</li>
						);
					})}
				</ul>
			</div>
			{/* FAQ JSON-LD for Google rich results */}
			<script
				type="application/ld+json"
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: faqJsonLd(faq) }}
			/>
		</section>
	);
}
