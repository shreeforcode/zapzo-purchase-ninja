import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, DollarSign, Zap, CheckCircle2, Building2, Factory, Building, ShoppingBag } from "lucide-react";
import ChatPreview from "@/components/ChatPreview";
import FeatureCard from "@/components/FeatureCard";
import TimeComparison from "@/components/TimeComparison";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-gradient-to-b from-black to-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.1),transparent_50%)]" />
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent"
              >
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">AI-Powered Procurement</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                Transform Your
                <span className="text-accent"> Business Purchases</span>
                <br />in Minutes
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1" />
                  <p className="text-lg text-gray-400">Chat naturally on WhatsApp</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1" />
                  <p className="text-lg text-gray-400">Get instant quotes from verified vendors</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1" />
                  <p className="text-lg text-gray-400">Save 70% time in procurement</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="pt-4"
              >
                <Button
                  size="lg"
                  className="bg-accent text-black hover:bg-accent/90 text-lg px-8"
                  onClick={() => window.open('https://calendly.com/shreepandey99/30min', '_blank')}
                >
                  Book Demo with Founder
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:block"
            >
              <ChatPreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full"
            >
              Features
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Why Choose ZapZo
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Who is this tool for? Section */}
      <section className="py-24 px-4 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.1),transparent_50%)]" />
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full"
            >
              Target Audience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-12"
            >
              Who is this tool for?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 text-center hover-card"
            >
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Corporate Offices</h3>
              <p className="text-gray-400">Streamline office supplies and equipment procurement with automated ordering</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6 text-center hover-card"
            >
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4">
                <Factory className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Manufacturing</h3>
              <p className="text-gray-400">Efficiently manage raw materials and industrial supplies procurement</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-6 text-center hover-card"
            >
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hotels & Restaurants</h3>
              <p className="text-gray-400">Simplify inventory management and supplier relationships</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card p-6 text-center hover-card"
            >
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Retail Chains</h3>
              <p className="text-gray-400">Optimize multi-location inventory and supply chain management</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Time Comparison Section */}
      <section className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <TimeComparison />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.1),transparent_50%)]" />
        <div className="container max-w-3xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Procurement Process?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-8"
          >
            Join innovative businesses that are already saving time and resources with ZapZo.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-accent text-black hover:bg-accent/90 text-lg px-8"
              onClick={() => window.open('https://calendly.com/shreepandey99/30min', '_blank')}
            >
              Book Demo with Founder
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
