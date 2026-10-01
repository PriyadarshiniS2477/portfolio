import React from 'react';
import { Trophy, Code2, Award, Terminal, BookOpen } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const accentMap = {
  green:  { icon: Trophy,   color: 'text-accent-green', ring: 'border-accent-green/20 bg-accent-green/8',   badge: 'tag-green'  },
  amber:  { icon: Code2,    color: 'text-amber-400',    ring: 'border-amber-500/20 bg-amber-500/8',          badge: 'tag-amber'  },
  purple: { icon: Award,    color: 'text-purple-400',   ring: 'border-purple-500/20 bg-purple-500/8',        badge: 'tag-purple' },
  cyan:   { icon: Terminal, color: 'text-cyan-400',     ring: 'border-cyan-500/20 bg-cyan-500/8',            badge: 'tag-cyan'   },
  teal:   { icon: BookOpen, color: 'text-teal-400',     ring: 'border-teal-500/20 bg-teal-500/8',            badge: 'tag-slate'  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-surface-border">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="section-label">// 06. Milestones & Activities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Achievements & Activities
          </h2>
          <p className="mt-3 text-zinc-500 max-w-2xl text-base">
            Hackathons, coding practice, technical workshops, and academic milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievementsData.map(item => {
            const meta  = accentMap[item.accent] ?? accentMap.teal;
            const Icon  = meta.icon;
            return (
              <div key={item.id} className="card-dark p-6 flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl border ${meta.ring} shrink-0`}>
                    <Icon className={`w-4 h-4 ${meta.color}`} />
                  </div>
                  <div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${meta.color}`}>
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-0.5">{item.title}</h3>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed flex-1">{item.description}</p>
                <div className="mt-4 pt-3 border-t border-surface-border flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-700">Status</span>
                  <span className={`tag ${meta.badge} text-[10px] py-0.5`}>{item.status}</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-xs font-mono text-zinc-700 text-center">
          Add certifications, awards, or workshop details in{' '}
          <code className="bg-surface-card px-1.5 py-0.5 rounded text-zinc-500">portfolioData.js</code>
        </p>
      </div>
    </section>
  );
}
