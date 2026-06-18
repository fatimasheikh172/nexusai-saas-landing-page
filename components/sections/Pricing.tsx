'use client';

import React from 'react';
import { Check } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for trying out NexusAI',
      features: [
        '1 AI Agent',
        '1,000 tasks/month',
        'Basic integrations',
        'Community support',
        '7-day data retention',
      ],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$49',
      description: 'For growing teams and businesses',
      features: [
        '10 AI Agents',
        '100,000 tasks/month',
        'All integrations',
        'Priority support',
        'Advanced analytics',
        '90-day data retention',
        'Custom workflows',
        'API access',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale operations',
      features: [
        'Unlimited AI Agents',
        'Unlimited tasks',
        'Dedicated support',
        'SLA guarantees',
        'Custom integrations',
        'Unlimited data retention',
        'Advanced security',
        'On-premise deployment',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="text-gradient">transparent pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={tier.highlighted ? 'md:-mt-4' : ''}
            >
              <Card
                className={`h-full ${
                  tier.highlighted
                    ? 'border-violet-500 shadow-[0_0_40px_rgba(139,92,246,0.3)]'
                    : ''
                }`}
              >
                {tier.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-violet-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold">{tier.price}</span>
                    {tier.price !== 'Custom' && (
                      <span className="text-gray-400">/month</span>
                    )}
                  </div>
                  <p className="text-gray-400">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check
                        size={20}
                        className="text-violet-500 mr-3 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.highlighted ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {tier.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
