import React from 'react';
import { Code2, Globe, Database, Wrench, BrainCircuit, ShieldAlert, BookOpen } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const icons = {
  'Programming Languages':  { Icon: Code2,         color: 'text-accent-green', ring: 'border-accent-green/20 bg-accent-green/8'  },
  'Web Technologies':       { Icon: Globe,          color: 'text-cyan-400',     ring: 'border-cyan-500/20 bg-cyan-500/8'          },
  'Databases & Storage':    { Icon: Database,       color: 'text-amber-400',    ring: 'border-amber-500/20 bg-amber-500/8'        },
  'Developer Tools':        { Icon: Wrench,         color: 'text-purple-400',   ring: 'border-purple-500/20 bg-purple-500/8'      },
  'AI & Data Science':      { Icon: BrainCircuit,   color: 'text-teal-400',     ring: 'border-teal-500/20 bg-teal-500/8'          },
  'Cloud & Cybersecurity':  { Icon: ShieldAlert,    color: 'text-rose-400',     ring: 'border-rose-500/20 bg-rose-500/8'          },
};

function StatusBadge({ status }) {
  if (status === 'Core')
    return <span className="tag tag-green text-[10px] py-0.5">{status}</span>;
  if (status === 'Proficient')
    return <span className="tag tag-slate text-[10px] py-0.5">{status}</span>;
  return <span className="tag tag-amber text-[10px] py-0.5">{status}</span>;
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-surface-border">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="section-label">// 02. Technical Toolkit</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Skills & Competencies
          </h2>
          <p className="mt-3 text-zinc-500 max-w-2xl text-base">
            A categorized breakdown of programming languages, web technologies, databases, and tooling used across projects and hackathons.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const meta = icons[cat.category] ?? { Icon: Code2, color: 'text-zinc-400', ring: 'border-white/10 bg-white/5' };
            const { Icon, color, ring } = meta;
            return (
              <div key={i} className="card-dark p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-xl border ${ring} shrink-0`}>
                    <Icon className={`w-4 h-4 ${color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-white">{cat.category}</h3>
                </div>
                <p className="text-xs text-zinc-600 mb-5 leading-relaxed">{cat.description}</p>

                <div className="flex flex-wrap gap-2 flex-1">
                  {cat.skills.map((skill, j) => (
                    <div
                      key={j}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-subtle border border-surface-border text-xs font-medium text-zinc-300"
                    >
                      <span>{skill.name}</span>
                      <StatusBadge status={skill.status} />
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-3 border-t border-surface-border flex items-center justify-between text-[10px] font-mono text-zinc-600">
                  <span>{cat.skills.length} listed</span>
                  {cat.category === 'Cloud & Cybersecurity' && (
                    <span className="text-amber-500">Self-study</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy note */}
        <div className="mt-10 p-4 rounded-xl bg-surface-card border border-surface-border flex items-start gap-3 text-xs text-zinc-500">
          <BookOpen className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <p>
            <span className="text-zinc-300 font-semibold">Honest engineering standards:</span>{' '}
            Skills are marked based on real project application, academic labs, and hackathon work — not arbitrary percentages.
            Cloud and cybersecurity topics represent active self-study.
          </p>
        </div>

      </div>
    </section>
  );
}
