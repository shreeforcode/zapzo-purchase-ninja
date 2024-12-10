import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Clock, DollarSign, Zap } from "lucide-react";
import ChatPreview from "@/components/ChatPreview";
import FeatureCard from "@/components/FeatureCard";
import TimeComparison from "@/components/TimeComparison";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.1),transparent_50%)]" />
        <div className="container max-w-6xl mx-auto text-center z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full"
          >
            Revolutionizing Business Purchases
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            Simplify Your
            <span className="text-accent"> Business Purchases</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto"
          >
            Transform your procurement process with AI-powered assistance.{" "}
            <span className="text-accent font-semibold">From days to minutes.</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-accent text-black hover:bg-accent/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Chat Preview Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full"
              >
                AI-Powered Assistant
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Your Personal Procurement Expert
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-400 mb-6"
              >
                Experience seamless purchasing through natural conversations.
                Our AI understands your needs and handles the entire process.
              </motion.p>
            </div>
            <div className="relative">
              <ChatPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full"
            >
              Features
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Choose ZapZo
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Natural Conversations"
              description="Chat naturally with our AI assistant through WhatsApp"
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="Save Time"
              description="Reduce procurement time from days to minutes"
            />
            <FeatureCard
              icon={<DollarSign className="w-6 h-6" />}
              title="Cost Efficient"
              description="Optimize spending with AI-powered price comparisons"
            />
          </div>
        </div>
      </section>

      {/* Time Comparison Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <TimeComparison />
        </div>
      </section>
    </div>
  );
};

export default Index;