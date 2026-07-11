import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { fadeUp, staggerContainer, defaultTransition } from './AnimationVariants';

const features = [
  'State-of-the-art diagnostic equipment',
  'Board-certified physicians and specialists',
  'Personalized treatment plans',
  'Minimal wait times',
  'Electronic health records',
  'Telemedicine consultations',
];

export default function FeaturedServices() {
  return (
    <section className="py-section bg-blue-light/50">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="rounded-[28px] overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=640&q=80"
                alt="Medical equipment"
                className="w-full h-[460px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={fadeUp} transition={defaultTransition} className="text-[15px] font-semibold text-primary mb-4 tracking-wider uppercase">
              Why Choose Us
            </motion.p>
            <motion.h2 variants={fadeUp} transition={defaultTransition} className="text-section font-bold text-text-dark mb-6">
              Advanced Technology,<br />
              Personal Touch
            </motion.h2>
            <motion.p variants={fadeUp} transition={defaultTransition} className="text-base text-text-body leading-relaxed mb-8">
              We combine the latest medical technology with personalized attention to deliver the highest standard of care for every patient who walks through our doors.
            </motion.p>

            <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <motion.div
                  key={feature}
                  variants={fadeUp}
                  transition={defaultTransition}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-[15px] font-medium text-text-dark">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
