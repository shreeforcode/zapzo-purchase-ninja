import { motion } from "framer-motion";

const ChatPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 hover-card max-w-md mx-auto"
    >
      <div className="flex flex-col space-y-4">
        <div className="chat-bubble bg-[#025C4C] text-white self-end text-sm">
          Kya aapke paas 25 sets hai?
        </div>
        <div className="chat-bubble bg-gray-800 text-white self-start text-sm">
          You need 25 bottles in gurgram
        </div>
        <div className="chat-bubble bg-[#025C4C] text-white self-end text-sm">
          Haan, sahi hai. Kya price 300 ke andar hai?
        </div>
        <div className="chat-bubble bg-[#025C4C] text-white self-end text-sm">
          Ye wala bottle thoda alag hai. Kya Kitchen Bloom wala hai aapke paas?
        </div>
        <div className="chat-bubble bg-gray-800 text-white self-start text-sm">
          No sir we are dealing in pexpo as we are manufacturer of pexpo
        </div>
        <div className="chat-bubble bg-[#025C4C] text-white self-end text-sm">
          Okay, samajh gaya. Thanks for letting me know.
        </div>
        <div className="chat-bubble bg-gray-800 text-white self-start text-sm">
          Sure
        </div>
      </div>
    </motion.div>
  );
};

export default ChatPreview;