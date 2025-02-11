import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, X } from "lucide-react";

const Community = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 1 }}
      className="bg-[#111826] min-h-screen flex flex-col items-center p-6"
    >
      {/* Header Section */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ type: "spring", stiffness: 100 }}
        className="text-3xl font-bold text-[#ffffff] mb-4"
      >
        Welcome to Fusion Community
      </motion.h1>
      
      {/* Add Thought Button */}
      <motion.button 
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9, rotate: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center gap-2 px-4 py-2 bg-[#19202E] text-white rounded-lg shadow-md hover:bg-[#1D2432] transition"
        onClick={() => setIsModalOpen(true)}
      >
        <PlusCircle size={20} /> Add Your Thought
      </motion.button>
      
      {/* Latest Posts Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl mt-6"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-xl font-semibold text-[#ffffff] mb-3"
        >
          Latest Posts
        </motion.h2>
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            className="p-4 border rounded-lg shadow-md bg-[#272F3E]"
          >
            <p className="text-white">"React is amazing! Loving the Framer Motion animations."</p>
            <p className="text-sm text-gray-300 mt-1">- User123</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            className="p-4 border rounded-lg shadow-md bg-[#272F3E]"
          >
            <p className="text-white">"Fusion Community is the best place to share ideas!"</p>
            <p className="text-sm text-gray-300 mt-1">- DevGuru</p>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Modal */}
      {isModalOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-[#19202E] p-6 rounded-lg shadow-lg w-80 text-white relative"
          >
            <button 
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-2">Share Your Thought</h2>
            <textarea 
              className="w-full p-2 rounded-lg bg-[#272F3E] text-white focus:outline-none"
              placeholder="Write something..."
            ></textarea>
            <button 
              className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg w-full"
              onClick={() => setIsModalOpen(false)}
            >
              Post
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Community;
