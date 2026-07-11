import { motion } from 'framer-motion';
import { Play, ShieldCheck, Clock, Star, CalendarCheck, ChevronRight, Phone } from 'lucide-react';
import { staggerContainer, defaultTransition, fadeUp } from './AnimationVariants';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '5000+', label: 'Patients' },
  { value: '50+', label: 'Doctors' },
];

const trustBadges = [
  { icon: ShieldCheck, text: 'Accredited' },
  { icon: Clock, text: '24/7 Emergency' },
  { icon: Star, text: '4.9/5 Rating' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[850px] pt-[88px] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] bg-primary/3 rounded-full blur-[80px]" />
      </div>

      <div className="container-content h-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[calc(850px-88px)] py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} transition={defaultTransition} className="flex items-center gap-6 mb-8">
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-sm font-medium text-text-body">
                  <badge.icon size={16} className="text-primary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.h1 variants={fadeUp} transition={defaultTransition} className="text-hero font-bold text-text-dark mb-6">
              Excellence in<br />
              <span className="text-primary">Healthcare</span> With<br />
              Compassionate Care
            </motion.h1>

            <motion.p variants={fadeUp} transition={defaultTransition} className="text-lg text-text-body leading-relaxed max-w-[540px] mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </motion.p>

            <motion.div variants={fadeUp} transition={defaultTransition} className="flex items-center gap-10 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-[32px] font-bold text-primary leading-none">{stat.value}</div>
                  <div className="text-sm text-text-body mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} transition={defaultTransition} className="flex items-center gap-4 flex-wrap">
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-[15px] font-semibold rounded-button hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97]"
              >
                Make Appointment
                <ChevronRight size={18} />
              </a>
              <a
                href="#video"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-border text-text-dark text-[15px] font-semibold rounded-button hover:border-primary/30 hover:text-primary transition-all duration-300 active:scale-[0.97] group"
              >
                <span className="w-10 h-10 rounded-full bg-blue-light flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Play size={18} className="text-primary ml-0.5" />
                </span>
                Watch Video
              </a>
            </motion.div>

            <motion.div variants={fadeUp} transition={defaultTransition} className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-text-light font-medium">Emergency Hotline</div>
                <div className="text-[17px] font-bold text-text-dark">+1 (555) 911-2468</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-image overflow-hidden shadow-hero-image">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=640&q=80"
                alt="Modern Healthcare Facility"
                className="w-full h-[560px] lg:h-[620px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute top-8 right-[-20px] lg:right-[-30px] bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-floating min-w-[180px]"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CalendarCheck size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-text-light font-medium">Next Available</div>
                  <div className="text-[15px] font-bold text-text-dark">Today 2:30 PM</div>
                  <div className="text-xs text-text-body mt-0.5">Dr. Sarah Johnson</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute bottom-8 left-[-20px] lg:left-[-30px] bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-floating min-w-[160px]"
            >
              <div className="flex items-center gap-2 mb-2">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={14} className="fill-rating text-rating" />
                ))}
              </div>
              <div className="text-[18px] font-bold text-text-dark">4.9/5</div>
              <div className="text-xs text-text-body">1,234 Reviews</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
