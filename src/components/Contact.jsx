import React, { useState } from 'react';
import {
  Mail, Linkedin, Github, Code2, Send, Copy, Check,
  ArrowUpRight, CheckCircle2, AlertCircle,
} from 'lucide-react';
import { contactData, personalInfo } from '../data/portfolioData';

const contactMethods = [
  { type: 'Email',    icon: Mail,     color: 'text-accent-green', key: 'email',    hrefPrefix: 'mailto:' },
  { type: 'LinkedIn', icon: Linkedin, color: 'text-cyan-400',     key: 'linkedin', hrefPrefix: '' },
  { type: 'GitHub',   icon: Github,   color: 'text-zinc-300',     key: 'github',   hrefPrefix: '' },
  { type: 'LeetCode', icon: Code2,    color: 'text-amber-400',    key: 'leetcode', hrefPrefix: '' },
];

const inputClass =
  'w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface-subtle border border-surface-border text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent-green/50 focus:border-accent-green/40 transition-all';

export default function Contact() {
  const [form,      setForm]      = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied,    setCopied]    = useState(false);
  const [error,     setError]     = useState('');

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    // Ready to connect to Formspree / EmailJS / backend API
    console.log('Contact form payload:', form);
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.links.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-surface-border">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="section-label">// 08. Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            {contactData.title}
          </h2>
          <p className="mt-3 text-zinc-500 max-w-2xl text-base">{contactData.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left — Direct links */}
          <div className="lg:col-span-5 space-y-4">

            {/* Email quick-action */}
            <div className="p-5 rounded-2xl bg-surface-card border border-surface-border">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-green block mb-1.5">
                Direct Contact
              </span>
              <p className="text-sm font-semibold text-white break-all mb-3">
                {personalInfo.links.email}
              </p>
              <div className="flex items-center gap-2.5 flex-wrap">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-surface-subtle text-zinc-300 border border-surface-border hover:border-white/20 hover:text-white transition-colors"
                >
                  {copied ? (
                    <><Check className="w-3.5 h-3.5 text-accent-green" /><span className="text-accent-green">Copied!</span></>
                  ) : (
                    <><Copy className="w-3.5 h-3.5" /><span>Copy Email</span></>
                  )}
                </button>
                <a
                  href={`mailto:${personalInfo.links.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-accent-green text-black hover:bg-emerald-400 transition-colors"
                >
                  <span>Open Mail App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-2.5">
              {contactMethods.map(({ type, icon: Icon, color, key, hrefPrefix }) => {
                const href = hrefPrefix
                  ? `${hrefPrefix}${personalInfo.links[key]}`
                  : personalInfo.links[key];
                return (
                  <a
                    key={type}
                    href={href}
                    target={type === 'Email' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-surface-card border border-surface-border hover:border-white/15 hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2 rounded-lg bg-surface-subtle border border-surface-border">
                        <Icon className={`w-4 h-4 ${color}`} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-accent-green transition-colors">
                          {type}
                        </div>
                        <div className="text-[11px] font-mono text-zinc-600 truncate max-w-[200px]">
                          {personalInfo.links[key]}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-accent-green transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <div className="card-dark p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-zinc-600 mb-6">
                Fill out the form below or reach out directly. I respond promptly to internship and technical inquiries.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-accent-green/8 border border-accent-green/20 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent-green/10 border border-accent-green/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-accent-green" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Message received!</h4>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                    Thank you, <strong className="text-white">{form.name}</strong>. Connect this form to Formspree, EmailJS, or your backend to activate email delivery.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-surface-subtle text-zinc-300 border border-surface-border hover:border-white/20 hover:text-white transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs text-rose-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[11px] font-mono font-medium text-zinc-500 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text" id="name" name="name"
                        value={form.name} onChange={onChange}
                        placeholder="Alex Morgan"
                        className={inputClass} required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[11px] font-mono font-medium text-zinc-500 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email" id="email" name="email"
                        value={form.email} onChange={onChange}
                        placeholder="alex@company.com"
                        className={inputClass} required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[11px] font-mono font-medium text-zinc-500 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text" id="subject" name="subject"
                      value={form.subject} onChange={onChange}
                      placeholder="Internship / Hackathon / Collaboration"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[11px] font-mono font-medium text-zinc-500 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message" name="message" rows={5}
                      value={form.message} onChange={onChange}
                      placeholder="Hi Priyadarshini.S, I came across your portfolio and wanted to discuss..."
                      className={`${inputClass} resize-y`} required
                    />
                  </div>

                  <div className="pt-1 flex items-center justify-between flex-wrap gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-accent-green text-black hover:bg-emerald-400 shadow-lg shadow-accent-green/20 active:scale-[0.98] transition-all"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-mono text-zinc-700">
                      Connect to Formspree / EmailJS to activate
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
