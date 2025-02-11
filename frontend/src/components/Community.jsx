import React from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, PlusCircle } from "lucide-react";

const Community = () => {
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
    </motion.div>
  );
};

export default Community;
