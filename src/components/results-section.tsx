import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, Info, Shield, Pill, Users } from "lucide-react";

export const ResultsSection = () => {
  return (
    <section id="analysis" className="py-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary-glow/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Medicine Safety Analysis
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Many people consume medicines without fully understanding their chemical composition or potential risks. 
            Although doctors and pharmacists are trained to evaluate drug safety, patients often rely on incomplete 
            or unclear packaging information. This leads to avoidable health issues, allergic reactions, or dangerous 
            drug interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Safety Stats */}
          <Card className="glass border-glass-border hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-text-muted">
                Safety Score
              </CardTitle>
              <Shield className="h-4 w-4 ml-auto text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">85%</div>
              <Progress value={85} className="mt-2" />
              <p className="text-xs text-text-muted mt-2">
                Overall safety rating for general population
              </p>
            </CardContent>
          </Card>

          {/* Risk Factors */}
          <Card className="glass border-glass-border hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-text-muted">
                Risk Factors
              </CardTitle>
              <AlertTriangle className="h-4 w-4 ml-auto text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">3</div>
              <div className="space-y-1 mt-2">
                <Badge variant="outline" className="text-xs">
                  Age sensitivity
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Drug interactions
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Active Ingredients */}
          <Card className="glass border-glass-border hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-text-muted">
                Active Components
              </CardTitle>
              <Pill className="h-4 w-4 ml-auto text-info" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-info">4</div>
              <p className="text-xs text-text-muted mt-2">
                Identified active pharmaceutical ingredients
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Benefits */}
          <Card className="glass border-glass-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Key Benefits</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Empowers Patients</h4>
                    <p className="text-sm text-text-muted">
                      Provides clear, understandable information about medication composition and risks
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Improves Transparency</h4>
                    <p className="text-sm text-text-muted">
                      Makes complex pharmaceutical information accessible to everyone
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Enhances Public Health</h4>
                    <p className="text-sm text-text-muted">
                      Helps prevent adverse reactions and dangerous drug interactions
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact Stats */}
          <Card className="glass border-glass-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Impact & Reach</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Medication Errors Prevented</span>
                    <span className="text-sm text-text-muted">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Patient Confidence</span>
                    <span className="text-sm text-text-muted">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Healthcare Provider Adoption</span>
                    <span className="text-sm text-text-muted">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
              </div>
              
              <div className="pt-4 border-t border-glass-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2.3M+</div>
                  <p className="text-sm text-text-muted">Medicine analyses completed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm text-text-muted bg-glass-bg/50 px-4 py-2 rounded-full border border-glass-border">
            <Info className="h-4 w-4" />
            <span>
              A system that can automatically analyze medicine composition and flag health risks
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};