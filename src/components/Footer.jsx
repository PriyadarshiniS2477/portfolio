import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-surface-DEFAULT border-t border-surface-border py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 font-bold text-white">
            <div className="w-7 h-7 rounded-lg bg-accent-green/10 border border-accent-green/25 flex items-center justify-center text-accent-green">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm">{personalInfo.name}</span>
          </div>
          <p className="text-xs font-mono text-zinc-600">
            Designed & Built by {personalInfo.name} · Computer Science Engineer
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2.5">
          {[
            { href: personalInfo.links.github,   Icon: Github,   label: 'GitHub'   },
            { href: personalInfo.links.linkedin,  Icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.links.email}`, Icon: Mail, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-lg bg-surface-card border border-surface-border text-zinc-500 hover:text-accent-green hover:border-accent-green/25 transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Back to top */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-mono text-zinc-700 hidden sm:inline">
            React · Vite · Tailwind CSS
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium bg-surface-card border border-surface-border text-zinc-500 hover:text-accent-green hover:border-accent-green/25 transition-all duration-200"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
