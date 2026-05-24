export type NavItem = { label: string; href: string };
export type Service = { id: string; name: string; description: string; icon: string; imageSrc: string; imageAlt: string };
export type ServiceCategory = { title: string; items: string[] };
export type Partner = { name: string; logoSrc: string; logoAlt: string; width: number; height: number };
export type FooterLinkGroup = { title: string; links: { label: string; href: string }[] };
export type ContactChannel = { label: string; value: string; href: string };
export type KpiItem = { label: string; value: string };
export type Industry = { name: string; summary: string };
export type ProcessStep = { title: string; detail: string };
export type CaseStudy = { client: string; outcome: string; metric: string; summary: string };
export type ComplianceItem = { title: string; detail: string };
export type FaqItem = { q: string; a: string };
export type ResourceItem = { title: string; type: string; summary: string };

export type CompanyProfile = { name: string; tagline: string; mission: string; location: string; phone: string; email: string; socials: { label: string; href: string }[]; };

export const COMPANY: CompanyProfile = { name: 'Hum Edge Solutions (Pvt) Ltd', tagline: 'Innovate. Secure. Scale.', mission: 'We design and operate resilient digital infrastructure for enterprises that cannot afford downtime.', location: 'Emirates Tower, 2nd & 3rd Floor, M-13, F-7 Markaz, Islamabad', phone: '0315-5365552', email: 'info@humedgesolutions.com', socials: [{ label: 'LinkedIn', href: '#' }], };

export const NAV_LINKS: NavItem[] = [{ label: 'Services', href: '/services' },{ label: 'About', href: '/about' },{ label: 'Careers', href: '/careers' },{ label: 'Contact', href: '/contact' }];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { title: 'AI Solutions', items: ['GenAI copilots', 'Model governance', 'MLOps pipelines', 'Automation agents'] },
  { title: 'Cybersecurity', items: ['SOC services', 'Threat hunting', 'Zero trust rollout', 'Vulnerability management'] },
  { title: 'Data Center', items: ['Colocation strategy', 'Power optimization', 'Rack modernization', 'Disaster recovery'] },
  { title: 'Cloud Services', items: ['Cloud migration', 'FinOps optimization', 'Kubernetes platform', 'Hybrid architecture'] },
  { title: 'Big Data & IoT', items: ['Data lakes', 'Realtime analytics', 'IoT ingestion', 'Predictive dashboards'] },
  { title: 'Network Services', items: ['SD-WAN', 'Campus networking', 'NOC support', 'Performance monitoring'] },
  { title: 'Professional Services', items: ['Architecture advisory', 'PMO support', 'Compliance roadmap', 'Platform audits'] },
  { title: 'Managed Services', items: ['24/7 operations', 'Incident response', 'SLA reporting', 'Lifecycle management'] },
];

const serviceImages = ['aisolutions.png','cybersecurity.png','datacenter.png','cloudservices.png','bigdata.png','networkservices.png','professionalservices.png','managedservices.png'];

export const SERVICES: Service[] = SERVICE_CATEGORIES.map((c, i) => ({
  id: c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  name: c.title,
  description: c.items[0],
  icon: ['Bot', 'Shield', 'Server', 'Cloud', 'Database', 'Network', 'Briefcase', 'Settings'][i],
  imageSrc: `/images/services/${serviceImages[i]}`,
  imageAlt: `${c.title} enterprise solutions`,
}));

export const PARTNERS: Partner[] = [
  { name: 'AWS', logoSrc: '/logos/partners/aws.png', logoAlt: 'AWS logo', width: 130, height: 44 },
  { name: 'Microsoft', logoSrc: '/logos/partners/microsoft.png', logoAlt: 'Microsoft logo', width: 168, height: 44 },
  { name: 'Google Cloud', logoSrc: '/logos/partners/googlecloud.png', logoAlt: 'Google Cloud logo', width: 186, height: 44 },
  { name: 'Cisco', logoSrc: '/logos/partners/cisco.png', logoAlt: 'Cisco logo', width: 130, height: 44 },
  { name: 'Fortinet', logoSrc: '/logos/partners/fortinet.png', logoAlt: 'Fortinet logo', width: 164, height: 44 },
  { name: 'CrowdStrike', logoSrc: '/logos/partners/crowdstrike.png', logoAlt: 'CrowdStrike logo', width: 196, height: 44 },
  { name: 'Dell', logoSrc: '/logos/partners/dell.png', logoAlt: 'Dell logo', width: 122, height: 44 },
  { name: 'VMware', logoSrc: '/logos/partners/vmware.png', logoAlt: 'VMware logo', width: 158, height: 44 },
  { name: 'NVIDIA', logoSrc: '/logos/partners/nvidia.png', logoAlt: 'NVIDIA logo', width: 152, height: 44 },
  { name: 'Palo Alto', logoSrc: '/logos/partners/paloalto.png', logoAlt: 'Palo Alto logo', width: 178, height: 44 },
  { name: 'Snowflake', logoSrc: '/logos/partners/snowflake.png', logoAlt: 'Snowflake logo', width: 172, height: 44 },
  { name: 'Datadog', logoSrc: '/logos/partners/datadog.png', logoAlt: 'Datadog logo', width: 162, height: 44 },
];

