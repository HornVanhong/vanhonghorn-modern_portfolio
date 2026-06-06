import React, { useState } from "react";
import { Router, Globe, HelpCircle, HardDrive, ShieldAlert, Cpu } from "lucide-react";
import { sound } from "./SoundManager";

interface NetworkNode {
  id: string;
  name: string;
  type: "isp" | "router" | "dhcp" | "host" | "target";
  ip: string;
  mac: string;
  description: string;
  status: "secure" | "compromised" | "warning";
  payload: string[];
}

const NETWORK_NODES: NetworkNode[] = [
  {
    id: "isp",
    name: "Enterprise ISP Backbone",
    type: "isp",
    ip: "103.216.51.109 (Public Pool)",
    mac: "00:03:E3:A1:FD:A0",
    description: "External ISP Gateway routed via Net Crafts simulation metrics.",
    status: "secure",
    payload: [
      "ISP Block Owner: Telecom Cambodia",
      "Connection Type: Fiber Optical Transceiver",
      "Threat Intel: Active Shodan scans registered, zero vulnerabilities highlighted",
      "External DNS Server: 8.8.8.8 (Google Public DNS)"
    ]
  },
  {
    id: "router",
    name: "Cisco Border Router v10",
    type: "router",
    ip: "192.168.1.1 (Gateway IP)",
    mac: "00:0C:42:F1:14:8B",
    description: "Main border router configured during Cisco Networking Academy Labs.",
    status: "secure",
    payload: [
      "Firmware: Cisco IOS v15.6 Mainline Enterprise",
      "Active Routes: Static IP route mappings, RIPv2 enabled",
      "Access Control List (ACL): Standard Security Rules applied",
      "Network Address Translation (NAT): Active Overload Dynamic Pool Map"
    ]
  },
  {
    id: "dhcp",
    name: "Main LAN DHCP Hub",
    type: "dhcp",
    ip: "192.168.1.10 (Local Hub Cluster)",
    mac: "0E:12:F4:9A:8C:AD",
    description: "Address Allocator and DNS resolver serving office sub-networks.",
    status: "secure",
    payload: [
      "DHCP Lease Scope: 192.168.1.50 - 192.168.1.250",
      "Lease Expiration Time: 24 Hours Standard Roll",
      "Defensive Shield: Hardware address verification filters enforced",
      "Traffic Handshake: ARP Broadcast snooping engine active"
    ]
  },
  {
    id: "host",
    name: "Defensive Linux Core Host",
    type: "host",
    ip: "192.168.1.105 (Local Secure static)",
    mac: "9A:1A:XX:XX:XX:FE (Masked for safety)",
    description: "VanhongHorn System Extractor core hosting analytical cron sequences.",
    status: "secure",
    payload: [
      "Operating System: Linux Ubuntu Server LTS 22.04",
      "Active Script: System Info Extractor Bash Engine",
      "Telemetry Monitor: Process tracking daemon active, limits alerts < 85% cpu",
      "Critical Service Log: Process auth.log scanning enabled via Python engine"
    ]
  },
  {
    id: "target",
    name: "Simulated Intrusion Source (Sniffed)",
    type: "target",
    ip: "192.168.1.144 (Intruder Node)",
    mac: "1F:CA:82:94:DD:77",
    description: "Simulated host flagged during Cyberium Arena - Net Crafts log captures.",
    status: "compromised",
    payload: [
      "Suspicious Action: Sudo brute-forcing detected via auth.log",
      "Port Scanned: TCP 22 ssh & TCP 80 http",
      "Source Country: External VPN Routing Node",
      "Remediation: Automated border block applied via Cisco ACL block rules"
    ]
  }
];

