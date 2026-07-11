import { motion } from 'framer-motion';
import { Star, MapPin, ChevronRight } from 'lucide-react';
import { fadeUp, staggerContainer, defaultTransition } from './AnimationVariants';

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    rating: 4.9,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=320&q=80',
    location: 'Main Campus',
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    rating: 4.8,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=320&q=80',
    location: 'West Wing',
  },
  {
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=320&q=80',
    location: 'Children\'s Center',
  },
  {
    name: 'Dr. David Kim',
    specialty: 'Orthopedic Surgeon',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2b2?w=320&q=80',
    location: 'East Pavilion',
  },
];

export default function FindDoctor() {
  return (
    <section id="doctors" className="py-section bg-blue-light/50">
      <div className="container-content">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"
        >
          <div>
            <motion.p variants={fadeUp} transition={defaultTransition} className="text-[15px] font-semibold text-primary mb-4 tracking-wider uppercase">
              Our Team
            </motion.p>
            <motion.h2 variants={fadeUp} transition={defaultTransition} className="text-section font-bold text-text-dark">
              Find a Doctor
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} transition={defaultTransition}>
            <a
              href="#doctors"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:text-primary-dark transition-colors group"
            >
              View All Doctors
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.name}
              variants={fadeUp}
              transition={defaultTransition}
              className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="relative overflow-hidden h-[280px]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1.5">
                    <Star size={14} className="fill-rating text-rating" />
                    <span className="text-sm font-semibold text-white">{doctor.rating}</span>
                    <span className="text-xs text-white/70">({doctor.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[17px] font-bold text-text-dark mb-1">{doctor.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{doctor.specialty}</p>
                <div className="flex items-center gap-1.5 text-xs text-text-light">
                  <MapPin size={12} />
                  <span>{doctor.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