export const KPIS: KpiItem[] = [{ label: 'Enterprise clients', value: '500+' },{ label: 'Platform uptime', value: '99.9%' },{ label: 'Response SLA', value: '<30 min' },{ label: 'Security reviews/year', value: '120+' }];
export const INDUSTRIES: Industry[] = [{ name: 'Financial Services', summary: 'Secure, compliant infrastructure for high-volume transactions.' },{ name: 'Telecom', summary: 'Scalable network and observability platforms for always-on services.' },{ name: 'Public Sector', summary: 'Mission-critical modernization with governance-first delivery.' },{ name: 'Healthcare', summary: 'Protected data systems with uptime and audit-readiness.' },{ name: 'Enterprise', summary: 'Outcome-focused IT transformation for distributed teams.' }];
export const PROCESS_STEPS: ProcessStep[] = [{ title: 'Assess', detail: 'We baseline risk, performance, architecture debt, and business constraints.' },{ title: 'Architect', detail: 'We design a secure, scalable target state with clear milestones.' },{ title: 'Implement', detail: 'We execute modernization in controlled phases with measurable outputs.' },{ title: 'Operate', detail: 'We provide 24/7 managed operations, response, optimization, and reporting.' }];
export const CASE_STUDIES: CaseStudy[] = [{ client: 'Regional Bank (Anonymized)', metric: '42% faster incident response', outcome: 'SOC transformation', summary: 'Consolidated tooling and introduced threat-hunting playbooks for a resilient security posture.' },{ client: 'National Retail Group', metric: '31% cloud spend reduction', outcome: 'FinOps and cloud optimization', summary: 'Re-architected workloads and governance controls to cut waste and improve release velocity.' },{ client: 'Healthcare Network', metric: '99.97% service availability', outcome: 'Data center modernization', summary: 'Improved continuity architecture and failover readiness for patient-facing systems.' }];
export const COMPLIANCE_ITEMS: ComplianceItem[] = [{ title: 'ISO-aligned controls', detail: 'Operational controls mapped to internationally accepted security standards.' },{ title: 'Continuous vulnerability management', detail: 'Routine scanning, prioritization, and remediation tracking.' },{ title: 'Access governance', detail: 'Role-based controls and periodic access reviews across critical systems.' },{ title: 'Audit-ready reporting', detail: 'Decision-grade documentation for compliance and executive reviews.' }];
export const FAQS: FaqItem[] = [{ q: 'How quickly can we start?', a: 'Most programs start with a discovery workshop within 5-10 business days.' },{ q: 'Do you support hybrid environments?', a: 'Yes. We operate across on-prem, private cloud, and multi-cloud environments.' },{ q: 'Can you work with our internal teams?', a: 'Absolutely. We embed with your engineering and security teams to accelerate outcomes.' },{ q: 'What reporting do stakeholders receive?', a: 'You receive SLA, risk, uptime, and delivery reporting tailored to executive and technical audiences.' }];
export const RESOURCES: ResourceItem[] = [{ type: 'Guide', title: 'Enterprise Cyber Resilience Playbook', summary: 'Practical controls and workflows for reducing breach impact.' },{ type: 'Brief', title: 'Cloud Cost Optimization for CFO + CTO Alignment', summary: 'A governance model for controlling spend while preserving delivery speed.' },{ type: 'Checklist', title: 'MSP Transition Readiness Checklist', summary: 'How to de-risk handover and improve service continuity from day one.' }];


