import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiRedux,
  SiFlutter,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiPrisma,
  SiKubernetes,
  SiVite,
  SiLinux,
  SiSupabase,
  SiJest,
  SiPostman,
} from "react-icons/si";
import {
  HiX,
  HiExternalLink,
  HiCode,
  HiSparkles,
  HiChevronLeft,
  HiChevronRight,
  HiSearch,
} from "react-icons/hi";

export const TECH_DATA = [
  // Frontend
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    icon: FaReact,
    color: "#00d4ff",
    level: 95,
    status: "Expert / Daily Driver",
    experience: "2+ Years",
    tagline: "Modern Declarative UI Architecture",
    description:
      "My primary frontend powerhouse for crafting scalable, component-driven web applications. Deep expertise with Concurrent features, Suspense, custom Hooks, React 18/19 server actions, and high-performance render optimization.",
    features: [
      "Concurrent Mode",
      "Custom Hooks",
      "Virtual DOM",
      "Server Components",
      "State Machines",
    ],
    snippet: `// High-Performance Hook Pattern
export const useRealtimeMetrics = (streamId: string) => {
  const [data, setData] = useState<Metric[]>([]);
  useTransition(() => {
    socket.subscribe(streamId, (event) => {
      setData((prev) => [event, ...prev.slice(0, 50)]);
    });
  });
  return { data };
};`,
    docs: "https://react.dev",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    icon: SiNextdotjs,
    color: "#ffffff",
    level: 92,
    status: "Advanced Specialist",
    experience: "2+ Years",
    tagline: "Enterprise Full-Stack React Framework",
    description:
      "The foundation for production SaaS platforms. Extensive experience with App Router, hybrid rendering (SSR, SSG, ISR), Edge middleware, Server Actions, image/font streaming, and zero-bundle-size server components.",
    features: [
      "App Router",
      "Hybrid SSR/SSG",
      "Edge Runtime",
      "Server Actions",
      "Turbopack",
    ],
    snippet: `// Server Action with optimistic validation
export async function createTeamWorkspace(formData: FormData) {
  'use server';
  const session = await auth();
  if (!session) throw new UnauthorizedError();
  
  const workspace = await db.workspace.create({
    data: { name: formData.get('name'), ownerId: session.user.id }
  });
  revalidatePath('/dashboard');
  return { success: true, id: workspace.id };
}`,
    docs: "https://nextjs.org",
  },

  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
    color: "#38bdf8",
    level: 96,
    status: "Master",
    experience: "2+ Years",
    tagline: "Rapid Precision Design Systems",
    description:
      "My design system tool of choice for building responsive, pixel-perfect, dark-mode and cyberpunk interfaces with custom tokens, arbitrary variants, fluid typography, and glassmorphism styling.",
    features: [
      "Design Tokens",
      "JIT Engine",
      "Dark Mode Architecture",
      "Micro-Interactions",
      "Custom Plugins",
    ],
    snippet: `// Custom glassmorphism utility classes
@layer utilities {
  .glass-card {
    @apply backdrop-blur-xl bg-white/[0.04] border border-white/10 
           shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:border-cyan-400/40;
  }
}`,
    docs: "https://tailwindcss.com",
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Frontend",
    icon: SiJavascript,
    color: "#f7df1e",
    level: 96,
    status: "Master",
    experience: "2+ Years",
    tagline: "Modern Asynchronous Engine Mastery",
    description:
      "Deep understanding of JavaScript runtime internals, V8 optimization, Event Loop phases, Web Workers, Generators, Promises, Closures, and prototype inheritance.",
    features: [
      "Event Loop & Microtasks",
      "Async / Await",
      "Web Workers",
      "Closures & Scopes",
      "Prototypes",
    ],
    snippet: `// Concurrent worker batching
const batchAsync = async (tasks, limit = 5) => {
  const results = [];
  const executing = [];
  for (const task of tasks) {
    const p = Promise.resolve().then(() => task());
    results.push(p);
    if (limit <= tasks.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= limit) await Promise.race(executing);
    }
  }
  return Promise.all(results);
};`,
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },

  {
    id: "redux",
    name: "Redux Toolkit",
    category: "Frontend",
    icon: SiRedux,
    color: "#764abc",
    level: 86,
    status: "Advanced",
    experience: "2+ Years",
    tagline: "Predictable Global State Container",
    description:
      "Architecting resilient state stores for heavy SaaS web applications using RTK Slices, RTK Query cache management, optimistic updates, and custom middleware pipelines.",
    features: [
      "RTK Query",
      "Normalized Slices",
      "Middleware Interceptors",
      "Cache Invalidation",
      "DevTools Debugging",
    ],
    snippet: `export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  tagTypes: ['Projects'],
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => '/projects',
      providesTags: ['Projects'],
    }),
  }),
});`,
    docs: "https://redux-toolkit.js.org",
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    icon: FaNodeJs,
    color: "#22c55e",
    level: 92,
    status: "Expert",
    experience: "2+ Years",
    tagline: "Asynchronous Event-Driven Backend Engines",
    description:
      "Designing low-latency RESTful and WebSocket backends, microservices architectures, stream processing, worker thread concurrency, and secure authorization systems.",
    features: [
      "Event Loop Tuning",
      "Stream Pipelines",
      "Worker Threads",
      "JWT / OAuth2 Auth",
      "Clustered Servers",
    ],
    snippet: `// High-throughput streaming response
import { pipeline } from 'stream/promises';
import { createReadStream } from 'fs';

app.get('/api/telemetry/stream', async (req, res) => {
  res.setHeader('Content-Type', 'application/x-ndjson');
  await pipeline(createReadStream('./events.log'), transformToJson, res);
});`,
    docs: "https://nodejs.org",
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
    color: "#ffffff",
    level: 90,
    status: "Expert",
    experience: "2+ Years",
    tagline: "Battle-Tested Minimalist HTTP Framework",
    description:
      "Structuring clean MVC and domain-driven APIs, middleware chains for rate limiting, input sanitization, security headers (Helmet), and error handling boundaries.",
    features: [
      "Middleware Pipelines",
      "Route Grouping",
      "Error Boundaries",
      "CORS & Rate Limiting",
      "Zod Validation",
    ],
    snippet: `router.post('/checkout', rateLimiter, validate(checkoutSchema), async (req, res, next) => {
  try {
    const order = await orderService.create(req.body, req.user);
    res.status(201).json({ success: true, order });
  } catch (err) {
    next(err);
  }
});`,
    docs: "https://expressjs.com",
  },
  {
    id: "python",
    name: "Python",
    category: "Backend",
    icon: FaPython,
    color: "#facc15",
    level: 86,
    status: "Advanced",
    experience: "2+ Years",
    tagline: "Data Processing, Automation & AI Services",
    description:
      "Developing AI-driven microservices with FastAPI and Django, NLP pipelines, data transformation with Pandas/NumPy, and integration with OpenAI and PyTorch models.",
    features: [
      "FastAPI Async",
      "Pydantic Schemas",
      "NumPy / Pandas",
      "Celery Background Tasks",
      "AI Model Serving",
    ],
    snippet: `@app.post("/api/nlp/analyze", response_model=SentimentResult)
async def analyze_sentiment(payload: TextInput, db: Session = Depends(get_db)):
    embeddings = await model.generate_embedding(payload.text)
    prediction = classifier.predict(embeddings)
    return SentimentResult(score=prediction.score, label=prediction.label)`,
    docs: "https://python.org",
  },

  // Databases
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Databases",
    icon: SiMongodb,
    color: "#10b981",
    level: 90,
    status: "Expert",
    experience: "2+ Years",
    tagline: "Flexible Document Database for Rapid Iteration",
    description:
      "Designing scalable document schemas, compound indexes, multi-stage aggregation pipelines for analytics, and managing replica sets with MongoDB Atlas.",
    features: [
      "Aggregation Pipeline",
      "Compound Indexes",
      "Atlas Search",
      "Change Streams",
      "Replica Sets",
    ],
    snippet: `// Aggregation pipeline for user productivity metrics
db.tasks.aggregate([
  { $match: { teamId: ObjectId(teamId), completed: true } },
  { $group: { _id: "$assignedTo", total: { $sum: 1 }, avgHours: { $avg: "$hours" } } },
  { $sort: { total: -1 } },
  { $limit: 10 }
]);`,
    docs: "https://mongodb.com",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Databases",
    icon: SiPostgresql,
    color: "#336791",
    level: 88,
    status: "Advanced",
    experience: "1.5+ Years",
    tagline: "Robust Relational Integrity & Advanced Querying",
    description:
      "Relational schema design, ACID transactions, complex JOIN optimization, JSONB indexing for hybrid models, row-level security (RLS), and database migrations.",
    features: [
      "ACID Transactions",
      "JSONB Querying",
      "Foreign Keys & Constraints",
      "EXPLAIN ANALYZE",
      "Connection Pooling",
    ],
    snippet: `CREATE TABLE user_workspaces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(32) NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX idx_workspace_user ON user_workspaces(user_id);`,
    docs: "https://postgresql.org",
  },

  // Cloud & DevOps

  {
    id: "git",
    name: "Git & GitHub Actions",
    category: "Cloud & DevOps",
    icon: FaGitAlt,
    color: "#f05032",
    level: 94,
    status: "Master",
    experience: "1+ Years",
    tagline: "Version Control & Automated CI/CD Pipelines",
    description:
      "Git Flow workflows, interactive rebasing, automated testing and deployment pipelines with GitHub Actions, branch protection rules, and semantic versioning.",
    features: [
      "GitHub Actions CI/CD",
      "Interactive Rebase",
      "Release Automation",
      "PR Code Reviews",
      "Semantic Versioning",
    ],
    snippet: `name: CI/CD Pipeline
on: [push, pull_request]
jobs:
  test-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm test && npm run build`,
    docs: "https://git-scm.com",
  },

  {
    id: "postman",
    name: "Postman",
    category: "Tools & Testing",
    icon: SiPostman,
    color: "#ff6c37",
    level: 90,
    status: "Advanced",
    experience: "1+ Years",
    tagline: "API Prototyping, Mocking & Automated Collections",
    description:
      "Writing automated API test assertions, managing multi-environment variables (local, staging, prod), generating mock servers, and publishing OpenAPI documentation.",
    features: [
      "Automated Test Scripts",
      "Environment Variables",
      "Mock Servers",
      "OpenAPI Export",
      "Collection Runners",
    ],

    snippet: `// Postman collection test script
pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});
pm.test("Response contains valid auth token", function () {
    const json = pm.response.json();
    pm.expect(json.token).to.be.a('string');
});`,
    docs: "https://postman.com",
  },
];

