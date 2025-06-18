import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialData = [
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Kimberly Sanchez",
      title: "Digital Marketer",
      message:
        "This product transformed our marketing workflow. We've seen a 40% increase in campaign performance.",
      rating: 5,
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Victor Walton",
      title: "CEO, TechSolutions",
      message:
        "The perfect balance of power and simplicity. Our team adopted it instantly with minimal training.",
      rating: 4,
    },
    {
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Jaslene Cruz",
      title: "UX Designer",
      message:
        "As a designer, I appreciate the thoughtful interface. Both powerful and intuitive.",
      rating: 5,
    },
    {
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Bobby Vance",
      title: "CTO, Startup Inc.",
      message:
        "The API integration was seamless. Connected to our systems in under a day.",
      rating: 5,
    },
    {
      image: "https://randomuser.me/api/portraits/women/16.jpg",
      name: "Isabelle Gray",
      title: "Product Manager",
      message:
        "Customer satisfaction scores improved by 35% after implementing this solution.",
      rating: 4,
    },
    {
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      name: "Hazel Michaels",
      title: "Founder, SmartDesk",
      message:
        "Stood out for its comprehensive feature set and reasonable pricing.",
      rating: 5,
    },
  ];

  const TestimonialCard = ({ image, name, title, message, rating, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-lg p-5 flex flex-col items-center text-center gap-4 shadow-md hover:shadow-lg transition-all duration-200"
      >
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-xs text-gray-500 mt-1">{title}</p>
        </div>

        {rating && (
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        )}

        <p className="text-gray-600 text-sm leading-snug">
          {message}
        </p>
      </motion.div>
    );
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hear from professionals who have transformed their workflows with our solution.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {testimonialData.map((item, index) => (
          <TestimonialCard key={index} index={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;