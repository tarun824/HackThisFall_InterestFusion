import React from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, Rocket, Star } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-white text-white py-8 text-center shadow-md">
        <motion.h1
          className="text-4xl font-bold text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About InterestFusion
        </motion.h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {["Welcome", "Mission", "Innovation", "What We Do", "Vision"].map((title, index) => (
          <motion.section
            key={title}
            className="bg-white rounded-lg shadow-lg p-8 border-2 border-purple-500 opacity-0 hover:opacity-100 hover:bg-purple-50 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <h2 className="text-3xl font-bold text-purple-700 mb-4 flex items-center gap-2">
              {title === "Mission" && <Lightbulb className="text-purple-500" />}
              {title === "Innovation" && <Rocket className="text-purple-500" />}
              {title === "What We Do" && <Users className="text-purple-500" />}
              {title === "Vision" && <Star className="text-purple-500" />}
              {title === "Welcome" ? "Welcome to InterestFusion" : `Our ${title}`}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {title === "Welcome" &&
                "InterestFusion is a platform designed to connect individuals based on shared interests. We empower students, professionals, and innovators to bridge the gap between ideas and real-world applications."}
              {title === "Mission" &&
                "To inspire creativity, enable collaboration, and provide resources for transforming academic projects, entrepreneurial ideas, and personal interests into impactful solutions."}
              {title === "Innovation" &&
                "We strive to push the boundaries of knowledge and creativity, ensuring that every user gets the support and resources needed to innovate."}
              {title === "What We Do" && (
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li><strong>Empowering Students:</strong> We help students transform academic ideas into real-world projects.</li>
                  <li><strong>Fostering Innovation:</strong> We connect individuals to resources that enhance their learning and problem-solving skills.</li>
                  <li><strong>Building Connections:</strong> We encourage interdisciplinary collaborations to create unique solutions.</li>
                </ul>
              )}
              {title === "Vision" &&
                "We envision a world where curiosity drives innovation, collaboration fuels growth, and everyone has the opportunity to bring their ideas to life."}
            </p>
          </motion.section>
        ))}
      </main>

      {/* Call to Action */}
      <motion.section
        className="bg-purple-500 text-white text-center py-10 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
        <p className="text-lg mb-6">
          Be a part of a growing community that values creativity, collaboration, and innovation.
        </p>
        <motion.button
          className="bg-white text-purple-600 font-bold py-3 px-6 rounded-lg shadow-md border-2 border-transparent hover:border-purple-500 hover:bg-purple-100 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Get Started
        </motion.button>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-5">
        &copy; 2025 InterestFusion. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
