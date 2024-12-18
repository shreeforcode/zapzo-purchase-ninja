import { motion } from "framer-motion";

const ChatPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 hover-card max-w-md mx-auto"
    >
      <div className="relative w-full" style={{ maxHeight: "600px", overflow: "hidden" }}>
        <img 
          src="https://i.ibb.co/5Fmcp5m/image.png" 
          alt="WhatsApp chat preview" 
          className="w-full h-auto rounded-lg shadow-lg"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
    </motion.div>
  );
};

export default ChatPreview;