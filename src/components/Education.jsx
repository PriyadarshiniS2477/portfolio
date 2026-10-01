import React from 'react';
import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-DEFAULT border-t border-surface-border">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="section-label">// 05. Academic Foundation</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">Education</h2>
          <p className="mt-3 text-zinc-500 max-w-2xl text-base">
            Undergraduate academic standing and core technical study areas in Computer Science Engineering.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl card-dark p-6 sm:p-8">

          {/* Top */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-surface-border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent-green/8 border border-accent-green/20 text-accent-green shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-accent-green block mb-0.5">
                  Engineering Degree
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {educationData.degree}
                </h3>
              </div>
            </div>

            {/* Semester badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-mono bg-accent-green/8 text-accent-green border border-accent-green/25 self-start whitespace-nowrap">
              <span className="status-dot w-1.5 h-1.5" />
              {educationData.currentStatus} — Active
            </span>
          </div>

          {/* Description */}
          <p className="py-5 text-sm sm:text-base text-zinc-400 leading-relaxed border-b border-surface-border">
            {educationData.description}
          </p>

          {/* Focus areas */}
          <div className="pt-5">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-600 mb-3 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-accent-green" />
              Core Academic & Technical Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {educationData.focusAreas.map((area, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-black/40 border border-surface-border text-xs font-medium text-zinc-400"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-green shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
