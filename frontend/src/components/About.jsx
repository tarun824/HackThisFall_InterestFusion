import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-500 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">About InterestFusion</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Welcome to InterestFusion
          </h2>
          <p className="text-gray-700">
            At InterestFusion, we believe that every individual’s interests and
            skills can drive meaningful change when aligned with the right
            tools and opportunities. Whether you're a student, professional, or
            innovator, our mission is to bridge the gap between your ideas and
            their real-world applications.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To inspire creativity, enable collaboration, and provide resources
            for turning academic projects, entrepreneurial ideas, and personal
            interests into something extraordinary.
          </p>
        </section>

        {/* What We Do Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4">What We Do</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Empowering Students:</strong> We help students navigate
              the journey from brainstorming academic projects to delivering
              successful implementations.
            </li>
            <li>
              <strong>Fostering Innovation:</strong> Our platform connects
              individuals to tools, tutorials, and communities that enhance
              their learning and problem-solving skills.
            </li>
            <li>
              <strong>Building Connections:</strong> By merging different fields
              of interest, we encourage interdisciplinary collaborations that
              create unique solutions.
            </li>
          </ul>
        </section>

        {/* Vision Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            We envision a world where curiosity drives innovation, collaboration
            fuels growth, and everyone has the opportunity to bring their ideas
            to life.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; 2025 InterestFusion. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
