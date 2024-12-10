import { motion } from "framer-motion";

const ChatPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 hover-card max-w-md mx-auto"
    >
      <div className="flex flex-col space-y-3">
        <div className="flex items-start space-x-2">
          <span className="text-xs text-accent">AI</span>
          <div className="chat-bubble bg-gray-800 text-white self-start text-sm">
            Haan batao, kaise help kar sakta hun? 😊
          </div>
        </div>
        <div className="flex items-start space-x-2 justify-end">
          <div className="chat-bubble bg-[#025C4C] text-white self-end text-sm">
            Bhai 25 bottle set chahiye, wo stainless steel wala vacuum flask gift set with 2 cups. Budget 300 per piece hai, Gurugram sector 9 ke pass chahiye
          </div>
          <span className="text-xs text-accent">You</span>
        </div>
        <div className="flex items-start space-x-2">
          <span className="text-xs text-accent">AI</span>
          <div className="chat-bubble bg-gray-800 text-white self-start text-sm">
            Ok got it! 👍 Total budget kitna hai 25 bottles ke liye?
          </div>
        </div>
        <div className="flex items-start space-x-2 justify-end">
          <div className="chat-bubble bg-[#025C4C] text-white self-end text-sm">
            300 rupay per bottle
          </div>
          <span className="text-xs text-accent">You</span>
        </div>
        <div className="flex items-start space-x-2">
          <span className="text-xs text-accent">AI</span>
          <div className="chat-bubble bg-gray-800 text-white self-start text-sm">
            Theek hai, ye corporate gift ke liye hai kya?
          </div>
        </div>
        <div className="flex items-start space-x-2 justify-end">
          <div className="chat-bubble bg-[#025C4C] text-white self-end text-sm">
            Nahi function ke liye chahiye
          </div>
          <span className="text-xs text-accent">You</span>
        </div>
        <div className="flex items-start space-x-2">
          <span className="text-xs text-accent">Seller</span>
          <div className="chat-bubble bg-gray-800 text-white self-start text-sm">
            Sir maine check kiya hai, aapke budget mein best quality ka set available hai. Free delivery kar dunga kal subah tak. Chalega?
          </div>
        </div>
        <div className="flex items-start space-x-2 justify-end">
          <div className="chat-bubble bg-[#025C4C] text-white self-end text-sm">
            Haan perfect hai, jaldi chahiye
          </div>
          <span className="text-xs text-accent">You</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatPreview;