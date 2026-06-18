'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Sparkles, RefreshCw } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Message } from '@/types';

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const starterQuestions = [
    'How do AI agents work?',
    'What integrations do you support?',
    'Tell me about pricing plans',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (question?: string) => {
    const messageContent = question || input.trim();
    if (!messageContent || isLoading) return;

    const userMessage: Message = { role: 'user', content: messageContent };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') break;

              try {
                const parsed = JSON.parse(data);
                assistantMessage += parsed.content;
                setMessages((prev) => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1] = {
                    role: 'assistant',
                    content: assistantMessage,
                  };
                  return newMessages;
                });
              } catch (e) {
                // Skip invalid JSON
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([]);
    setInput('');
  };

  return (
    <section className="py-20 bg-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Try our <span className="text-gradient">AI assistant</span> now
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the power of NexusAI firsthand. Ask anything about our platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="max-w-3xl mx-auto">
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto mb-4 space-y-4">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <Sparkles size={48} className="text-violet-500 mb-4" />
                  <p className="text-gray-400 mb-6">
                    Start a conversation to learn more about NexusAI
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {starterQuestions.map((question) => (
                      <button
                        key={question}
                        onClick={() => handleSubmit(question)}
                        className="text-sm px-4 py-2 glass rounded-lg hover:border-violet-500/50 transition-colors"
                        disabled={isLoading}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-3 ${
                          message.role === 'user'
                            ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white'
                            : 'bg-white/10 text-gray-200'
                        }`}
                      >
                        {message.content}
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && messages[messages.length - 1]?.role === 'user' && (
                    <div className="flex justify-start">
                      <div className="bg-white/10 rounded-lg px-4 py-3">
                        <Loader2 className="animate-spin" size={20} />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input Area */}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="Ask me anything..."
                disabled={isLoading}
                maxLength={500}
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all disabled:opacity-50"
              />
              <Button
                onClick={() => handleSubmit()}
                disabled={!input.trim() || isLoading}
                variant="primary"
              >
                <Send size={20} />
              </Button>
              {messages.length > 0 && (
                <Button onClick={handleClear} variant="secondary" disabled={isLoading}>
                  <RefreshCw size={20} />
                </Button>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Powered by Groq · {input.length}/500 characters
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
