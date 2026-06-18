'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are AI agents and how do they work?',
      answer: 'AI agents are autonomous programs that can understand context, make decisions, and take actions based on your defined goals. They use advanced language models to interpret requests, access your integrated tools, and execute complex workflows without human intervention.',
    },
    {
      question: 'How long does it take to set up my first agent?',
      answer: 'Most users have their first agent running within 15-30 minutes. Our visual builder and pre-built templates make it easy to get started without any coding. For more complex workflows, our documentation and support team can help you scale quickly.',
    },
    {
      question: 'What integrations do you support?',
      answer: 'NexusAI integrates with over 1,000 tools including Slack, Salesforce, Google Workspace, Microsoft 365, GitHub, Jira, Zendesk, and many more. We also provide a REST API and webhooks for custom integrations.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. We are SOC 2 Type II certified and use end-to-end encryption for all data in transit and at rest. Your data is never used to train models, and we provide granular access controls and audit logs for enterprise customers.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. There are no long-term contracts or cancellation fees. You can upgrade, downgrade, or cancel your subscription at any time from your account settings.',
    },
    {
      question: 'Do you offer custom enterprise solutions?',
      answer: 'Yes. Our Enterprise plan includes dedicated support, custom integrations, SLA guarantees, and the option for on-premise deployment. Contact our sales team to discuss your specific requirements.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about NexusAI
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass rounded-lg p-6 text-left transition-all hover:border-violet-500/30"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <ChevronDown
                    className={`flex-shrink-0 text-violet-500 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
