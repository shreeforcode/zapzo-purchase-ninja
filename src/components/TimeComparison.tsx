import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TimeComparison = () => {
  return (
    <div className="text-center">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full"
      >
        Time Savings
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        From Days to Minutes
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card p-8 text-center"
        >
          <div className="text-4xl font-bold text-red-500 mb-2">3-5 Days</div>
          <div className="text-gray-400">Traditional Process</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ArrowRight className="w-8 h-8 text-accent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="glass-card p-8 text-center"
        >
          <div className="text-4xl font-bold text-green-500 mb-2">15 Minutes</div>
          <div className="text-gray-400">With ZapZo</div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimeComparison;