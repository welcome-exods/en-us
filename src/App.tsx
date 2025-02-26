import React, { useEffect, useRef } from 'react';
import { 
  Wallet, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  Layers, 
  Lock, 
  RefreshCw, 
  Smartphone
} from 'lucide-react';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    // Animate features on scroll
    const observeFeatures = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        },
        { threshold: 0.1 }
      );

      const features = document.querySelectorAll('.feature-card');
      features.forEach((feature) => {
        observer.observe(feature);
      });
    };

    window.addEventListener('scroll', handleScroll);
    observeFeatures();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-20 animate-pulse"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(0, 0, 0, 0) 70%)`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Wallet className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                EXODUS
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#security" className="hover:text-purple-400 transition-colors">Security</a>
              <a href="#ecosystem" className="hover:text-purple-400 transition-colors">Ecosystem</a>
              <a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                The Future of <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Web3 Wallets</span> Is Here
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Secure, intuitive, and powerful. Exodus redefines how you interact with the decentralized web.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center">
                  Download Now <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-purple-500 px-8 py-3 rounded-full font-medium hover:bg-purple-500/20 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2" ref={heroRef}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Exodus Web3 Wallet Interface" 
                  className="relative z-10 rounded-2xl shadow-2xl border border-purple-500/30 transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 bg-black/40 backdrop-blur-sm" ref={featuresRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Revolutionary Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exodus combines cutting-edge technology with intuitive design to deliver the ultimate Web3 experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card bg-gradient-to-br from-purple-900/40 to-black/40 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm opacity-0 transition-all duration-700 hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-105">
              <div className="bg-purple-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Military-Grade Security</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Advanced encryption protocols</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Biometric authentication</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Self-custody solution</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Hardware wallet integration</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="feature-card bg-gradient-to-br from-purple-900/40 to-black/40 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm opacity-0 transition-all duration-700 delay-100 hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-105">
              <div className="bg-purple-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lightning-Fast Transactions</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Optimized gas fee calculations</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Layer 2 solution support</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Cross-chain swaps</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Batch transaction processing</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="feature-card bg-gradient-to-br from-purple-900/40 to-black/40 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm opacity-0 transition-all duration-700 delay-200 hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-105">
              <div className="bg-purple-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Universal Compatibility</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Multi-chain support (50+ blockchains)</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>DApp browser integration</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>NFT gallery and management</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Cross-platform synchronization</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="feature-card bg-gradient-to-br from-purple-900/40 to-black/40 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm opacity-0 transition-all duration-700 delay-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-105">
              <div className="bg-purple-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Layers className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Integrated DeFi Hub</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Staking and yield farming</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Liquidity pool participation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Real-time APY tracking</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Risk assessment tools</span>
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="feature-card bg-gradient-to-br from-purple-900/40 to-black/40 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm opacity-0 transition-all duration-700 delay-400 hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-105">
              <div className="bg-purple-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Lock className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Privacy-First Design</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Zero-knowledge proof transactions</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Tor network integration</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>No KYC requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Local data storage only</span>
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="feature-card bg-gradient-to-br from-purple-900/40 to-black/40 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm opacity-0 transition-all duration-700 delay-500 hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-105">
              <div className="bg-purple-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <RefreshCw className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Continuous Innovation</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Weekly feature updates</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Community-driven development</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Open-source components</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full h-2 w-2"></div>
                  <span>Cutting-edge protocol support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="about" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-3xl opacity-30 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Exodus Web3 Wallet Mobile Interface" 
                  className="relative z-10 rounded-2xl shadow-2xl border border-purple-500/30"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Redefining Digital Asset Management
                </span>
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p>
                  Exodus Web3 Wallet represents the pinnacle of blockchain technology integration, offering users unprecedented control over their digital assets in an increasingly decentralized world. As we venture deeper into the Web3 era, traditional financial systems are being reimagined, and Exodus stands at the forefront of this revolution.
                </p>
                <p>
                  Unlike conventional cryptocurrency wallets, Exodus delivers a comprehensive ecosystem that bridges the gap between blockchain complexity and user-friendly experiences. Our non-custodial architecture ensures that you—and only you—maintain complete ownership of your private keys and digital assets, eliminating the vulnerabilities associated with centralized exchanges and services.
                </p>
                <p>
                  The Exodus platform supports over 50 blockchain networks and thousands of tokens, providing a unified interface for managing diverse portfolios. From Bitcoin and Ethereum to emerging Layer 2 solutions and NFT collections, users can seamlessly navigate the expanding digital asset landscape without switching between multiple applications.
                </p>
                <p>
                  Security remains our paramount concern, with Exodus implementing multi-layered protection mechanisms including biometric authentication, hardware wallet integration, and encrypted backup solutions. These features work in concert to safeguard your assets while maintaining the intuitive user experience that has become synonymous with the Exodus brand.
                </p>
                <p>
                  Beyond basic wallet functionality, Exodus incorporates advanced DeFi capabilities, allowing users to stake assets, provide liquidity, and earn yields directly within the application. Our real-time market data and portfolio analytics empower informed decision-making, while our built-in exchange facilitates instant asset swaps without ever leaving the secure Exodus environment.
                </p>
                <p>
                  As the Web3 ecosystem continues to evolve, Exodus remains committed to innovation, regularly introducing new features and integrations that expand the possibilities of decentralized finance. Whether you're a blockchain veteran or just beginning your cryptocurrency journey, Exodus provides the tools, security, and interface needed to thrive in the digital economy of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="relative z-10 py-20 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Exodus Mobile App" 
                  className="relative z-10 rounded-2xl shadow-2xl border border-purple-500/30"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Your Crypto, Anywhere
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Take the power of Exodus with you. Our mobile application delivers the complete Web3 experience in your pocket.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                    <Smartphone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cross-Platform Synchronization</h3>
                    <p className="text-gray-300">
                      Seamlessly switch between desktop and mobile with real-time portfolio updates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                    <Zap className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Biometric Security</h3>
                    <p className="text-gray-300">
                      Protect your assets with fingerprint and facial recognition authentication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Mobile DApp Browser</h3>
                    <p className="text-gray-300">
                      Explore the decentralized web directly from your mobile device.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex space-x-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center">
                  Download for iOS
                </button>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center">
                  Download for Android
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-900/60 to-blue-900/60 rounded-3xl p-12 backdrop-blur-lg border border-purple-500/30">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Step Into the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Join thousands of users who have already made the switch to the most advanced Web3 wallet available today.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-4 rounded-full font-medium text-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
                Download Exodus Now <ArrowRight className="ml-2 h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pt-20 pb-10 border-t border-purple-500/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Wallet className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  EXODUS
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                The next generation of Web3 wallets, designed for the future of finance.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Product</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Mobile App</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Desktop App</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Browser Extension</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400">
            <p>© 2025 Exodus Web3 Wallet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;