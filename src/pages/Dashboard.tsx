
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Facebook, 
  Instagram, 
  Settings, 
  BarChart3, 
  CreditCard, 
  MessageSquare,
  Users,
  Zap,
  CheckCircle,
  XCircle,
  PlusCircle,
  Edit
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [autoReplyEnabled, setAutoReplyEnabled] = useState(true);
  const [messageTemplate, setMessageTemplate] = useState("Thank you for your message! We'll get back to you soon.");
  const [aiPrompt, setAiPrompt] = useState("Respond as a friendly customer service representative");
  const [accounts, setAccounts] = useState([
    { id: 1, platform: "Facebook", name: "@mybusiness", connected: true, avatar: "FB" },
    { id: 2, platform: "Instagram", name: "@mybiz_insta", connected: false, avatar: "IG" }
  ]);
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved!",
      description: "Your automation settings have been updated.",
    });
  };

  const toggleAccountConnection = (accountId: number) => {
    setAccounts(prev => 
      prev.map(account => 
        account.id === accountId 
          ? { ...account, connected: !account.connected }
          : account
      )
    );
    
    const account = accounts.find(acc => acc.id === accountId);
    toast({
      title: account?.connected ? "Account disconnected" : "Account connected",
      description: `${account?.platform} account has been ${account?.connected ? 'disconnected' : 'connected'}.`,
    });
  };

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Manage your social media automation</p>
          </div>
          <Badge className="bg-green-100 text-green-700">
            Professional Plan • 14 days left in trial
          </Badge>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Replies This Month</p>
                <p className="text-2xl font-bold">1,247</p>
              </div>
              <MessageSquare className="w-8 h-8 text-blue-600" />
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Connected Accounts</p>
                <p className="text-2xl font-bold">1/2</p>
              </div>
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Response Rate</p>
                <p className="text-2xl font-bold">98%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-green-600" />
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Response Time</p>
                <p className="text-2xl font-bold">2.3s</p>
              </div>
              <Zap className="w-8 h-8 text-orange-600" />
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="accounts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          {/* Accounts Tab */}
          <TabsContent value="accounts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Connected Accounts
                </CardTitle>
                <CardDescription>
                  Connect your Facebook and Instagram accounts to enable automation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {accounts.map((account) => (
                  <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold ${
                        account.platform === 'Facebook' ? 'bg-blue-600' : 'bg-pink-600'
                      }`}>
                        {account.platform === 'Facebook' ? 
                          <Facebook className="w-6 h-6" /> : 
                          <Instagram className="w-6 h-6" />
                        }
                      </div>
                      <div>
                        <h3 className="font-medium">{account.platform}</h3>
                        <p className="text-sm text-gray-600">{account.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {account.connected ? (
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Connected
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-gray-600">
                          <XCircle className="w-3 h-3 mr-1" />
                          Disconnected
                        </Badge>
                      )}
                      <Button 
                        variant={account.connected ? "outline" : "default"}
                        onClick={() => toggleAccountConnection(account.id)}
                        className={!account.connected ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
                      >
                        {account.connected ? "Disconnect" : "Connect"}
                      </Button>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full border-dashed">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Add Another Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Automation Tab */}
          <TabsContent value="automation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Automation Settings
                </CardTitle>
                <CardDescription>
                  Configure how your AI responds to messages and comments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Auto-Reply</h3>
                    <p className="text-sm text-gray-600">Automatically respond to new messages</p>
                  </div>
                  <Switch 
                    checked={autoReplyEnabled}
                    onCheckedChange={setAutoReplyEnabled}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message-template">Default Message Template</Label>
                  <Textarea
                    id="message-template"
                    placeholder="Enter your default response template..."
                    value={messageTemplate}
                    onChange={(e) => setMessageTemplate(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <p className="text-sm text-gray-500">
                    This template will be used when AI cannot generate a specific response
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ai-prompt">AI Response Prompt</Label>
                  <Textarea
                    id="ai-prompt"
                    placeholder="Describe how the AI should respond..."
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <p className="text-sm text-gray-500">
                    Provide instructions for how the AI should behave and respond to messages
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button onClick={handleSaveSettings} className="bg-gradient-to-r from-blue-600 to-purple-600">
                    Save Settings
                  </Button>
                  <Button variant="outline">
                    Test AI Response
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Usage Tab */}
          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Usage Analytics
                </CardTitle>
                <CardDescription>
                  Track your automation usage and performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Monthly Replies Used</span>
                      <span className="text-sm text-gray-600">1,247 / 5,000</span>
                    </div>
                    <Progress value={25} className="w-full" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Response Accuracy</span>
                      <span className="text-sm text-gray-600">98%</span>
                    </div>
                    <Progress value={98} className="w-full" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">847</p>
                      <p className="text-sm text-gray-600">Facebook Replies</p>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-pink-600">400</p>
                      <p className="text-sm text-gray-600">Instagram Replies</p>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">95%</p>
                      <p className="text-sm text-gray-600">User Satisfaction</p>
                    </div>
                  </Card>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Usage Insights</h3>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• Peak usage hours: 2-4 PM and 7-9 PM</li>
                    <li>• Most common queries: Product information (45%)</li>
                    <li>• Avg conversation length: 3.2 messages</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Billing & Subscription
                </CardTitle>
                <CardDescription>
                  Manage your subscription and billing information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 border rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">Professional Plan</h3>
                      <p className="text-gray-600">Up to 5,000 replies/month</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">
                      Free Trial
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Current Usage</p>
                      <p className="text-xl font-bold">1,247 replies</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Trial Ends</p>
                      <p className="text-xl font-bold">Jan 15, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Next Billing</p>
                      <p className="text-xl font-bold">$79/month</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                      Upgrade Now
                    </Button>
                    <Button variant="outline">
                      Change Plan
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Payment Method</h3>
                  <div className="p-4 border rounded-lg flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                        VISA
                      </div>
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-gray-600">Expires 12/25</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Billing History</h3>
                  <div className="space-y-2">
                    {[
                      { date: "Dec 1, 2023", amount: "$79.00", status: "Paid" },
                      { date: "Nov 1, 2023", amount: "$79.00", status: "Paid" },
                      { date: "Oct 1, 2023", amount: "$79.00", status: "Paid" }
                    ].map((invoice, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">{invoice.date}</p>
                          <p className="text-sm text-gray-600">Professional Plan</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{invoice.amount}</p>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {invoice.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
