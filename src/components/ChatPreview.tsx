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
        <div className="chat-bubble bg-gray-800 text-white self-start text-sm">
          soon.
        </div>
        <div className="chat-bubble bg-[#025C4C] text-white self-end text-sm">
          Need to buy 25 quantities of this type of bottle set :
          Limited-time deal: Kitchen Bloom Stainless Steel Vacuum Insulated
          Bottle Water Flask Gift Set With Two Cups Hot & Cold | Gifts
          For Employees | Corporate Gift Items | Vacuum Flask Set With 2
          Mugs (Random Color) - 500 Ml
          
          Near sector 9, gurugram, Haryana
          Looking for something under 300
        </div>
        <div className="chat-bubble bg-gray-800 text-white self-start text-sm">
          Got it! 👍 Total budget for 25 bottles?
        </div>
        <div className="chat-bubble bg-[#025C4C] text-white self-end text-sm">
          Under 300 per bottle
        </div>
        <div className="chat-bubble bg-gray-800 text-white self-start text-sm">
          Cool! Just to confirm, is this for a corporate gift?
        </div>
        <div className="chat-bubble bg-[#025C4C] text-white self-end text-sm">
          No we want for a function
        </div>
        <div className="chat-bubble bg-gray-800 text-white self-start text-sm">
          What date is the function planned for?
        </div>
        <div className="chat-bubble bg-[#025C4C] text-white self-end text-sm">
          I want it ASAP
        </div>
      </div>
    </motion.div>
  );
};

export default ChatPreview;