const CATEGORIES = [
  "All Tech",
  "Frontend",
  "Backend",
  "Databases",
  "Cloud & DevOps",
  "Tools & Testing",
];

const TechStackExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Tech");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTech, setActiveTech] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveTech(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredTechs = TECH_DATA.filter((tech) => {
    const matchesCategory =
      selectedCategory === "All Tech" || tech.category === selectedCategory;
    const matchesSearch =
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.features.some((f) =>
        f.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const currentIndex = activeTech
    ? TECH_DATA.findIndex((t) => t.id === activeTech.id)
    : -1;

  const handlePrevTech = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setActiveTech(TECH_DATA[currentIndex - 1]);
    } else {
      setActiveTech(TECH_DATA[TECH_DATA.length - 1]);
    }
  };

  const handleNextTech = (e) => {
    e.stopPropagation();
    if (currentIndex < TECH_DATA.length - 1) {
      setActiveTech(TECH_DATA[currentIndex + 1]);
    } else {
      setActiveTech(TECH_DATA[0]);
    }
  };

  return (
    <section
      id="tech-stack"
      className="py-24 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#00d4ff]/08 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 rounded-full bg-[#7c3aed]/12 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-mono uppercase tracking-widest mb-4">
            <HiSparkles className="text-[#00ff88]" />
            Interactive Tech Ecosystem
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            My <span className="gradient-text">Tech Stack</span> & Architecture
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Click on any technology icon below to open its detailed
            specification card, implementation architecture, and code samples.
          </p>

          {/* Search & Category Filter Controls */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-md ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white shadow-[0_0_20px_rgba(0,212,255,0.4)] scale-105"
                      : "bg-white/5 text-gray-400 border border-white/10 hover:border-[#00d4ff]/40 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Quick Filter Search */}
            <div className="relative w-full md:w-64">
              <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search tech, tool..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/15 rounded-xl text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff] focus:shadow-[0_0_12px_rgba(0,212,255,0.3)] transition-all"
              />
            </div>
          </div>
        </motion.div>

        {/* Tech Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
          <AnimatePresence>
            {filteredTechs.map((tech, index) => {
              const TechIcon = tech.icon;
              const isSelected = activeTech?.id === tech.id;

              return (
                <motion.div
                  key={tech.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.25,
                    delay: Math.min(index * 0.02, 0.3),
                  }}
                  onClick={() => setActiveTech(tech)}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative group cursor-pointer rounded-2xl px-5 py-4 backdrop-blur-xl border transition-all duration-300 flex flex-col items-center text-center select-none overflow-hidden ${
                    isSelected
                      ? "bg-white/[0.12] border-[#00d4fd] shadow-[0_0_30px_rgba(0,212,255,0.4)]"
                      : "bg-white/[0.03] border-white/10 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                  }`}
                  style={{
                    borderTop: `3px solid ${tech.color}`,
                  }}
                >
                  {/* Subtle hover background glow */}
                  <div
                    className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 pointer-events-none"
                    style={{ background: tech.color }}
                  />

                  {/* Icon Box */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-3.5 transition-transform duration-300 group-hover:scale-110 shadow-md"
                    style={{
                      background: `radial-gradient(circle at 35% 30%, ${tech.color}25, rgba(15, 15, 25, 0.8))`,
                      border: `1px solid ${tech.color}44`,
                      color: tech.color,
                      boxShadow: `0 4px 20px ${tech.color}22`,
                    }}
                  >
                    <TechIcon />
                  </div>

                  {/* Tech Name */}
                  <h3 className="font-semibold text-white text-sm tracking-wide group-hover:text-[#00d4ff] transition-colors">
                    {tech.name}
                  </h3>

                  {/* Category / Experience Subtitle */}
                  <span className="text-[11px] font-mono text-gray-400 mt-1">
                    {tech.experience}
                  </span>

                  {/* Click to open badge indicator */}
                  <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-[#00ff88] opacity-70 group-hover:opacity-100 transition-opacity">
                    <span>Inspect</span>
                    <span>↗</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredTechs.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">
              No technologies found matching "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Tech");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-white/10 text-white text-sm hover:bg-white/20 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* POPUP DETAIL CARD MODAL (Opens when clicking any tech icon) */}
      <AnimatePresence>
        {activeTech && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveTech(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto bg-[#0d111a] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-10"
              style={{
                borderTop: `4px solid ${activeTech.color}`,
                boxShadow: `0 0 50px ${activeTech.color}25, 0 25px 60px rgba(0,0,0,0.85)`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar: Category, Navigators, Close Button */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full animate-pulse"
                    style={{ background: activeTech.color }}
                  />
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                    {activeTech.category} Tech Specification
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Previous Icon */}
                  <button
                    onClick={handlePrevTech}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-all"
                    title="Previous technology"
                  >
                    <HiChevronLeft className="text-lg" />
                  </button>
                  {/* Next Icon */}
                  <button
                    onClick={handleNextTech}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-all"
                    title="Next technology"
                  >
                    <HiChevronRight className="text-lg" />
                  </button>
                  {/* Close Modal */}
                  <button
                    onClick={() => setActiveTech(null)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-all ml-1"
                    title="Close card (Esc)"
                  >
                    <HiX className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Header: Icon, Name, Tagline & Level */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-4xl p-4 shadow-xl shrink-0"
                    style={{
                      background: `radial-gradient(circle at 35% 30%, ${activeTech.color}33, rgba(10, 10, 25, 0.9))`,
                      border: `1.5px solid ${activeTech.color}77`,
                      color: activeTech.color,
                      boxShadow: `0 0 30px ${activeTech.color}35`,
                    }}
                  >
                    <activeTech.icon />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                      {activeTech.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-mono mt-1">
                      {activeTech.tagline}
                    </p>
                  </div>
                </div>

                {/* Level / Status Pill */}
                <div className="sm:text-right bg-black/40 p-3 rounded-2xl border border-white/5 shrink-0">
                  <div className="text-[11px] font-mono text-gray-400 uppercase">
                    Proficiency
                  </div>
                  <div className="text-lg font-bold text-white flex items-center gap-2 sm:justify-end">
                    <span style={{ color: activeTech.color }}>
                      {activeTech.level}%
                    </span>
                    <span className="text-xs text-gray-400 font-normal">
                      ({activeTech.status})
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 font-mono mt-0.5">
                    Experience:{" "}
                    <span className="text-gray-300">
                      {activeTech.experience}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar Meter */}
              <div className="w-full bg-gray-900 rounded-full h-2 mb-6 overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${activeTech.level}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, #00d4ff, ${activeTech.color})`,
                    boxShadow: `0 0 10px ${activeTech.color}`,
                  }}
                />
              </div>

              {/* Overview Description */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Architectural Role & Capability
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  {activeTech.description}
                </p>
              </div>

              {/* Core Features / Concepts Badges */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2.5">
                  Specialized Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeTech.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-gray-200 flex items-center gap-1.5"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: activeTech.color }}
                      />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code Snippet / Production Implementation Showcase */}
              {activeTech.snippet && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                      <HiCode className="text-[#00ff88]" />
                      Implementation Syntax Sample
                    </h4>
                    <span className="text-[11px] font-mono text-gray-500">
                      Production Pattern
                    </span>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60 font-mono text-xs p-4 text-gray-200 overflow-x-auto leading-relaxed shadow-inner">
                    <pre>
                      <code>{activeTech.snippet}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Footer: Projects Used & Docs Link */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono text-gray-400">
                    Featured in:
                  </span>
                  {/* {activeTech.projects.map((proj) => (
                    <span
                      key={proj}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30"
                    >
                      {proj}
                    </span>
                  ))} */}
                </div>

                <a
                  href={activeTech.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium text-white transition-all shadow-md active:scale-95 shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${activeTech.color}88, #7c3aed)`,
                  }}
                >
                  <span>Official Docs</span>
                  <HiExternalLink />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TechStackExplorer;
