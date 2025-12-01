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
  Palette, 
  CheckCircle2,
  Clock,
  BookOpen,
  Figma,
  Globe,
  ArrowUp,
  Send,
  Heart,
  Sparkles,
  GraduationCap,
  Trophy,
  Timer,
  ExternalLink,
  User,
  Layout,
  Lightbulb,
  Smartphone,
  MessageCircle, 
  Users
} from 'lucide-react';

// --- ESTILOS CSS PARA ANIMAÇÃO ---
const styles = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;

// --- COMPONENTE NAVBAR ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Interesses', href: '#interesses' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Cursos', href: '#cursos' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 border-b border-purple-200' 
        : 'bg-transparent py-5'
    }`}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        <a href="#hero" className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
          AC.
        </a>
        <ul className="hidden md:flex gap-8 font-medium text-sm text-slate-700">
          {links.map(link => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-pink-600 transition-colors relative group py-2">
                {link.name}
                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        <a href="#contato" className="hidden md:block px-5 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-bold hover:bg-pink-100 transition-colors border border-pink-200">
           Contato
        </a>
      </nav>
    </header>
  );
};

// --- DADOS ---
const interests = [
  { icon: <Code2 size={24} />, title: "Front-end", desc: "Next.js, React e Tailwind CSS.", iconBg: "bg-pink-100 text-pink-600" },
  { icon: <Smartphone size={24} />, title: "Mobile", desc: "React Native e Expo para apps.", iconBg: "bg-green-100 text-green-600" },
  { icon: <Server size={24} />, title: "Back-end", desc: "Node.js, Python e APIs RESTful.", iconBg: "bg-red-100 text-red-600" },
  { icon: <Database size={24} />, title: "Dados & BI", desc: "SQL, ETL e Power BI.", iconBg: "bg-purple-100 text-purple-600" },
  { icon: <BrainCircuit size={24} />, title: "IA", desc: "Python, Pandas e Machine Learning.", iconBg: "bg-blue-100 text-blue-600" },
  { icon: <Users size={24} />, title: "Soft Skills", desc: "Liderança, Comunicação, Colaboração e Resolução de Problemas.", iconBg: "bg-yellow-100 text-yellow-600" }
];

const aboutTags = ["React", "Next.js", "TypeScript", "Python", "SQL", "Power BI", "Scrum", "React Native"];

// --- PROJETOS ATUALIZADOS ---
const projects = [
  {
    id: 1, 
    title: "GestCond Web", 
    category: "Full-stack", 
    desc: "Sistema de gestão condominial completo com painel administrativo.", 
    tags: ["React", "Node.js", "Vercel"], 
    featured: true, 
    image: "/projeto.png",
    links: [{ type: "github", url: "https://github.com/AndrezaCarrilho/admin-condominio", label: "GitHub" },
      { type: "site", url: "https://admin-condominio-fvs8.vercel.app/", label: "Vercel" }
    ]
  },
  {
    id: 2, 
    title: "Residência Porto Digital + Claro", 
    category: "Front-end", 
    desc: "Desenvolvimento de soluções reais em equipe multidisciplinar.", 
    tags: ["Scrum", "React", "Inovação"], 
    featured: false, 
    image: "/claroresidencia.png",
    links: [
      { type: "github", url: "https://github.com/Vanessa867/Front_Squad36_Claro", label: "GitHub" }
    ]
  },
  {
    id: 3, 
    title: "App Currículo", 
    category: "Mobile", 
    desc: "Aplicativo mobile desenvolvido para apresentação de currículo interativo.", 
    tags: ["React Native", "Expo", "Mobile"], 
    featured: false, 
    image: "/luizeapp.png",
    links: [
      { type: "github", url: "https://github.com/AndrezaCarrilho/AndrezaCarrilho-Portfolio", label: "GitHub" }
    ]
  },
  {
    id: 4, 
    title: "App GestCondo", 
    category: "Mobile", 
    desc: "Versão mobile do sistema de condomínio.", 
    tags: ["React Native", "Expo"], 
    featured: false, 
    image: "/gestcondoapp.png",
    links: [
      { type: "github", url: "https://github.com/AndrezaCarrilho/gestcond-expo-app", label: "GitHub" }
    ]
  },
  {
    id: 5, 
    title: "API de Currículos", 
    category: "Back-end", 
    desc: "API RESTful para gerenciamento e distribuição de dados curriculares.", 
    tags: ["Node.js", "API", "Vercel"], 
    featured: false, 
    image: "/cv-projeto-BACKEND.png",
    links: [
      { type: "github", url: "https://github.com/AndrezaCarrilho/cv_Andreza-API", label: "GitHub" },
      { type: "site", url: "https://cv-andreza-api.vercel.app", label: "Vercel" }
    ]
  },
  {
    id: 6, 
    title: "API Diário Pessoal", 
    category: "Back-end", 
    desc: "Backend para aplicação de diário com autenticação e segurança.", 
    tags: ["Node.js", "Express", "PostgreSQL"], 
    featured: false, 
    image: "/projeto2.png",
    links: [
      { type: "github", url: "https://github.com/AndrezaCarrilho/Projeto_AOS-diario-pessoal", label: "GitHub" },
      { type: "site", url: "https://projeto-aos-diario-pessoal.vercel.app/", label: "Vercel" }
    ]
  },
  {
    id: 7, 
    title: "Portfólio Pessoal", 
    category: "Front-end", 
    desc: "Este site! Desenvolvido com Next.js, Tailwind e muita animação.", 
    tags: ["Next.js", "React", "Tailwind"], 
    featured: true, 
    image: "/projetoportifolio.png",
    links: [
      { type: "github", url: "https://github.com/AndrezaCarrilho/Portfolio-AndrezaCarrilho", label: "GitHub" },
      { type: "figma", url: "#", label: "Figma" }
    ]
  }
];

// --- CURSOS ATUALIZADOS (Sem Graduação/Residência) ---
const courseStats = { total: 4, completed: 3, ongoing: 1 };
const courses = [
  { title: "Bootcamp Python Developer", school: "DIO", hours: "80 horas", date: "2024", status: "Concluído", type: "Back-end" },
  { title: "Analista de Dados e Power BI", school: "Fundação Bradesco", hours: "20 horas", date: "2024", status: "Concluído", type: "Dados" },
  { title: "Gerenciamento de Ameaças Cibernéticas", school: "Cisco", hours: "10 horas", date: "2024", status: "Concluído", type: "Segurança" },
  { title: "Hackers do Bem", school: "Gov Federal", hours: "N/A", date: "2025", status: "Em Andamento", type: "Segurança" },
];

// --- COMPONENTES INTERNOS ---
const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${className}`}>
    {children}
  </span>
);

