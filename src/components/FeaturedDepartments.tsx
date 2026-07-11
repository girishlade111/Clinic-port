import { motion } from 'framer-motion';
import { Heart, Brain, Stethoscope, Eye, Bone } from 'lucide-react';
import { fadeUp, staggerContainer, defaultTransition } from './AnimationVariants';

const departments = [
  { icon: Heart, name: 'Cardiology', color: 'text-red-500', bg: 'bg-red-50', count: '12 Specialists' },
  { icon: Brain, name: 'Neurology', color: 'text-purple-500', bg: 'bg-purple-50', count: '8 Specialists' },
  { icon: Stethoscope, name: 'General Medicine', color: 'text-green-500', bg: 'bg-green-50', count: '15 Specialists' },
  { icon: Eye, name: 'Ophthalmology', color: 'text-blue-500', bg: 'bg-blue-50', count: '6 Specialists' },
  { icon: Bone, name: 'Orthopedics', color: 'text-orange-500', bg: 'bg-orange-50', count: '10 Specialists' },
];

export default function FeaturedDepartments() {
  return (
    <section id="departments" className="py-section bg-blue-light/50">
      <div className="container-content">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} transition={defaultTransition} className="text-[15px] font-semibold text-primary mb-4 tracking-wider uppercase">
            Our Departments
          </motion.p>
          <motion.h2 variants={fadeUp} transition={defaultTransition} className="text-section font-bold text-text-dark">
            Comprehensive Medical<br />
            Specialties
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {departments.map((dept) => (
            <motion.a
              key={dept.name}
              variants={fadeUp}
              transition={defaultTransition}
              href="#departments"
              className="group flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl ${dept.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <dept.icon size={28} className={dept.color} />
              </div>
              <h3 className="text-[17px] font-bold text-text-dark mb-1.5">{dept.name}</h3>
              <p className="text-sm text-text-light">{dept.count}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
