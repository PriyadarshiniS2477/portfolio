import React from 'react';
import { Code2, Database, Cpu, Users } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

const pillars = [
  {
    icon:  Code2,
    color: 'text-accent-green',
    bg:    'bg-accent-green/8 border-accent-green/20',
    title: 'Algorithmic Problem Solving',
    desc:  'Practicing data structures and computational logic regularly to build optimal, memory-conscious solutions.',
  },
  {
    icon:  Database,
    color: 'text-amber-400',
    bg:    'bg-amber-500/8 border-amber-500/20',
    title: 'Data & Backend Systems',
    desc:  'Designing normalized relational databases (PostgreSQL/MySQL) and backend services that serve real application data.',
  },
  {
    icon:  Cpu,
    color: 'text-cyan-400',
    bg:    'bg-cyan-500/8 border-cyan-500/20',
    title: 'Applied AI / Machine Learning',
    desc:  'Working with Python, NumPy, Pandas, and Scikit-learn to incorporate intelligence and heuristic decision-making into projects.',
  },
  {
    icon:  Users,
    color: 'text-purple-400',
    bg:    'bg-purple-500/8 border-purple-500/20',
    title: 'Hackathons & Team Collaboration',
    desc:  'Thriving in high-energy sprint environments like the Smart India Hackathon with structured Git workflows and agile teamwork.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-DEFAULT border-t border-surface-border">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="section-label">// 01. About Me</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Engineering Mindset & Background
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Story */}
          <div className="lg:col-span-7 space-y-5 text-zinc-400 text-base sm:text-lg leading-relaxed">
            <p className="text-zinc-200 font-medium text-lg">{aboutData.headline}</p>

            {aboutData.story.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="pt-4 flex flex-col sm:flex-row gap-6 border-t border-surface-border mt-4">
              <div>
                <span className="text-xs uppercase font-mono text-zinc-600 tracking-widest block mb-1">Academic Standing</span>
                <p className="font-semibold text-white">Computer Science Engineering — 3rd Semester</p>
              </div>
              <div className="sm:border-l sm:border-surface-border sm:pl-6">
                <span className="text-xs uppercase font-mono text-zinc-600 tracking-widest block mb-1">Core Focus</span>
                <p className="font-semibold text-white">Software Engineering, AI/ML, Databases</p>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((p, i) => (
              <div key={i} className="card-dark p-5 group">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className={`p-2 rounded-lg border ${p.bg} shrink-0`}>
                    <p.icon className={`w-4 h-4 ${p.color}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
