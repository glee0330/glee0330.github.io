/* script.js - Grace's Portfolio Dynamic Behavior */

const CASE_STUDIES = [
  {
    id: 'Product Designer Portfolio',
    title: "Grace's Portfolio",
    subtitle: 'Product Design portfolio made exclusively with Google AI Studio and Claude.',
    description: 'Utilizing AI technology to produce a polished and thoughtful portfolio.',
    client: 'Self',
    role: 'Product Designer',
    year: '2026',
    image: 'src/assets/images/regenerated_image_1785614873275.png',
    tags: ['Google Studio AI', 'Gemini', 'Claude Design'],
    overview: 'I wanted to revamp my portfolio and have more control over my website. Utilizing AI was my priority to show proof of concept and gaining a better understanding for code.',
    challenge: 'Understanding which AI prompts were effective in creating what I envisioned while only using free versions of AI platforms.',
    thoughtProcess: 'I need to experiment around with different platforms to maximize token usage and gain exposure to different AI tools. I chose Gemini to ideate and get baseline code and then inputted in Claude so I could get a product ready to launch quickly.',
    solution: 'After many Youtube tutorials and fiddling in AI playgrounds, I gained a better understanding of prompt initiations and where to input information in code lines. This was my first project utilizing AI to create something from ideation to production.',
    impact: ['2 AI platforms utilized', 'Practiced Python & TS', 'Responsive and intuitive website']
  },
  {
    id: 'rare-greenhouse',
    title: 'Rare Greenhouse',
    subtitle: 'E-Commerce Growth & Botanical Experience',
    description: 'Concept and creation of the website for a rare house plant business primarily focused on e-commerce sales and growth.',
    client: 'Rare Greenhouse',
    role: 'UX/UI Designer',
    year: '2026',
    image: 'src/assets/images/regenerated_image_1785615334376.png',
    tags: ['E-Commerce', 'Shopify', 'UI Design', 'Design System'],
    overview: 'Rare Greenhouse is a boutique online botanical store specializing in rare houseplants. The project aimed to increase sales and customer retention.',
    challenge: 'High drop-off rate during product selection due to lack of trust in an online business.',
    thoughtProcess: 'I wanted to prioritize social proof and authentic customer reviews, simplifying navigation to build trust, and designing a clean layout that showcases plant health clearly.',
    solution: 'Created an intuitive visual website that includes real customer reviews to build trust with new customers and create authenticity in the products.',
    impact: ['+142% Increase in organic checkout conversions', '38% Increase in customer engagement', '5.0 Star average customer trust rating']
  },
  {
    id: 'quaker-houghton-chemical',
    title: 'Quaker Houghton Chemical Redesigns',
    subtitle: 'Industrial B2B Portal & Enterprise Experience',
    description: 'User-focused redesigns for a chemical manufacturing company to improve landing site retention and customer experience.',
    client: 'Quaker Houghton',
    role: 'UX/UI Designer',
    year: '2023-2025',
    image: 'src/assets/images/regenerated_image_1785615594976.png',
    tags: ['B2B Enterprise', 'Design Systems', 'Information Architecture', 'Accessibility'],
    overview: 'Quaker Houghton needed a modernized digital footprint to streamline access to contacting the company, product information and tradeshow schedules.',
    challenge: 'Navigating pages that did not have consistent design architecture and accessibility compliance.',
    thoughtProcess: 'I started by analyzing existing site structure and mapping key user tasks to streamline contact pathway flows. I also aligned component libraries with WCAG AA accessibility rules.',
    solution: 'Restructured information hierarchy to prioritize CTAs for contact forms and product information on their pages while ensuring everything met WCAG accessibility standards.',
    impact: ['20% Increase in communication with customers', '2.4x Higher customer engagement from CTAs', 'Unified 14 global subsidiary-sites under one design library']
  }
];

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;
  
  container.innerHTML = CASE_STUDIES.map((item, idx) => `
    <article onclick="openCaseStudyModal(${idx})" class="project-card" aria-label="View case study for ${item.title}">
      <div class="project-thumb">
        <img src="${item.image}" alt="${item.title} Screenshot Mockup" onerror="this.src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'" />
        <span class="project-year-badge">${item.year}</span>
      </div>
      <div class="project-body">
        <div>
          <div class="project-tags">
            ${item.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          </div>
          <h3 class="project-card-title">${item.title}</h3>
          <p class="project-card-desc">${item.description}</p>
        </div>
        <div class="project-card-footer">
          <span>Read Case Study</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </div>
      </div>
    </article>
  `).join('');
}

function openCaseStudyModal(index) {
  const study = CASE_STUDIES[index];
  const body = document.getElementById('modal-body-content');
  if (!body) return;

  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <span style="font-size: 0.75rem; font-weight: 600; color: #8E4A38; text-transform: uppercase; letter-spacing: 0.05em;">${study.client} • ${study.year}</span>
        <h2 style="font-family: var(--font-serif); font-size: 2.25rem; font-weight: 400; margin-top: 0.25rem;">${study.title}</h2>
        <p style="font-size: 1rem; color: #736B63; margin-top: 0.25rem;">${study.subtitle}</p>
      </div>

      <div style="border-radius: 1rem; overflow: hidden; aspect-ratio: 16/9; background-color: #EFECE6;">
        <img src="${study.image}" alt="${study.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'" />
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; padding-top: 1rem; border-top: 1px solid #DED8CB;">
        <div>
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: #8E4A38; margin-bottom: 0.5rem;">Overview</h4>
          <p style="font-size: 0.8125rem; color: #736B63; line-height: 1.6;">${study.overview}</p>
        </div>
        <div>
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: #8E4A38; margin-bottom: 0.5rem;">The Challenge</h4>
          <p style="font-size: 0.8125rem; color: #736B63; line-height: 1.6;">${study.challenge}</p>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem; padding-top: 1rem; border-top: 1px solid #DED8CB;">
        <div>
          <h4 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem;">Thought Process & Strategy</h4>
          <p style="font-size: 0.8125rem; color: #736B63; line-height: 1.6;">${study.thoughtProcess}</p>
        </div>
        <div>
          <h4 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem;">Solution & Execution</h4>
          <p style="font-size: 0.8125rem; color: #736B63; line-height: 1.6;">${study.solution}</p>
        </div>
      </div>

      <div style="padding: 1.25rem; background-color: rgba(239, 236, 230, 0.6); border-radius: 1rem; border-top: 1px solid #DED8CB;">
        <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: #8E4A38; margin-bottom: 0.5rem;">Key Outcomes & Impact</h4>
        <ul style="padding-left: 1.25rem; font-size: 0.8125rem; color: #2C2825; display: flex; flex-direction: column; gap: 0.375rem;">
          ${study.impact.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  const modal = document.getElementById('case-study-modal');
  if (modal) modal.classList.add('open');
}

function closeCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  if (modal) modal.classList.remove('open');
}

function openContactModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) modal.classList.add('open');
}

function closeContactModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) modal.classList.remove('open');
}

function handleFormSubmit(e) {
  e.preventDefault();
  alert("Thank you for reaching out! Grace will get back to you shortly.");
  closeContactModal();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCaseStudyModal();
    closeContactModal();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});
