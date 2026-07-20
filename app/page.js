import PrintButton from "./components/PrintButton";

const summary =
  "AI Solutions Architect and Creative Technologist with 15+ years of experience evolving from QA engineering and project management into large-scale AI and automation systems. Proven track record of shipping 120+ production GenAI applications, leading AI adoption at scale, and delivering measurable business impact including $1M+ in cost savings and 20,000+ hours reclaimed annually through automation. Expert at bridging experimental AI work with secure, scalable production systems using LLMs, RAG architectures, and agentic workflows.";

const contactLine =
  "Phone +1 437 243 3693 | Email: alex@seshwithfriends.org | LinkedIn: linkedin.com/in/amorac/ | Website: eloruga.com | GitHub: github.com/Oruga420";

const certifications = [
  { name: "Building with the Claude API by Anthropic", url: "https://verify.skilljar.com/c/i7afkiqzynjg" },
  { name: "Model Context Protocol: Advanced Topics by Anthropic", url: "https://verify.skilljar.com/c/4yt4ts5nw3x6" },
  { name: "Claude with Amazon Bedrock by Anthropic", url: "https://verify.skilljar.com/c/egs8ki5i7d84" },
  { name: "Claude Code in Action by Anthropic", url: "https://verify.skilljar.com/c/agr239nxhyg7" },
  { name: "AI Fluency Capabilities and Limitations by Anthropic", url: "https://verify.skilljar.com/c/ccgc3utersyh" },
  { name: "Introduction to agent skills by Anthropic", url: "https://verify.skilljar.com/c/fegw3ejkpeey" },
  { name: "Introduction to subagents by Anthropic", url: "https://verify.skilljar.com/c/7rc3rrf9moto" },
  { name: "Google AI", url: "https://www.coursera.org/account/accomplishments/specialization/QC4G7ZD5283I" },
  { name: "AI for Content Creation by Google", url: "https://www.coursera.org/account/accomplishments/verify/KH7ZLDJDT6Z3" },
  { name: "AI for App Building by Google", url: "https://www.coursera.org/account/accomplishments/verify/Y3X1A9416TK3" },
  { name: "AI for Data Analysis by Google", url: "https://www.coursera.org/account/accomplishments/verify/LZTEJ3FDTRZK" },
  { name: "AI for Writing and Communicating by Google", url: "https://www.coursera.org/account/accomplishments/verify/8GR2Y4OJ5E2U" },
  { name: "AI for Brainstorming and Planning by Google", url: "https://www.coursera.org/account/accomplishments/verify/B5HRRAAR0HY8" },
  { name: "AI for Research and Insights by Google", url: "https://www.coursera.org/account/accomplishments/verify/QZB94QHRUV0L" },
  { name: "AI Fundamentals by Google", url: "https://www.coursera.org/account/accomplishments/verify/BWQDY2ROMRP2" },
  { name: "GenAI in Social Media Marketing by Meta", url: "https://www.coursera.org/account/accomplishments/verify/ZDQ3T6R18E3R" },
  { name: "GenAI in Data Analytics by Meta", url: "https://www.coursera.org/account/accomplishments/verify/WA5ONIOQ41A2" },
  { name: "Real-World AI for Everyone", url: "https://www.coursera.org/account/accomplishments/specialization/YIIMAFI7SXEZ" },
  { name: "AI Automation with Claude", url: "https://www.coursera.org/account/accomplishments/verify/V9OWZ3DYPU1C" },
  { name: "AI Collaboration with Claude", url: "https://www.coursera.org/account/accomplishments/verify/WAKHN8NV5KAM" },
  { name: "AWS Generative AI and AI Agents with Amazon Bedrock", url: "https://www.coursera.org/account/accomplishments/professional-cert/43EFUJF5ARC9" },
  { name: "Getting Started with AWS Generative AI for Developers", url: "https://www.coursera.org/account/accomplishments/verify/YSSCUISHWGUM" },
  { name: "Generative AI Applications with Amazon Bedrock", url: "https://www.coursera.org/account/accomplishments/verify/YISUIK4L1HAU" },
  { name: "Building AI Agents with Snowflake", url: "https://www.coursera.org/account/accomplishments/verify/O2MRUJXOB5MP" },
  { name: "Building Generative AI Apps to Talk to Your Data", url: "https://www.coursera.org/account/accomplishments/verify/R1LGEZIPKQ7C" },
  { name: "Introduction to Generative AI with Snowflake", url: "https://www.coursera.org/account/accomplishments/verify/JKFOEFAUGCB4" },
  { name: "Introduction to Neural Networks and PyTorch", url: "https://www.coursera.org/account/accomplishments/verify/NRJ3Y3VJQTLB" },
  { name: "AI Fundamentals with Claude", url: "https://www.coursera.org/account/accomplishments/verify/MM7BOCYYWE1C" },
  { name: "Claude Code in Action", url: "https://www.coursera.org/account/accomplishments/verify/LVN8I6INAAAW" },
  { name: "Model Context Protocol: Advanced Topics", url: "https://www.coursera.org/account/accomplishments/verify/OWFJL0ZOCH10" },
  { name: "Introduction to Model Context Protocol", url: "https://www.coursera.org/account/accomplishments/verify/7U2YK8V9HMHR" },
  { name: "Gen AI Agents: Transform Your Organization", url: "https://www.coursera.org/account/accomplishments/verify/F8W4IP5260ZK" },
  { name: "Discover the Art of Prompting", url: "https://www.coursera.org/account/accomplishments/verify/L8M9M3AP79F6" },
  { name: "Maximize Productivity With AI Tools", url: "https://www.coursera.org/account/accomplishments/verify/H37I9548PY8Z" },
  { name: "Stay Ahead of the AI Curve", url: "https://www.coursera.org/account/accomplishments/verify/PAJNJ8TCZIS3" },
  { name: "Use AI Responsibly", url: "https://www.coursera.org/account/accomplishments/verify/S12B4VHKTRCM" },
  { name: "Introduction to Deep Learning & Neural Networks with Keras", url: "https://www.coursera.org/account/accomplishments/verify/4C5JZLRFNSKG" },
  { name: "Machine Learning with Python", url: "https://www.coursera.org/account/accomplishments/verify/A4815ODPD4J5" },
  { name: "Introduction to AI", url: "https://www.coursera.org/account/accomplishments/verify/GGS5J0DT3PYA" },
  { name: "Google AI Essentials", url: "https://www.credly.com/badges/c64f7e5e-208d-4f2b-9aa5-aaf00181724f/linked_in_profile" },
];

