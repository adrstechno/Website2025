import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar, FiClock, FiTag } from "react-icons/fi";

const posts = [
  {
    slug: "#",
    category: "AI & Automation",
    title: "How AI Automation is Transforming Back-Office Operations in 2025",
    excerpt: "Discover how companies are using LLMs, RPA, and intelligent agents to automate repetitive tasks and reduce operational costs by up to 60%.",
    author: "ADRS Team",
    date: "May 15, 2025",
    readTime: "6 min read",
    color: "from-blue-600/20 to-indigo-600/20",
  },
  {
    slug: "#",
    category: "Web Development",
    title: "Next.js 14 vs. Remix: Which Should You Choose for Your SaaS in 2025?",
    excerpt: "A deep technical comparison of Next.js 14 and Remix for building modern, scalable SaaS applications — performance, DX, and ecosystem.",
    author: "ADRS Team",
    date: "May 8, 2025",
    readTime: "8 min read",
    color: "from-cyan-600/20 to-blue-600/20",
  },
  {
    slug: "#",
    category: "Hiring",
    title: "Why More Startups Are Choosing Offshore Dedicated Development Teams",
    excerpt: "The economics, productivity, and quality realities of building remote engineering teams in 2025 — and how to do it right.",
    author: "ADRS Team",
    date: "April 30, 2025",
    readTime: "5 min read",
    color: "from-purple-600/20 to-pink-600/20",
  },
  {
    slug: "#",
    category: "Mobile",
    title: "Flutter 3.x: Building Production-Ready Apps That Feel Native",
    excerpt: "A practical guide to building high-performance mobile apps with Flutter, including state management, animations, and platform integration.",
    author: "ADRS Team",
    date: "April 22, 2025",
    readTime: "7 min read",
    color: "from-indigo-600/20 to-purple-600/20",
  },
  {
    slug: "#",
    category: "BPO",
    title: "5 Signs Your Business Needs a BPO Partner (Not Just a Freelancer)",
    excerpt: "When scaling support operations, knowing when to hire a BPO vs. freelancers can save you time, money, and customer satisfaction headaches.",
    author: "ADRS Team",
    date: "April 15, 2025",
    readTime: "4 min read",
    color: "from-green-600/20 to-cyan-600/20",
  },
  {
    slug: "#",
    category: "Cloud",
    title: "AWS vs. GCP for Startups: A Cost-Aware Architecture Guide",
    excerpt: "Choosing a cloud provider is one of the most consequential startup decisions. Here's our honest, cost-focused comparison for 2025.",
    author: "ADRS Team",
    date: "April 5, 2025",
    readTime: "9 min read",
    color: "from-yellow-600/20 to-orange-600/20",
  },
];

const Blog = () => (
  <div className="bg-[#08090B] min-h-screen">
    {/* Hero */}
    <section className="pt-24 pb-16 text-center" style={{ background: "linear-gradient(180deg, #0B0D12 0%, #08090B 100%)" }}>
      <div className="max-w-2xl mx-auto px-6">
        <span className="section-label mb-4 inline-flex">Insights</span>
        <h1 className="text-5xl font-extrabold font-display text-white mb-4">
          The ADRS <span className="gradient-text">Blog</span>
        </h1>
        <p className="text-slate-400 text-lg">
          Expert insights on software development, AI, hiring, and building scalable digital products.
        </p>
      </div>
    </section>

    {/* Posts grid */}
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 pb-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
      >
        {posts.map((post, i) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <a href={post.slug} className="group block h-full">
              <div
                className={`bg-gradient-to-br ${post.color} p-7 rounded-xl h-full card-lift flex flex-col`}
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-widest text-blue-400 px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                  >
                    {post.category}
                  </span>
                </div>
                <h2 className="text-lg font-bold font-display text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug flex-1">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t mt-auto"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><FiCalendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><FiClock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <FiArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      <p className="text-center text-slate-500 mt-12 text-sm">
        More articles coming soon. Follow us on{" "}
        <a href="https://www.linkedin.com/company/adrs-technology/" target="_blank" rel="noreferrer noopener" className="text-blue-400 hover:text-blue-300 transition-colors">LinkedIn</a>{" "}
        for updates.
      </p>
    </div>
  </div>
);

export default Blog;



