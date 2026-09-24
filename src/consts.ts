/** Single source of truth for identity strings used in metadata and JSON-LD. */

export const SITE = {
  url: 'https://yashverma-cloud.github.io',
  name: 'Yash Verma',
  /** Official title, must match the resume (CLAUDE.md). */
  jobTitle: 'Infrastructure Engineer, Cloud Operations',
  employer: 'Copado',
  location: 'Jaipur, India',
  title: 'Yash Verma — cloud infrastructure engineer',
  description:
    'I keep production Kubernetes running when nodes die. Infrastructure Engineer, Cloud Operations at Copado, in Jaipur. Autoscaling, cost and observability across multi-region production infrastructure. Five years on AWS and GCP, at Treebo, BLG and now Copado.',
  analyticsId: 'G-75ZS56MGG5',
} as const;

/** Assembled in the browser so no raw address appears in the HTML (CLAUDE.md). */
export const EMAIL_PARTS = ['yashverma.cloud', 'gmail.com'] as const;

export const SAME_AS = [
  'https://www.linkedin.com/in/yashcloud/',
  'https://github.com/yashverma-cloud',
  'https://www.instagram.com/yashverma_cloud/',
  'https://www.facebook.com/profile.php?id=61593973846731',
  'https://www.linkedin.com/company/145197666/',
] as const;