const skillGroups = [
  {
    title: "Artificial Intelligence & Automation",
    items: [
      "Generative AI (LLMs)",
      "Agentic Workflows",
      "Retrieval-Augmented Generation (RAG)",
      "MCP Tools & AI Orchestration",
    ],
  },
  {
    title: "Cloud & Web",
    items: ["Google Cloud Platform (GCP)", "AWS", "Vercel", "Next.js"],
  },
  {
    title: "CRM & Enterprise Platforms",
    items: [
      "Salesforce (Agentforce, AI Associate, SCA)",
      "Marketing Cloud Account Engagement (MCAE)",
    ],
  },
  {
    title: "Technical & Leadership",
    items: ["Agile / Scrum", "Project Management"],
  },
];

const experiences = [
  {
    company: "Sesh | AI Solutions",
    location: "Toronto, Ontario",
    role: "AI Solutions Architect",
    date: "Nov 2021 - Present",
    bullets: [
      "Founded and led an AI consultancy delivering 120+ GenAI applications and 90+ AI chatbots for 30+ clients across multiple industries.",
      "Designed and deployed production-grade AI systems, including RAG pipelines, agentic workflows, and custom automation tools.",
      "Built AI-ready marketing websites and landing pages integrated with automation backends for real-time interaction and conversion.",
      "Led and grew a 100+ member AI community, delivering hands-on workshops and free education focused on practical AI adoption.",
      "Acted as principal architect across all engagements, translating ambiguous business intent into scalable technical solutions.",
    ],
  },
  {
    company: "Assent",
    location: "Canada",
    role: "AI Solutions Architect (Contract)",
    date: "Feb 2025 - Nov 2025",
    bullets: [
      "Delivered $1M+ in operational savings by designing and deploying agentic workflows and custom MCP tools that replaced manual processes.",
      "Increased internal AI adoption from 47% to 97% through secure, scalable GenAI implementations embedded into daily operations.",
      "Architected and productionized a multi-model AI stack using OpenAI, Anthropic, and Gemini, including live RAG integrations and governance controls to safely move prototypes into production.",
    ],
  },
  {
    company: "Online Business Systems",
    location: "Toronto, Ontario",
    role: "Salesforce Consultant",
    date: "Jun 2024 - Nov 2024",
    bullets: [
      "Implemented Agentforce and Marketing Cloud Account Engagement (MCAE) solutions for enterprise clients.",
      "Designed AI assistants, engagement programs, lead scoring models, and automated email workflows aligned with sales and marketing teams.",
    ],
  },
  {
    company: "Globalization Partners",
    location: "Ontario, Canada",
    role: "Salesforce Manager",
    date: "Nov 2018 - Nov 2023",
    bullets: [
      "Managed and scaled a large Salesforce organization with 1,000+ licenses across sales, marketing, and operations.",
      "Built the company's first internal GenAI chatbot (GIA), introducing early AI-assisted development and automation workflows.",
      "Acted as the technical bridge between business stakeholders and engineering teams to ensure scalable, compliant solutions.",
    ],
  },
  {
    company: "Praxis",
    location: "Mexico",
    role: "Project Manager (Software Factory)",
    date: "2012",
    bullets: [
      "Managed software delivery projects for Scotiabank under Time & Materials (T&M) delivery models.",
      "Owned resource allocation, timelines, and budget control, coordinating development, QA, and stakeholders.",
    ],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    location: "Peru",
    role: "QA Manager / Scrum Master",
    date: "2009 - 2010",
    client: "Client: Banco Cencosud",
    bullets: [
      "Led a 7-person QA team as QA Manager and Scrum Master.",
      "Owned sprint planning, delivery coordination, and QA strategy for banking systems.",
    ],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    location: "Mexico",
    role: "Senior QA Engineer",
    date: "2008 - 2009",
    client: "Client: Banco IXE",
    bullets: [
      "Worked on QA for check reading and processing machines in high-compliance financial environments.",
      "Validated accuracy, reliability, and edge-case handling for automated document processing systems.",
    ],
  },
  {
    company: "Community & Projects",
    location: "",
    role: "",
    date: "",
    bullets: [
      "Founder: 100+ member AI community focused on real-world AI education and adoption.",
      "Public Contributor: 100+ AI and automation projects available on GitHub.",
    ],
    isStandalone: true,
  },
];

