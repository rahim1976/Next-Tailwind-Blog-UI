"use client"
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description of Project One.',
    image: 'https://via.placeholder.com/300', // Replace with your project image URL
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description of Project Two.',
    image: 'https://via.placeholder.com/300', // Replace with your project image URL
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description of Project Three.',
    image: 'https://via.placeholder.com/300', // Replace with your project image URL
  },
  {
    id: 4,
    title: 'Project Three',
    description: 'Description of Project Three.',
    image: 'https://via.placeholder.com/300', // Replace with your project image URL
  },
  {
    id: 5,
    title: 'Project Three',
    description: 'Description of Project Three.',
    image: 'https://via.placeholder.com/300', // Replace with your project image URL
  },
  {
    id: 6,
    title: 'Project Three',
    description: 'Description of Project Three.',
    image: 'https://via.placeholder.com/300', // Replace with your project image URL
  },
  // Add more projects as needed
];

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-12 p-48 dark:bg-smoothBlack border-2 rounded-lg bg-gradient-to-r dark:from-gray-900 dark:to-smoothBlack"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          I am a passionate developer with a love for creating beautiful and functional web applications.
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="border-2 shadow-lg rounded-lg overflow-hidden bg-gradient-to-r dark:from-gray-900 dark:to-smoothBlack" // Apply the gradient background
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }} // Scale up and add shadow on hover
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold dark:text-white">{project.title}</h2> {/* Adjust text color for contrast */}
              <p className="dark:text-gray-300">{project.description}</p> {/* Adjust text color for contrast */}
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default AboutPage;