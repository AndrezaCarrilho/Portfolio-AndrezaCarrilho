"use client";

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Server, 
  Database, 
  BrainCircuit, 
  CheckCircle2,
  BookOpen,
  ExternalLink,
  User,
  History,
  Palette,
  Sparkles,
  Search,
  Sigma,
  MessageCircle, // Ícone para WhatsApp
  FileDown      // Ícone para Download do CV
} from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#fdfaf3]/95 backdrop-blur-md border-b border-stone-200 py-3 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-8">
        <a href="#hero" className="text-xl font-serif font-bold tracking-tighter text-stone-800">
          ANDREZA<span className="text-accent">.C</span>
        </a>
        <ul className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
          <li><a href="#sobre" className="hover:text-accent transition-colors">História</a></li>
          <li><a href="#projetos" className="hover:text-accent transition-colors">Obras</a></li>
          <li><a href="#cursos" className="hover:text-accent transition-colors">Estudos</a></li>
        </ul>
        <a href="#contato" className="px-5 py-2 bg-accent text-white rounded-full text-[10px] font-bold tracking-widest hover:bg-details transition-all shadow-md">
           CONTATO
        </a>
      </nav>
    </header>
  );
};

const SectionTitle = ({ subtitle, title, align = "center", icon }: { subtitle: string, title: string, align?: "center" | "left", icon?: React.ReactNode }) => (
  <div className={`mb-16 flex flex-col ${align === "left" ? "items-start" : "items-center text-center"} w-full`}>
    <span className="inline-flex items-center gap-2 text-details text-[10px] font-black uppercase tracking-[0.3em] mb-3">
      {icon} {subtitle}
    </span>
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 leading-tight">
      {title}
    </h2>
    <div className="w-12 h-1 bg-accent mt-4 rounded-full opacity-60"></div>
  </div>
);

