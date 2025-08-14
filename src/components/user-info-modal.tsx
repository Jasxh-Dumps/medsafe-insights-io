import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Search, AlertTriangle, CheckCircle, Info } from "lucide-react";

interface UserInfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface UserInfo {
  age: string;
  gender: string;
  medicine: string;
}

interface AnalysisResults {
  composition: string[];
  riskLevel: 'low' | 'medium' | 'high';
  sideEffects: string[];
  interactions: string[];
  recommendations: string[];
}

export const UserInfoModal = ({ open, onOpenChange }: UserInfoModalProps) => {
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    age: "",
    gender: "",
    medicine: ""
  });
  const [results, setResults] = useState<AnalysisResults | null>(null);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleAnalyze();
    }
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    // Simulate analysis with realistic delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock analysis results
    const mockResults: AnalysisResults = {
      composition: [
        "Acetaminophen 500mg",
        "Caffeine 65mg", 
        "Phenylephrine HCl 5mg",
        "Dextromethorphan HBr 15mg"
      ],
      riskLevel: userInfo.age && parseInt(userInfo.age) > 65 ? 'medium' : 'low',
      sideEffects: [
        "Drowsiness or dizziness",
        "Nausea or stomach upset",
        "Dry mouth",
        "Restlessness (due to caffeine)"
      ],
      interactions: [
        "Warfarin (blood thinner) - increased bleeding risk",
        "MAO inhibitors - dangerous blood pressure changes",
        "Other acetaminophen products - liver damage risk"
      ],
      recommendations: [
        "Take with food to reduce stomach irritation",
        "Avoid alcohol consumption",
        "Do not exceed 4 doses in 24 hours",
        "Consult doctor if symptoms persist beyond 7 days"
      ]
    };
    
    setResults(mockResults);
    setIsAnalyzing(false);
    setStep(4);
  };

  const handleClose = () => {
    setStep(1);
    setUserInfo({ age: "", gender: "", medicine: "" });
    setResults(null);
    setIsAnalyzing(false);
    onOpenChange(false);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-success';
      case 'medium': return 'text-warning';
      case 'high': return 'text-danger';
      default: return 'text-text-muted';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'low': return <CheckCircle className="w-5 h-5" />;
      case 'medium': return <AlertTriangle className="w-5 h-5" />;
      case 'high': return <AlertTriangle className="w-5 h-5" />;
      default: return <Info className="w-5 h-5" />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="glass-strong border-glass-border max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Medicine Safety Analysis
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Step indicators */}
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  i <= step
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-text-muted'
                }`}
              >
                {i}
              </div>
            ))}
          </div>

          {/* Step 1: Age and Gender */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                <p className="text-text-muted">Help us provide personalized analysis</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={userInfo.age}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, age: e.target.value }))}
                    className="glass"
                  />
                </div>
                
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={userInfo.gender} onValueChange={(value) => setUserInfo(prev => ({ ...prev, gender: value }))}>
                    <SelectTrigger className="glass">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                onClick={handleNextStep}
                disabled={!userInfo.age || !userInfo.gender}
                className="w-full bg-gradient-primary hover:shadow-glow"
              >
                Continue
              </Button>
            </div>
          )}

          {/* Step 2: Medicine Input */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Medicine Information</h3>
                <p className="text-text-muted">Enter the medicine name or active ingredients</p>
              </div>
              
              <div>
                <Label htmlFor="medicine">Medicine Name</Label>
                <Input
                  id="medicine"
                  placeholder="e.g., Tylenol Cold & Flu, Ibuprofen 200mg"
                  value={userInfo.medicine}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, medicine: e.target.value }))}
                  className="glass"
                />
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button 
                  onClick={handleNextStep}
                  disabled={!userInfo.medicine}
                  className="flex-1 bg-gradient-primary hover:shadow-glow"
                >
                  Analyze Medicine
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Analyzing */}
          {step === 3 && isAnalyzing && (
            <div className="space-y-6 animate-fade-in text-center py-12">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center pulse-glow">
                  <Loader2 className="w-8 h-8 animate-spin text-primary-foreground" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Analyzing Medicine...</h3>
                <p className="text-text-muted">Processing composition and safety data</p>
              </div>
              
              <div className="space-y-2 text-sm text-text-muted">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>Checking active ingredients</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span>Analyzing potential interactions</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span>Generating safety recommendations</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Results */}
          {step === 4 && results && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Analysis Complete</h3>
                <p className="text-text-muted">Here's your medicine safety analysis</p>
              </div>

              <div className="space-y-4">
                {/* Risk Level */}
                <Card className="glass border-glass-border">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className={getRiskColor(results.riskLevel)}>
                        {getRiskIcon(results.riskLevel)}
                      </div>
                      <div>
                        <h4 className="font-semibold">Risk Level</h4>
                        <p className={`text-sm capitalize ${getRiskColor(results.riskLevel)}`}>
                          {results.riskLevel} Risk
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Composition */}
                <Card className="glass border-glass-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-3">Active Ingredients</h4>
                    <div className="space-y-2">
                      {results.composition.map((ingredient, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{ingredient}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Side Effects */}
                <Card className="glass border-glass-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-3">Possible Side Effects</h4>
                    <div className="space-y-2">
                      {results.sideEffects.map((effect, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <AlertTriangle className="w-3 h-3 text-warning" />
                          <span className="text-sm">{effect}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Drug Interactions */}
                <Card className="glass border-glass-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-3">Drug Interactions</h4>
                    <div className="space-y-2">
                      {results.interactions.map((interaction, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <AlertTriangle className="w-3 h-3 text-danger" />
                          <span className="text-sm">{interaction}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card className="glass border-glass-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-3">Recommendations</h4>
                    <div className="space-y-2">
                      {results.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-success" />
                          <span className="text-sm">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button 
                onClick={handleClose}
                className="w-full bg-gradient-primary hover:shadow-glow"
              >
                Start New Analysis
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};