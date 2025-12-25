import React, { useState } from 'react';
import { ArrowRight,  Lightbulb, Wallet, Users, CheckCircle, Loader2, ShieldAlert, Terminal, Activity } from 'lucide-react';

// --- LOGIC HOOKS (From your "Technical Handoff" Screenshot) ---

// This simulates the backend AI logic described in the Sentinel screenshot
const useTrustFund = () => {
  const [proofInput, setProofInput] = useState("");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<{
    score: number;
    verdict: "PASS" | "FAIL";
    summary: string;
    swot: { s: string[]; w: string[]; o: string[]; t: string[] };
  } | null>(null);

  const runAudit = () => {
    if (!proofInput) return;
    setIsAuditing(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Mock Response based on your Sentinel screenshot
      setAuditResult({
        score: 92,
        verdict: "PASS",
        summary: "Codebase demonstrates robust security practices with minor optimization needs.",
        swot: {
            s: ["High Test Coverage", "Audited Smart Contracts"],
            w: ["Complex UI Logic", "Heavy Dependency Chain"],
            o: ["Gas Optimization", "Layer 2 Scaling"],
            t: ["Flash Loan Attacks", "Oracle Manipulation"]
        }
      });
      setIsAuditing(false);
    }, 2000);
  };

  return { proofInput, setProofInput, runAudit, auditResult, isAuditing };
};

// --- SHARED COMPONENTS ---

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "danger" | "success";
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, className = "", variant = "primary", onClick, disabled }: ButtonProps) => {
  const baseStyle = "px-6 py-2 rounded-full font-bold text-sm transition-all active:translate-y-1 flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-black text-white border-2 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    outline: "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    danger: "bg-red-500 text-white border-2 border-black hover:bg-red-600 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    success: "bg-green-500 text-black border-2 border-black hover:bg-green-400 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
  };
  
  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Section = ({ children, className = "", noBorderBottom = false }: { children: React.ReactNode, className?: string, noBorderBottom?: boolean }) => (
  <div className={`border-x-2 border-black px-6 py-12 md:p-16 ${!noBorderBottom ? 'border-b-2' : ''} ${className}`}>
    {children}
  </div>
);

// --- NEW FUNCTIONAL COMPONENTS (Based on Spec Sheet) ---

