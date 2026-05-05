import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../../assets/logo/sogonice-logo.png';
import './Navbar.css';

// link starting with # → prepend / → becomes /#section for HashRouter
const links = [
{ link: '/#hem', label: 'Hem' },
{ link: '/#smaker', label: 'Smaker' },
{ link: '/kundportratt', label: 'Våra Kunder' },
{ link: '/#kontakt', label: 'Kontakt' },
];

export default function Navbar() {
const [scrolled, setScrolled] = useState(false);
const [open, setOpen] = useState(false);

useEffect(() => {
const onScroll = () => setScrolled(window.scrollY > 30);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
return () => window.removeEventListener('scroll', onScroll);
}, []);

useEffect(() => {
document.body.style.overflow = open ? 'hidden' : '';
return () => {
document.body.style.overflow = '';
};
}, [open]);

return (
<>
<header className={`sgn-nav ${scrolled ? 'is-scrolled' : ''}`}>
<div className="sgn-nav__inner sgn-container">
<Link
to="/"
className="sgn-nav__logo"
aria-label="SoGoNice startsida">
<img
src={logo}
alt="SoGoNice"
className="sgn-nav__logo-img"
/>
<span className="sgn-nav__logo-text">SoGoNice</span>
</Link>

<nav
className="sgn-nav__links"
aria-label="Huvudnavigering">
{links.map((l) => (
<Link
key={l.link}
to={l.link}
className="sgn-nav__link"
onClick={() => setOpen(false)}>
{l.label}
</Link>
))}
</nav>

<Link
to="/#kontakt"
className="sgn-btn sgn-btn--primary sgn-nav__cta">
Kontakta oss
</Link>

<button
type="button"
className="sgn-nav__burger"
aria-label={open ? 'Stäng meny' : 'Öppna meny'}
aria-expanded={open}
onClick={() => setOpen((v) => !v)}>
{open ? <HiX size={26} /> : <HiMenu size={26} />}
</button>
</div>
</header>

{/* Mobile slide-in panel */}
<div
className={`sgn-mobile ${open ? 'is-open' : ''}`}
aria-hidden={!open}>
<Link
to="/"
className="sgn-mobile__logo"
onClick={() => setOpen(false)}
aria-label="SoGoNice startsida">
<img src={logo} alt="SoGoNice" />
</Link>
<nav className="sgn-mobile__nav">
{links.map((l) => (
<Link
key={l.link}
to={l.link}
className="sgn-mobile__link"
onClick={() => setOpen(false)}>
{l.label}
</Link>
))}
</nav>
<Link
to="/#kontakt"
className="sgn-btn sgn-btn--primary sgn-mobile__cta"
onClick={() => setOpen(false)}>
Kontakta oss
</Link>
</div>
{open && (
<button
aria-label="Stäng meny"
className="sgn-mobile__backdrop"
onClick={() => setOpen(false)}
/>
)}
</>
);
}
