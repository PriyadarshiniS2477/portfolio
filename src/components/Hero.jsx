import React, { useState } from 'react';
import { ArrowDown, FileText, Copy, Check, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const codeLines = [
  { tokens: [{ t: 'keyword', v: 'const ' }, { t: 'fn', v: 'engineer' }, { t: 'op', v: ' = {' }] },
  { tokens: [{ t: 'key', v: '  name:     ' }, { t: 'str', v: '"Priyadarshini.S"' }, { t: 'op', v: ',' }] },
  { tokens: [{ t: 'key', v: '  degree:   ' }, { t: 'str', v: '"B.Tech CSE"' }, { t: 'op', v: ',' }] },
  { tokens: [{ t: 'key', v: '  semester: ' }, { t: 'num', v: '3' }, { t: 'op', v: ',' }] },
  { tokens: [{ t: 'key', v: '  languages:' }, { t: 'op', v: ' [' }, { t: 'str', v: '"C"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"Java"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"Python"' }, { t: 'op', v: '],' }] },
  { tokens: [{ t: 'key', v: '  databases: ' }, { t: 'op', v: '[' }, { t: 'str', v: '"PostgreSQL"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"MySQL"' }, { t: 'op', v: '],' }] },
  { tokens: [{ t: 'key', v: '  hackathon: ' }, { t: 'str', v: '"Smart India Hackathon"' }, { t: 'op', v: ',' }] },
  { tokens: [{ t: 'key', v: '  openToWork:' }, { t: 'bool', v: ' true' }] },
  { tokens: [{ t: 'op', v: '};' }] },
];

const tokenColor = {
  keyword: 'text-purple-400',
  fn:      'text-accent-green',
  op:      'text-zinc-400',
  key:     'text-zinc-300',
  str:     'text-amber-300',
  num:     'text-cyan-400',
  bool:    'text-rose-400',
};

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const snippet = `const engineer = {\n  name: "Priyadarshini.S",\n  degree: "B.Tech CSE",\n  semester: 3,\n  openToWork: true\n};`;
    navigator.clipboard.writeText(snippet).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black bg-dots">

      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent-green/4 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/5 w-[350px] h-[350px] bg-cyan-500/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-8 items-center">

          {/* ── LEFT COLUMN ─────────────────────────────── */}
          <div className="flex flex-col items-start space-y-7">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-green/25 bg-accent-green/8 text-xs font-mono font-medium text-accent-green">
              <span className="status-dot" />
              <span>{personalInfo.status}</span>
            </div>

            {/* Greeting */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-card border border-surface-border font-mono text-sm sm:text-base text-white">
              <span className="text-zinc-600 select-none text-xs">&gt;_</span>
              <span className="font-semibold tracking-tight">Hi! Priyadarshini.S</span>
              <span className="inline-block w-[3px] h-[1.1em] bg-accent-green align-middle animate-blink ml-0.5" aria-hidden />
            </div>

            {/* Hero Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold tracking-tightest leading-[1.08] text-white max-w-2xl">
                Computer Science Engineer{' '}
                <span className="text-gradient-green">
                  Building Resilient Software
                </span>{' '}
                That Solves Real Problems.
              </h1>
            </div>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
              {personalInfo.intro}
            </p>

            {/* Interest tags */}
            <div className="flex flex-wrap gap-2">
              {personalInfo.interests.map(interest => (
                <span
                  key={interest}
                  className="px-3 py-1 text-xs sm:text-sm font-medium rounded-lg bg-white/4 text-zinc-400 border border-white/8 hover:border-accent-green/25 hover:text-zinc-300 transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-accent-green text-black hover:bg-emerald-400 shadow-lg shadow-accent-green/20 active:scale-[0.98] transition-all duration-150"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.links.resume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-transparent text-white border border-white/15 hover:bg-white/5 hover:border-white/25 active:scale-[0.98] transition-all duration-150"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social quick links */}
            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent-green transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono">GitHub</span>
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent-green transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-mono">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Code Card ─────────────────── */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl bg-surface-card border border-surface-border shadow-2xl shadow-black overflow-hidden">

              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-surface-subtle border-b border-surface-border">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="font-mono text-xs text-zinc-500 ml-2">priyadarshini.ts</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] font-mono text-zinc-500 hover:text-accent-green transition-colors px-2 py-1 rounded"
                  title="Copy snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent-green" />
                      <span className="text-accent-green">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code body */}
              <div className="px-5 py-5 font-mono text-[13px] leading-7 overflow-x-auto bg-black/50">
                <div className="text-zinc-600 text-xs italic mb-3">// Engineer Profile • Open to Internships</div>
                {codeLines.map((line, i) => (
                  <div key={i} className="whitespace-pre">
                    {line.tokens.map((tok, j) => (
                      <span key={j} className={tokenColor[tok.t] ?? 'text-zinc-300'}>
                        {tok.v}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              {/* Footer bar */}
              <div className="px-5 py-3 border-t border-surface-border bg-surface-subtle flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                  <span className="text-[11px] font-mono text-zinc-500">TypeScript • Strict</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { label: 'Algorithms',  sub: 'LeetCode'  },
                    { label: 'Hackathon',   sub: 'SIH'       },
                    { label: 'Full Stack',  sub: 'React + DB' },
                  ].map(b => (
                    <div key={b.label} className="px-2 py-1.5 rounded-lg bg-surface-card border border-surface-border">
                      <div className="text-[10px] font-semibold text-white">{b.label}</div>
                      <div className="text-[9px] text-zinc-500">{b.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
