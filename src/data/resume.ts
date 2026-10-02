export const experience = [
  {
    company: 'Cadence Lab', industry: 'Consulting · Detroit, MI',
    title: 'Principal Consultant – Revenue Architecture & Commercial Strategy', dates: 'Sep 2024 – Present',
    context: 'Independent consulting for retail, QSR, and service businesses, connecting customer journeys with CRM workflows and commercial operations.',
    bullets: [
      'Design customer lifecycle journeys, qualification frameworks, and sales-to-service handoffs that connect business priorities with day-to-day execution.',
      'Reworked Salesforce handoffs and onboarding criteria, reducing time-to-value by 18%.',
      'Automated HubSpot lifecycle and lead-routing workflows for multi-location businesses, saving four hours per week per commercial operator.',
      'Develop customer segmentation and engagement frameworks to identify risks and prioritize retention efforts.',
      'Create sales playbooks, business cases, and customer ROI frameworks that help teams put recommendations into practice.',
    ],
  },
  {
    company: 'Shinola', industry: 'Luxury retail · Detroit, MI',
    title: 'Commercial Accounts & Customer Experience Manager', dates: 'Aug 2022 – Sep 2024',
    context: 'Connected flagship retail experience, corporate relationships, and customer operations across an $8M annual revenue portfolio.',
    bullets: [
      'Segmented 1,100+ accounts in Salesforce and established structured outreach cadences, increasing CRM-driven account engagement from 32% to 86%.',
      'Reviewed customer handoffs and rewrote service communication workflows, reducing client escalations by 35%.',
      'Led quarterly client reviews using purchasing trends and account signals to identify friction and expansion opportunities.',
      'Coached sales and service teams on consultative communication, account retention, and relationship continuity.',
      'Piloted a new POS system at the flagship with IT and Operations before a 26-store rollout.',
    ],
  },
  {
    company: 'NeuroSync', industry: 'AI-enabled medical technology · Southfield, MI',
    title: 'Vice President of Sales', dates: 'Mar 2018 – Jun 2022',
    context: 'Led commercial strategy and enterprise sales for an AI-enabled medical technology platform, aligning clinical value with institutional buying and adoption needs.',
    bullets: [
      'Managed enterprise sales across 50 clinical, institutional, and legal accounts, from discovery through stakeholder alignment and contract execution.',
      'Recruited and coached the commercial sales team; established quotas, compensation plans, discovery frameworks, and the enterprise sales playbook.',
      'Sustained 95% multi-year client retention through CRM criteria, mutual action plans, and consistent sales-to-implementation handoffs.',
      'Aligned onboarding with clinical workflows, increasing active platform usage from 45% to 72%.',
      'Coordinated business-side implementation across 32 clinical accounts, including stakeholder alignment, configuration, training, and ongoing support.',
      'Worked with clinical and legal stakeholders to connect platform value with workflow, compliance, and adoption requirements.',
    ],
  },
];

export const resumeMarkdown = [
  '# Matthew Rabah',
  'Customer experience · CRM · AI adoption',
  'Detroit, Michigan | rabah.matthew@gmail.com | 248-217-6573 | https://www.linkedin.com/in/mattrabah/',
  '## Profile',
  'My experience spans luxury retail, AI-enabled medtech, and consulting. Across these settings, I’ve helped teams strengthen customer relationships, improve CRM practices, and turn technology into everyday habits that support adoption and retention.',
  'I bring business-side implementation experience: aligning stakeholders, improving processes, configuring CRM workflows, and training teams. My focus is how people use technology to deliver a better customer experience.',
  '## Professional experience',
  ...experience.map(job => `### ${job.company}\n\n${job.title} | ${job.dates}\n\n${job.industry}\n\n${job.context}\n\n${job.bullets.map(bullet => `- ${bullet}`).join('\n')}`),
  '## Areas of focus\n\nCX management · Customer retention · CRM improvement · Technology adoption · Lifecycle strategy · Team development · Stakeholder alignment · Customer analytics',
  '## Tools & platforms\n\nSalesforce · HubSpot · Gainsight · ChurnZero · Delighted · Jira · Confluence',
  '## Education\n\n- M.S., Customer Experience Management — Michigan State University, Eli Broad College of Business\n- B.S., Organizational Behavior — Oakland University',
  '## Certifications\n\n- Salesforce Certified Agentforce Specialist\n- HubSpot Inbound Marketing',
  '## Speaking\n\n- Creative Mornings Detroit — Systems Thinking in Customer Experience\n- MSU CXM360 Conference — Loyalty Programs in Luxury Retail & Commercial Expansion\n- University of Michigan — Customer Experience & Revenue Operations',
].join('\n\n') + '\n';
