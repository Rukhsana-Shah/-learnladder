// ============================================================
//  STORE SETTINGS — edit these to make the store yours
// ============================================================
const STORE = {
  name: "LearnLadder",
  tagline: "Free roadmaps, AI guides, prompt packs and book summaries — climb one step at a time.",
  currency: "USD",
  contactEmail: "hello@example.com",
};

// ============================================================
//  CATEGORIES
// ============================================================
const CATEGORIES = {
  roadmap: { label: "Course Roadmaps", icon: "🗺️" },
  guide:   { label: "AI How-To Guides", icon: "🤖" },
  prompts: { label: "AI Prompt Packs", icon: "✨" },
  books:   { label: "Book Summaries", icon: "📚" },
};

// ============================================================
//  PRODUCTS — add, remove or edit items here.
//  id:       unique, lowercase, no spaces (used in the page URL)
//  buyUrl:   link to the file, e.g. "downloads/web-dev-roadmap.pdf"
//            (or a Gumroad / Google Drive link)
//            ("#" = file not added yet)
//  price:    0 = free (shows "Download free")
// ============================================================
const PRODUCTS = [
  {
    id: "web-dev-roadmap",
    title: "Web Developer Roadmap 2026",
    category: "roadmap",
    price: 0,
    featured: true,
    summary: "A step-by-step path from zero to job-ready front-end and back-end developer.",
    description:
      "A clear 6-month learning path covering HTML, CSS, JavaScript, React, Node.js and deployment. Each stage lists free resources, practice projects and checkpoints so you always know what to learn next.",
    includes: ["32-page PDF roadmap", "Curated free resource list", "12 portfolio project ideas", "Weekly study planner (Notion + PDF)"],
    format: "PDF + Notion template",
    buyUrl: "#",
  },
  {
    id: "data-science-roadmap",
    title: "Data Science Roadmap",
    category: "roadmap",
    price: 0,
    summary: "Python, statistics, SQL and machine learning — in the right order.",
    description:
      "Stop jumping between tutorials. This roadmap sequences every skill you need for a data analyst or data scientist role, with milestones and mini-projects at each stage.",
    includes: ["28-page PDF roadmap", "Resource list by stage", "8 guided projects", "Interview topic checklist"],
    format: "PDF",
    buyUrl: "#",
  },
  {
    id: "ai-engineer-roadmap",
    title: "AI Engineer Roadmap",
    category: "roadmap",
    price: 0,
    featured: true,
    summary: "Learn to build real apps with LLMs, APIs, RAG and agents.",
    description:
      "A practical path for developers who want to build with AI: working with model APIs, prompt design, retrieval (RAG), tool use, agents, evaluation and shipping to production.",
    includes: ["36-page PDF roadmap", "Starter code links", "10 project briefs", "Glossary of AI terms"],
    format: "PDF",
    buyUrl: "#",
  },
  {
    id: "ai-for-beginners",
    title: "AI for Absolute Beginners",
    category: "guide",
    price: 0,
    summary: "A friendly intro to using AI assistants for everyday work.",
    description:
      "No jargon. Learn what AI assistants can and can't do, how to ask good questions, and 20 everyday tasks you can hand off today — emails, planning, research and more.",
    includes: ["18-page PDF guide", "20 ready-to-use examples", "Do's and don'ts cheat sheet"],
    format: "PDF",
    buyUrl: "#",
  },
  {
    id: "ai-small-business",
    title: "Using AI in Your Small Business",
    category: "guide",
    price: 0,
    featured: true,
    summary: "Save hours each week on marketing, customer service and admin.",
    description:
      "Practical workflows for small business owners: writing product listings, replying to customers, planning social media, summarising documents and building simple automations.",
    includes: ["45-page PDF guide", "15 step-by-step workflows", "Tool comparison table", "Bonus: 50 business prompts"],
    format: "PDF",
    buyUrl: "#",
  },
  {
    id: "marketing-prompts",
    title: "100 Marketing Prompts",
    category: "prompts",
    price: 0,
    summary: "Copy-paste prompts for ads, emails, social posts and landing pages.",
    description:
      "Tested prompts organised by task, each with fill-in-the-blank placeholders and an example output so you know what to expect.",
    includes: ["100 prompts (PDF + Notion)", "Example outputs", "Customisation tips"],
    format: "PDF + Notion",
    buyUrl: "#",
  },
  {
    id: "student-prompts",
    title: "Study Smarter Prompt Pack",
    category: "prompts",
    price: 0,
    summary: "Prompts for note-taking, revision, essay planning and exam prep.",
    description:
      "Turn an AI assistant into a patient tutor. Prompts for explaining hard topics, making flashcards, quizzing yourself and planning essays — without doing the work for you.",
    includes: ["75 prompts", "Weekly study routine template", "Flashcard generator prompt"],
    format: "PDF",
    buyUrl: "#",
  },
  {
    id: "atomic-habits-summary",
    title: "Atomic Habits — Summary",
    category: "books",
    price: 0,
    summary: "Key ideas and action steps from James Clear's bestseller.",
    description:
      "The core framework of the book in 15 minutes: the four laws of behaviour change, habit stacking, environment design and identity-based habits — plus a worksheet to apply them.",
    includes: ["12-page summary", "One-page visual cheat sheet", "Habit tracker worksheet"],
    format: "PDF",
    buyUrl: "#",
  },
  {
    id: "deep-work-summary",
    title: "Deep Work — Summary",
    category: "books",
    price: 0,
    summary: "Cal Newport's rules for focused success in a distracted world.",
    description:
      "The four rules of deep work explained with practical examples, plus a weekly schedule template to protect your focus time.",
    includes: ["10-page summary", "Visual cheat sheet", "Deep work schedule template"],
    format: "PDF",
    buyUrl: "#",
  },
  {
    id: "book-summary-bundle",
    title: "Productivity Book Bundle (5 summaries)",
    category: "books",
    price: 0,
    featured: true,
    summary: "Five essential productivity books, summarised in one download.",
    description:
      "Includes summaries of Atomic Habits, Deep Work, Essentialism, The 4-Hour Workweek and Getting Things Done, each with a cheat sheet and action worksheet.",
    includes: ["5 book summaries", "5 visual cheat sheets", "Combined action workbook"],
    format: "PDF bundle (ZIP)",
    buyUrl: "#",
  },
];
