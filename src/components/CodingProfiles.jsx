import React from 'react';
import { Github, Code2, ExternalLink, Layers } from 'lucide-react';
import { codingProfilesData, personalInfo } from '../data/portfolioData';

const platformMeta = {
  LeetCode: { color: 'text-amber-400', ring: 'border-amber-500/20 bg-amber-500/8',       badge: 'tag-amber',   Icon: Code2   },
  GitHub:   { color: 'text-accent-green', ring: 'border-accent-green/20 bg-accent-green/8', badge: 'tag-green', Icon: Github  },
};

export default function CodingProfiles() {
  return (
    <section id="coding" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-DEFAULT border-t border-surface-border">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="section-label">// 07. Code & Practice</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Coding Profiles & Algorithmic Rigor
          </h2>
          <p className="mt-3 text-zinc-500 max-w-2xl text-base">
            Active developer presence across version control and algorithmic practice platforms.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {codingProfilesData.platforms.map(platform => {
            const meta = platformMeta[platform.name] ?? platformMeta.GitHub;
            const { color, ring, badge, Icon } = meta;
            return (
              <div key={platform.name} className="card-dark p-6 sm:p-8 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl border ${ring}`}>
                      <Icon className={`w-6 h-6 ${color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-white">{platform.name}</h3>
                      <p className="text-[11px] font-mono text-zinc-600">{platform.role}</p>
                    </div>
                  </div>
                  <span className={`tag ${badge} self-start`}>{platform.badge}</span>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">{platform.description}</p>

                <div className="mb-5">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-600 mb-2">
                    {platform.name === 'LeetCode' ? 'Practice Focus' : 'Workflow Practices'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {platform.highlights.map(h => (
                      <span key={h} className="tag tag-slate">{h}</span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-700">
                    Update handle in portfolioData.js
                  </span>
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${color} hover:underline`}
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Algorithmic Topics */}
        <div className="card-dark p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-5">
            <Layers className="w-5 h-5 text-accent-green" />
            <h3 className="text-base sm:text-lg font-bold text-white">
              Data Structure & Algorithmic Focus Breakdown
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {codingProfilesData.coreTopics.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-black/40 border border-surface-border">
                <div className="text-sm font-bold text-white mb-1">{item.topic}</div>
                <div className="text-xs text-zinc-500 leading-relaxed">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
