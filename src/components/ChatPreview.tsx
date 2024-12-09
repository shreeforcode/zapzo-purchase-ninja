import { motion } from "framer-motion";

const ChatPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 hover-card"
    >
      <div className="flex flex-col space-y-4">
        <div className="chat-bubble self-start">
          Hi! I need to purchase office supplies for our new branch.
        </div>
        <div className="chat-bubble bg-accent text-black self-end">
          I'll help you with that! Could you specify what items you need?
        </div>
        <div className="chat-bubble self-start">
          We need 20 ergonomic chairs and 10 standing desks.
        </div>
        <div className="chat-bubble bg-accent text-black self-end">
          I'll search for the best options within your budget. Give me a moment...
        </div>
      </div>
    </motion.div>
  );
};

export default ChatPreview;