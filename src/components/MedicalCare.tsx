import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award } from 'lucide-react';
import { fadeUp, staggerContainer, defaultTransition } from './AnimationVariants';

const highlights = [
  { icon: Shield, title: 'Patient Safety First', desc: 'Rigorous safety protocols and infection control measures.' },
  { icon: Clock, title: 'Same-Day Appointments', desc: 'Convenient scheduling with minimal waiting times.' },
  { icon: Users, title: 'Multidisciplinary Team', desc: 'Collaborative care from a team of experienced specialists.' },
  { icon: Award, title: 'Accredited Excellence', desc: 'Accredited by leading healthcare quality organizations.' },
];

export default function MedicalCare() {
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
            Our Commitment
          </motion.p>
          <motion.h2 variants={fadeUp} transition={defaultTransition} className="text-section font-bold text-text-dark">
            Medical Care You<br />
            Can Count On
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={defaultTransition}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-all duration-300">
                <item.icon size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-[18px] font-bold text-text-dark mb-2">{item.title}</h3>
              <p className="text-[15px] text-text-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