export default function PortfolioPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a') || target.closest('button') || target.tagName === 'IMG';
      setIsHovering(!!isClickable);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    { 
      id: 1, 
      title: "GestCond Web", 
      category: "Full-Stack", 
      desc: "Gestão condominial completa com React e Node.js.", 
      image: "/projeto.png", 
      tags: ["React", "Node", "Vercel"],
      githubUrl: "https://github.com/AndrezaCarrilho/admin-condominio",
      deployUrl: "https://admin-condominio-fvs8.vercel.app/"
    },
    { 
      id: 2, 
      title: "Residência Porto Digital", 
      category: "Inovação", 
      desc: "Squad Claro & Adecco: Soluções em Front-end e Scrum.", 
      image: "/claroresidencia.png", 
      tags: ["Scrum", "React", "Porto Digital"],
      githubUrl: "https://github.com/Vanessa867/Front_Squad36_Claro",
      deployUrl: "#"
    },
    { 
      id: 3, 
      title: "Curriculum Mobile", 
      category: "Mobile", 
      desc: "App interativo em React Native para portfólio digital.", 
      image: "/luizeapp.png", 
      tags: ["Expo", "React Native"],
      githubUrl: "https://github.com/AndrezaCarrilho/AndrezaCarrilho-Portfolio",
      deployUrl: "#"
    },
    { 
      id: 4, 
      title: "API Diário Pessoal", 
      category: "Back-End", 
      desc: "Segurança e registros com Node.js e PostgreSQL.", 
      image: "/projeto2.png", 
      tags: ["Auth", "Express", "API"],
      githubUrl: "https://github.com/AndrezaCarrilho/Projeto_AOS-diario-pessoal",
      deployUrl: "https://projeto-aos-diario-pessoal.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf3] text-stone-800 font-sans selection:bg-accent/20 scroll-smooth">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-details/5 rounded-full blur-3xl"></div>

        <div className="z-10 max-w-3xl animate-in fade-in zoom-in duration-1000">
          <div className="flex justify-center gap-2 mb-6">
            <Sparkles size={18} className="text-details animate-pulse" />
          </div>
          <h1 className="text-7xl md:text-7xl font-serif font-bold text-stone-900 mb-6 tracking-tight">
            Andreza <span className="text-accent italic"> Carrilho</span>
          </h1>
          <p className="text-stone-500 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            Desenvolvedora Full Stack & Estudante de Estatística<br/> Residente no Porto Digital • UNICAP • UFPE <br/>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projetos" className="px-8 py-3 bg-stone-900 text-white rounded-full font-bold shadow-lg hover:bg-accent hover:-translate-y-1 transition-all">
              Explorar Galeria
            </a>
            {/* BOTÃO DE DOWNLOAD DO CV */}
            <a 
              href="/Andreza-Carrilho_CV.pdf" 
              download 
              className="px-8 py-3 border-2 border-accent text-accent rounded-full font-bold hover:bg-accent hover:text-white transition-all flex items-center gap-2"
            >
              <FileDown size={18} /> Baixar CV
            </a>
          </div>
        </div>
      </section>

      {/* --- SOBRE --- */}
      <section id="sobre" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 border border-accent/20 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative p-3 bg-white shadow-2xl rounded-sm">
              <img 
                src="/1000179770.png" 
                alt="Andreza Carrilho" 
                className="rounded-sm grayscale-[0.3] hover:grayscale-20 hover:scale-105 hover:shadow-[0_20px_50px_rgba(74,103,65,0.2)] transition-all duration-500"
              />
            </div>
          </div>

          <div>
            <SectionTitle subtitle="Biografia" title="Entre a Lógica dos Dados e a Arte do Código" align="left" icon={<History size={16}/>} />
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-medium">
              <p> Minha trajetória é definida pela convergência acadêmica e prática. Atualmente, curso <span className="text-stone-900 font-bold underline decoration-accent/30">Estatística na UFPE e Sistemas para Internet na UNICAP</span>, unindo o rigor analítico ao desenvolvimento de software. Como <span className="text-stone-900 font-bold underline decoration-accent/30">residente tecnológica no Porto Digital</span>, transformo esse conhecimento em soluções reais para empresas como Localiza, Claro, Santander e Adecco.
              </p>
              <p>
                Proativa, analítica e em constante evolução. Focada em <span className="text-stone-900 font-bold underline decoration-accent/30">Dados e IA</span>, busco desafios que me permitam aplicar minha base estatística no desenvolvimento de soluções inovadoras. </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["React", "Next.js", "Python", "SQL", "Scrum", "Node"].map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJETOS --- */}
      <section id="projetos" className="py-32 bg-stone-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Acervo Digital" title="Meus Principais Projetos" icon={<Palette size={16}/>} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map(project => (
              <div key={project.id} className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-10">
                  <span className="text-details font-bold text-[10px] uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-2xl font-serif font-bold mt-2 mb-4 text-stone-800">{project.title}</h3>
                  <p className="text-stone-500 mb-6 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold border border-stone-200 px-3 py-1 rounded text-stone-400 uppercase">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-6 border-t border-stone-100 pt-6">
                    <a href={project.githubUrl} target="_blank" className="inline-flex items-center gap-2 text-stone-900 font-bold text-sm hover:text-accent transition-colors">
                      <Github size={16}/> Código
                    </a>
                    {project.deployUrl !== "#" && (
                      <a href={project.deployUrl} target="_blank" className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:text-details transition-colors">
                        <ExternalLink size={16}/> Visitar
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CURSOS --- */}
      <section id="cursos" className="py-32 px-6 max-w-5xl mx-auto">
        <SectionTitle subtitle="Conhecimento" title="Cursos & Especializações" icon={<BookOpen size={16}/>} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-accent text-white rounded-3xl shadow-xl md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Sigma size={24} className="text-white/80" />
                <span className="font-bold text-xs uppercase tracking-widest opacity-80">Destaque Acadêmico</span>
              </div>
              <h4 className="text-2xl font-serif font-bold mb-2 text-white">Bootcamp GenAI & Dados</h4>
              <p className="text-white/80 mb-4 font-medium">Bradesco & Fundação Bradesco • 52 horas de imersão em Inteligência Artificial e Ciência de Dados.</p>
              <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
                <span className="bg-white/20 px-3 py-1 rounded-full">Estatística</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Python</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">BI</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-4xl font-serif italic font-bold">2024</span>
            </div>
          </div>

          {[
            { title: "Python Developer", school: "DIO", date: "2024", icon: <Code2 size={18}/> },
            { title: "Segurança Cibernética", school: "Cisco", date: "2024", icon: <Search size={18}/> },
            { title: "Hackers do Bem", school: "Gov Federal", date: "2025", icon: <CheckCircle2 size={18}/> },
            { title: "Analista de Dados", school: "Fund. Bradesco", date: "2024", icon: <Database size={18}/> }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 p-6 border-b border-stone-200 hover:bg-stone-50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-accent">
                {item.icon}
              </div>
              <div>
                <h5 className="font-bold text-stone-800">{item.title}</h5>
                <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">{item.school} • {item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contato" className="py-32 px-6 bg-stone-900 text-[#fdfaf3] text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-details to-accent"></div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold italic mb-12">Vamos criar algo histórico?</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {/* WHATSAPP */}
            <a href="https://wa.me/5581999614846" target="_blank" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:bg-[#25D366] transition-all">
                <MessageCircle size={20}/>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">WhatsApp</span>
            </a>

            <a href="https://linkedin.com/in/andreza-carrilho-358177261" target="_blank" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:bg-accent transition-all">
                <Linkedin size={20}/>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">LinkedIn</span>
            </a>

            <a href="https://github.com/AndrezaCarrilho" target="_blank" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:bg-accent transition-all">
                <Github size={20}/>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">GitHub</span>
            </a>

            <a href="mailto:andrezaluiize@gmail.com" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:bg-accent transition-all">
                <Mail size={20}/>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">E-mail</span>
            </a>
          </div>
          <p className="text-[10px] text-stone-500 font-bold uppercase tracking-[0.4em]">
            Andreza Carrilho &copy; MMXXVI • UNICAP • Porto Digital
          </p>
        </div>
      </footer>

      {/* --- CURSOR DINÂMICO --- */}
      <div 
        className={`hidden md:block fixed pointer-events-none z-[9999] rounded-full transition-all duration-300 ease-out border ${
          isHovering 
            ? 'w-16 h-16 bg-accent/10 border-accent/30 scale-125' 
            : 'w-4 h-4 bg-accent border-accent shadow-[0_0_15px_rgba(74,93,35,0.4)]'
        }`}
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px`, 
          transform: 'translate(-50%, -50%)' 
        }}
      />
    </div>
  );
}