'use client';

import React from 'react';
import { Zap, Brain, Shield, Workflow, Globe, BarChart3 } from 'lucide-react';
import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'Advanced AI models that learn from your workflows and make intelligent decisions autonomously.',
    },
    {
      icon: Workflow,
      title: 'Seamless Integrations',
      description: 'Connect with 1000+ tools and services. Slack, Salesforce, GitHub, and more.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process thousands of tasks per second with our optimized infrastructure.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II certified with end-to-end encryption and compliance built-in.',
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Build agents that understand and respond in over 100 languages.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time insights into agent performance, costs, and ROI tracking.',
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to <span className="text-gradient">scale with AI</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features that help you build, deploy, and manage AI agents at any scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
