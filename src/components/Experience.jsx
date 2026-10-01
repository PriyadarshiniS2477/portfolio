import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-surface-border">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="section-label">// 04. Hackathons & Experience</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Engineering & Hackathon Timeline
          </h2>
          <p className="mt-3 text-zinc-500 max-w-2xl text-base">
            Practical collaborative experience developing technology under rigorous hackathon conditions and structured team workflows.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-surface-border ml-4 pl-8 space-y-12">
          {experienceData.map(exp => (
            <div key={exp.id} className="relative">

              {/* Timeline dot */}
              <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-accent-green border-4 border-black shadow-lg shadow-accent-green/30" />

              {/* Card */}
              <div className="card-dark p-6 sm:p-8">

                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-accent-green">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 tracking-tight">
                      {exp.organization}
                    </h3>
                  </div>
                  <span className="tag tag-green self-start whitespace-nowrap">
                    {exp.status}
                  </span>
                </div>

                {/* Role */}
                <div className="inline-block px-3 py-1 rounded-md bg-surface-subtle border border-surface-border text-sm font-semibold text-zinc-300 mb-4">
                  Role: {exp.title}
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">{exp.description}</p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-600 mb-3">
                    Key Technical Contributions
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.responsibilities.map((r, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-black/40 border border-surface-border text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-green shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div className="pt-4 border-t border-surface-border flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono text-zinc-600 mr-1">Stack & Tools:</span>
                  {exp.technologies.map(tech => (
                    <span key={tech} className="tag tag-slate">{tech}</span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
