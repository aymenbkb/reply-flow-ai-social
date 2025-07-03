
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Facebook, Instagram, Zap, Shield, BarChart3, MessageSquare, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SocialBot AI
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
              <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="px-4 space-y-3">
              <a href="#features" className="block text-gray-700 hover:text-blue-600">Features</a>
              <a href="#pricing" className="block text-gray-700 hover:text-blue-600">Pricing</a>
              <Link to="/login" className="block text-gray-700 hover:text-blue-600">Login</Link>
              <Link to="/signup" className="block">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
            <Zap className="w-4 h-4 mr-1" />
            AI-Powered Social Media Automation
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Automate Your Social Media Replies
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Never miss a message or comment again. Our AI automatically responds to your Facebook and Instagram interactions 
            with personalized, context-aware replies that sound just like you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 h-auto">
                Start Free Trial
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-2">
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <Facebook className="w-8 h-8 text-blue-600" />
              <span className="font-medium">Facebook</span>
            </div>
            <div className="flex items-center space-x-2">
              <Instagram className="w-8 h-8 text-pink-600" />
              <span className="font-medium">Instagram</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to automate and scale your social media engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Smart Auto-Replies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">AI-powered responses that understand context and maintain your brand voice across all interactions.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Custom Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Create personalized response templates for different scenarios and let AI handle the rest.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Track engagement metrics, response rates, and optimize your automation strategy with detailed insights.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Brand Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advanced filters and moderation ensure all automated responses align with your brand guidelines.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle className="text-xl">Multi-Account Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Manage multiple Facebook and Instagram accounts from a single dashboard with ease.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Real-time Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Instant responses to messages and comments ensure your audience never waits for engagement.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include our core automation features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Starter</CardTitle>
                <CardDescription className="text-base">Perfect for small businesses</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Up to 1,000 auto-replies/month</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>2 social media accounts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Basic analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Email support</span>
                </div>
                <Button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-blue-500 shadow-lg relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                Most Popular
              </Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Professional</CardTitle>
                <CardDescription className="text-base">For growing businesses</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Up to 5,000 auto-replies/month</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>10 social media accounts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Custom templates</span>
                </div>
                <Button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                <CardDescription className="text-base">For large organizations</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Unlimited auto-replies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Unlimited accounts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Enterprise analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>24/7 phone support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Custom integrations</span>
                </div>
                <Button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using SocialBot AI to automate their social media engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto">
                Start Your Free Trial
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 h-auto">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SocialBot AI</span>
              </div>
              <p className="text-gray-400">
                Automate your social media engagement with AI-powered responses.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SocialBot AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