const SectionTitle = ({ subtitle, title, align = "center", icon }: { subtitle: string, title: string, align?: "center" | "left", icon?: React.ReactNode }) => (
  <div className={`mb-12 flex flex-col ${align === "left" ? "items-start text-left" : "items-center text-center"} w-full`}>
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-pink-600 text-sm font-bold mb-4 border border-pink-100 shadow-sm">
      {icon} {subtitle}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold pb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
      {title}
    </h2>
  </div>
);

const getLinkIcon = (type: string) => {
  switch(type) {
    case 'github': return <Github size={16} />;
    case 'site': return <Globe size={16} />;
    case 'figma': return <Figma size={16} />;
    case 'docs': return <BookOpen size={16} />;
    default: return <ExternalLink size={16} />;
  }
};

export default function PortfolioPage() {
  const [activeProjectFilter, setActiveProjectFilter] = useState("Todos");
  const filteredProjects = activeProjectFilter === "Todos" ? projects : projects.filter(p => p.category === activeProjectFilter);
  const projectCategories = ["Todos", "Full-stack", "Front-end", "Back-end", "Mobile", "Dados"];

  const socialLinks = [
    { name: "WhatsApp", icon: <MessageCircle size={20} />, href: "https://wa.me/5581999614846?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20pelo%20curr%C3%ADculo." },
    { name: "LinkedIn", icon: <Linkedin size={20} />, href: "https://linkedin.com/in/andreza-carrilho-358177261" },
    { name: "GitHub", icon: <Github size={20} />, href: "https://github.com/AndrezaCarrilho" },
    { name: "Email", icon: <Mail size={20} />, href: "mailto:andrezaluiize@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-200 text-slate-800 font-sans selection:bg-purple-300 scroll-smooth overflow-x-hidden">
      <style>{styles}</style>
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-20 pb-20">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-pink-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        </div>

        <div className="mb-8 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md shadow-sm px-6 py-2 rounded-full text-sm font-bold text-slate-600 border border-purple-100">
           Bem vindos ao meu portfólio!
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl tracking-tight mb-6 text-slate-800 leading-none font-black z-10 font-sans">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 animate-pulse">Andreza Carrilho</span>
        </h1>
        
        <p className="max-w-3xl text-lg md:text-xl text-slate-700 mb-10 font-medium leading-relaxed">
          Estudante de Sistemas para Internet e Desenvolvedora Full Stack em formação. Busco criar soluções inovadoras com React, Next.js e Python.
        </p>

         <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-10">
           {['Front-end', 'Back-end', 'Mobile', 'Dados', 'IA'].map((skill) => (
             <div key={skill} className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-white/50 text-slate-700 text-sm font-bold hover:scale-105 transition-transform hover:bg-white">
                {skill === 'Front-end' && <Code2 size={18} className="text-pink-500"/>}
                {skill === 'Back-end' && <Server size={18} className="text-purple-500"/>}
                {skill === 'Mobile' && <Smartphone size={18} className="text-green-500"/>}
                {skill === 'Dados' && <Database size={18} className="text-blue-500"/>}
                {skill === 'IA' && <BrainCircuit size={18} className="text-indigo-500"/>}
                {skill}
             </div>
           ))}
        </div>

        <a 
          href="#projetos"
          className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 z-10 relative"
        >
          Ver meus projetos
        </a>
      </section>

      {/* --- SOBRE MIM --- */}
      <section id="sobre" className="py-20 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
        <div className="bg-white/90 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 shadow-lg border border-white/50">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            <div className="w-full md:w-1/2 flex justify-center relative animate-float">
               <div className="w-[80%] pb-[80%] relative bg-pink-200 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] rotate-6 shadow-xl overflow-hidden">
                  <img 
                    src="/20251201_114644.jpg" 
                    alt="Foto de Andreza Carrilho" 
                    className="absolute inset-0 w-full h-full object-cover -rotate-6 scale-110"
                  />
               </div>
            </div>

            <div className="w-full md:w-1/2">
              <SectionTitle subtitle="Sobre mim" title="Prazer, Andreza!" align="center" icon={<User size={14} className="text-pink-500" />} />
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  Sou estudante de <span className="text-pink-600 font-bold">Sistemas para Internet</span> na <span className="text-purple-600 font-bold">UNICAP</span> (previsão 08/2026) e procuro um estágio para evoluir tecnicamente e causar impacto real.
                </p>
                <p>
                  Tenho experiência prática como <span className="text-pink-600 font-bold">Desenvolvedora Front-end</span> na <span className="text-purple-600 font-bold">Residência de Software do Porto Digital</span>, onde atuei com metodologias ágeis (<span className="text-indigo-600 font-bold">Scrum/Kanban</span>) e liderei iniciativas técnicas.
                </p>
                <p>
                  Minha base técnica abrange desde o <span className="text-pink-600 font-bold">Front-end</span> moderno com <span className="text-pink-600 font-bold">React, Next.js e TypeScript</span>, até o <span className="text-purple-600 font-bold">Back-end</span> robusto com <span className="text-purple-600 font-bold">Node.js e Python</span>. Também aplico conhecimentos em <span className="text-blue-600 font-bold">Dados (SQL/ETL)</span> e metodologias ágeis para entregar soluções completas.
                </p>
            </div>

              <div className="flex flex-wrap gap-2 mt-8 justify-center md:justify-start">
                  {aboutTags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-slate-600 border border-slate-200 shadow-sm">
                          {tag}
                      </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTERESSES --- */}
      <section id="interesses" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionTitle subtitle="Skills & Áreas" title="O que eu faço" align="center" icon={<Lightbulb size={14} className="text-pink-500" />} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((item, idx) => (
            <div key={idx} className="bg-white/90 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${item.iconBg} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">{item.title}</h3>
              <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJETOS --- */}
      <section id="projetos" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionTitle subtitle="Portfólio" title="Meus Projetos" align="center" icon={<Layout size={14} className="text-pink-500" />} />

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {projectCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveProjectFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
                activeProjectFilter === cat 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md' 
                  : 'bg-white/90 backdrop-blur text-slate-600 hover:bg-white border border-white/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-[2rem] overflow-hidden border border-white/50 shadow-md hover:shadow-2xl transition-all duration-300 group relative flex flex-col">
              {project.featured && (
                  <span className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">Destaque</span>
              )}

              <div className="h-64 overflow-hidden relative bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                 <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                 />
                 <Sparkles size={48} className="text-white/50 absolute pointer-events-none" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                    <Badge className="bg-purple-50 text-purple-600 border border-purple-100">{project.category}</Badge>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">{project.desc}</p>
                {/* --- ÁREA DAS TECNOLOGIAS--- */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-pink-50 text-pink-600 text-[10px] uppercase font-bold rounded-md border border-pink-100">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* ------------------------------------------ */}
                <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-slate-50">
                   {project.links.map((link, i) => (
                     <a 
                       key={i} 
                       href={link.url} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-purple-500 hover:text-white text-slate-600 text-xs font-bold transition-all border border-slate-100"
                     >
                        {getLinkIcon(link.type)}
                        {link.label}
                     </a>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CURSOS --- */}
      <section id="cursos" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <SectionTitle subtitle="Educação" title="Cursos & Certificações" align="center" icon={<GraduationCap size={16} className="text-pink-500"/>} />
        
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16 max-w-3xl mx-auto">
            <div className="bg-white/90 backdrop-blur p-6 rounded-3xl border border-white shadow-sm text-center flex flex-col items-center">
                <span className="text-4xl font-black text-purple-600 mb-2 block">{courseStats.total}</span>
                <span className="text-sm text-slate-500 font-bold flex items-center gap-1"><Trophy size={14}/> Total</span>
            </div>
             <div className="bg-white/90 backdrop-blur p-6 rounded-3xl border border-white shadow-sm text-center flex flex-col items-center">
                <span className="text-4xl font-black text-emerald-500 mb-2 block">{courseStats.completed}</span>
                <span className="text-sm text-slate-500 font-bold flex items-center gap-1"><CheckCircle2 size={14}/> Concluídos</span>
            </div>
             <div className="bg-white/90 backdrop-blur p-6 rounded-3xl border border-white shadow-sm text-center flex flex-col items-center">
                <span className="text-4xl font-black text-amber-500 mb-2 block">{courseStats.ongoing}</span>
                <span className="text-sm text-slate-500 font-bold flex items-center gap-1"><Timer size={14}/> Cursando</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white/90 backdrop-blur p-6 rounded-[2rem] border border-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col items-start">
              <div className="flex justify-between w-full mb-4">
                 <Badge className="bg-slate-100 text-slate-600 border-slate-200">{course.type}</Badge>
                 {course.status === 'Concluído' ? (
                    <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100"><CheckCircle2 size={12}/> Concluído</Badge>
                 ) : (
                    <Badge className="bg-amber-50 text-amber-600 border-amber-100"><Timer size={12}/> Cursando</Badge>
                 )}
              </div>
              
              <h4 className="font-bold text-xl text-slate-800 mb-2">{course.title}</h4>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-4">
                  <BookOpen size={14} className="text-purple-400"/> {course.school}
              </div>

              <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mt-auto pt-4 border-t border-slate-50 w-full">
                <span className="flex items-center gap-1"><Clock size={12}/> {course.hours}</span>
                <span>{course.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <section id="contato" className="py-24 px-6 text-center bg-white/60 backdrop-blur border-t border-white/50 relative z-10">
        <div className="max-w-3xl mx-auto">
          
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-pink-600 text-sm font-bold mb-6 border border-pink-100 shadow-sm">
             <Send size={14} className="text-pink-500" /> Vamos conversar
          </span>

          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 mb-6">
            Entre em Contato
          </h2>

          <p className="text-slate-500 mb-12 text-lg max-w-2xl mx-auto font-medium">
            Adoraria ouvir sobre seu projeto ou oportunidade! Fique à vontade para me 
            encontrar nas redes sociais.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {socialLinks.map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-100 text-slate-600 font-bold hover:text-pink-600 hover:border-pink-200 hover:-translate-y-1 transition-all group">
                    {link.icon}
                    <span>{link.name}</span>
                </a>
            ))}
          </div>

          <footer className="text-slate-400 text-sm font-medium flex items-center justify-center gap-2">
            Feito com <Heart size={14} className="text-pink-500 animate-pulse" fill="currentColor" /> por Andreza Carrilho
          </footer>
        </div>
      </section>
    </div>
  );
}