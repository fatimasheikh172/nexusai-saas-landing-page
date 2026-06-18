'use client';

import React from 'react';
import { Code, Rocket, TrendingUp } from 'lucide-react';
import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Code,
      title: 'Build Your Agent',
      description: 'Use our visual builder or API to define your agent\'s capabilities, triggers, and workflows in minutes.',
    },
    {
      number: '02',
      icon: Rocket,
      title: 'Deploy Instantly',
      description: 'One-click deployment to our global infrastructure. Your agents go live with zero configuration.',
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Scale & Optimize',
      description: 'Monitor performance, optimize with AI insights, and scale automatically as your needs grow.',
    },
  ];

  return (
    <section className="py-20 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From idea to production in <span className="text-gradient">3 simple steps</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building and deploying AI agents has never been easier. Get started in minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (hidden on mobile) */}
          <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-violet-600 to-blue-600"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="h-full text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full flex items-center justify-center">
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
