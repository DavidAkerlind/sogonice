// Helpers to generate JSON-LD strings for TanStack head().scripts injection.

export function organizationJsonLd() {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'SoGoNice',
		url: 'https://sogonice.com/',
		email: 'info@sogonice.com',
		telephone: '+46 20 11 80 10',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Teknikvägen 17',
			postalCode: '246 42',
			addressLocality: 'Löddeköpinge',
			addressCountry: 'SE',
		},
		areaServed: 'SE',
		sameAs: [
			'https://www.instagram.com/sogonice/',
			'https://www.facebook.com/sogonice/',
			'https://www.linkedin.com/company/sogonice/',
		],
	});
}

export function faqJsonLd(faq) {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faq.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.a,
			},
		})),
	});
}
