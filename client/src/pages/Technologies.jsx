import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCloud, FiCpu, FiDatabase, FiMonitor, FiSettings, FiSmartphone } from "react-icons/fi";
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiTypescript,
  SiNodedotjs, SiPython, SiDjango, SiGraphql, SiGo,
  SiFlutter, SiAndroid, SiSwift,
  SiOpenai, SiTensorflow,
  SiAmazonwebservices, SiGooglecloud, SiDocker, SiKubernetes,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiElasticsearch,
  SiGithubactions, SiTerraform, SiNginx,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    icon: <FiMonitor className="w-6 h-6 text-slate-200" />,
    color: "from-blue-600/15 to-cyan-600/15",
    techs: [
      { icon: <SiReact style={{ color: "#E5E7EB" }} />,       name: "React 18+" },
      { icon: <SiNextdotjs style={{ color: "#fff" }} />,       name: "Next.js 14" },
      { icon: <SiVuedotjs style={{ color: "#D1D5DB" }} />,     name: "Vue.js" },
      { icon: <SiTailwindcss style={{ color: "#9CA3AF" }} />,  name: "Tailwind CSS" },
      { icon: <SiTypescript style={{ color: "#D1D5DB" }} />,   name: "TypeScript" },
    ],
  },
  {
    title: "Backend",
    icon: <FiSettings className="w-6 h-6 text-slate-200" />,
    color: "from-indigo-600/15 to-purple-600/15",
    techs: [
      { icon: <SiNodedotjs style={{ color: "#D1D5DB" }} />,    name: "Node.js" },
      { icon: <SiPython style={{ color: "#D1D5DB" }} />,       name: "Python" },
      { icon: <SiDjango style={{ color: "#3F3F46" }} />,       name: "Django" },
      { icon: <SiGraphql style={{ color: "#9CA3AF" }} />,      name: "GraphQL" },
      { icon: <SiGo style={{ color: "#D1D5DB" }} />,           name: "Go (Golang)" },
    ],
  },
  {
    title: "Mobile",
    icon: <FiSmartphone className="w-6 h-6 text-slate-200" />,
    color: "from-cyan-600/15 to-blue-600/15",
    techs: [
      { icon: <SiFlutter style={{ color: "#D1D5DB" }} />,    name: "Flutter" },
      { icon: <SiReact style={{ color: "#E5E7EB" }} />,      name: "React Native" },
      { icon: <SiAndroid style={{ color: "#D1D5DB" }} />,    name: "Android (Kotlin)" },
      { icon: <SiSwift style={{ color: "#D1D5DB" }} />,      name: "iOS (Swift)" },
    ],
  },
  {
    title: "AI & ML",
    icon: <FiCpu className="w-6 h-6 text-slate-200" />,
    color: "from-violet-600/15 to-indigo-600/15",
    techs: [
      { icon: <SiOpenai style={{ color: "#fff" }} />,        name: "OpenAI / GPT-4" },
      { icon: <SiTensorflow style={{ color: "#D1D5DB" }} />, name: "TensorFlow" },
      { icon: <SiPython style={{ color: "#D1D5DB" }} />,     name: "PyTorch" },
      { icon: <SiPython style={{ color: "#D1D5DB" }} />,     name: "LangChain" },
      { icon: <SiPython style={{ color: "#D1D5DB" }} />,     name: "Hugging Face" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <FiCloud className="w-6 h-6 text-slate-200" />,
    color: "from-orange-600/15 to-yellow-600/15",
    techs: [
      { icon: <SiAmazonwebservices style={{ color: "#D1D5DB" }} />, name: "AWS" },
      { icon: <SiGooglecloud style={{ color: "#D1D5DB" }} />,       name: "Google Cloud" },
      { icon: <FiCloud style={{ color: "#D1D5DB" }} />,             name: "Microsoft Azure" },
      { icon: <SiDocker style={{ color: "#D1D5DB" }} />,            name: "Docker" },
      { icon: <SiKubernetes style={{ color: "#D1D5DB" }} />,        name: "Kubernetes" },
    ],
  },
  {
    title: "Databases",
    icon: <FiDatabase className="w-6 h-6 text-slate-200" />,
    color: "from-green-600/15 to-teal-600/15",
    techs: [
      { icon: <SiMongodb style={{ color: "#D1D5DB" }} />,       name: "MongoDB" },
      { icon: <SiPostgresql style={{ color: "#D1D5DB" }} />,    name: "PostgreSQL" },
      { icon: <SiMysql style={{ color: "#9CA3AF" }} />,         name: "MySQL" },
      { icon: <SiRedis style={{ color: "#9CA3AF" }} />,         name: "Redis" },
      { icon: <SiElasticsearch style={{ color: "#9CA3AF" }} />, name: "Elasticsearch" },
    ],
  },
];

const Technologies = () => (
  <div className="bg-[#08090B] min-h-screen">
    {/* Hero */}
    <section className="pt-24 pb-16 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0B0D12 0%, #08090B 100%)" }}>
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="section-label mb-4 inline-flex">Our Stack</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white mb-4">
          Technologies We <span className="gradient-text">Master</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg">
          Modern, battle-tested, and future-proof technologies across the full stack.
        </motion.p>
      </div>
    </section>

    {/* Tech categories */}
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 pb-24 space-y-10">
      {categories.map((cat, ci) => (
        <motion.div
          key={ci}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: ci * 0.05 }}
          className={`p-8 rounded-2xl bg-gradient-to-br ${cat.color}`}
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">{cat.icon}</span>
            <h2 className="text-xl font-bold font-display text-white">{cat.title}</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {cat.techs.map((tech, ti) => (
              <div key={ti} className="tech-badge">
                <span className="text-xl">{tech.icon}</span>
                <span className="text-slate-200 font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <section className="py-16 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
      <div className="max-w-md mx-auto px-6">
        <h2 className="text-2xl font-extrabold font-display text-white mb-4">Have a Preferred Tech Stack?</h2>
        <p className="text-slate-400 mb-7 text-sm">We adapt to your existing technologies. Tell us what you're using.</p>
        <Link to="/contact" className="btn-glow inline-flex items-center gap-2 px-7 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors">
          Discuss Your Stack <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default Technologies;




