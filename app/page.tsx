"use client"
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowRight, 
  ExternalLink, 
  Atom, 
  Wind, 
  Server, 
  Terminal,
  Moon,
  Code
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Base class for reveal animation
  const revealClass = "reveal opacity-0 translate-y-8 transition-all duration-700 ease-out [&.active]:opacity-100 [&.active]:translate-y-0";

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600/20 selection:text-blue-700">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 bg-white/85 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold mr-3 shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
                JG
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Johnmark.Dev
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {['Home', 'About', 'Stack', 'Projects'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-sm font-medium transition-all text-white shadow-md hover:shadow-lg"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="text-slate-600 hover:text-slate-900 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {['Home', 'About', 'Stack', 'Projects'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-16 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[80px] -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Centered Container restoring Side-by-Side Layout */}
          <div className={`${revealClass} flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20`}>
            
            {/* Left Side: Image with Ring */}
            <div className="relative w-56 h-56 md:w-80 md:h-80 flex-shrink-0">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-[3px] border-blue-600/30 scale-105"></div>
                {/* Inner Ring/Glow */}
                <div className="absolute inset-0 rounded-full border border-blue-600/20 scale-110 animate-pulse"></div>
                
                {/* Image Container */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-blue-600/20 relative z-10">
                    <img 
                      src="fakejamak.jpg" 
                      alt="Johnmark Gulbe" 
                      className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Right Side: Bold Text */}
            <div className="text-center md:text-left max-w-lg">
                <h3 className="text-lg md:text-2xl font-semibold text-slate-500 mb-2">
                    Hi, I'm <span className="text-slate-900">Johnmark Gulbe</span>
                </h3>
                
                <div className="font-black text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-6">
                    <span className="block text-slate-900">FULLSTACK</span>
                    <span className="block text-blue-600">DEVELOPER</span>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto md:mx-0">
                    Transforming ideas into digital reality. I specialize in building robust web applications with modern technologies and clean, efficient code.
                </p>
                {/* Buttons removed as requested */}
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid md:grid-cols-2 gap-12 items-center ${revealClass}`}>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">About Me</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I'm Johnmark Gulbe, an aspiring Full Stack Developer currently navigating the exciting world of Computer Science. As a freshman, I'm fueling my curiosity by building web applications and diving deep into modern technologies like React and Node.js.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I'm always eager to learn from others and take on new challenges. When I'm not studying algorithms or debugging code, you can find me exploring new tech trends or working on personal projects to level up my skills.
              </p>
            </div>
            <div className="relative group">
              <div className="aspect-square rounded-2xl bg-white border border-slate-200 shadow-xl p-2 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="opawyawa.jpg" 
                    alt="Johnmark Gulbe" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 ${revealClass}`}>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Tech Stack</h2>
            <p className="text-slate-600">Tools and technologies I use daily.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[120px]">
            {/* React */}
            <div className={`md:col-span-2 md:row-span-2 bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-xl p-6 relative overflow-hidden group hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 ${revealClass}`}>
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Atom size={160} className="text-blue-600" />
              </div>
              <div className="h-full flex flex-col justify-between relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-2 border border-blue-100">
                  <Atom size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Frontend Architecture</h3>
                  <p className="text-sm text-slate-600 mt-1">Specialized in React, Next.js ecosystem, and state management.</p>
                </div>
              </div>
            </div>

            {/* TypeScript */}
            <div className={`md:col-span-1 md:row-span-1 bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-xl p-6 flex flex-col justify-between group hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 ${revealClass} delay-100`}>
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                <span className="font-bold text-sm">TS</span>
              </div>
              <h3 className="font-semibold text-slate-900">TypeScript</h3>
            </div>

            {/* Tailwind */}
            <div className={`md:col-span-1 md:row-span-1 bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-xl p-6 flex flex-col justify-between group hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 ${revealClass} delay-100`}>
              <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 border border-cyan-100">
                <Wind size={20} />
              </div>
              <h3 className="font-semibold text-slate-900">Tailwind</h3>
            </div>

            {/* Backend */}
            <div className={`md:col-span-2 md:row-span-1 bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-xl p-6 flex items-center gap-6 hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300 ${revealClass} delay-200`}>
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0 border border-green-100">
                <Server size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Backend Systems</h3>
                <p className="text-xs text-slate-600 mt-1">Node.js, PostgreSQL, Serverless functions.</p>
              </div>
            </div>

            {/* Python */}
            <div className={`md:col-span-2 md:row-span-1 bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-xl p-6 flex items-center gap-6 hover:border-yellow-500/30 hover:-translate-y-1 transition-all duration-300 ${revealClass} delay-200`}>
              <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600 flex-shrink-0 border border-yellow-100">
                <Code size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Python</h3>
                <p className="text-xs text-slate-600 mt-1">Scripting, automation, and data processing.</p>
              </div>
            </div>

            {/* Lua */}
            <div className={`md:col-span-2 md:row-span-1 bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-xl p-6 flex items-center gap-6 hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 ${revealClass} delay-200`}>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0 border border-indigo-100">
                <Moon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Lua</h3>
                <p className="text-xs text-slate-600 mt-1">Lightweight scripting for embedded systems and games.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-end mb-12 ${revealClass}`}>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Selected Projects</h2>
              <p className="text-slate-600">Recent projects shipped to production.</p>
            </div>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
              View GitHub <ArrowRight size={16} />
            </a>
          </div>

          <div className="space-y-8">
            {/* Project 1 */}
            <div className={`bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-8 md:p-10 ${revealClass} group hover:border-blue-500/30 hover:shadow-xl`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">SaaS</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200">2023</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Analytics Dashboard</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    A real-time analytics platform helping e-commerce businesses track metrics. Features include data visualization with D3.js and automated reporting.
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-8">
                    {['Next.js', 'TypeScript', 'Supabase'].map((tech) => (
                      <li key={tech} className="text-xs font-medium text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded shadow-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <a href="#" className="text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm font-bold">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2 text-sm font-bold">
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm group-hover:shadow-md transition-all">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-full h-full bg-white rounded-lg border border-slate-200 shadow-xl p-4 flex flex-col">
                      <div className="flex gap-2 mb-4 border-b border-slate-100 pb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 flex-1">
                        <div className="bg-blue-50 rounded border border-blue-100"></div>
                        <div className="bg-slate-50 rounded border border-slate-100"></div>
                        <div className="col-span-2 bg-slate-50 rounded border border-slate-100 h-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - Updated Description and removed buttons */}
            <div className={`bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-8 md:p-10 ${revealClass} delay-100 group hover:border-purple-500/30 hover:shadow-xl`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative aspect-video rounded-xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm group-hover:shadow-md transition-all">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2/3 h-2/3 bg-white rounded-xl border border-slate-200 shadow-xl flex items-center justify-center">
                      <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
                        <Terminal size={32} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-100">AI Tool</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200">2023</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">AI Chat Assistant</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    An intelligent conversational agent built with OpenAI's powerful language models. Features natural language understanding, context retention for multi-turn conversations, and a sleek, user-friendly interface for seamless interaction.
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-8">
                    {['React', 'Node.js', 'OpenAI API'].map((tech) => (
                      <li key={tech} className="text-xs font-medium text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded shadow-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className={`max-w-3xl mx-auto px-4 text-center ${revealClass}`}>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to collaborate?</h2>
          <p className="text-slate-600 mb-10 text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:hello@example.com" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all hover:scale-105 shadow-xl shadow-slate-900/10"
          >
            Say Hello <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">&copy; 2023 Johnmark Gulbe. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;