import { motion } from "framer-motion";
import "./Produkter.css";

const items = [
  { name: "Smoothie", desc: "Den klassiska — krämig och frisk.", emoji: "🥤" },
  { name: "FruitShake®", desc: "Vår signaturprodukt med extra textur.", emoji: "🍓" },
  { name: "Mocktail", desc: "Alkoholfria drinkar i restaurangklass.", emoji: "🍹" },
  { name: "Smoothie Bowl", desc: "Toppad med granola, frukt och bär.", emoji: "🍇" },
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="sgn-prod__emoji" aria-hidden>
                {p.emoji}
              </span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
