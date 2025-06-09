import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleLike = () => {
    setIsLiked(true);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 2500);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleLike}
        className={`px-6 py-3 rounded-full flex items-center gap-2 transition-colors duration-300 ${
          isLiked ? "bg-yellow-600" : "bg-yellow-300 hover:bg-yellow-400"
        }`}
      >
        <span className="text-2xl">👍</span>
        <span className="font-medium text-white">いいね</span>
      </motion.button>

      <AnimatePresence>
        {showThankYou && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="fixed inset-0 flex flex-col justify-center z-50 pointer-events-none"
            >
              <motion.img
                src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
                alt="Thank you"
                className="w-[60vw] h-[50vw] object-contain self-center"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-3xl font-bold text-white -mt-24"
              >
                ありがとうございます
              </motion.p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
