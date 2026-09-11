'use client';

import * as React from 'react';
import { 
  Stethoscope, 
  Mic, 
  MicOff, 
  FileText, 
  Calendar, 
  User, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Activity, 
  ChevronRight, 
  Tag, 
  Sparkles,
  HeartPulse,
  FileCheck
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'cliniq-consult', title: '01. Ambient Visit Room', type: 'Ambient SOAP' },
  { id: 'cliniq-schedule', title: '02. Daily Clinic Queue', type: 'Patient Schedule' },
  { id: 'cliniq-timeline', title: '03. Longitudinal Patient Chart', type: 'Clinical EHR' },
  { id: 'cliniq-coding', title: '04. ICD-10 & CPT Coding', type: 'Billing Review' },
  { id: 'cliniq-telemetry', title: '05. Practice Quality & HIPAA', type: 'Compliance Analytics' },
];

export function CliniqAIShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('cliniq-consult');
  const [isRecording, setIsRecording] = React.useState<boolean>(true);
  const [soapTab, setSoapTab] = React.useState<'S' | 'O' | 'A' | 'P'>('S');
  const [signedOff, setSignedOff] = React.useState<boolean>(false);

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'cliniq-ai', screenId });
  };

  return (
    <div className="rounded-3xl border border-teal-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Product Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
            <Stethoscope className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">Cliniq AI Workstation</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-teal-500/10 text-teal-400 border border-teal-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">Ambient Documentation & Practice Operations</span>
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
                  ? 'bg-teal-600 text-white font-bold shadow-xs'
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
        {/* SCREEN 1: Ambient Visit Room */}
        {activeScreen === 'cliniq-consult' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-semibold text-foreground">Elena Rostova, 47F</h4>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-200 dark:bg-surface-800 text-muted-foreground">
                      MRN: #892-410B
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">Annual Preventive Exam + Hypertension Follow-Up &middot; Exam Room 3B</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsRecording(!isRecording)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                    isRecording 
                      ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse' 
                      : 'bg-surface-200 dark:bg-surface-800 text-muted-foreground border border-border'
                  }`}
                >
                  {isRecording ? <Mic className="w-3.5 h-3.5" /> : <MicOff className="w-3.5 h-3.5" />}
                  {isRecording ? 'Ambient Mic Active (08:42)' : 'Mic Paused'}
                </button>

                <span className="text-xs font-mono text-teal-400 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-teal-500/10 border border-teal-500/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  HIPAA BAA Enforced
                </span>
              </div>
            </div>

            {/* Split Screen: Live Transcript & Extracted Entities Left / Structured SOAP Editor Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Ambient Stream */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-teal-400" />
                      Live Acoustic Capture
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">Dual-stream mic isolation</span>
                  </div>

                  {/* Audio Waveform simulation */}
                  <div className="h-8 flex items-center justify-center gap-1 px-3 bg-surface-200/40 dark:bg-surface-950/40 rounded-xl">
                    {[40, 65, 30, 85, 95, 45, 70, 30, 90, 60, 20, 75, 40, 80, 50, 65, 30, 90].map((h, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full ${isRecording ? 'bg-teal-500' : 'bg-muted-foreground/30'} transition-all duration-150`}
                        style={{ height: isRecording ? `${h}%` : '20%' }}
                      />
                    ))}
                  </div>

                  {/* Transcript Snippets */}
                  <div className="space-y-2 text-xs font-sans max-h-48 overflow-y-auto pr-1">
                    <div className="p-2 rounded-lg bg-surface-200/50 dark:bg-surface-800/40 border border-border/40">
                      <span className="font-mono text-[10px] text-teal-400 font-semibold block">DR. A. VANCE (08:14):</span>
                      <p className="text-muted-foreground mt-0.5">&quot;Elena, how has your blood pressure been trending since we started Lisinopril 10mg? Any dizziness or persistent cough?&quot;</p>
                    </div>
                    <div className="p-2 rounded-lg bg-surface-100/50 dark:bg-surface-800/20 border border-border/30">
                      <span className="font-mono text-[10px] text-indigo-400 font-semibold block">PATIENT (08:26):</span>
                      <p className="text-muted-foreground mt-0.5">&quot;Morning readings at home are usually around 128/82. No cough at all, feeling steady, though occasional mild ankles swelling after long standing shifts.&quot;</p>
                    </div>
                  </div>

                  {/* Extracted Clinical Entities */}
                  <div className="pt-2 border-t border-border/40">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase block mb-1.5">Detected Entities (Auto-tagged):</span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-teal-500/10 text-teal-400 border border-teal-500/20">
                        BP: 128/82 mmHg
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Rx: Lisinopril 10mg
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        Sym: Peripheral Edema (Mild)
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Negative: Dry Cough
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Structured SOAP Editor */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
                  <div className="flex items-center justify-between border-b border-border/40 pb-3">
                    <div className="flex items-center gap-1">
                      {(['S', 'O', 'A', 'P'] as const).map((tab) => {
                        const labels = {
                          S: 'Subjective',
                          O: 'Objective',
                          A: 'Assessment',
                          P: 'Plan'
                        };
                        return (
                          <button
                            key={tab}
                            type="button"
                            onClick={() => setSoapTab(tab)}
                            className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                              soapTab === tab 
                                ? 'bg-teal-500 text-white font-bold' 
                                : 'text-muted-foreground hover:bg-surface-200 dark:hover:bg-surface-800'
                            }`}
                          >
                            <span className="font-bold mr-1">{tab}</span> &middot; {labels[tab]}
                          </button>
                        );
                      })}
                    </div>

                    <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-teal-400" />
                      LLM Confidence 96.4%
                    </span>
                  </div>

                  {/* Tab Contents */}
                  <div className="p-3.5 rounded-xl bg-surface-50 dark:bg-surface-950/60 border border-border/40 min-h-[140px] text-xs font-mono leading-relaxed space-y-2">
                    {soapTab === 'S' && (
                      <div>
                        <span className="text-teal-400 font-bold block mb-1">{'// SUBJECTIVE SUMMARY'}</span>
                        <p className="text-foreground">
                          Patient is a 47-year-old female presenting for routine follow-up of Essential Primary Hypertension. States home blood pressure readings have improved (average 128/82 mmHg). Denies chest pain, shortness of breath, headache, or dry cough associated with ACE-inhibitor use. Reports mild trace bilateral lower extremity edema following extended standing periods at retail work.
                        </p>
                      </div>
                    )}
                    {soapTab === 'O' && (
                      <div>
                        <span className="text-teal-400 font-bold block mb-1">{'// OBJECTIVE VITALS & PHYSICAL EXAM'}</span>
                        <p className="text-foreground">
                          In-clinic Vitals: BP: 126/80 mmHg (Right arm, seated) | Pulse: 72 bpm regular | Resp: 14/min | BMI: 24.8 kg/m² | SpO2: 99% on room air.<br />
                          Cardiovascular: Normal S1/S2, regular rate and rhythm, no murmurs, rubs, or gallops.<br />
                          Extremities: Trace 1+ non-pitting ankle edema bilaterally, peripheral pulses 2+ intact.
                        </p>
                      </div>
                    )}
                    {soapTab === 'A' && (
                      <div>
                        <span className="text-teal-400 font-bold block mb-1">{'// CLINICAL ASSESSMENT'}</span>
                        <p className="text-foreground">
                          1. Essential Primary Hypertension (I10) - Well-controlled on current ACE-inhibitor regimen.<br />
                          2. Mild dependent peripheral edema, likely occupational/postural vs early calcium/fluid balance variant.
                        </p>
                      </div>
                    )}
                    {soapTab === 'P' && (
                      <div>
                        <span className="text-teal-400 font-bold block mb-1">{'// RECOMMENDED CARE PLAN'}</span>
                        <p className="text-foreground">
                          - Continue Lisinopril 10 mg orally once daily.<br />
                          - Recommend compression stockings (15-20 mmHg) during work shifts; elevate legs in evening.<br />
                          - Order routine Basic Metabolic Panel (BMP) & lipid panel in 6 months.<br />
                          - Follow-up in clinic in 6 months, or sooner if home BP consistently exceeds 140/90.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Safety & Sign-off bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-2 text-[11px] text-amber-500 dark:text-amber-400 font-mono">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>Physician Review Required &middot; AI acts as clinical scribe only</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSignedOff(!signedOff)}
                      className={`px-4 py-1.5 rounded-xl text-xs font-mono font-medium flex items-center gap-2 transition-all ${
                        signedOff
                          ? 'bg-emerald-500 text-white font-bold'
                          : 'bg-teal-600 hover:bg-teal-500 text-white'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {signedOff ? 'Signed & Locked by Dr. Vance' : 'Approve & Push to Epic EHR'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: Daily Clinic Queue */}
        {activeScreen === 'cliniq-schedule' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Outpatient Queue & Triage Status</h4>
                <p className="text-xs text-muted-foreground font-mono">Schedule for Dr. Prince Singh Rana, MD &middot; Internal Medicine &middot; Room 3B</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <span className="px-2.5 py-1 rounded-xl bg-surface-200 dark:bg-surface-800 border border-border">
                  14 Scheduled &middot; 4 Completed &middot; 1 In Progress
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              {[
                { time: '08:30 AM', name: 'Elena Rostova', mrn: '#892-410B', type: 'Annual Checkup', status: 'IN_VISIT', room: 'Room 3B', soap: 'Drafting (78%)', acuity: 'Low' },
                { time: '09:15 AM', name: 'Marcus Sterling', mrn: '#731-902A', type: 'Diabetes Type 2 Follow-Up', status: 'CHECKED_IN', room: 'Waiting Room', soap: 'Vitals Logged', acuity: 'Medium' },
                { time: '10:00 AM', name: 'Sophia Lin', mrn: '#442-119C', type: 'Persistent Migraine / Neuro', status: 'ARRIVED', room: 'Triage 1', soap: 'Prior Labs Ready', acuity: 'High' },
                { time: '10:45 AM', name: 'David Thornton', mrn: '#310-884D', type: 'Post-Op Knee Eval', status: 'CONFIRMED', room: 'Unassigned', soap: 'Pending', acuity: 'Low' },
                { time: '11:30 AM', name: 'Nadia Hassan', mrn: '#629-301E', type: 'Thyroid Ultrasound Review', status: 'CONFIRMED', room: 'Unassigned', soap: 'Pending', acuity: 'Low' },
              ].map((patient, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-background/80 border border-border/60 hover:border-teal-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-4">
                    <div className="font-mono text-xs font-bold text-teal-400 w-20">
                      {patient.time}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-foreground">{patient.name}</span>
                        <span className="text-[10px] font-mono text-muted-foreground">{patient.mrn}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{patient.type} &middot; {patient.room}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                      patient.acuity === 'High'
                        ? 'text-rose-400 bg-rose-500/10 border-rose-500/20'
                        : patient.acuity === 'Medium'
                        ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                        : 'text-blue-400 bg-blue-500/10 border-blue-500/20'
                    }`}>
                      Acuity: {patient.acuity}
                    </span>

                    <span className="text-xs font-mono text-muted-foreground bg-surface-200/50 dark:bg-surface-800/50 px-2 py-0.5 rounded border border-border/40">
                      {patient.soap}
                    </span>

                    {patient.status === 'IN_VISIT' ? (
                      <span className="px-3 py-1 rounded-xl bg-teal-500/20 text-teal-300 font-mono text-xs font-semibold flex items-center gap-1.5 border border-teal-500/30">
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                        In Progress
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleScreenChange('cliniq-consult')}
                        className="px-3 py-1 rounded-xl bg-surface-200 dark:bg-surface-800 hover:bg-teal-600 hover:text-white text-muted-foreground font-mono text-xs transition-colors flex items-center gap-1"
                      >
                        Launch Visit
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN 3: Longitudinal Patient Chart */}
        {activeScreen === 'cliniq-timeline' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Longitudinal Health Timeline & FHIR Chart</h4>
                <p className="text-xs text-muted-foreground font-mono">Patient: Elena Rostova (DOB: 04/12/1978) &middot; FHIR v4.0.1 Conformance</p>
              </div>
              <span className="text-xs font-mono text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-xl">
                Active Allergies: Penicillin (Rash)
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Biomarkers Trend */}
              <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-1.5">
                    <HeartPulse className="w-3.5 h-3.5 text-teal-400" />
                    Systolic BP Trend (12 Mo)
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">-18 mmHg &#8595;</span>
                </div>

                <div className="h-28 flex items-end justify-between gap-2 px-2 pt-4 border-b border-border/40">
                  {[
                    { m: 'Jan', val: 148, alert: true },
                    { m: 'Mar', val: 144, alert: true },
                    { m: 'May', val: 138, alert: false },
                    { m: 'Jul', val: 134, alert: false },
                    { m: 'Sep', val: 130, alert: false },
                    { m: 'Nov', val: 126, alert: false },
                  ].map((pt, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className={`w-full rounded-t ${pt.alert ? 'bg-amber-500/70' : 'bg-teal-500'}`}
                        style={{ height: `${((pt.val - 110) / 50) * 100}%` }}
                      />
                      <span className="text-[10px] font-mono text-muted-foreground">{pt.m}</span>
                    </div>
                  ))}
                </div>
                <div className="text-[11px] font-mono text-muted-foreground flex justify-between">
                  <span>Target: &lt; 130 mmHg</span>
                  <span className="text-emerald-400">Target Achieved</span>
                </div>
              </div>

              {/* Active Medication Regimen */}
              <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-3">
                <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-teal-400" />
                  Active Medications (RxNorm)
                </span>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40">
                    <div className="flex justify-between font-mono font-semibold text-foreground">
                      <span>Lisinopril 10mg Oral</span>
                      <span className="text-teal-400">Daily (AM)</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground">Hypertension &middot; Refilled 12/01/2024</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40">
                    <div className="flex justify-between font-mono font-semibold text-foreground">
                      <span>Vitamin D3 2000 IU</span>
                      <span className="text-muted-foreground">Daily</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground">Supplementation &middot; Active</span>
                  </div>
                </div>
              </div>

              {/* Past Consultations */}
              <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-3">
                <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-teal-400" />
                  Past Clinical Encounters
                </span>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40">
                    <span className="font-mono text-xs font-semibold text-foreground block">10/14/2024 &middot; Routine Follow-up</span>
                    <span className="text-[11px] text-muted-foreground">Dr. Prince Singh Rana &middot; Note Signed &middot; ICD-10 I10</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40">
                    <span className="font-mono text-xs font-semibold text-foreground block">04/02/2024 &middot; Telehealth Consult</span>
                    <span className="text-[11px] text-muted-foreground">Dr. Sarah Jensen &middot; Note Signed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: ICD-10 & CPT Coding */}
        {activeScreen === 'cliniq-coding' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">ICD-10 & CPT Medical Coding Assistant</h4>
                <p className="text-xs text-muted-foreground font-mono">Automated code suggestion cross-referenced against CMS billing criteria</p>
              </div>
              <span className="text-xs font-mono text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-xl">
                Coding Specificity Score: 98.2%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ICD-10 Diagnostic Codes */}
              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
                <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-teal-400" />
                  Suggested Diagnostic Codes (ICD-10-CM)
                </span>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-950/40 border border-teal-500/30 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-bold text-teal-400">I10</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Primary Code (99% Match)
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-foreground block">Essential (primary) hypertension</span>
                    <p className="text-[11px] text-muted-foreground">
                      Justification: Supported by ongoing medication management and documented in-office systolic readings.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-950/40 border border-border/40 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-bold text-teal-400">R60.0</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Secondary Code (94% Match)
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-foreground block">Localized edema</span>
                    <p className="text-[11px] text-muted-foreground">
                      Justification: Supported by documented 1+ bilateral ankle swelling during physical exam.
                    </p>
                  </div>
                </div>
              </div>

              {/* CPT Evaluation Codes */}
              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
                <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-teal-400" />
                  CPT Evaluation & Management (E/M)
                </span>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-950/40 border border-teal-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-bold text-teal-400">CPT 99214</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Level 4 Established Patient
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-foreground block">Office or other outpatient visit (30-39 mins)</span>
                    <p className="text-[11px] text-muted-foreground">
                      Medical Decision Making (MDM): Moderate complexity. 1 chronic illness with prescription drug management verified.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-200/20 dark:bg-surface-800/20 border border-border/30 text-xs text-muted-foreground space-y-1">
                    <span className="font-mono text-[10px] uppercase text-foreground font-semibold block">Denial Prevention Audit</span>
                    <p className="text-[11px]">No duplicate modifier conflicts detected. Ready for billing submitter batch.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 5: Practice Quality & Compliance */}
        {activeScreen === 'cliniq-telemetry' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Practice Operations & Documentation Efficiency</h4>
                <p className="text-xs text-muted-foreground font-mono">Monthly clinic metrics across 4 providers &middot; HIPAA audit logging</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Zero HIPAA Violations Recorded
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Avg Note Time</span>
                <div className="text-2xl font-bold font-mono text-foreground">2.4 min</div>
                <span className="text-[11px] text-emerald-400 font-mono">-72% vs manual typing</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Same-Day Closure</span>
                <div className="text-2xl font-bold font-mono text-foreground">98.6%</div>
                <span className="text-[11px] text-teal-400 font-mono">+34% vs baseline</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Physician Burnout</span>
                <div className="text-2xl font-bold font-mono text-foreground">-61%</div>
                <span className="text-[11px] text-emerald-400 font-mono">Pajama-time notes eliminated</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">EHR Claim Clean Rate</span>
                <div className="text-2xl font-bold font-mono text-foreground">99.1%</div>
                <span className="text-[11px] text-teal-400 font-mono">0.9% denial rate</span>
              </div>
            </div>

            {/* Audit Log Table */}
            <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-3">
              <span className="text-xs font-mono text-muted-foreground uppercase">Recent Access & Cryptographic BAA Log</span>
              <div className="space-y-2 text-xs font-mono">
                {[
                  { time: '08:44:12', user: 'Dr. Prince Singh Rana', action: 'SOAP Note Generated (Ambient)', status: 'ENCRYPTED_AES256' },
                  { time: '08:31:05', user: 'Nurse K. Miller', action: 'Patient Vitals Checked In (#892-410B)', status: 'VERIFIED' },
                  { time: '08:15:22', user: 'System (FHIR Sync)', action: 'Lab Results Ingested from Quest API', status: 'COMPLETED' },
                ].map((row, i) => (
                  <div key={i} className="p-2 rounded-xl bg-surface-200/40 dark:bg-surface-800/30 flex items-center justify-between text-muted-foreground">
                    <span>{row.time} &middot; <strong className="text-foreground">{row.user}</strong>: {row.action}</span>
                    <span className="text-[10px] text-teal-400">{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Healthcare Safety & Regulatory Notice */}
      <div className="px-6 py-3 border-t border-border/60 bg-surface-200/40 dark:bg-surface-950/40 text-[11px] font-mono text-muted-foreground flex items-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" aria-hidden="true" />
        <span>
          <strong>Clinical Decision Support Notice:</strong> Cliniq AI is an administrative ambient documentation prototype designed to assist licensed clinicians. It does not provide autonomous medical diagnoses, treatment recommendations, or prescribing. Final clinical sign-off remains the sole responsibility of the attending provider.
        </span>
      </div>
    </div>
  );
}
