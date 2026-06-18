'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechFlow',
      content: 'NexusAI transformed how we handle customer support. Our AI agents now resolve 80% of inquiries automatically, and our team can focus on complex issues.',
      avatar: 'SC',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Operations',
      company: 'DataSync Inc',
      content: 'The integration capabilities are incredible. We connected all our tools in under an hour and had our first agent running the same day.',
      avatar: 'MR',
    },
    {
      name: 'Emily Thompson',
      role: 'Founder',
      company: 'AutomateHub',
      content: 'As a non-technical founder, I was able to build sophisticated workflows without writing a single line of code. The ROI has been phenomenal.',
      avatar: 'ET',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="text-gradient">teams worldwide</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our customers have to say about building with NexusAI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full flex items-center justify-center font-bold text-white mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