export default function NetworkMapSimulation() {
  const [activeNode, setActiveNode] = useState<NetworkNode>(NETWORK_NODES[1]);

  const selectNode = (node: NetworkNode) => {
    if (node.status === "compromised") {
      sound.playBeep(180, "sawtooth", 0.4, 0.2); // Alert low pitch beep
    } else {
      sound.playSelect();
    }
    setActiveNode(node);
  };

  return (
    <div id="network_map_simulation" className="bg-[#0b0f19]/70 border border-omni-border/60 rounded-xl p-4 md:p-6 shadow-inner relative overflow-hidden flex flex-col md:flex-row h-auto md:h-[460px] gap-6 backdrop-blur-md">
      {/* Background grid */}
      <div className="absolute inset-0 bg-omni-grid opacity-15 pointer-events-none" />

      {/* Grid Left: Visual Map Layout */}
      <div className="flex-1 flex flex-col items-center justify-center relative bg-black/40 rounded-lg p-4 border border-omni-border/30 min-h-[220px] md:min-h-0">
        <span className="absolute top-2 left-3 font-mono text-[10px] text-omni-green/60 tracking-wider">
          ACTIVE INTERFACE MAP (CEREBROCRUSTACEAN PROTOCOL)
        </span>

        {/* Links representing connection lines */}
        <div className="absolute w-[80%] h-[2px] bg-omni-green/10 top-[50%] left-[10%] -translate-y-1/2 pointer-events-none z-0 hidden md:block" />
        <div className="absolute w-[2px] h-[70%] bg-omni-green/10 left-[50%] top-[15%] -translate-x-1/2 pointer-events-none z-0 hidden md:block" />

        {/* Node Layout Block */}
        <div className="grid grid-cols-3 gap-y-12 gap-x-6 md:gap-x-12 relative z-10 w-full max-w-sm">
          {/* Top Row: ISP Gate */}
          <div className="col-span-3 flex justify-center">
            <button
              id="node_isp"
              onClick={() => selectNode(NETWORK_NODES[0])}
              className={`p-3 rounded-full border-2 transition-all duration-300 relative group flex items-center justify-center ${
                activeNode.id === "isp"
                  ? "bg-omni-green/20 border-omni-green shadow-[0_0_12px_rgba(16,185,129,0.45)] scale-110"
                  : "bg-omni-dark border-omni-border/60 hover:border-omni-green"
              }`}
            >
              <Globe className="w-6 h-6 text-omni-green" />
              <div className="absolute -bottom-6 font-mono text-[9px] w-32 text-center text-omni-green/80 group-hover:text-omni-green truncate font-bold">
                ISP Backbone
              </div>
            </button>
          </div>

          {/* Middle Row: Router, DHCP Hub, Threat */}
          <div className="flex justify-center">
            <button
              id="node_router"
              onClick={() => selectNode(NETWORK_NODES[1])}
              className={`p-3 rounded-full border-2 transition-all duration-300 relative group flex items-center justify-center ${
                activeNode.id === "router"
                  ? "bg-omni-green/20 border-omni-green shadow-[0_0_12px_rgba(16,185,129,0.45)] scale-110"
                  : "bg-omni-dark border-omni-border/60 hover:border-omni-green"
              }`}
            >
              <Router className="w-6 h-6 text-omni-green" />
              <div className="absolute -bottom-6 font-mono text-[9px] w-24 text-center text-omni-green/80 group-hover:text-omni-green truncate font-bold">
                Cisco Router
              </div>
            </button>
          </div>

          <div className="flex justify-center">
            <button
              id="node_dhcp"
              onClick={() => selectNode(NETWORK_NODES[2])}
              className={`p-3 rounded-full border-2 transition-all duration-300 relative group flex items-center justify-center ${
                activeNode.id === "dhcp"
                  ? "bg-omni-green/20 border-omni-green shadow-[0_0_12px_rgba(16,185,129,0.45)] scale-110"
                  : "bg-omni-dark border-omni-border/60 hover:border-omni-green"
              }`}
            >
              <Cpu className="w-6 h-6 text-omni-green" />
              <div className="absolute -bottom-6 font-mono text-[9px] w-24 text-center text-omni-green/80 group-hover:text-omni-green truncate font-bold">
                DHCP Core Hub
              </div>
            </button>
          </div>

          <div className="flex justify-center">
            <button
              id="node_target"
              onClick={() => selectNode(NETWORK_NODES[4])}
              className={`p-3 rounded-full border-2 transition-all duration-300 relative group flex items-center justify-center ${
                activeNode.id === "target"
                  ? "bg-red-950/40 border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.5)] scale-110"
                  : "bg-red-950/10 border-red-900/40 hover:border-red-500"
              }`}
            >
              <ShieldAlert className="w-6 h-6 text-red-500" />
              <div className="absolute -bottom-6 font-mono text-[9px] w-24 text-center text-red-400 group-hover:text-red-500 truncate font-bold">
                Intrusion Threat
              </div>
            </button>
          </div>

          {/* Bottom Row: Secure Host Container */}
          <div className="col-span-3 flex justify-center mt-4">
            <button
              id="node_host"
              onClick={() => selectNode(NETWORK_NODES[3])}
              className={`p-3 rounded-full border-2 transition-all duration-300 relative group flex items-center justify-center ${
                activeNode.id === "host"
                  ? "bg-omni-green/20 border-omni-green shadow-[0_0_12px_rgba(16,185,129,0.45)] scale-110"
                  : "bg-omni-dark border-omni-border/60 hover:border-omni-green"
              }`}
            >
              <HardDrive className="w-6 h-6 text-omni-green" />
              <div className="absolute -bottom-6 font-mono text-[9px] w-32 text-center text-omni-green/80 group-hover:text-omni-green truncate font-bold">
                Secure Linux Host
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Grid Right: Node Diagnostic Readout Panel */}
      <div className="w-full md:w-80 bg-black/60 border border-omni-border/40 rounded-lg p-4 flex flex-col h-full overflow-y-auto max-h-[300px] md:max-h-none z-10 font-mono">
        <div className="flex items-center justify-between border-b border-omni-border/30 pb-2 mb-3">
          <span className="text-[10px] text-omni-green/60 uppercase">DIAGNOSTIC TELEMETRY</span>
          <span className={`text-[9px] px-1.5 py-0.5 rounded leading-none ${
            activeNode.status === "secure" 
              ? "bg-green-950/20 border border-green-800/40 text-green-400" 
              : "bg-red-950/20 border border-red-900/40 text-red-400 animate-pulse"
          }`}>
            {activeNode.status.toUpperCase()}
          </span>
        </div>

        <div className="text-[#ffffff] font-display text-sm truncate uppercase tracking-widest font-bold mb-1">
          {activeNode.name}
        </div>
        <div className="grid grid-cols-3 gap-x-2 gap-y-1 text-[11px] mb-3 leading-relaxed">
          <div className="text-omni-green/45">IP Addr:</div>
          <div className="text-omni-green col-span-2 break-all">{activeNode.ip}</div>
          <div className="text-omni-green/45">MAC Addr:</div>
          <div className="text-omni-green col-span-2 break-all">{activeNode.mac}</div>
        </div>

        <p className="text-[11px] text-white/70 bg-omni-dark/40 border border-omni-border/20 p-2 rounded mb-3 italic">
          {activeNode.description}
        </p>

        {/* Technical Sub attributes list */}
        <div className="flex-1 space-y-2 text-[10px]">
          <div className="text-omni-green/40 uppercase text-[9px] border-b border-omni-border/20 pb-1">
            ROUTING META DETAILS
          </div>
          {activeNode.payload.map((p, i) => (
            <div key={i} className="flex items-start space-x-1">
              <span className="text-omni-green shrink-0">&rsaquo;</span>
              <span className="text-white/80 leading-relaxed break-words">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
