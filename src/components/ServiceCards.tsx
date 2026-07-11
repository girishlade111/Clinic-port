import { motion } from 'framer-motion';
import { Stethoscope, HeartPulse, Syringe, Microscope, Activity, Baby } from 'lucide-react';
import { fadeUp, staggerContainer, defaultTransition } from './AnimationVariants';

const services = [
  { icon: Stethoscope, title: 'General Checkup', desc: 'Comprehensive health evaluations to keep you in optimal condition and catch issues early.' },
  { icon: HeartPulse, title: 'Cardiology Care', desc: 'Expert heart health services including diagnostics, monitoring, and treatment plans.' },
  { icon: Syringe, title: 'Vaccinations', desc: 'Protect yourself and your family with our complete vaccination programs.' },
  { icon: Microscope, title: 'Lab Testing', desc: 'Advanced diagnostic testing with accurate results and rapid turnaround times.' },
  { icon: Activity, title: 'Physical Therapy', desc: 'Rehabilitation and recovery programs tailored to restore your mobility and strength.' },
  { icon: Baby, title: 'Pediatric Care', desc: 'Specialized healthcare for children from infancy through adolescence in a welcoming environment.' },
];

export default function ServiceCards() {
  return (
    <section id="services" className="py-section">
      <div className="container-content">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} transition={defaultTransition} className="text-[15px] font-semibold text-primary mb-4 tracking-wider uppercase">
            Our Services
          </motion.p>
          <motion.h2 variants={fadeUp} transition={defaultTransition} className="text-section font-bold text-text-dark">
            Quality Healthcare<br />
            Services We Provide
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              transition={defaultTransition}
              className="group bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon size={26} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-card-title font-bold text-text-dark mb-3">{service.title}</h3>
              <p className="text-[15px] text-text-body leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
