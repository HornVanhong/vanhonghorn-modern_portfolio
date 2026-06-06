import React, { useState, useEffect, useRef } from "react";
import { Play, RotateCcw, AlertTriangle, ShieldCheck, Terminal as TermIcon } from "lucide-react";
import { sound } from "./SoundManager";

interface LogMessage {
  time: string;
  service: string;
  message: string;
  type: "info" | "warning" | "alert" | "success";
}

const SAMPLE_LOGS: LogMessage[] = [
  { time: "08:14:02", service: "sshd[2401]", message: "Server listening on 0.0.0.0 port 22.", type: "info" },
  { time: "08:14:15", service: "sshd[2412]", message: "Connection received from 192.168.1.144.", type: "info" },
  { time: "08:14:18", service: "sshd[2412]", message: "Failed password for invalid user admin from 192.168.1.144 port 41240 ssh2", type: "warning" },
  { time: "08:14:21", service: "sh[2415]", message: "User root switched privilege via sudo, status: locked", type: "info" },
  { time: "08:14:25", service: "sshd[2412]", message: "Failed password for invalid user root from 192.168.1.144 port 41242 ssh2", type: "alert" },
  { time: "08:14:26", service: "sshd[2412]", message: "CRITICAL: Sudo intrusion threshold exceeded (Ip: 192.168.1.144)!! Triggering lockdown", type: "alert" },
  { time: "08:14:30", service: "fail2ban", message: "Banned IP 192.168.1.144 from port 22 ssh", type: "success" },
  { time: "08:14:35", service: "sshd[2412]", message: "Connection closed by authenticating user root 192.168.1.144.", type: "info" },
  { time: "08:15:00", service: "systemd", message: "Log parsing sweep completed. Status: Shield Active.", type: "success" }
];

export default function LogParserSimulation() {
  const [logs, setLogs] = useState<LogMessage[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && currentItemIndex < SAMPLE_LOGS.length) {
      interval = setTimeout(() => {
        const nextLog = SAMPLE_LOGS[currentItemIndex];
        
        // Play distinct blips depending on log priority
        if (nextLog.type === "alert") {
          sound.playBeep(220, "sawtooth", 0.3, 0.25);
        } else if (nextLog.type === "success") {
          sound.playBeep(987, "sine", 0.15, 0.15);
        } else {
          sound.playBeep(440, "sine", 0.05, 0.1);
        }

        setLogs((prev) => [...prev, nextLog]);
        setCurrentItemIndex((prev) => prev + 1);
      }, 1000);
    } else if (currentItemIndex >= SAMPLE_LOGS.length) {
      setIsRunning(false);
    }
    return () => clearTimeout(interval);
  }, [isRunning, currentItemIndex]);

  // Scroll to bottom of terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  const startAnalysis = () => {
    sound.playSelect();
    setLogs([]);
    setCurrentItemIndex(0);
    setIsRunning(true);
  };

  const resetAnalysis = () => {
    sound.playSpin();
    setLogs([]);
    setCurrentItemIndex(0);
    setIsRunning(false);
  };

  return (
    <div id="log_parser_simulation_root" className="bg-[#0b0f19]/70 border border-omni-border/60 rounded-xl p-4 md:p-6 shadow-inner relative overflow-hidden flex flex-col h-[380px] backdrop-blur-md">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-omni-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-omni-green/60 animate-laser-sweep pointer-events-none opacity-40" />

      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-omni-border/40 pb-3 mb-3 z-10">
        <div className="flex items-center space-x-2">
          <TermIcon className="w-5 h-5 text-omni-green animate-pulse" />
          <span className="font-display text-sm tracking-widest text-[#ffffff] uppercase font-semibold">
            Grey-Matter PyParser v1.0
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-omni-green animate-ping" />
          <span className="text-[11px] font-mono text-omni-green/80 uppercase">
            {isRunning ? "PROCESSING LOGS" : "READY"}
          </span>
        </div>
      </div>

      {/* Terminal View */}
      <div 
        ref={terminalRef}
        id="terminal_logs_viewport"
        className="flex-1 overflow-y-auto font-mono text-xs text-omni-green p-3 bg-[#080c14]/80 rounded border border-omni-border/40 space-y-2.5 z-10 scrollbar-thin overflow-x-hidden min-h-[200px]"
      >
        {logs.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-omni-green/60 text-center space-y-2 py-8">
            <span className="text-sm">SYSTEM AUTH LOG BUFFER EMPTY</span>
            <span className="text-[10px]">TAP "INITIATE LOG AUDIT" TO START DEFIANCE RUN</span>
          </div>
        ) : (
          logs.map((log, i) => {
            const isAlert = log.type === "alert";
            const isWarning = log.type === "warning";
            const isSuccess = log.type === "success";

            return (
              <div 
                key={i} 
                className={`p-1.5 rounded transition-all duration-300 flex items-start space-x-2 border ${
                  isAlert 
                    ? "bg-red-950/20 border-red-800/40 text-red-400" 
                    : isWarning 
                    ? "bg-yellow-950/20 border-yellow-800/40 text-yellow-500"
                    : isSuccess
                    ? "bg-emerald-950/25 border-emerald-800/30 text-omni-green"
                    : "bg-black/10 border-transparent text-omni-green/90"
                }`}
              >
                <span className="text-white/40 text-[10px] shrink-0 font-medium select-none">[{log.time}]</span>
                <span className="text-omni-green/70 font-semibold shrink-0">[{log.service}]:</span>
                <div className="flex-1 leading-relaxed break-words font-mono text-[11px]">
                  {log.message}
                </div>
                {isAlert && <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" />}
                {isSuccess && <ShieldCheck className="w-3.5 h-3.5 text-omni-green shrink-0 animate-bounce" />}
              </div>
            );
          })
        )}
      </div>

      {/* Control Buttons */}
      <div className="flex space-x-4 mt-4 z-10">
        <button
          id="btn_start_log_analysis"
          onClick={startAnalysis}
          disabled={isRunning}
          className={`flex-1 py-2.5 px-4 rounded-lg font-display text-xs tracking-wider uppercase font-bold border transition-all duration-300 flex items-center justify-center space-x-2 ${
            isRunning
              ? "bg-omni-dim/10 border-omni-border text-omni-green/40 cursor-not-allowed"
              : "bg-omni-green/10 border-omni-green text-omni-green hover:bg-omni-green/20 hover:shadow-[0_0_10px_rgba(16,185,129,0.25)]"
          }`}
        >
          <Play className="w-4 h-4 fill-current" />
          <span>{isRunning ? "Sweeping Logs..." : "Initiate Log Audit"}</span>
        </button>

        <button
          id="btn_reset_log_analysis"
          onClick={resetAnalysis}
          disabled={logs.length === 0}
          className={`py-2.5 px-3 rounded-lg border transition-all duration-300 flex items-center justify-center ${
            logs.length === 0
              ? "bg-transparent border-omni-dim/10 text-omni-green/20 cursor-not-allowed"
              : "bg-transparent border-omni-green/40 text-omni-green hover:border-omni-green hover:bg-omni-green/10"
          }`}
          title="Clear Buffer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
