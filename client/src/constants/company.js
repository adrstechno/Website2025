/**
 * Single source of truth for all company data.
 * Update here → updates everywhere automatically.
 */

export const COMPANY = {
  name:      'ADRS Techno',
  legalName: 'ADRS Technology Private Limited',
  founded:   '2022',
  email:     'support@adrstechno.com',
  phone:     '+91 9201347033',
  whatsapp:  '919201347033',
};

export const OFFICES = [
  {
    type:    'Headquarters',
    city:    'Jabalpur',
    name:    'Jabalpur Office',
    address: '71, Dadda Nagar, Karmeta, Jabalpur, Madhya Pradesh 482001',
    mapUrl:  'https://www.google.com/maps/search/?api=1&query=71+Dadda+Nagar+Karmeta+Jabalpur+MP+482001',
  },
  {
    type:    'Regional Office',
    city:    'Bhopal',
    name:    'Bhopal Office',
    address: 'Plot No. R25, Opp. Railway Track, Zone 02, Maharana Pratap Nagar, Bhopal, MP 462011',
    mapUrl:  'https://www.google.com/maps/search/?api=1&query=Maharana+Pratap+Nagar+Bhopal+MP+462011',
  },
  {
    type:    'Regional Office',
    city:    'Raipur',
    name:    'Raipur Office',
    address: 'Shangar Nagar, VIP Road, Raipur, Chhattisgarh 492001',
    mapUrl:  'https://www.google.com/maps/search/?api=1&query=Shangar+Nagar+VIP+Road+Raipur+CG+492001',
  },
];

/**
 * Canonical stats — same number on EVERY page.
 * Source: verified company data (May 2025).
 */
export const STATS = [
  { end: 40,   suffix: '+', label: 'Specialist Developers' },
  { end: 100,  suffix: '+', label: 'Projects Delivered' },
  { end: 1499, suffix: '+', label: 'LinkedIn Followers' },
  { end: 6,    suffix: '+', label: 'Countries Served' },
];

/** Compact hero trust bar — 4 most impactful */
export const HERO_STATS = [
  { end: 100,  suffix: '+', label: 'Projects Delivered' },
  { end: 40,   suffix: '+', label: 'Specialist Developers' },
  { end: 6,    suffix: '+', label: 'Countries Served' },
  { end: 1499, suffix: '+', label: 'LinkedIn Followers' },
];

/** WhatsApp deep-link templates */
export const WA = {
  general: `https://wa.me/919201347033?text=Hi%20ADRS%20Techno%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20talk%3F`,
  consult: `https://wa.me/919201347033?text=Hi%20ADRS%20Techno%2C%20I%27d%20like%20to%20book%20a%20free%20consultation`,
  hire:    `https://wa.me/919201347033?text=Hi%2C%20I%20want%20to%20hire%20a%20developer%20from%20ADRS%20Techno`,
  project: `https://wa.me/919201347033?text=Hi%20ADRS%20Techno%2C%20I%20have%20a%20project%20to%20discuss`,
};

/**
 * Calendly scheduling link.
 * Replace with your actual Calendly URL from https://calendly.com/app/personal/link
 */
export const CALENDLY_URL = 'https://calendly.com/adrstechnosoft/30min';

/** Developer hiring rates */
export const DEV_RATES = {
  display: '$25–$45/hr',
  note:    'Rate depends on experience level and engagement model.',
};

/** Socials */
export const SOCIALS = {
  linkedin:  'https://www.linkedin.com/company/adrs-technology/',
  github:    'https://github.com/adrstechno',
  instagram: 'https://www.instagram.com/adrstechno',
};
