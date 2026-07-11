import { motion } from 'framer-motion';
import { CalendarCheck, ChevronRight } from 'lucide-react';

export default function SecondCTA() {
  return (
    <section className="pb-section">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-text-dark to-[#0f1a2e] px-8 py-16 lg:py-20"
        >
          <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[60px]" />
          <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[60px]" />

          <div className="relative text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6">
              <CalendarCheck size={28} className="text-primary" />
            </div>
            <h2 className="text-[32px] lg:text-[42px] font-bold text-white mb-4 leading-tight">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Take the first step towards better health. Book an appointment online and experience healthcare that puts you first.
            </p>
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-[15px] font-bold rounded-button hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97]"
            >
              Book Appointment Now
              <ChevronRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
