import { useState } from "react";
import { KojoButton } from "@/components/KojoButton";
import { NotifyModal } from "@/components/NotifyModal";
import { FeatureCard } from "@/components/FeatureCard";
import { StreakCard } from "@/components/StreakCard";
import { Bell, Code, Trophy, BookOpen, Zap, Menu, X } from "lucide-react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold">Kojo</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-medium hover:text-kojo-purple transition-colors">Features</a>
            <a href="#how-it-works" className="font-medium hover:text-kojo-purple transition-colors">How It Works</a>
          </nav>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="py-2 font-medium hover:text-kojo-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="py-2 font-medium hover:text-kojo-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <KojoButton 
                variant="purple"
                onClick={() => {
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                icon={<Bell size={18} />}
              >
                Notify on release
              </KojoButton>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Learn to code with <span className="text-kojo-purple">Kojo</span>
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              Master programming through fun, interactive lessons and build real coding skills at your own pace.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
              <KojoButton 
                variant="purple"
                className="w-full sm:w-auto"
                onClick={() => setIsModalOpen(true)}
                icon={<Bell size={20} />}
              >
                Notify on release
              </KojoButton>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-slide-left">
            <div className="relative">
              <img 
                src="/lovable-uploads/f19e84f3-09f5-4b7f-b1b7-63962994434b.png" 
                alt="Kojo character" 
                className="w-64 h-auto animate-bounce"
              />
              <div className="absolute -bottom-6 -right-12 animate-float">
                <StreakCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Learn with Kojo?</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-700">
              Designed to make coding accessible and enjoyable for everyone
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <FeatureCard 
                icon={<Trophy size={24} />}
                title="Gamified Learning"
                description="Earn rewards as you progress, build streaks, and compete with friends to stay motivated."
                color="purple"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <FeatureCard 
                icon={<Code size={24} />}
                title="Real Coding Skills"
                description="Learn practical programming skills that translate directly to real-world applications."
                color="blue"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <FeatureCard 
                icon={<BookOpen size={24} />}
                title="Bite-sized Lessons"
                description="Short, focused lessons fit into your busy schedule, making consistent progress easy."
                color="teal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Kojo Works</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-700">
            Our proven approach makes learning to code fun and effective
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-slide-right" style={{ animationDelay: "0.1s" }}>
                <div className="bg-kojo-purple text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-black">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Learn concepts step-by-step</h3>
                  <p className="text-gray-700">Start with the basics and gradually build your knowledge through guided lessons.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-slide-right" style={{ animationDelay: "0.2s" }}>
                <div className="bg-kojo-blue text-kojo-dark text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-black">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Practice with interactive challenges</h3>
                  <p className="text-gray-700">Apply what you've learned through fun coding puzzles and real-world problems.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-slide-right" style={{ animationDelay: "0.3s" }}>
                <div className="bg-kojo-teal text-kojo-dark text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-black">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Build real projects</h3>
                  <p className="text-gray-700">Create your own apps and games as you advance your skills and confidence.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 animate-slide-up">
              <KojoButton 
                variant="purple"
                className="w-full sm:w-auto"
                onClick={() => setIsModalOpen(true)}
                icon={<Zap size={20} />}
              >
                Get started with Kojo
              </KojoButton>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-slide-left">
            <div className="card-kojo bg-gray-50 p-8">
              <div className="text-center mb-4">
                <div className="inline-block bg-kojo-purple text-white font-bold py-2 px-6 rounded-full border-2 border-black">
                  Lesson 1: Variables
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 border-2 border-black mb-6">
                <p className="font-mono">
                  <span className="text-kojo-purple">let</span> score = <span className="text-kojo-blue">0</span>;
                </p>
                <p className="font-mono">
                  <span className="text-kojo-purple">if</span> (answer === <span className="text-green-500">"correct"</span>) {'{'}
                </p>
                <p className="font-mono pl-4">
                  score += <span className="text-kojo-blue">10</span>;
                </p>
                <p className="font-mono">{'}'}</p>
              </div>
              
              <img 
                src="/lovable-uploads/f19e84f3-09f5-4b7f-b1b7-63962994434b.png" 
                alt="Kojo character" 
                className="w-16 h-auto mx-auto"
              />
              
              <p className="text-center mt-3 font-medium">
                Great job! Now try the next challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-kojo-purple py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to start your coding journey?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are building real coding skills with Kojo
          </p>
          
          <div className="flex justify-center">
            <KojoButton 
              variant="blue"
              onClick={() => setIsModalOpen(true)}
              icon={<Bell size={20} />}
            >
              Notify on release
            </KojoButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Kojo</h2>
              <p className="text-gray-600 mt-2">Learn coding the fun way</p>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <a href="#features" className="hover:text-kojo-purple transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-kojo-purple transition-colors">How It Works</a>
              <a href="#" className="hover:text-kojo-purple transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-kojo-purple transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Kojo. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Notify Modal */}
      <NotifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;
