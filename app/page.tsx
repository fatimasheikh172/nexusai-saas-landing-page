import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import ChatDemo from '@/components/sections/ChatDemo';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import WaitlistCTA from '@/components/sections/WaitlistCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <ChatDemo />
      <Pricing />
      <Testimonials />
      <FAQ />
      <WaitlistCTA />
      <Footer />
    </main>
  );
}
