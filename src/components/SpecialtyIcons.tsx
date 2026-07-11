import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, defaultTransition } from './AnimationVariants';

const specialties = [
  { emoji: '🫀', name: 'Cardiology' },
  { emoji: '🦷', name: 'Dentistry' },
  { emoji: '🧠', name: 'Neurology' },
  { emoji: '🦴', name: 'Orthopedics' },
  { emoji: '🫁', name: 'Pulmonology' },
  { emoji: '👁️', name: 'Ophthalmology' },
  { emoji: '👂', name: 'ENT' },
  { emoji: '🤱', name: 'Pediatrics' },
];

export default function SpecialtyIcons() {
  return (
    <section className="py-section">
      <div className="container-content">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} transition={defaultTransition} className="text-[15px] font-semibold text-primary mb-4 tracking-wider uppercase">
            Specializations
          </motion.p>
          <motion.h2 variants={fadeUp} transition={defaultTransition} className="text-section font-bold text-text-dark">
            Our Medical<br />
            Specializations
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {specialties.map((spec) => (
            <motion.button
              key={spec.name}
              variants={fadeUp}
              transition={defaultTransition}
              className="group flex flex-col items-center bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <span className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300 block" role="img" aria-label={spec.name}>
                {spec.emoji}
              </span>
              <span className="text-[15px] font-bold text-text-dark">{spec.name}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
