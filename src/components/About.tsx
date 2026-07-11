import { motion } from 'framer-motion';
import { HeartPulse, ChevronRight } from 'lucide-react';
import { fadeLeft, fadeUp, staggerContainer, defaultTransition } from './AnimationVariants';

const stats = [
  { value: '15000+', label: 'Patients Served' },
  { value: '25+', label: 'Specialists' },
  { value: '50+', label: 'Awards' },
];

export default function About() {
  return (
    <section id="about" className="py-section">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={fadeLeft} transition={defaultTransition} className="text-section font-bold text-text-dark mb-6">
              Compassionate Care,<br />
              Advanced Medicine
            </motion.h2>

            <motion.p variants={fadeLeft} transition={defaultTransition} className="text-lg text-text-body leading-relaxed mb-4">
              For over two decades, we've been dedicated to providing exceptional healthcare that combines cutting-edge medical technology with the personal touch our patients deserve.
            </motion.p>

            <motion.p variants={fadeLeft} transition={defaultTransition} className="text-base text-text-body leading-relaxed mb-8">
              Our multidisciplinary team of specialists works collaboratively to ensure every patient receives comprehensive care tailored to their unique needs.
            </motion.p>

            <motion.div variants={fadeLeft} transition={defaultTransition} className="flex gap-10 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-[30px] font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-text-body mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} transition={defaultTransition}>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-[15px] font-semibold rounded-button hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97]"
              >
                Learn More About Us
                <ChevronRight size={18} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="rounded-[28px] overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=640&q=80"
                alt="Modern medical facility"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-floating"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <HeartPulse size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-[20px] font-bold text-text-dark">75%</div>
                  <div className="text-xs text-text-body">Positive Rating</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
