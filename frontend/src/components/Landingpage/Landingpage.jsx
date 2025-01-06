import React from 'react';
import Footer from '../Footer';

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-t from-blue-100 to-white">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-white shadow-lg py-16 px-8 text-center w-full">
                <h1 className="text-5xl font-extrabold uppercase tracking-widest text-blue-100 drop-shadow-lg">
                    InterestFusion
                </h1>
                <p className="mt-6 text-lg italic font-light text-white/80 max-w-3xl mx-auto leading-relaxed">
                    Combat loneliness in education by connecting individuals based on shared interests.
                </p>
                <button
                    onClick={() => { window.location.href = "/home"; }}
                    className="mt-8 bg-white text-blue-600 px-10 py-4 rounded-full font-semibold uppercase text-lg shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-2xl"
                >
                    Get Started
                </button>
            </header>

            {/* About Us Section */}
            <section className="bg-gradient-to-r from-blue-300 to-blue-200 text-gray-800 p-12 text-center shadow-lg rounded-lg mt-8 max-w-4xl w-11/12 transform transition-transform hover:scale-105">
                <h2 className="text-4xl font-semibold uppercase text-blue-800 mb-6 drop-shadow-md">
                    About Us
                </h2>
                <p className="text-lg font-light leading-relaxed">
                    InterestFusion is a platform designed to address mental health challenges like loneliness
                    and alienation in educational institutions. By connecting individuals based on their hobbies
                    and interests, we create a space for meaningful interactions and relationships.
                </p>
            </section>

            {/* Features Section */}
            <div className="flex flex-wrap justify-center items-start gap-8 mt-12 max-w-7xl mb-12">
                <FeatureCard
                    title="Personalized Matching"
                    description="Connect with others who share your passions and create meaningful bonds through shared interests."
                    icon="🤝"
                />
                <FeatureCard
                    title="Secure Profiles"
                    description="Your safety is our priority, with robust privacy features and secure profiles to protect your information."
                    icon="🔒"
                />
                <FeatureCard
                    title="Future Growth"
                    description="Our platform is scalable to support more users and introduce exciting features as we expand."
                    icon="🚀"
                />
            </div>

            <Footer />
        </div>
    );
};

const FeatureCard = ({ title, description, icon }) => {
    return (
        <section className="bg-white text-gray-900 p-8 text-center shadow-xl rounded-lg transition-transform hover:scale-105 hover:shadow-2xl w-full sm:w-1/3 max-w-sm">
            <div className="text-5xl mb-4">{icon}</div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">{title}</h2>
            <p className="text-sm font-light">{description}</p>
        </section>
    );
};

export default LandingPage;
