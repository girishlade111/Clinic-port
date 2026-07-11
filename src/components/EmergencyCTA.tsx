import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

export default function EmergencyCTA() {
  return (
    <section className="py-section">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary via-primary to-primary-dark px-8 py-16 lg:py-20"
        >
          <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-white/5 rounded-full blur-[60px]" />
          <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px]" />

          <div className="relative text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-6">
              <Phone size={28} className="text-white" />
            </div>
            <h2 className="text-[32px] lg:text-[42px] font-bold text-white mb-4 leading-tight">
              Emergency Care Available 24/7
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Our emergency department is open around the clock, every day of the year. When every minute matters, count on us to provide immediate care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+15559112468"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary text-[15px] font-bold rounded-button hover:bg-white/90 transition-all duration-300 hover:shadow-xl active:scale-[0.97]"
              >
                <Phone size={18} />
                +1 (555) 911-2468
              </a>
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white text-[15px] font-semibold rounded-button hover:bg-white/10 transition-all duration-300 active:scale-[0.97]"
              >
                Visit Emergency Room
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
