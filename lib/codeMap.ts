// Mapping between component identifiers and code snippets. The keys
// correspond to values used in the `data-code-id` attributes throughout
// the application. Each entry stores the originating file name and
// a representative snippet of how the component is implemented. Keep
// snippets concise (around 10–25 lines) to maintain legibility in
// tooltips.

const codeMap: Record<string, { file: string; code: string }> = {
  "hero-section": {
    file: "Hero.tsx",
    code: `export default function Hero() {\n  const { scrollY } = useScroll();\n  const y = useTransform(scrollY, [0, 300], [0, -100]);\n\n  return (\n    <section id=\"hero\" style={{ minHeight: '80vh' }}>\n      <motion.div style={{ y }}>\n        <h1>Vangelis (Van) Kaliafetis</h1>\n        <p>I like difficult problems and simple solutions...</p>\n        <Link href=\"#contact\">\n          <button>Get in touch</button>\n        </Link>\n      </motion.div>\n    </section>\n  );\n}`
  },
  "about-section": {
    file: "About.tsx",
    code: `export default function About() {\n  return (\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>Hello, I am Van. I enjoy designing simple things that do difficult jobs...</p>\n      <ul>\n        <li>Based in the UK</li>\n        <li>Enjoys thoughtful design</li>\n        <li>Learning web development</li>\n        <li>Detail‑oriented</li>\n      </ul>\n    </section>\n  );\n}`
  },
  "experience-section": {
    file: "Experience.tsx",
    code: `const experiences = [\n  { period: '2025 – Present', title: 'Building this portfolio', description: 'Experimenting with Next.js...' },\n  ...\n];\n\nexport default function Experience() {\n  return (\n    <section id=\"experience\">\n      <h2>Experience</h2>\n      <ul>\n        {experiences.map(item => (\n          <li key={item.title}>\n            <span>{item.period}</span>\n            <h3>{item.title}</h3>\n            <p>{item.description}</p>\n          </li>\n        ))}\n      </ul>\n    </section>\n  );\n}`
  },
  "interests-section": {
    file: "Interests.tsx",
    code: `const items = [\n  { icon: '⚙️', label: 'Engineering' },\n  { icon: '⌚', label: 'Watches' },\n  { icon: '📷', label: 'Photography' },\n  { icon: '🏋️', label: 'Fitness' },\n];\n\nexport default function Interests() {\n  return (\n    <section id=\"interests\">\n      <h2>Interests</h2>\n      <div className=\"grid\">\n        {items.map(item => (\n          <div key={item.label}>\n            <span>{item.icon}</span>\n            <span>{item.label}</span>\n          </div>\n        ))}\n      </div>\n    </section>\n  );\n}`
  },
  "contact-section": {
    file: "Contact.tsx",
    code: `export async function sendMessage(formData: FormData) {\n  'use server';\n  const name = String(formData.get('name'));\n  const email = String(formData.get('email'));\n  const message = String(formData.get('message'));\n  if (process.env.RESEND_API_KEY) {\n    // send via Resend\n  } else {\n    // fallback to mailto link\n  }\n}\n\nexport default function Contact() {\n  return (\n    <section id=\"contact\">\n      <h2>Contact</h2>\n      <form action={sendMessage}>\n        <input name='name' />\n        <input name='email' />\n        <textarea name='message' />\n        <button type='submit'>Send</button>\n      </form>\n    </section>\n  );\n}`
  }
};

export default codeMap;