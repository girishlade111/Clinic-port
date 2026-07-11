import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { fadeUp, staggerContainer, defaultTransition } from './AnimationVariants';

const footerLinks = [
  {
    title: 'Quick Links',
    links: ['About Us', 'Our Services', 'Find a Doctor', 'Departments', 'Careers', 'Contact'],
  },
  {
    title: 'For Patients',
    links: ['Patient Portal', 'Medical Records', 'Insurance Info', 'Billing', 'FAQs', 'Feedback'],
  },
  {
    title: 'Departments',
    links: ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Ophthalmology', 'Emergency'],
  },
];

const SocialIcon = ({ type }: { type: string }) => {
  const paths = {
    Facebook: <><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></>,
    Twitter: <><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></>,
    Instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
    LinkedIn: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      {paths[type as keyof typeof paths]}
    </svg>
  );
};

const socials = [
  { type: 'Facebook', href: '#', label: 'Facebook' },
  { type: 'Twitter', href: '#', label: 'Twitter' },
  { type: 'Instagram', href: '#', label: 'Instagram' },
  { type: 'LinkedIn', href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white">
      <div className="container-content py-section">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10"
        >
          <motion.div variants={fadeUp} transition={defaultTransition} className="lg:col-span-2">
            <a href="#hero" className="text-[28px] font-bold text-white tracking-tight block mb-5">
              Clinic
            </a>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Providing exceptional healthcare services with a team of dedicated professionals committed to your well-being.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={16} className="text-primary" />
                123 Medical Drive, Health City, HC 12345
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={16} className="text-primary" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Mail size={16} className="text-primary" />
                info@clinic.com
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <SocialIcon type={social.type} />
                </a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((group) => (
            <motion.div key={group.title} variants={fadeUp} transition={defaultTransition}>
              <h4 className="text-[15px] font-bold text-white mb-5">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Clinic Healthcare. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/40 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-white/40 hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