const CampaignDashboard = () => {
  const raised = 750;
  const goal = 1000;
  const percentage = (raised / goal) * 100;

  return (
    <div className="mb-12 border-2 border-black p-6 rounded-2xl bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-between items-end mb-4">
            <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Active Campaign</h3>
                <h2 className="text-3xl font-black">SOLANA DEX V1</h2>
            </div>
            <div className="text-right">
                <span className="text-3xl font-black">{raised}</span>
                <span className="text-sm font-bold text-gray-500"> / {goal} SOL</span>
            </div>
        </div>
        
        {/* Brutalist Progress Bar */}
        <div className="w-full h-8 border-2 border-black rounded-full overflow-hidden relative bg-gray-100">
            <div 
                className="h-full bg-chorke-green border-r-2 border-black transition-all duration-1000 flex items-center justify-center"
                style={{ width: `${percentage}%` }}
            >
                <span className="text-xs font-bold whitespace-nowrap px-2">{percentage}% FUNDED</span>
            </div>
            {/* Striped overlay for texture */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,#000_25%,#000_50%,transparent_50%,transparent_75%,#000_75%,#000_100%)] bg-[size:10px_10px]"></div>
        </div>
    </div>
  );
};

const MilestoneTracker = () => {
  // JSON Data Structure from your screenshot
  const milestones = [
    { id: 1, name: "Phase 1: UI Design", status: "Completed" },
    { id: 2, name: "Phase 2: Smart Contracts", status: "In Review" },
    { id: 3, name: "Phase 3: Mainnet Launch", status: "Pending" }
  ];

  return (
    <div className="space-y-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
            <Activity className="w-6 h-6" /> Milestone Governance
        </h3>
        <div className="space-y-3">
            {milestones.map((m) => {
                // Visual Logic based on status
                const isCompleted = m.status === "Completed";
                const isActive = m.status === "In Review";
                
                let containerStyle = "border-2 border-black p-4 rounded-xl flex justify-between items-center transition-all ";
                if (isCompleted) containerStyle += "bg-green-100";
                else if (isActive) containerStyle += "bg-white border-dashed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]";
                else containerStyle += "bg-gray-50 text-gray-400";

                return (
                    <div key={m.id} className={containerStyle}>
                        <div className="font-bold text-sm md:text-base">{m.name}</div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase">
                            {isCompleted && <span className="flex items-center gap-1 bg-green-300 px-2 py-1 rounded border border-black"><CheckCircle size={12}/> Done</span>}
                            {isActive && (
                                <span className="flex items-center gap-1 bg-yellow-300 px-2 py-1 rounded border border-black animate-pulse">
                                    <Loader2 size={12} className="animate-spin"/> Audit Active
                                </span>
                            )}
                            {m.status === "Pending" && <span>Waiting</span>}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  );
};

const SentinelAuditor = () => {
    // 1. Paste the Hook (Integration)
    const { proofInput, setProofInput, runAudit, auditResult, isAuditing } = useTrustFund();

    return (
        <div className="bg-white border-2 border-black rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-4 py-1 rounded-bl-xl z-10">
                THE SENTINEL V1.0
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* INPUT AREA */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">AI Auditor</h3>
                        <p className="text-sm text-gray-600">Submit proof of work for verification.</p>
                    </div>

                    <div className="relative">
                        <textarea 
                            // 3. Connect it: Bind value and onChange
                            value={proofInput}
                            onChange={(e) => setProofInput(e.target.value)}
                            className="w-full h-40 border-2 border-black rounded-xl p-4 font-mono text-sm resize-none focus:outline-none focus:ring-4 focus:ring-yellow-200"
                            placeholder="Paste GitHub commit hash or repository log here..."
                        ></textarea>
                        <div className="absolute bottom-4 right-4 text-xs font-bold bg-gray-100 px-2 py-1 rounded border border-gray-300">
                            MARKDOWN SUPPORTED
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {/* 3. Connect it: Bind runAudit */}
                        <Button 
                            onClick={runAudit} 
                            disabled={isAuditing || !proofInput}
                            className="w-full justify-center"
                        >
                            {isAuditing ? <><Loader2 className="animate-spin"/> ANALYZING...</> : "RUN AUDIT"}
                        </Button>
                    </div>
                </div>

                {/* OUTPUT DISPLAY (REPORT CARD) */}
                <div className={`border-2 border-black rounded-xl bg-gray-50 p-6 flex flex-col justify-center transition-all ${auditResult ? 'bg-white' : 'opacity-70 grayscale'}`}>
                    {!auditResult ? (
                        <div className="text-center space-y-4 text-gray-400">
                            <ShieldAlert className="w-16 h-16 mx-auto stroke-1" />
                            <p className="font-bold">Awaiting Input Data...</p>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex justify-between items-center border-b-2 border-black pb-4">
                                <div>
                                    <div className="text-xs font-bold text-gray-500 uppercase">Trust Score</div>
                                    <div className="text-5xl font-black">{auditResult.score}%</div>
                                </div>
                                <div className={`px-4 py-2 border-2 border-black rounded-lg font-bold text-xl ${auditResult.verdict === 'PASS' ? 'bg-green-400' : 'bg-red-400'}`}>
                                    {auditResult.verdict}
                                </div>
                            </div>

                            <div>
                                <div className="text-xs font-bold text-gray-500 uppercase mb-1">Summary</div>
                                <p className="text-sm font-medium leading-relaxed">{auditResult.summary}</p>
                            </div>

                            {/* SWOT GRID from Screenshot */}
                            <div className="grid grid-cols-2 gap-2 text-[10px] uppercase font-bold">
                                <div className="bg-blue-100 p-2 border border-black rounded">
                                    <span className="block text-blue-800 mb-1">Strengths</span>
                                    <ul className="list-disc pl-3">{auditResult.swot.s.map(i => <li key={i}>{i}</li>)}</ul>
                                </div>
                                <div className="bg-red-100 p-2 border border-black rounded">
                                    <span className="block text-red-800 mb-1">Weaknesses</span>
                                    <ul className="list-disc pl-3">{auditResult.swot.w.map(i => <li key={i}>{i}</li>)}</ul>
                                </div>
                                <div className="bg-green-100 p-2 border border-black rounded">
                                    <span className="block text-green-800 mb-1">Opportunities</span>
                                    <ul className="list-disc pl-3">{auditResult.swot.o.map(i => <li key={i}>{i}</li>)}</ul>
                                </div>
                                <div className="bg-yellow-100 p-2 border border-black rounded">
                                    <span className="block text-yellow-800 mb-1">Threats</span>
                                    <ul className="list-disc pl-3">{auditResult.swot.t.map(i => <li key={i}>{i}</li>)}</ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- PAGE SECTIONS ---

const Navbar = () => {
    // 1. Global State (Wallet Connection) Mock
    const [connected, setConnected] = useState(false);
    const [address, setAddress] = useState("");

    const handleConnect = () => {
        if(!connected) {
            setConnected(true);
            setAddress("8x...39a");
        } else {
            setConnected(false);
            setAddress("");
        }
    }

    return (
        <nav className="border-2 border-black rounded-t-3xl bg-white p-4 flex justify-between items-center sticky top-0 z-50">
            <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
                <span className="font-bold text-lg">✻</span>
            </div>
            <span className="font-bold text-xl tracking-tight">Chorke</span>
            </div>
            
            <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:underline">Platform Solutions</a>
            <a href="#" className="hover:underline">Governance</a>
            <a href="#" className="hover:underline">Insights</a>
            </div>

            {/* Wallet Button Logic */}
            <button 
                onClick={handleConnect}
                className={`${connected ? 'bg-black text-white' : 'bg-chorke-yellow text-black'} border-2 border-black px-6 py-2 rounded-full font-bold text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2`}
            >
                {connected ? <><Wallet size={16}/> {address}</> : "CONNECT WALLET"}
            </button>
        </nav>
    );
};

const Hero = () => (
  <Section className="bg-gradient-to-br from-purple-100 via-pink-100 to-white relative overflow-hidden">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6 z-10">
        <div className="flex items-center gap-2 text-sm font-bold opacity-80">
          <span className="bg-yellow-200 p-1 rounded">⚠️</span> Engineering
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter">
          TRUSTFUND 
        
        </h1>
        <p className="text-gray-600 max-w-md text-sm md:text-base leading-relaxed">
          We are a digital asset and blockchain leader helping institutions, startups, and qualified individuals unlock a changing economy.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -top-4 -left-4 w-20 h-20 bg-chorke-yellow rounded-full border-2 border-black flex items-center justify-center animate-spin-slow z-20 shadow-sm">
          <span className="text-[10px] font-bold uppercase text-center leading-tight">First<br/>Class</span>
        </div>
        
        <div className="border-2 border-black rounded-[2rem] overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
             <img 
              src="https://placehold.co/600x400/png?text=Team+Collab" 
              alt="Team working" 
              className="w-full h-64 object-cover"
            />
        </div>
      </div>
    </div>
  </Section>
);

const ServiceGrid = () => (
  <div className="grid md:grid-cols-3 border-x-2 border-black border-b-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
    <div className="bg-chorke-yellow p-8 flex flex-col justify-between h-64 hover:bg-yellow-300 transition-colors group">
      <div>
        <Lightbulb className="w-8 h-8 mb-4 stroke-[1.5]" />
        <h3 className="text-xl font-bold mb-2">Asset Management</h3>
        <p className="text-xs text-black/80">Institutional grade fund offerings across active and passive strategies.</p>
      </div>
      <Button className="w-fit text-xs px-4 py-1 bg-black text-white group-hover:bg-white group-hover:text-black">Learn More <ArrowRight size={14}/></Button>
    </div>

    <div className="bg-chorke-green p-8 flex flex-col justify-between h-64 hover:bg-green-400 transition-colors group">
      <div>
        <Wallet className="w-8 h-8 mb-4 stroke-[1.5]" />
        <h3 className="text-xl font-bold mb-2">Investment Banking</h3>
        <p className="text-xs text-black/80">Full lifecycle advisory services, capital markets and M&A.</p>
      </div>
      <Button className="w-fit text-xs px-4 py-1 bg-black text-white group-hover:bg-white group-hover:text-black">Learn More <ArrowRight size={14}/></Button>
    </div>

    <div className="bg-chorke-pink p-8 flex flex-col justify-between h-64 hover:bg-pink-300 transition-colors group">
      <div>
        <Users className="w-8 h-8 mb-4 stroke-[1.5]" />
        <h3 className="text-xl font-bold mb-2">Chorke Ventures</h3>
        <p className="text-xs text-black/80">Direct investments in early stage venture equity and liquid tokens.</p>
      </div>
      <Button className="w-fit text-xs px-4 py-1 bg-black text-white group-hover:bg-white group-hover:text-black">Learn More <ArrowRight size={14}/></Button>
    </div>
  </div>
);

// --- THE INTEGRATED TRUSTFUND DASHBOARD SECTION ---
const TrustFundDashboard = () => (
    <Section className="bg-gradient-to-r from-purple-50 to-white">
        <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                Project Trust Dashboard
            </h2>
            <p className="text-sm text-gray-600 max-w-md">
                Don't just trust. Verify. Track milestone completion and run real-time AI audits on codebase submissions.
            </p>
        </div>

        {/* Integration Spec Sheet Implementation */}
        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <CampaignDashboard />
                <SentinelAuditor />
            </div>
            <div className="lg:col-span-1">
                <MilestoneTracker />
                
                {/* Decorative Box below milestones */}
                <div className="mt-8 bg-black text-white p-6 rounded-xl border-2 border-black shadow-[8px_8px_0px_0px_#fbbf24]">
                    <Terminal className="mb-4" />
                    <h4 className="font-bold text-lg mb-2">Developer API</h4>
                    <p className="text-xs opacity-70 mb-4">Integrate the Sentinel Auditor directly into your CI/CD pipeline.</p>
                    <code className="block bg-gray-900 p-2 rounded text-[10px] font-mono mb-4 text-green-400">
                        npm install @chorke/sentinel
                    </code>
                </div>
            </div>
        </div>
    </Section>
);

const Footer = () => (
  <footer className="bg-chorke-cream border-x-2 border-b-2 border-black rounded-b-3xl p-8 md:p-12">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      <div className="col-span-2 md:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xl">✻</span>
          <span className="font-bold text-xl">Chorke</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-bold text-xs uppercase tracking-wider">Platform Solutions</h4>
        <ul className="space-y-2 text-xs text-gray-600">
          <li><a href="#" className="hover:underline">Trading</a></li>
          <li><a href="#" className="hover:underline">Asset Management</a></li>
          <li><a href="#" className="hover:underline">Chorke Ventures</a></li>
          <li><a href="#" className="hover:underline">Bitcoin Mining</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-black/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 font-medium uppercase">
      <p>Copyright © Chorke.com 2024. Design by AnotherFlight.</p>
    </div>
  </footer>
);

// --- MAIN APP COMPONENT ---
function App() {
  return (
    <div className="min-h-screen w-full bg-[#fefce8] bg-[radial-gradient(#854d0e26_3px,transparent_3px)] bg-[size:32px_32px] p-2 md:p-8 text-black font-sans selection:bg-black selection:text-white">
      <div className="max-w-[1300px] relative bottom-2 mx-auto shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-3xl bg-white">
        <Navbar />
        <Hero />
        <ServiceGrid />
        
        {/* REPLACED: Static VerifySection with Dynamic TrustFund Dashboard */}
        <TrustFundDashboard />
        
        <Footer />
      </div>
    </div>
  );
}

export default App;