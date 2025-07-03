
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Bot, MessageCircle, Shield, BarChart3, Sparkles, CheckCircle, ArrowRight, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-orange-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-teal-500/25">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
              SocialBot AI
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-teal-500 to-orange-600 hover:from-teal-400 hover:to-orange-500 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transform hover:scale-105 transition-all duration-300 border-0 text-white">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-8 bg-gradient-to-r from-teal-500/10 to-orange-500/10 text-teal-600 border-teal-500/30 hover:scale-105 transition-all duration-300">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Social Automation
          </Badge>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Automate Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-600 via-orange-500 to-rose-500 bg-clip-text text-transparent animate-pulse">
              Social Media
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let AI handle your Facebook and Instagram messages and comments. 
            Engage with your audience 24/7 while you focus on growing your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-orange-600 hover:from-teal-400 hover:to-orange-500 shadow-2xl shadow-teal-500/25 hover:shadow-teal-500/50 transform hover:scale-110 transition-all duration-300 text-lg px-8 py-6 border-0 text-white group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-500 transition-all duration-300 px-8 py-6 group">
              Watch Demo
              <Bot className="w-5 h-5 ml-2 group-hover:animate-bounce transition-all duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Futuristic Features
            </h2>
            <p className="text-gray-600 text-lg">Advanced AI technology meets seamless automation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Smart Auto-Reply",
                description: "AI responds to messages instantly with contextual, human-like responses",
                color: "from-teal-400 to-emerald-500"
              },
              {
                icon: Bot,
                title: "AI Comment Manager",
                description: "Automatically engage with comments using advanced natural language processing",
                color: "from-orange-400 to-rose-500"
              },
              {
                icon: Facebook,
                title: "Multi-Platform",
                description: "Seamlessly manage Facebook and Instagram from one unified dashboard",
                color: "from-emerald-400 to-teal-500"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level encryption and security protocols protect your data",
                color: "from-rose-400 to-pink-500"
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Real-time insights and performance metrics with AI-powered recommendations",
                color: "from-amber-400 to-orange-500"
              },
              {
                icon: Sparkles,
                title: "Smart Learning",
                description: "AI learns from your brand voice and improves responses over time",
                color: "from-violet-400 to-rose-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Choose Your Power Level
            </h2>
            <p className="text-gray-600 text-lg">Flexible plans that scale with your business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                description: "Perfect for small businesses",
                features: ["1,000 AI responses/month", "2 social accounts", "Basic analytics", "Email support"],
                popular: false
              },
              {
                name: "Pro",
                price: "$79",
                description: "Most popular for growing brands",
                features: ["10,000 AI responses/month", "10 social accounts", "Advanced analytics", "Priority support", "Custom AI training"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "$199",
                description: "For large organizations",
                features: ["Unlimited AI responses", "Unlimited accounts", "White-label solution", "Dedicated support", "Custom integrations"],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative bg-white border-gray-200 shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 group cursor-pointer ${plan.popular ? 'border-teal-500/50 shadow-2xl shadow-teal-500/25' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-teal-500 to-orange-600 text-white border-0 shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <CardDescription className="text-gray-600 mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-teal-500 to-orange-600 hover:from-teal-400 hover:to-orange-500 shadow-lg shadow-teal-500/25 text-white' : 'bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-900'} transition-all duration-300 transform group-hover:scale-105`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-teal-500/5 to-orange-500/5 border-teal-500/20 shadow-xl">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Ready to Enter the Future?
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using AI to transform their social media presence. 
                Start your free trial today and experience the power of automated engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button size="lg" className="bg-gradient-to-r from-teal-500 to-orange-600 hover:from-teal-400 hover:to-orange-500 shadow-2xl shadow-teal-500/25 hover:shadow-teal-500/50 transform hover:scale-110 transition-all duration-300 text-lg px-12 py-6 border-0 text-white group">
                    Start Free Trial
                    <Sparkles className="w-5 h-5 ml-2 group-hover:animate-spin transition-all duration-300" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-500 transition-all duration-300 px-12 py-6">
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6 group">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-orange-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
              SocialBot AI
            </span>
          </div>
          <p className="text-gray-600 mb-6">
            Empowering businesses with AI-driven social media automation
          </p>
          <div className="flex justify-center space-x-8 text-gray-600">
            <a href="#" className="hover:text-teal-500 transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-teal-500 transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-teal-500 transition-colors duration-300">Contact</a>
            <a href="#" className="hover:text-teal-500 transition-colors duration-300">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
