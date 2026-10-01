import React from 'react';
import { Github, ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-DEFAULT border-t border-surface-border">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="section-label">// 03. Selected Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Featured Engineering Projects
          </h2>
          <p className="mt-3 text-zinc-500 max-w-2xl text-base">
            Software built to solve concrete engineering, accessibility, and algorithmic challenges.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl bg-surface-card border border-surface-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent-green/20 hover:shadow-xl hover:shadow-black/60"
            >
              {/* Card body */}
              <div className="p-6 flex-1 flex flex-col">

                {/* Subtitle badge */}
                <div className="mb-4">
                  <span className="text-[11px] font-mono font-semibold text-accent-green px-2.5 py-1 rounded-md bg-accent-green/8 border border-accent-green/20">
                    {project.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-3 leading-snug tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Problem Solved */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-surface-border mb-5">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-600 mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                    Problem Solved
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{project.problemSolved}</p>
                </div>

                {/* Highlights */}
                {project.highlights && (
                  <div className="space-y-1.5 mb-5">
                    <div className="text-[10px] font-mono font-semibold uppercase tracking-widest text-zinc-600 mb-2">
                      Key Deliverables
                    </div>
                    {project.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-green shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-surface-subtle border border-surface-border text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-surface-border flex items-center gap-3 bg-black/30">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-surface-subtle text-zinc-300 border border-surface-border hover:border-white/20 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {project.liveDemoUrl ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-accent-green text-black hover:bg-emerald-400 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-zinc-600 px-2">Code only</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-xs font-mono text-zinc-700">
          GitHub links contain placeholder URLs — update in <code className="bg-surface-card px-1.5 py-0.5 rounded text-zinc-500">portfolioData.js</code>
        </p>
      </div>
    </section>
  );
}
