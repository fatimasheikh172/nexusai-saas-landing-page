export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface WaitlistEntry {
  email: string;
  createdAt: Date;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
