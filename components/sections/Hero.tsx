'use client';

import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="glass px-4 py-2 rounded-full text-sm font-medium">
              🚀 The Future of AI Automation is Here
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Build Intelligent
            <br />
            <span className="text-gradient">AI Agents</span> That Work
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
          >
            Deploy autonomous AI agents that handle complex workflows, integrate with your tools,
            and scale your business without limits. No code required.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="primary" className="group">
              Start Free Trial
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="secondary" className="group">
              <Play className="inline-block mr-2" size={20} />
              Watch Demo
            </Button>
          </motion.div>

          {/* Product Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="glass rounded-2xl p-2 glow">
              <div className="bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-xl aspect-video overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/HwhBHumr0jE"
                  title="NexusAI Product Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
