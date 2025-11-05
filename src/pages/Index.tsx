import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Database, FileText, Users, ArrowRight, Shield, Zap, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import beanLogo from "@/assets/bean-logo.png";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={beanLogo} alt="Data-Beans Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-foreground">Data-Beans</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <Button onClick={() => navigate("/auth")}>Login</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Next-Generation Insurance Platform</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Transform Your Insurance Operations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The complete platform for insurance companies. Seamlessly convert to our modern system, 
              empower your agents with powerful search, and generate insights with advanced reporting tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Powerful Features Built for Insurance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to modernize your insurance operations in one comprehensive platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <Database className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Platform Conversion</CardTitle>
                <CardDescription>
                  Seamlessly migrate your legacy systems to our modern platform with zero downtime and complete data integrity
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <Search className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Advanced Policy Search</CardTitle>
                <CardDescription>
                  Lightning-fast search engine to instantly find any policy, claim, or customer record across your entire database
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Agent Portal</CardTitle>
                <CardDescription>
                  Complete visibility and access for agents and internal users with role-based permissions and real-time updates
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Report Generation</CardTitle>
                <CardDescription>
                  Create custom reports and analytics on-demand with our powerful reporting engine and data visualization
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Enterprise Solution</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Built for Modern Insurance Companies
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform is designed specifically for insurance companies looking to modernize their operations. 
                With features that rival GuideWire but with a focus on ease of use and rapid deployment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Fast Implementation</h3>
                    <p className="text-muted-foreground">Go live in weeks, not months with our streamlined conversion process</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Enterprise Security</h3>
                    <p className="text-muted-foreground">Bank-level security with compliance for all major insurance regulations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Real-time Analytics</h3>
                    <p className="text-muted-foreground">Make data-driven decisions with instant access to business intelligence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Platform Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="font-medium">Policy Management</span>
                    <Badge>Core</Badge>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="font-medium">Claims Processing</span>
                    <Badge>Core</Badge>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="font-medium">Customer Portal</span>
                    <Badge>Core</Badge>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="font-medium">API Integration</span>
                    <Badge variant="secondary">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="font-medium">Custom Workflows</span>
                    <Badge variant="secondary">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="font-medium">AI-Powered Insights</span>
                    <Badge variant="secondary">Advanced</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Insurance Platform?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join leading insurance companies who have already modernized their operations with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={beanLogo} alt="Data-Beans Logo" className="h-6 w-6" />
                <span className="text-xl font-bold">Data-Beans</span>
              </div>
              <p className="text-muted-foreground">
                Modern insurance platform for forward-thinking companies
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Platform</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Data-Beans. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
