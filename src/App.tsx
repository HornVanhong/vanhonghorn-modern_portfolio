import React, { useState, useEffect } from "react";
import { 
  Shield, 
  Cpu, 
  Zap, 
  Network, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Download, 
  BookOpen, 
  Terminal, 
  Sliders, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  GitBranch, 
  Award, 
  FileText, 
  Send, 
  Check, 
  Briefcase, 
  GraduationCap, 
  Volume2, 
  VolumeX, 
  Grid,
  Camera,
  Upload
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { 
  PORTFOLIO_OWNER, 
  SKILL_CATEGORIES, 
  PROJECTS, 
  EXPERIENCE, 
  EDUCATION, 
  BLOGS, 
  CERTIFICATES, 
  LAB_DOCUMENTS 
} from "./data";
import { sound } from "./components/SoundManager";
import LogParserSimulation from "./components/LogParserSimulation";
import NetworkMapSimulation from "./components/NetworkMapSimulation";

type ModeId = "overview" | "cybersecurity" | "frontend" | "webdev" | "networking" | "education" | "contact";

interface ModeDetail {
  id: ModeId;
  label: string;
  alienClass: string;
  tagline: string;
  icon: React.ComponentType<any>;
  color: string; // Neon highlight colors
}

const MODES: ModeDetail[] = [
  {
    id: "overview",
    label: "Holo Overview",
    alienClass: "Standard Interface",
    tagline: "Multitask command matrix reviewing entire engineering archives.",
    icon: Grid,
    color: "#39ff14"
  },
  {
    id: "cybersecurity",
    label: "Grey Matter",
    alienClass: "Defensive Cyber & Linux",
    tagline: "Ultra-analytical processing targeting script hardening and host protections.",
    icon: Shield,
    color: "#39ff14"
  },
  {
    id: "frontend",
    label: "Upgrade",
    alienClass: "React Native & App Architecture",
    tagline: "Merging with device hardware to compile high-fidelity, secure mobile banking flows.",
    icon: Cpu,
    color: "#00ffcc"
  },
  {
    id: "webdev",
    label: "XLR8",
    alienClass: "High-Performance Web Frontend",
    tagline: "Dynamic response states and seamless fluid layouts styled in supersonic times.",
    icon: Zap,
    color: "#a3ff12"
  },
  {
    id: "networking",
    label: "Brainstorm",
    alienClass: "Cisco Infrastructure & Diagnostics",
    tagline: "Advanced synapses troubleshooting complex client WAN routing tables and gateway handshakes.",
    icon: Network,
    color: "#ff9000"
  },
  {
    id: "education",
    label: "Academy Logs",
    alienClass: "Academic Milestones & Certifications",
    tagline: "Systematic index mapping core training databases, verified credentials, and reports.",
    icon: GraduationCap,
    color: "#ffffff"
  },
  {
    id: "contact",
    label: "Uplink Signal",
    alienClass: "Direct Transmission Gateway",
    tagline: "Secure port channel seeking collaborative projects, partnerships, or developer contracts.",
    icon: Mail,
    color: "#39ff14"
  }
];

export default function App() {
  const [activeModeIndex, setActiveModeIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [rotation, setRotation] = useState<number>(0);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "transmitting" | "sent">("idle");
  const [omnitrixUnlocked, setOmnitrixUnlocked] = useState<boolean>(false);

  const activeMode = MODES[activeModeIndex];

  // Auto-unlock animation sequence on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setOmnitrixUnlocked(true);
      if (!isMuted) {
        sound.playLock();
      }
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const changeMode = (index: number) => {
    if (index === activeModeIndex) return;
    
    // Play sound depending on switch
    sound.playSpin();
    
    // Calculate shortest physics rotation direction to slide the dial graphic
    const direction = index > activeModeIndex ? 1 : -1;
    setRotation((prev) => prev + direction * 45);
    setActiveModeIndex(index);
  };

  const handlePrev = () => {
    const nextIndex = activeModeIndex === 0 ? MODES.length - 1 : activeModeIndex - 1;
    changeMode(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = activeModeIndex === MODES.length - 1 ? 0 : activeModeIndex + 1;
    changeMode(nextIndex);
  };

  const handleMuteToggle = () => {
    const isNowMuted = sound.toggleMute();
    setIsMuted(isNowMuted);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    sound.playTransmission();
    setFormStatus("transmitting");

    setTimeout(() => {
      sound.playBeep(1000, "sine", 0.5, 0.2);
      setFormStatus("sent");
      setContactForm({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <div id="portfolio_canvas" className="min-h-screen bg-omni-dark text-white font-sans bg-omni-grid relative select-none flex flex-col md:overflow-x-hidden">
      

      {/* Decorative sci-fi corners and sweep lasers */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-omni-dim/15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-omni-dim/15 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-omni-dim/15 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-omni-dim/15 pointer-events-none" />

      {/* Glow Vignette Backdrop */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-0" />

      {/* Interactive Sound Activator Alarm Box (Only shown if page load muted is true) */}
      {isMuted && (
        <div id="audio_disclaimer_overlay" className="bg-[#0b1329]/95 border-b border-omni-green/20 py-2.5 px-4 text-center z-50 flex items-center justify-center space-x-3 text-xs tracking-wider animate-pulse transition-all duration-500">
          <Terminal className="w-4 h-4 text-omni-green animate-bounce" />
          <span className="font-mono text-omni-green font-semibold">
            OMNITRIX DIAGNOSTIC: AUDIO SUB-ROUTES SUSPENDED.
          </span>
          <button 
            id="btn_enable_audio"
            onClick={handleMuteToggle}
            className="bg-omni-green text-black px-3 py-1 rounded font-display text-[10px] uppercase font-black hover:scale-105 active:scale-95 transition-transform"
          >
            Activate Uplink Sound
          </button>
        </div>
      )}

      {/* CORE HEADER */}
      <header className="border-b border-omni-border/30 bg-[#0b0f19]/80 backdrop-blur-md relative z-40 py-4 px-4 md:px-8 flex items-center justify-between">
        
        {/* Left identity logo with Omnitrix badge */}
        <div className="flex items-center space-x-3">
          <div className="relative w-11 h-11 flex items-center justify-center border border-omni-green/45 rounded-full bg-[#0c1017] p-0.5 shadow-[0_0_8px_rgba(16,185,129,0.2)] shrink-0 animate-omni-pulse overflow-hidden">
            <img 
              src={PORTFOLIO_OWNER.avatar} 
              referrerPolicy="no-referrer"
              className="w-full h-full rounded-full object-cover" 
              alt={PORTFOLIO_OWNER.name} 
            />
          </div>
          <div>
            <h1 className="font-display font-extrabold text-[#ffffff] text-base md:text-lg tracking-wider uppercase leading-none">
              {PORTFOLIO_OWNER.name}
            </h1>
            <p className="font-mono text-[10px] md:text-xs text-omni-green/85 uppercase tracking-widest mt-1">
              {PORTFOLIO_OWNER.title}
            </p>
          </div>
        </div>

        {/* Global Controls */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex flex-col items-end font-mono text-[10px] text-white/50 tracking-wide text-right">
            <span>UPLINK STATUS: ESTABLISHED</span>
            <span className="text-omni-green/80 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-omni-green animate-ping inline-block" />
              OMNITRIX COGNITIVE HUD v10.5
            </span>
          </div>

          <button
            id="btn_header_mute"
            onClick={handleMuteToggle}
            className={`p-2 rounded-lg border transition-all duration-300 ${
              isMuted 
                ? "border-amber-900/30 bg-amber-950/20 text-amber-500 hover:bg-amber-950/40" 
                : "border-omni-green/30 bg-omni-green/10 text-omni-green hover:bg-omni-green/10"
            }`}
            title={isMuted ? "Unmute" : "Mute Sound"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-bounce" />}
          </button>
        </div>
      </header>

      {/* CORE WORKSPACE GRID */}
      <main className="flex-1 flex flex-col xl:flex-row max-w-7xl w-full mx-auto p-4 md:p-6 lg:p-8 gap-6 md:gap-8 relative z-20 overflow-hidden">
        
        {/* LEFT COLUMN: THE OMNITRIX INTERACTIVE DIAL PANEL (1/3 Width on huge screens) */}
        <section id="omnitrix_control_module" className="w-full xl:w-[400px] shrink-0 flex flex-col items-center justify-between space-y-6 bg-[#0b0f19]/70 border border-omni-border/55 rounded-2xl p-6 relative backdrop-blur-md">
          {/* Subtle grid accent inside background */}
          <div className="absolute inset-0 bg-omni-grid opacity-10 rounded-2xl pointer-events-none" />

          {/* Core DNA Dial Indicator text */}
          <div className="text-center w-full z-10">
            <span className="font-mono text-[9px] text-omni-green/40 uppercase tracking-widest block mb-1">
              CURRENT DNA MODE SELECTOR
            </span>
            <span className="font-display text-lg text-[#ffffff] font-extrabold uppercase tracking-wider block drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]">
              {activeMode.label}
            </span>
            <span className="font-mono text-[10px] text-omni-green font-semibold uppercase tracking-wider border border-omni-border bg-[#0c1017] px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
              {activeMode.alienClass}
            </span>
          </div>

          {/* THE PHYSICAL OMNITRIX GRAPHIC ROTATING INTERFACE */}
          <div id="omnitrix_wheel_housing" className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center my-6">
            
            {/* Spinning Outer Ring with indicator marks */}
            <motion.div 
              style={{ rotate: rotation }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="absolute w-full h-full rounded-full border-4 border-dashed border-omni-dim/20 p-4 flex items-center justify-center"
            >
              {/* Green indicator points representing DNA slices */}
              {MODES.map((mode, i) => {
                const angle = (360 / MODES.length) * i;
                const isActive = i === activeModeIndex;
                const ModeIcon = mode.icon;

                return (
                  <button
                    key={mode.id}
                    id={`dna_point_${mode.id}`}
                    onClick={() => changeMode(i)}
                    style={{ 
                      transform: `rotate(${angle}deg) translateY(-110px) rotate(-${angle}deg)` 
                    }}
                    className={`absolute p-2.5 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-omni-green border-white text-black scale-125 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                        : "bg-[#0b0f19] border-omni-dim/30 text-omni-green/70 hover:border-omni-green hover:scale-110"
                    }`}
                    title={mode.label}
                  >
                    <ModeIcon className="w-4 h-4" />
                  </button>
                );
              })}
            </motion.div>

            {/* Glowing Mid Ring Panel */}
            <div className="absolute w-[80%] h-[80%] rounded-full border-2 border-omni-green/25 bg-[#090f1d] shadow-inner flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full bg-radial-vignette opacity-70" />
            </div>

            {/* Core Interactive Hourglass Button - Press to unlock / toggle sound */}
            <button
              id="omnitrix_center_dial_core"
              onClick={() => {
                sound.playLock();
                // Faux dial spin
                setRotation((prev) => prev + 360);
              }}
              className="absolute w-[50%] h-[50%] rounded-full bg-gradient-to-br from-slate-900 to-slate-950 border-4 border-omni-border shadow-[0_4px_10px_rgba(0,0,0,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group overflow-hidden"
            >
              {/* Core Hourglass symbol SVG */}
              <svg 
                viewBox="0 0 100 100" 
                className={`w-[80%] h-[80%] transform transition-transform duration-1000 ${
                  omnitrixUnlocked ? "fill-omni-green drop-shadow-[0_0_12px_rgba(16,185,129,0.35)]" : "fill-omni-dim/50"
                } group-hover:rotate-180`}
              >
                <path d="M 20 20 L 80 20 L 80 35 L 50 50 L 80 65 L 80 80 L 20 80 L 20 65 L 50 50 L 20 35 Z" />
              </svg>

              {/* Hologram Pulse Indicator Ring */}
              <div className="absolute inset-0 rounded-full border border-omni-green/20 animate-ping pointer-events-none opacity-40 group-hover:block hidden" />
            </button>
          </div>

          {/* Quick Manual Steppers for easy browsing */}
          <div className="flex items-center justify-between w-full border-t border-b border-omni-border/10 py-3 z-10">
            <button
              id="btn_omni_prev"
              onClick={handlePrev}
              className="px-3 py-1.5 rounded-lg border border-omni-border bg-[#0b0f19] text-omni-green text-xs font-display tracking-widest uppercase hover:border-omni-green hover:bg-[#0c1017] transition-all flex items-center space-x-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>SPIN L</span>
            </button>
            <div className="font-mono text-[10px] text-omni-green/75 font-semibold">
              DNA COMPILATION {(activeModeIndex + 1).toString().padStart(2, "0")} / {MODES.length.toString().padStart(2, "0")}
            </div>
            <button
              id="btn_omni_next"
              onClick={handleNext}
              className="px-3 py-1.5 rounded-lg border border-omni-border bg-[#0b0f19] text-omni-green text-xs font-display tracking-widest uppercase hover:border-omni-green hover:bg-[#0c1017] transition-all flex items-center space-x-1"
            >
              <span>SPIN R</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bottom Diagnostics Text */}
          <div className="w-full text-center text-white/50 font-mono text-[11px] leading-relaxed z-10 pt-2 hidden xl:block">
            {activeMode.tagline}
          </div>
        </section>

        {/* RIGHT COLUMN: THE HOLOGRAPHIC MODE DISPLAY MODULE (2/3 Width) */}
        <section id="hologram_viewer_module" className="flex-1 bg-black/40 border border-omni-border/30 rounded-2xl p-4 md:p-6 lg:p-8 relative backdrop-blur-md flex flex-col overflow-hidden min-h-[500px]">
          
          {/* Active holographic scan sweep asset */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-omni-green to-transparent opacity-30 animate-laser-sweep pointer-events-none z-10" />
          <div className="absolute inset-0 bg-omni-grid opacity-[0.06] pointer-events-none" />

          {/* Mode Header details */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-omni-border/30 pb-4 mb-6 z-10 gap-4">
            <div>
              <span className="font-mono text-[10px] text-omni-green/60 uppercase tracking-widest block">
                COGNITIVE DIAL MODULE
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-black uppercase text-[#ffffff] tracking-wide mt-1">
                {activeMode.label}
              </h2>
            </div>
            <div className="text-left md:text-right font-mono text-xs">
              <div className="text-omni-green font-semibold">BIO-LINK MATRIX Active</div>
              <div className="text-white/40 text-[10px]">COORDINATE: PHNOM PENH, KH</div>
            </div>
          </div>

          {/* HOLOGRAPHIC CONTAINER WITH ROUTING TRANSITIONS */}
          <div className="flex-1 flex flex-col z-10 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="flex-1 flex flex-col"
              >
                
                {/* 1. VIEW: OVERVIEW DASHBOARD */}
                {activeMode.id === "overview" && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Bio brief & Dynamic Profile Photo */}
                      <div className="bg-[#0b0f19]/70 border border-omni-border/40 rounded-xl p-5 md:p-6 mb-6 shadow-inner relative overflow-hidden">
                        <div className="absolute inset-0 bg-omni-grid opacity-15" />
                        
                        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start">
                          {/* Left: Futuristic Frame for Profile Avatar */}
                          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl border-2 border-omni-green/45 bg-black/60 shadow-[0_0_15px_rgba(16,185,129,0.15)] overflow-hidden select-none shrink-0 group">
                            {/* Ambient dark vignetting over profile portrait */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent z-10" />
                            <img 
                              src={PORTFOLIO_OWNER.avatar} 
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                              alt={`${PORTFOLIO_OWNER.name} Profile`} 
                            />
                          </div>

                          {/* Right: Personal identity bio fields */}
                          <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                              <h3 className="font-display font-extrabold text-sm md:text-base tracking-wider uppercase text-omni-green flex items-center justify-center md:justify-start gap-2">
                                <User className="w-4 h-4 text-omni-green" />
                                <span>Identity Parameters &amp; Credentials</span>
                              </h3>
                              <span className="font-mono text-[9px] text-[#00ffcc] border border-[#00ffcc]/35 bg-[#0a1e1d]/40 px-2 py-0.5 rounded-full lowercase tracking-wider">
                                status: active uplink
                              </span>
                            </div>

                            <p className="font-sans text-xs md:text-sm text-white/85 leading-relaxed font-light mb-4">
                              {PORTFOLIO_OWNER.bio}
                            </p>

                            <div className="grid grid-cols-2 gap-3 text-[10px] font-mono border-t border-omni-border/20 pt-3">
                              <div>
                                <span className="text-white/40 block uppercase text-[8px] tracking-widest">LOCAL REGISTRY</span>
                                <span className="text-white font-medium">{PORTFOLIO_OWNER.location}</span>
                              </div>
                              <div>
                                <span className="text-white/40 block uppercase text-[8px] tracking-widest">TRANSMISSION PORT</span>
                                <span className="text-omni-green font-medium">{PORTFOLIO_OWNER.contact.email}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Summary Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Security card */}
                        <div 
                          onClick={() => changeMode(1)} 
                          className="border border-omni-border/20 bg-black/40 hover:bg-[#0c1626] hover:border-omni-green/60 p-4 rounded-xl cursor-pointer transition-all duration-300 group shadow flex items-start space-x-3"
                        >
                          <Shield className="w-8 h-8 text-omni-green shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <span className="font-display font-bold text-xs tracking-wide text-white uppercase block">
                              Grey Matter System
                            </span>
                            <span className="font-mono text-[10px] text-omni-green/85 block mt-1">
                              Defensive Security, Log Analyzers, & Linux Info Tools
                            </span>
                          </div>
                        </div>

                        {/* Mobile development card */}
                        <div 
                          onClick={() => changeMode(2)} 
                          className="border border-omni-border/20 bg-black/40 hover:bg-[#0a1e1d] hover:border-[#00ffcc]/60 p-4 rounded-xl cursor-pointer transition-all duration-300 group shadow flex items-start space-x-3"
                        >
                          <Cpu className="w-8 h-8 text-[#00ffcc] shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <span className="font-display font-bold text-xs tracking-wide text-white uppercase block">
                              Upgrade Architecture
                            </span>
                            <span className="font-mono text-[10px] text-[#00ffcc]/85 block mt-1">
                              Digital Banking Front-End, React Native, & Flutter
                            </span>
                          </div>
                        </div>

                        {/* Cisco Networking card */}
                        <div 
                          onClick={() => changeMode(4)} 
                          className="border border-omni-border/20 bg-black/40 hover:bg-[#1a140f] hover:border-[#ff9000]/60 p-4 rounded-xl cursor-pointer transition-all duration-300 group shadow flex items-start space-x-3"
                        >
                          <Network className="w-8 h-8 text-[#ff9000] shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <span className="font-display font-bold text-xs tracking-wide text-white uppercase block">
                              Brainstorm Matrices
                            </span>
                            <span className="font-mono text-[10px] text-[#ff9000]/85 block mt-1">
                              Cisco Configuration Routing & Network Simulations
                            </span>
                          </div>
                        </div>

                        {/* Web Development card */}
                        <div 
                          onClick={() => changeMode(3)} 
                          className="border border-omni-border/20 bg-black/40 hover:bg-[#151a10] hover:border-[#a3ff12]/60 p-4 rounded-xl cursor-pointer transition-all duration-300 group shadow flex items-start space-x-3"
                        >
                          <Zap className="w-8 h-8 text-[#a3ff12] shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <span className="font-display font-bold text-xs tracking-wide text-white uppercase block">
                              XLR8 Engines
                            </span>
                            <span className="font-mono text-[10px] text-[#a3ff12]/85 block mt-1">
                              React, TypeScript Web, Speed Optimizations & Vite
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick navigation suggestion widget */}
                    <div className="mt-8 border-t border-omni-border/20 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <span className="font-mono text-[11px] text-white/50">
                        Spin the central Omnitrix wheel or click on any module above to inject specific system analytics.
                      </span>
                      <div className="flex space-x-3 uppercase font-mono text-[11px]">
                        <button onClick={() => changeMode(5)} className="text-white hover:text-omni-green flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>Academy Logs &raquo;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. VIEW: GREY MATTER (CYBERSECURITY) */}
                {activeMode.id === "cybersecurity" && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Section intro */}
                      <p className="text-sm font-light text-white/95 leading-relaxed mb-6">
                        I specialize in system defenses, tracking unauthorized events, and isolating network intrusions. Utilizing command-line analysis, host hardening procedures, and custom parsing scripts built in Python and Bash.
                      </p>

                      {/* Interactive PyParser Simulator widget */}
                      <div className="mb-6">
                        <span className="font-mono text-xs text-omni-green/70 uppercase tracking-widest block mb-1">
                          INTERACTIVE COMPONENT: AUTH LOG PARSING RUN
                        </span>
                        <LogParserSimulation />
                      </div>

                      {/* Key Projects details */}
                      <div className="space-y-4">
                        <h4 className="font-display text-sm tracking-wider uppercase text-omni-green border-b border-omni-border/30 pb-1.5">
                          Cyber Security Project Artifacts
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {PROJECTS.filter(p => ["log-analyzer", "linux-extractor"].includes(p.id)).map(proj => (
                            <div key={proj.id} className="bg-black/30 border border-omni-border/20 p-4 rounded-xl">
                              <span className="font-mono text-[10px] text-omni-green uppercase block">{proj.subtitle}</span>
                              <span className="font-display font-extrabold text-sm text-white uppercase block mt-1">{proj.title}</span>
                              <p className="text-xs text-white/60 font-light mt-2 leading-relaxed">{proj.description}</p>
                              <ul className="mt-3.5 space-y-1.5">
                                {proj.points.map((pt, index) => (
                                  <li key={index} className="text-[11px] font-mono text-omni-green/80 flex items-start space-x-1">
                                    <span className="shrink-0">&raquo;</span>
                                    <span>{pt}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="pt-6 border-t border-omni-border/20">
                      <div className="flex flex-wrap gap-2">
                        {SKILL_CATEGORIES[0].skills.map((sk, index) => (
                          <span key={index} className="bg-zinc-950 border border-omni-border/40 text-omni-green font-mono text-[10.5px] px-2.5 py-1 rounded">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. VIEW: UPGRADE (MOBILE APP FLUTES) */}
                {activeMode.id === "frontend" && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Intro */}
                      <p className="text-sm font-light text-white/95 leading-relaxed mb-6">
                        I bridge layout visions and physical systems. During my RHB Digital Banking internship, I improved React Native components, optimized app performance, and built practical Flutter features in professional development pipelines.
                      </p>

                      {/* Main project highlights */}
                      <div className="space-y-6">
                        {PROJECTS.filter(p => ["banking", "flutter-projects"].includes(p.id)).map(proj => (
                          <div key={proj.id} className="bg-black/30 border border-[#00ffcc]/20 hover:border-[#00ffcc]/40 transition-colors p-5 rounded-xl relative">
                            <div className="absolute top-4 right-4 text-[10px] font-mono text-[#00ffcc]/60">{proj.period}</div>
                            <span className="font-mono text-[10px] text-[#00ffcc] uppercase block font-semibold">{proj.subtitle}</span>
                            <span className="font-display font-extrabold text-base md:text-lg text-white uppercase block mt-1">{proj.title}</span>
                            <p className="text-xs md:text-sm text-white/70 font-light mt-2 leading-relaxed">{proj.description}</p>
                            
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3.5">
                              {proj.points.map((pt, index) => (
                                <div key={index} className="bg-zinc-950/40 p-2.5 rounded border border-omni-border/10 flex items-start space-x-2">
                                  <Check className="w-4 h-4 text-[#00ffcc] shrink-0 mt-0.5" />
                                  <span className="text-xs font-sans text-white/90 leading-relaxed font-light">{pt}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Specific professional techniques */}
                      <div className="mt-6 bg-[#0b0f19]/70 border border-[#00ffcc]/20 rounded-xl p-4">
                        <h4 className="font-display text-xs tracking-wider uppercase text-[#00ffcc] mb-2 flex items-center gap-1.5">
                          <Sliders className="w-4 h-4" />
                          <span>Professional In-App Tools Applied</span>
                        </h4>
                        <div className="flex flex-wrap gap-2.5 font-mono text-[10px] text-white/80">
                          {["SASS Stylesheets", "Styled-Components", "Git Workflow", "Bitbucket PR Reviews", "Jira Agility", "React Hooks", "TypeScript Safe Checks"].map((tool, idx) => (
                            <span key={idx} className="bg-zinc-950/80 px-2.5 py-1 border border-[#00ffcc]/20 rounded-full">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Skill bottom row */}
                    <div className="pt-6 border-t border-omni-border/20">
                      <div className="flex flex-wrap gap-2">
                        {SKILL_CATEGORIES[1].skills.map((sk, index) => (
                          <span key={index} className="bg-zinc-950 border border-[#00ffcc]/30 text-[#00ffcc] font-mono text-[10.5px] px-2.5 py-1 rounded">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. VIEW: XLR8 (WEB CORE) */}
                {activeMode.id === "webdev" && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Intro */}
                      <p className="text-sm font-light text-white/95 leading-relaxed mb-6">
                        Speed, modularity, and structural accuracy. I code responsive frontend sites with modern tools, utilizing React.js, TypeScript, and Tailwind CSS templates to enable clean user directories.
                      </p>

                      {/* Interactive stats / performance metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
                        <div className="bg-[#0b0f19]/70 border border-[#a3ff12]/20 p-4 rounded-xl">
                          <span className="font-display font-extrabold text-3xl text-[#a3ff12] block">100%</span>
                          <span className="font-mono text-[9px] text-[#a3ff12]/60 uppercase tracking-widest mt-1 block">Responsive Layouts</span>
                        </div>
                        <div className="bg-[#0b0f19]/70 border border-[#a3ff12]/20 p-4 rounded-xl">
                          <span className="font-display font-extrabold text-3xl text-[#a3ff12] block">&lt; 150ms</span>
                          <span className="font-mono text-[9px] text-[#a3ff12]/60 uppercase tracking-widest mt-1 block">Vite Build Speed</span>
                        </div>
                        <div className="bg-[#0b0f19]/70 border border-[#a3ff12]/20 p-4 rounded-xl">
                          <span className="font-display font-extrabold text-3xl text-[#a3ff12] block">Strict</span>
                          <span className="font-mono text-[9px] text-[#a3ff12]/60 uppercase tracking-widest mt-1 block">TypeScript Safety</span>
                        </div>
                      </div>

                      {/* Experiences block */}
                      <h4 className="font-display text-sm tracking-wider uppercase text-[#a3ff12] border-b border-omni-border/30 pb-1.5 mb-3">
                        Professional Work Timeline
                      </h4>

                      <div className="space-y-4">
                        {EXPERIENCE.map(exp => (
                          <div key={exp.id} className="bg-black/30 border border-[#a3ff12]/15 p-4 rounded-xl">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                              <div>
                                <span className="font-display text-sm uppercase font-extrabold text-[#ffffff]">{exp.role}</span>
                                <span className="text-xs font-mono text-[#a3ff12]/80 mt-0.5 block">{exp.company}</span>
                              </div>
                              <span className="text-[10px] font-mono text-[#a3ff12]/40 bg-[#a3ff12]/5 px-2 py-0.5 border border-[#a3ff12]/10 rounded mt-1.5 md:mt-0 max-w-fit">
                                {exp.period}
                              </span>
                            </div>
                            <ul className="space-y-1.5 font-sans text-xs text-white/75 font-light pl-1">
                              {exp.points.map((pt, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="text-[#a3ff12] shrink-0 font-bold">&rsaquo;</span>
                                  <span className="leading-relaxed">{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills footer tags */}
                    <div className="pt-6 border-t border-omni-border/20">
                      <div className="flex flex-wrap gap-2">
                        {SKILL_CATEGORIES[2].skills.map((sk, index) => (
                          <span key={index} className="bg-zinc-950 border border-[#a3ff12]/30 text-[#a3ff12] font-mono text-[10.5px] px-2.5 py-1 rounded">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. VIEW: BRAINSTORM (NETWORKING) */}
                {activeMode.id === "networking" && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Intro */}
                      <p className="text-sm font-light text-white/95 leading-relaxed mb-6">
                        Mastering routing, topological connectivity, and packet flows. During simulation tests and Cisco training laboratories, I mapped and audited complex networks, identifying subnets and blocking vulnerabilities.
                      </p>

                      {/* Interactive Network Topology Map */}
                      <div className="mb-6">
                        <span className="font-mono text-xs text-[#ff9000]/80 uppercase tracking-widest block mb-1">
                          INTERACTIVE COMPONENT: network topography explorer
                        </span>
                        <NetworkMapSimulation />
                      </div>

                      {/* Technical Cisco details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {PROJECTS.filter(p => ["netcraft", "cisco-labs"].includes(p.id)).map(proj => (
                          <div key={proj.id} className="bg-black/30 border border-[#ff9000]/15 p-4 rounded-xl">
                            <span className="font-mono text-[10px] text-[#ff9000] uppercase block">{proj.subtitle}</span>
                            <span className="font-display font-extrabold text-sm text-white uppercase block mt-1">{proj.title}</span>
                            <p className="text-xs text-white/60 font-light mt-2 leading-relaxed">{proj.description}</p>
                            <ul className="mt-3.5 space-y-1.5 pl-1.5">
                              {proj.points.map((pt, index) => (
                                <li key={index} className="text-[11px] font-mono text-[#ff9000]/85 flex items-start space-x-1">
                                  <span className="shrink-0">&raquo;</span>
                                  <span className="leading-relaxed">{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skill tags */}
                    <div className="pt-6 border-t border-omni-border/20">
                      <div className="flex flex-wrap gap-2">
                        {SKILL_CATEGORIES[3].skills.map((sk, index) => (
                          <span key={index} className="bg-zinc-950 border border-[#ff9000]/40 text-[#ff9000] font-mono text-[10.5px] px-2.5 py-1 rounded">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. VIEW: ACADEMY LOGS & DOCUMENTS */}
                {activeMode.id === "education" && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm font-light text-white/95 leading-relaxed mb-6">
                        My computer science path spans cybersecurity frameworks, enterprise networks, and frontend development. Below are my formal educational credentials and project PDF deliverables.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Timeline */}
                        <div>
                          <h4 className="font-display text-sm tracking-widest uppercase text-omni-green border-b border-omni-border/30 pb-2 mb-4">
                            ACADEMIC DATABASES
                          </h4>
                          <div className="space-y-5">
                            {EDUCATION.map(edu => (
                              <div key={edu.id} className="relative pl-4 border-l-2 border-omni-dim/50">
                                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-omni-green" />
                                <span className="font-display text-xs uppercase font-extrabold text-white block">
                                  {edu.institution}
                                </span>
                                <span className="font-mono text-[10.5px] text-omni-green block mt-0.5 font-medium uppercase">
                                  {edu.degree}
                                </span>
                                <ul className="mt-1.5 space-y-1 font-sans text-[11.5px] text-white/70 font-light leading-relaxed">
                                  {edu.points.map((p, i) => (
                                    <li key={i}>{p}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* PDFs and Certificates */}
                        <div className="space-y-5">
                          <div>
                            <h4 className="font-display text-sm tracking-widest uppercase text-omni-green border-b border-omni-border/30 pb-2 mb-4">
                              VERIFIED CERTIFICATES
                            </h4>
                            {CERTIFICATES.map(cert => (
                              <div key={cert.id} className="bg-black/30 border border-omni-border/30 p-4 rounded-xl flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <Award className="w-8 h-8 text-omni-green shrink-0" />
                                  <div>
                                    <span className="font-display text-xs uppercase font-black text-white leading-relaxed block">
                                      {cert.title}
                                    </span>
                                    <span className="font-mono text-[10px] text-white/40 block mt-0.5">
                                      File: {cert.fileName}
                                    </span>
                                  </div>
                                </div>
                                <a
                                  id="btn_download_cybercert"
                                  href={cert.downloadUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded bg-omni-green/10 border border-omni-green/30 text-omni-green hover:bg-omni-green hover:text-black transition-all cursor-pointer shrink-0"
                                  title="Download PDF"
                                >
                                  <Download className="w-4 h-4" />
                                </a>
                              </div>
                            ))}
                          </div>

                          <div>
                            <h4 className="font-display text-sm tracking-widest uppercase text-omni-green border-b border-omni-border/30 pb-2 mb-4">
                              COURSEWORK REPOSITORY
                            </h4>
                            <div className="space-y-3 font-mono text-[11px]">
                              {LAB_DOCUMENTS.map((doc, idx) => (
                                <div key={idx} className="bg-[#0b0f19]/70 border border-omni-border/20 p-2.5 rounded-lg flex items-center justify-between gap-4">
                                  <div className="flex items-center space-x-2.5 overflow-hidden">
                                    <FileText className="w-5 h-5 text-omni-green shrink-0" />
                                    <div className="overflow-hidden">
                                      <span className="font-mono text-[11px] text-[#ffffff] font-bold block truncate">
                                        {doc.name}
                                      </span>
                                      <span className="font-sans text-[9px] text-[#88aa88] block truncate">
                                        {doc.type}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex space-x-1.5 shrink-0">
                                    <a
                                      id={`btn_open_doc_${idx}`}
                                      href={doc.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-2 py-1 bg-omni-green/10 border border-omni-green/20 rounded font-mono text-[10px] text-omni-green hover:bg-omni-green hover:text-black hover:border-omni-green transition-all"
                                    >
                                      View
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-omni-border/20 text-center">
                      <span className="font-mono text-[10.5px] text-white/40">
                        VERIFIED SECURE DATABASE SERVED UNDER ROYAL SCHOLARSHIP ENLISTMENT
                      </span>
                    </div>
                  </div>
                )}

                {/* 7. VIEW: CONTACT TRANSMISSION BRIDGE */}
                {activeMode.id === "contact" && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm font-light text-white/95 leading-relaxed mb-6">
                        Initialize a secure uplink transmission. Fill in your identification vector and broadcast parameters below to transmit directly to my responsive receiver terminal.
                      </p>

                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Direct Contacts Info */}
                        <div className="lg:col-span-2 space-y-4">
                          <h4 className="font-display text-xs tracking-wider uppercase text-omni-green border-b border-omni-border/10 pb-1 flex items-center gap-1.5">
                            <Terminal className="w-4 h-4" />
                            <span>Direct Coordinates</span>
                          </h4>

                          <div className="bg-black/30 border border-omni-border/20 rounded-xl p-4 space-y-4 font-mono text-xs">
                            <a
                              id="link_contact_email"
                              href={`mailto:${PORTFOLIO_OWNER.contact.email}`}
                              className="flex items-center space-x-3 text-white/80 hover:text-omni-green transition-colors"
                            >
                              <Mail className="w-4.5 h-4.5 text-omni-green shrink-0" />
                              <span className="break-all">{PORTFOLIO_OWNER.contact.email}</span>
                            </a>

                            <a
                              id="link_contact_phone"
                              href={`tel:${PORTFOLIO_OWNER.contact.phone}`}
                              className="flex items-center space-x-3 text-white/80 hover:text-omni-green transition-colors"
                            >
                              <Phone className="w-4.5 h-4.5 text-omni-green shrink-0" />
                              <span>{PORTFOLIO_OWNER.contact.phone}</span>
                            </a>

                            <a
                              id="link_contact_location"
                              href={PORTFOLIO_OWNER.contact.locationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-3 text-white/80 hover:text-omni-green transition-colors"
                            >
                              <MapPin className="w-4.5 h-4.5 text-omni-green shrink-0" />
                              <span>{PORTFOLIO_OWNER.contact.location}</span>
                            </a>
                          </div>

                          <div className="bg-[#0b0f19]/40 border border-omni-border/20 rounded-xl p-4 text-[10px] text-omni-green/80 font-mono leading-relaxed">
                            <span className="font-bold text-white block mb-1">DIAL TRANSMISSIONS SPEC:</span>
                            I usually reply with comprehensive project analysis, current agenda blocks, and coordinate details within standard business cycles.
                          </div>
                        </div>

                        {/* Interactive Form */}
                        <div className="lg:col-span-3">
                          <form id="contact_uplink_form" onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs z-10 relative">
                            {formStatus === "sent" ? (
                              <motion.div 
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="bg-[#0b0f19]/90 border-2 border-omni-green rounded-xl p-6 text-center space-y-4"
                              >
                                <div className="w-12 h-12 rounded-full bg-omni-green/20 border border-omni-green mx-auto flex items-center justify-center text-omni-green animate-bounce">
                                  <Check className="w-6 h-6" />
                                </div>
                                <h4 className="font-display text-sm tracking-wider uppercase text-white font-heavy">
                                  TRANSMISSION BROADCAST SUCCESS
                                </h4>
                                <p className="text-[11px] text-omni-green/80 leading-relaxed font-light">
                                  Your coordinate message has been encrypted and submitted onto our cloud receiver stack. Horn Vanhong will parse this input soon.
                                </p>
                                <button
                                  id="btn_form_reset"
                                  type="button"
                                  onClick={() => setFormStatus("idle")}
                                  className="text-[11px] uppercase border border-omni-green/40 px-3 py-1.5 rounded hover:bg-omni-green hover:text-black transition-all cursor-pointer font-bold"
                                >
                                  Re-open Link Terminal
                                </button>
                              </motion.div>
                            ) : (
                              <div className="space-y-3.5">
                                <div className="space-y-1">
                                  <label className="text-[10px] text-omni-green/60 uppercase font-black" htmlFor="form_name">
                                    Identification Vector (Name)
                                  </label>
                                  <input
                                    id="form_name"
                                    type="text"
                                    required
                                    disabled={formStatus === "transmitting"}
                                    placeholder="Enter your name..."
                                    value={contactForm.name}
                                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                    className="w-full bg-black/60 border border-omni-border/50 rounded-lg p-2.5 text-omni-green focus:border-omni-green focus:outline-none placeholder-omni-green/35 text-[11px] transition-colors"
                                  />
                                </div>

                                <div className="space-y-1">
                                  <label className="text-[10px] text-omni-green/60 uppercase font-black" htmlFor="form_email">
                                    Communication Tunnel Routing (Email)
                                  </label>
                                  <input
                                    id="form_email"
                                    type="email"
                                    required
                                    disabled={formStatus === "transmitting"}
                                    placeholder="Enter your email address..."
                                    value={contactForm.email}
                                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                    className="w-full bg-black/60 border border-omni-border/50 rounded-lg p-2.5 text-omni-green focus:border-omni-green focus:outline-none placeholder-omni-green/35 text-[11px] transition-colors"
                                  />
                                </div>

                                <div className="space-y-1">
                                  <label className="text-[10px] text-omni-green/60 uppercase font-black" htmlFor="form_message">
                                    Signal Payload (Message)
                                  </label>
                                  <textarea
                                    id="form_message"
                                    rows={4}
                                    required
                                    disabled={formStatus === "transmitting"}
                                    placeholder="Write your brief or inquiry coordinates here..."
                                    value={contactForm.message}
                                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                    className="w-full bg-black/60 border border-omni-border/50 rounded-lg p-2.5 text-omni-green focus:border-omni-green focus:outline-none placeholder-omni-green/35 text-[11px] h-28 resize-none transition-colors"
                                  />
                                </div>

                                <button
                                  id="btn_submit_contact_form"
                                  type="submit"
                                  disabled={formStatus === "transmitting"}
                                  className={`w-full py-2.5 px-4 rounded-lg font-display text-xs tracking-widest uppercase font-bold border transition-all duration-300 flex items-center justify-center space-x-2 ${
                                    formStatus === "transmitting"
                                      ? "bg-omni-dim/20 border-omni-dim/30 text-omni-green/40 cursor-wait animate-pulse"
                                      : "bg-omni-green text-black border-omni-green hover:bg-[#000000] hover:text-omni-green hover:shadow-[0_0_12px_rgba(57,255,20,0.5)] cursor-pointer"
                                  }`}
                                >
                                  {formStatus === "transmitting" ? (
                                    <span>BROADCASTING UPLINK PACKETS...</span>
                                  ) : (
                                    <>
                                      <Send className="w-3.5 h-3.5" />
                                      <span>Transmit Secure Signal</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-omni-border/20 text-center">
                      <span className="font-mono text-[10px] text-white/30">
                        SECURE IPSEC TUNNEL SECURED VIA AES-256 HOST HARDENING BLOCKS
                      </span>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-omni-border/20 bg-black/40 py-4 px-8 text-center text-[11px] font-mono text-white/40 tracking-wider relative z-30 flex flex-col md:flex-row items-center justify-between gap-2.5">
        <div>
          <span>&copy; {new Date().getFullYear()} Horn Vanhong. Styled under Omnitrix Galactic Authorization.</span>
        </div>
        <div className="flex space-x-4">
          <a id="footer_github" href={PORTFOLIO_OWNER.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-omni-green transition-colors">
            GITHUB CODES
          </a>
          <span className="text-omni-border/40">|</span>
          <a id="footer_linkedin" href={PORTFOLIO_OWNER.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-omni-green transition-colors">
            LINKEDIN CORE
          </a>
        </div>
      </footer>
    </div>
  );
}