export default function Home() {
  return (
    <main className="page">
      <article className="resume" aria-label="Resume">
        <div className="utility-bar">
          <PrintButton />
        </div>

        <header className="header">
          <div className="name">Alejandro de la Mora</div>
          <div className="contact-line">Toronto, Ontario, Canada.</div>
          <div className="contact-line">{contactLine}</div>
        </header>

        <div className="rule" aria-hidden="true" />

        <h1 className="title">AI Solutions Architect</h1>

        <div className="rule" aria-hidden="true" />

        <section className="section">
          <h2 className="section-title">Professional Summary</h2>
          <p className="summary">{summary}</p>
        </section>

        <section className="section">
          <h2 className="section-title">Core Skills</h2>
          <table className="skills-table">
            <tbody>
              {skillGroups.map((group) => (
                <tr key={group.title}>
                  <td className="skills-group">{group.title}</td>
                  <td>
                    <ul className="skills-list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2 className="section-title">Professional Experience</h2>
          {experiences.map((item) => (
            <div className="experience-item" key={`${item.company}-${item.role}`}>
              <div className="experience-top">
                <div className="company">{item.company}</div>
                {item.location ? (
                  <div className="location">{item.location}</div>
                ) : null}
              </div>
              {!item.isStandalone ? (
                <div className="experience-meta">
                  <div className="role">{item.role}</div>
                  <div className="date-range">{item.date}</div>
                </div>
              ) : null}
              {item.client ? (
                <div className="client-line">{item.client}</div>
              ) : null}
              <ul className="experience-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            Ingenieria en Sistemas Universidad Marista de Merida, Mexico 2004 -
            2007
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Certifications</h2>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert.url}>
                <a
                  className="cert-link"
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
