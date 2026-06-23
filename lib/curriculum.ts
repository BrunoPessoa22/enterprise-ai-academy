// Enterprise AI Academy — curriculum data
// Consumed by the Next.js prototype. All content is hand-curated executive-education
// material organized on the Diagnose -> Personalize -> Scale methodology.

export type ResourceType = 'article' | 'video' | 'tool' | 'paper' | 'template' | 'docs'

export interface Resource {
  label: string
  url: string
  type: ResourceType
  source: string
}

export interface VideoLesson {
  title: string
  durationMin: number
  description: string
}

export interface Exercise {
  title: string
  prompt: string
  deliverable: string
  estMinutes: number
  rubric: string[]
}

export interface LiveSession {
  title: string
  description: string
  cadence: string
}

export interface Week {
  id: string
  index: number
  title: string
  theme: string
  phase: 'Diagnose' | 'Personalize' | 'Scale'
  summary: string
  objectives: string[]
  videos: VideoLesson[]
  readings: Resource[]
  exercise: Exercise
  liveSession?: LiveSession
}

export interface ProgramPhase {
  name: 'Diagnose' | 'Personalize' | 'Scale'
  tagline: string
  weeks: string
}

export interface Program {
  slug: string
  name: string
  durationLabel: string
  weekCount: number
  level: 'Foundations' | 'Applied' | 'Advanced' | 'Transformation'
  audience: string
  outcome: string
  heroSummary: string
  tags: string[]
  phases: ProgramPhase[]
  weeks: Week[]
}

// --- Shared reusable resources (real, stable public URLs) ---

const R = {
  promptOverview: {
    label: 'Prompt engineering overview',
    url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview',
    type: 'docs' as ResourceType,
    source: 'Anthropic',
  },
  promptBestPractices: {
    label: 'Be clear, direct, and detailed',
    url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct',
    type: 'docs' as ResourceType,
    source: 'Anthropic',
  },
  fewShot: {
    label: 'Multishot prompting with examples',
    url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting',
    type: 'docs' as ResourceType,
    source: 'Anthropic',
  },
  chainOfThought: {
    label: 'Let Claude think (chain of thought)',
    url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought',
    type: 'docs' as ResourceType,
    source: 'Anthropic',
  },
  systemPrompts: {
    label: 'Giving Claude a role with system prompts',
    url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts',
    type: 'docs' as ResourceType,
    source: 'Anthropic',
  },
  toolUse: {
    label: 'Tool use with Claude',
    url: 'https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview',
    type: 'docs' as ResourceType,
    source: 'Anthropic',
  },
  buildingAgents: {
    label: 'Building effective agents',
    url: 'https://www.anthropic.com/research/building-effective-agents',
    type: 'article' as ResourceType,
    source: 'Anthropic',
  },
  contextWindows: {
    label: 'Context windows and long-context tips',
    url: 'https://docs.anthropic.com/en/docs/build-with-claude/context-windows',
    type: 'docs' as ResourceType,
    source: 'Anthropic',
  },
  mcp: {
    label: 'Model Context Protocol introduction',
    url: 'https://modelcontextprotocol.io/introduction',
    type: 'docs' as ResourceType,
    source: 'Model Context Protocol',
  },
  openaiPrompting: {
    label: 'Prompt engineering guide',
    url: 'https://platform.openai.com/docs/guides/prompt-engineering',
    type: 'docs' as ResourceType,
    source: 'OpenAI',
  },
  openaiEmbeddings: {
    label: 'Embeddings guide',
    url: 'https://platform.openai.com/docs/guides/embeddings',
    type: 'docs' as ResourceType,
    source: 'OpenAI',
  },
  openaiFunctions: {
    label: 'Function calling guide',
    url: 'https://platform.openai.com/docs/guides/function-calling',
    type: 'docs' as ResourceType,
    source: 'OpenAI',
  },
  dlaiPromptCourse: {
    label: 'ChatGPT Prompt Engineering for Developers',
    url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/',
    type: 'video' as ResourceType,
    source: 'DeepLearning.AI',
  },
  dlaiRag: {
    label: 'Building and Evaluating Advanced RAG',
    url: 'https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/',
    type: 'video' as ResourceType,
    source: 'DeepLearning.AI',
  },
  dlaiFunctions: {
    label: 'Functions, Tools and Agents with LangChain',
    url: 'https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/',
    type: 'video' as ResourceType,
    source: 'DeepLearning.AI',
  },
  hbrAugment: {
    label: 'How Generative AI Can Augment Human Creativity',
    url: 'https://hbr.org/2023/07/how-generative-ai-can-augment-human-creativity',
    type: 'article' as ResourceType,
    source: 'Harvard Business Review',
  },
  hbrStrategy: {
    label: 'A Better Way to Put Your Data to Work',
    url: 'https://hbr.org/2023/07/a-better-way-to-put-your-data-to-work',
    type: 'article' as ResourceType,
    source: 'Harvard Business Review',
  },
  hbrChange: {
    label: 'Leading Change: Why Transformation Efforts Fail',
    url: 'https://hbr.org/2007/01/leading-change-why-transformation-efforts-fail',
    type: 'article' as ResourceType,
    source: 'Harvard Business Review',
  },
  mitWorkforce: {
    label: 'Building the AI-Powered Organization',
    url: 'https://sloanreview.mit.edu/article/why-becoming-a-data-driven-organization-is-so-hard/',
    type: 'article' as ResourceType,
    source: 'MIT Sloan Management Review',
  },
  mitCulture: {
    label: 'The Cultural Benefits of Artificial Intelligence in the Enterprise',
    url: 'https://sloanreview.mit.edu/projects/the-cultural-benefits-of-artificial-intelligence-in-the-enterprise/',
    type: 'article' as ResourceType,
    source: 'MIT Sloan Management Review',
  },
  mckEconomic: {
    label: 'The economic potential of generative AI',
    url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier',
    type: 'article' as ResourceType,
    source: 'McKinsey',
  },
  mckState: {
    label: 'The state of AI in early 2024',
    url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
    type: 'article' as ResourceType,
    source: 'McKinsey',
  },
  mckAdoption: {
    label: 'Moving past gen AI\'s honeymoon phase',
    url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/moving-past-gen-ais-honeymoon-phase-seven-hard-truths-for-cios-to-get-from-pilot-to-scale',
    type: 'article' as ResourceType,
    source: 'McKinsey',
  },
  a16zEnterprise: {
    label: '16 Changes to the Way Enterprises Are Building AI',
    url: 'https://a16z.com/16-changes-to-the-way-enterprises-are-building-and-buying-generative-ai/',
    type: 'article' as ResourceType,
    source: 'a16z',
  },
  a16zStack: {
    label: 'Emerging Architectures for LLM Applications',
    url: 'https://a16z.com/emerging-architectures-for-llm-applications/',
    type: 'article' as ResourceType,
    source: 'a16z',
  },
  arxivGpt3: {
    label: 'Language Models are Few-Shot Learners (GPT-3)',
    url: 'https://arxiv.org/abs/2005.14165',
    type: 'paper' as ResourceType,
    source: 'arXiv',
  },
  arxivAttention: {
    label: 'Attention Is All You Need',
    url: 'https://arxiv.org/abs/1706.03762',
    type: 'paper' as ResourceType,
    source: 'arXiv',
  },
  arxivRag: {
    label: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP',
    url: 'https://arxiv.org/abs/2005.11401',
    type: 'paper' as ResourceType,
    source: 'arXiv',
  },
  arxivReact: {
    label: 'ReAct: Synergizing Reasoning and Acting in Language Models',
    url: 'https://arxiv.org/abs/2210.03629',
    type: 'paper' as ResourceType,
    source: 'arXiv',
  },
  arxivCot: {
    label: 'Chain-of-Thought Prompting Elicits Reasoning',
    url: 'https://arxiv.org/abs/2201.11903',
    type: 'paper' as ResourceType,
    source: 'arXiv',
  },
  googleResponsible: {
    label: 'Google AI Principles',
    url: 'https://ai.google/responsibility/principles/',
    type: 'article' as ResourceType,
    source: 'Google AI',
  },
  nistRmf: {
    label: 'AI Risk Management Framework',
    url: 'https://www.nist.gov/itl/ai-risk-management-framework',
    type: 'docs' as ResourceType,
    source: 'NIST',
  },
  claudeProduct: {
    label: 'Claude (claude.ai)',
    url: 'https://claude.ai',
    type: 'tool' as ResourceType,
    source: 'Anthropic',
  },
  chatgptProduct: {
    label: 'ChatGPT',
    url: 'https://chatgpt.com',
    type: 'tool' as ResourceType,
    source: 'OpenAI',
  },
  geminiProduct: {
    label: 'Gemini',
    url: 'https://gemini.google.com',
    type: 'tool' as ResourceType,
    source: 'Google',
  },
}

// =====================================================================
// PROGRAM 1 — AI Foundations (6 weeks)
// =====================================================================

const foundations: Program = {
  slug: '6-week-foundations',
  name: 'AI Foundations',
  durationLabel: 'Weeks: 6',
  weekCount: 6,
  level: 'Foundations',
  audience: 'All employees who are new to AI and want practical literacy and confidence with everyday AI tools.',
  outcome: 'Learners move from AI-curious to AI-capable, using assistants daily to save measurable time on real tasks.',
  heroSummary:
    'A six-week on-ramp to generative AI for the whole workforce. Build a clear mental model of how these tools work, learn to prompt with precision, and convert that literacy into weekly time savings on the tasks you already own.',
  tags: ['AI literacy', 'Prompting', 'Productivity', 'Workforce enablement'],
  phases: [
    { name: 'Diagnose', tagline: 'Understand what AI is and where it fits your work', weeks: 'Weeks 1-2' },
    { name: 'Personalize', tagline: 'Build hands-on prompting skill for your own tasks', weeks: 'Weeks 3-4' },
    { name: 'Scale', tagline: 'Make AI a daily, responsible habit', weeks: 'Weeks 5-6' },
  ],
  weeks: [
    {
      id: 'w1',
      index: 1,
      title: 'What AI Actually Is',
      theme: 'Demystifying generative AI',
      phase: 'Diagnose',
      summary:
        'Replace hype and fear with an accurate mental model. You will learn what a large language model does, what it cannot do, and why it sometimes sounds confident while being wrong.',
      objectives: [
        'Explain in plain language how a language model generates text',
        'Distinguish generative AI from traditional software and search',
        'Identify the three most common failure modes: hallucination, staleness, and bias',
        'Name three tasks in your own role where AI could plausibly help',
      ],
      videos: [
        { title: 'From Autocomplete to Assistant', durationMin: 11, description: 'How prediction over text became a general-purpose work tool.' },
        { title: 'Why AI Hallucinates', durationMin: 9, description: 'A non-technical explanation of confident wrong answers and how to catch them.' },
        { title: 'Tour of the Major Assistants', durationMin: 14, description: 'A guided comparison of Claude, ChatGPT, and Gemini for everyday work.' },
      ],
      readings: [
        R.mckEconomic,
        R.hbrAugment,
        R.claudeProduct,
        R.googleResponsible,
      ],
      exercise: {
        title: 'First Conversation Journal',
        prompt:
          'Pick one AI assistant and hold five short conversations about tasks from your actual job this week. After each, note what was useful, what was wrong, and how you verified it. Treat the assistant as a capable but unreliable junior colleague.',
        deliverable: 'A one-page journal with five logged interactions and a short reflection on where the tool helped and where it failed.',
        estMinutes: 60,
        rubric: [
          'Five genuine, work-relevant interactions are documented',
          'Each entry notes at least one limitation or error observed',
          'Reflection shows a realistic mental model, not hype or dismissal',
          'At least one verification step is described',
        ],
      },
    },
    {
      id: 'w2',
      index: 2,
      title: 'Mapping AI to Your Work',
      theme: 'Finding your first use cases',
      phase: 'Diagnose',
      summary:
        'Inventory your recurring tasks and score them for AI suitability. The goal is to find the handful of repetitive, language-heavy activities where AI delivers the fastest wins.',
      objectives: [
        'Audit a typical week and categorize tasks by AI suitability',
        'Apply a simple frequency-by-impact lens to prioritize use cases',
        'Recognize tasks where AI is risky or inappropriate',
        'Select two candidate tasks to focus on for the rest of the program',
      ],
      videos: [
        { title: 'The Task Audit Method', durationMin: 12, description: 'A repeatable way to find which of your tasks are good AI candidates.' },
        { title: 'Good Fit vs Bad Fit', durationMin: 8, description: 'Patterns that signal a task is or is not suited to a language model.' },
      ],
      readings: [
        R.mckState,
        R.hbrStrategy,
        R.mitCulture,
      ],
      exercise: {
        title: 'Personal AI Opportunity Map',
        prompt:
          'List every recurring task from a representative week. Score each on frequency and time cost, then mark which are language-heavy enough for AI to help. Choose the two highest-value candidates to carry forward.',
        deliverable: 'A task table with scores and two highlighted target use cases with a one-line justification each.',
        estMinutes: 50,
        rubric: [
          'A realistic week of recurring tasks is captured',
          'Frequency and impact scoring is applied consistently',
          'At least one poor-fit task is identified and explained',
          'Two prioritized use cases are clearly justified',
        ],
      },
      liveSession: {
        title: 'Cohort Kickoff and Use-Case Clinic',
        description: 'Learners present their opportunity maps in small groups and pressure-test each other\'s chosen use cases with a facilitator.',
        cadence: 'Week 2 - Live cohort call',
      },
    },
    {
      id: 'w3',
      index: 3,
      title: 'Prompting Fundamentals',
      theme: 'Asking well to get well',
      phase: 'Personalize',
      summary:
        'Learn the core moves of effective prompting: clear instructions, context, role, and format. You will rewrite weak prompts into strong ones and see the difference in output quality.',
      objectives: [
        'Write prompts that specify task, context, audience, and output format',
        'Use a role or persona to steer tone and expertise',
        'Iterate on a prompt rather than accepting the first answer',
        'Build a small reusable library of personal prompts',
      ],
      videos: [
        { title: 'Anatomy of a Strong Prompt', durationMin: 13, description: 'The four ingredients that consistently raise output quality.' },
        { title: 'Before and After: Rewriting Weak Prompts', durationMin: 10, description: 'Live rewrites that turn vague requests into precise ones.' },
        { title: 'Iterating Toward the Answer', durationMin: 7, description: 'How to refine a response through follow-up rather than starting over.' },
      ],
      readings: [
        R.promptOverview,
        R.promptBestPractices,
        R.openaiPrompting,
        R.dlaiPromptCourse,
      ],
      exercise: {
        title: 'Prompt Rewrite Workshop',
        prompt:
          'Take three vague prompts you used last week and rewrite each using task, context, audience, and format. Run both versions and capture the outputs side by side. Note which improvements mattered most.',
        deliverable: 'A document showing three before/after prompt pairs with sample outputs and a short note on what changed quality.',
        estMinutes: 55,
        rubric: [
          'Each rewrite adds explicit context, audience, and format',
          'Outputs are compared, not just prompts',
          'Improvements are attributed to specific prompt changes',
          'At least one prompt is saved as a reusable template',
        ],
      },
    },
    {
      id: 'w4',
      index: 4,
      title: 'Working With Your Documents',
      theme: 'Grounding AI in real context',
      phase: 'Personalize',
      summary:
        'Move beyond blank-page prompting. Learn to paste, attach, and summarize your own material so the assistant works from your reality, and learn the verification habits that keep you safe.',
      objectives: [
        'Summarize, extract, and reformat your own documents reliably',
        'Provide context safely without exposing confidential data',
        'Verify factual claims against the source you supplied',
        'Use AI to draft, then edit, rather than to publish unchecked',
      ],
      videos: [
        { title: 'Bring Your Own Context', durationMin: 12, description: 'Techniques for feeding documents and getting grounded answers.' },
        { title: 'The Verify-Before-You-Trust Habit', durationMin: 9, description: 'A lightweight checklist for catching errors before they ship.' },
      ],
      readings: [
        R.fewShot,
        R.contextWindows,
        R.hbrAugment,
        R.nistRmf,
      ],
      exercise: {
        title: 'Document Workflow Build',
        prompt:
          'Choose one of your two target use cases and run it end to end with a real document: supply context, generate a draft, then verify and edit it. Track how long the AI-assisted version took versus your usual approach.',
        deliverable: 'A finished work artifact plus a short before/after time comparison and a list of edits you had to make.',
        estMinutes: 60,
        rubric: [
          'A real document is used as grounded context',
          'A usable artifact is produced and edited, not published raw',
          'A time comparison versus the manual baseline is recorded',
          'Verification steps and corrections are documented',
        ],
      },
    },
    {
      id: 'w5',
      index: 5,
      title: 'Using AI Responsibly',
      theme: 'Safety, privacy, and judgment',
      phase: 'Scale',
      summary:
        'Understand the boundaries: what data you can share, when to disclose AI assistance, and how to keep accountability with the human. You will leave with a personal usage policy you can defend.',
      objectives: [
        'Apply your organization\'s data and confidentiality rules to AI use',
        'Recognize bias and fairness risks in AI output',
        'Decide when human review is mandatory before action',
        'Disclose AI assistance appropriately to colleagues and clients',
      ],
      videos: [
        { title: 'What You Can and Cannot Share', durationMin: 11, description: 'A practical guide to data sensitivity when prompting.' },
        { title: 'Bias, Fairness, and Accountability', durationMin: 13, description: 'How errors and bias show up and where human judgment must stay.' },
      ],
      readings: [
        R.googleResponsible,
        R.nistRmf,
        R.mitCulture,
        R.mckAdoption,
      ],
      exercise: {
        title: 'Personal AI Usage Policy',
        prompt:
          'Draft a one-page personal policy covering what you will and will not share with AI tools, when human review is required, and how you will disclose AI assistance. Ground it in your organization\'s actual rules.',
        deliverable: 'A one-page personal AI usage policy you could share with your manager.',
        estMinutes: 45,
        rubric: [
          'Clear rules on data sensitivity and confidentiality',
          'Defined triggers for mandatory human review',
          'A disclosure approach appropriate to your role',
          'Policy is grounded in real organizational constraints',
        ],
      },
      liveSession: {
        title: 'Responsible AI Roundtable',
        description: 'A facilitated discussion of real grey-area scenarios where learners debate the right call and refine their personal policies.',
        cadence: 'Week 5 - Live cohort call',
      },
    },
    {
      id: 'w6',
      index: 6,
      title: 'Making It a Habit',
      theme: 'From course to daily practice',
      phase: 'Scale',
      summary:
        'Consolidate everything into a sustainable daily practice. You will assemble a personal prompt library, set a weekly routine, and demonstrate measurable time saved on a real task.',
      objectives: [
        'Assemble a curated personal prompt library for recurring tasks',
        'Establish a weekly routine that keeps AI use top of mind',
        'Quantify time saved on at least one recurring task',
        'Share one reusable prompt or workflow with a teammate',
      ],
      videos: [
        { title: 'Building Your Prompt Library', durationMin: 10, description: 'How to organize and reuse the prompts that work for you.' },
        { title: 'Habits That Stick', durationMin: 8, description: 'Routines that keep AI adoption alive after the course ends.' },
      ],
      readings: [
        R.mckEconomic,
        R.hbrAugment,
        R.dlaiPromptCourse,
      ],
      exercise: {
        title: 'Capstone: My AI Productivity Kit',
        prompt:
          'Assemble a personal AI productivity kit: a library of at least eight tested prompts for your recurring tasks, a short weekly routine, and a measured result showing time saved on one task. Present it as something a colleague could adopt.',
        deliverable: 'A capstone packet containing a prompt library, a weekly routine, and a documented time-saving result for one task.',
        estMinutes: 90,
        rubric: [
          'At least eight tested, well-documented prompts are included',
          'A realistic weekly routine for sustained use is defined',
          'A measured time-saving result is shown with method',
          'The kit is clear enough for a colleague to adopt',
        ],
      },
    },
  ],
}

// =====================================================================
// PROGRAM 2 — Applied AI for Teams (9 weeks)
// =====================================================================

const applied: Program = {
  slug: '9-week-applied-ai',
  name: 'Applied AI for Teams',
  durationLabel: 'Weeks: 9',
  weekCount: 9,
  level: 'Applied',
  audience: 'Team leads and individual contributors who want to apply AI to real workflows and automate routine work.',
  outcome: 'Learners ship at least one automated or AI-augmented workflow that measurably improves their team\'s output.',
  heroSummary:
    'A nine-week applied program that turns AI literacy into operating leverage. You will master advanced prompting, design AI into a real workflow, connect tools and automation, and measure the impact on your team.',
  tags: ['Prompt engineering', 'Workflow automation', 'Team productivity', 'Measurement'],
  phases: [
    { name: 'Diagnose', tagline: 'Map workflows and baseline performance', weeks: 'Weeks 1-3' },
    { name: 'Personalize', tagline: 'Master prompting, tools, and automation', weeks: 'Weeks 4-6' },
    { name: 'Scale', tagline: 'Deploy, measure, and embed in the team', weeks: 'Weeks 7-9' },
  ],
  weeks: [
    {
      id: 'w1',
      index: 1,
      title: 'From Tasks to Workflows',
      theme: 'Systems thinking for AI',
      phase: 'Diagnose',
      summary:
        'Shift from one-off prompts to thinking in workflows. You will map an end-to-end process your team runs and identify where AI can absorb effort without breaking accountability.',
      objectives: [
        'Diagram a real team workflow as a sequence of inputs, steps, and outputs',
        'Locate the language-heavy and repetitive steps in that workflow',
        'Distinguish steps to automate from steps that need human judgment',
        'Frame an AI opportunity as a workflow improvement, not a tool',
      ],
      videos: [
        { title: 'Thinking in Workflows', durationMin: 12, description: 'Why process mapping beats tool shopping when adopting AI.' },
        { title: 'Where AI Belongs in a Process', durationMin: 10, description: 'Identifying the steps where AI adds leverage versus risk.' },
      ],
      readings: [
        R.mckState,
        R.hbrStrategy,
        R.a16zEnterprise,
      ],
      exercise: {
        title: 'Workflow Map and Opportunity Scan',
        prompt:
          'Choose one workflow your team runs regularly and map it step by step. Mark each step for AI suitability and pick the single step where AI would create the most leverage. Write a one-paragraph opportunity statement.',
        deliverable: 'A workflow diagram with AI-suitability annotations and a one-paragraph opportunity statement.',
        estMinutes: 60,
        rubric: [
          'Workflow is mapped end to end with clear steps',
          'Each step is assessed for AI suitability',
          'A single highest-leverage step is selected with rationale',
          'Opportunity statement frames a measurable improvement',
        ],
      },
    },
    {
      id: 'w2',
      index: 2,
      title: 'Baselining Performance',
      theme: 'Measure before you change',
      phase: 'Diagnose',
      summary:
        'You cannot prove impact without a baseline. This week you instrument the chosen workflow with simple metrics so later improvements are credible.',
      objectives: [
        'Define two or three metrics for the target workflow',
        'Collect a baseline using lightweight, honest measurement',
        'Account for quality, not just speed',
        'Set a realistic improvement target',
      ],
      videos: [
        { title: 'Metrics That Survive Scrutiny', durationMin: 11, description: 'Choosing measures that an executive will actually believe.' },
        { title: 'Quality Versus Speed', durationMin: 9, description: 'Why time saved is meaningless without a quality guardrail.' },
      ],
      readings: [
        R.mckEconomic,
        R.mitWorkforce,
        R.hbrStrategy,
      ],
      exercise: {
        title: 'Baseline Measurement Sheet',
        prompt:
          'Define the metrics for your target workflow and gather a baseline over several real instances. Capture both time and a simple quality measure, and state the improvement target you will aim for.',
        deliverable: 'A baseline measurement sheet with metrics, current values, sample size, and a stated target.',
        estMinutes: 55,
        rubric: [
          'Two to three relevant metrics are defined',
          'Baseline is collected from real instances, not estimates',
          'A quality measure complements the time measure',
          'A specific, realistic improvement target is set',
        ],
      },
    },
    {
      id: 'w3',
      index: 3,
      title: 'Reading the AI Landscape',
      theme: 'Tools, models, and trade-offs',
      phase: 'Diagnose',
      summary:
        'Get a working map of the assistant and tooling landscape so you choose the right instrument for each job rather than defaulting to one habit.',
      objectives: [
        'Compare leading assistants on strengths, context length, and integrations',
        'Understand when a chat assistant versus an automation tool fits',
        'Evaluate a tool against security and data-handling needs',
        'Match a tool to your target workflow',
      ],
      videos: [
        { title: 'The Assistant Landscape in 2026', durationMin: 14, description: 'A practical comparison of the major assistants for team work.' },
        { title: 'Chat, Automation, or Integration', durationMin: 11, description: 'Choosing the right category of tool for the job at hand.' },
      ],
      readings: [
        R.a16zStack,
        R.a16zEnterprise,
        R.geminiProduct,
        R.chatgptProduct,
      ],
      exercise: {
        title: 'Tool Selection Brief',
        prompt:
          'Evaluate at least three tools or assistants against your target workflow and your organization\'s data rules. Recommend one with a clear justification and note any constraints or risks.',
        deliverable: 'A one-page tool selection brief with a comparison table and a justified recommendation.',
        estMinutes: 50,
        rubric: [
          'At least three options are compared on relevant criteria',
          'Data-handling and security needs are considered',
          'Recommendation is justified against the workflow',
          'Constraints and risks are stated honestly',
        ],
      },
      liveSession: {
        title: 'Workflow and Baseline Review',
        description: 'Learners present their workflow map, baseline, and tool choice for facilitator and peer critique before building begins.',
        cadence: 'Week 3 - Live cohort call',
      },
    },
    {
      id: 'w4',
      index: 4,
      title: 'Advanced Prompting',
      theme: 'Precision and reliability',
      phase: 'Personalize',
      summary:
        'Go beyond basics into techniques that make output reliable enough to depend on: few-shot examples, structured output, decomposition, and explicit reasoning.',
      objectives: [
        'Use few-shot examples to lock in format and tone',
        'Request structured output that downstream steps can consume',
        'Decompose complex tasks into chained prompts',
        'Prompt for explicit reasoning when accuracy matters',
      ],
      videos: [
        { title: 'Few-Shot and Structured Output', durationMin: 13, description: 'Making outputs consistent enough to automate.' },
        { title: 'Decomposition and Chaining', durationMin: 12, description: 'Breaking hard tasks into reliable smaller steps.' },
        { title: 'When to Ask for Reasoning', durationMin: 8, description: 'Using chain-of-thought to raise accuracy on hard tasks.' },
      ],
      readings: [
        R.fewShot,
        R.chainOfThought,
        R.systemPrompts,
        R.arxivCot,
      ],
      exercise: {
        title: 'Reliable Prompt Pattern',
        prompt:
          'Design a prompt for the core step of your workflow that produces consistent, structured output across at least five different inputs. Use few-shot examples and request a defined format. Document its failure cases.',
        deliverable: 'A documented prompt pattern with five test runs, the chosen output format, and noted failure cases.',
        estMinutes: 65,
        rubric: [
          'Few-shot examples are used to fix format and tone',
          'Output is structured and consistent across inputs',
          'At least five test inputs are run and shown',
          'Failure cases are identified and discussed',
        ],
      },
    },
    {
      id: 'w5',
      index: 5,
      title: 'Connecting Tools',
      theme: 'AI inside your real stack',
      phase: 'Personalize',
      summary:
        'Bring AI into the tools you already use. You will learn how assistants reach documents, spreadsheets, and apps through built-in connectors and lightweight automation platforms.',
      objectives: [
        'Use connectors to give an assistant access to real data sources',
        'Build a simple no-code automation that calls AI in a flow',
        'Pass output from AI into the next tool cleanly',
        'Handle errors and unexpected output safely',
      ],
      videos: [
        { title: 'Connectors and Integrations', durationMin: 12, description: 'How assistants reach your documents and apps safely.' },
        { title: 'Your First AI Automation', durationMin: 14, description: 'Wiring an assistant into a no-code flow end to end.' },
      ],
      readings: [
        R.mcp,
        R.toolUse,
        R.a16zStack,
      ],
      exercise: {
        title: 'No-Code AI Flow',
        prompt:
          'Build a working automation that takes a real input, calls an AI step using your prompt pattern, and delivers output into a tool your team uses. Add at least one error or quality check.',
        deliverable: 'A working no-code automation plus a short description of the trigger, AI step, output, and safety check.',
        estMinutes: 70,
        rubric: [
          'Automation runs end to end on a real input',
          'The AI step uses a tested prompt pattern',
          'Output lands cleanly in a downstream tool',
          'At least one error or quality check is included',
        ],
      },
    },
    {
      id: 'w6',
      index: 6,
      title: 'Building the Workflow',
      theme: 'Assembling the full solution',
      phase: 'Personalize',
      summary:
        'Combine prompting, tooling, and automation into the complete AI-augmented version of your target workflow, with humans kept in the loop where judgment matters.',
      objectives: [
        'Integrate the prompt pattern and automation into one workflow',
        'Define where humans review or approve before action',
        'Test the workflow against realistic edge cases',
        'Write a short runbook so others can operate it',
      ],
      videos: [
        { title: 'Human-in-the-Loop Design', durationMin: 11, description: 'Placing review points so speed never costs accountability.' },
        { title: 'Edge Cases and Graceful Failure', durationMin: 10, description: 'Stress-testing a workflow before it touches real work.' },
      ],
      readings: [
        R.buildingAgents,
        R.toolUse,
        R.nistRmf,
      ],
      exercise: {
        title: 'Integrated Workflow Build',
        prompt:
          'Assemble the full AI-augmented workflow and run it against several real and edge-case inputs. Define the human review points and write a one-page runbook so a teammate could run it without you.',
        deliverable: 'A working integrated workflow with defined review points and a one-page operating runbook.',
        estMinutes: 80,
        rubric: [
          'Prompting, tools, and automation are integrated into one flow',
          'Human review points are explicit and well placed',
          'Edge cases are tested and handled',
          'Runbook is clear enough for another person to operate',
        ],
      },
      liveSession: {
        title: 'Build Review and Troubleshooting',
        description: 'Learners demo their integrated workflows and get live troubleshooting on prompts, connectors, and review-point design.',
        cadence: 'Week 6 - Live cohort call',
      },
    },
    {
      id: 'w7',
      index: 7,
      title: 'Measuring Impact',
      theme: 'Proving the value',
      phase: 'Scale',
      summary:
        'Compare the new workflow against your week-two baseline and produce an honest impact assessment that a manager would trust.',
      objectives: [
        'Re-measure the workflow using the original metrics',
        'Quantify time, quality, and consistency changes',
        'Separate genuine improvement from novelty effects',
        'Communicate results in business terms',
      ],
      videos: [
        { title: 'Honest Impact Measurement', durationMin: 12, description: 'Producing numbers that hold up to executive questioning.' },
        { title: 'Telling the Value Story', durationMin: 9, description: 'Translating metrics into language leadership cares about.' },
      ],
      readings: [
        R.mckEconomic,
        R.mitWorkforce,
        R.hbrStrategy,
      ],
      exercise: {
        title: 'Impact Assessment',
        prompt:
          'Re-run your workflow on a comparable sample and measure against your baseline. Quantify the change in time and quality, account for any caveats, and summarize the value in one paragraph for a manager.',
        deliverable: 'An impact assessment with before/after metrics, caveats, and a manager-ready value summary.',
        estMinutes: 60,
        rubric: [
          'Original metrics are re-measured on a comparable sample',
          'Both time and quality changes are reported',
          'Caveats and confounders are acknowledged',
          'Value is summarized in clear business terms',
        ],
      },
    },
    {
      id: 'w8',
      index: 8,
      title: 'Sharing With the Team',
      theme: 'From personal win to team practice',
      phase: 'Scale',
      summary:
        'A workflow that only you can run is fragile. This week you package, document, and teach the workflow so the team adopts it and it survives your absence.',
      objectives: [
        'Package the workflow with clear documentation',
        'Train at least one colleague to run it independently',
        'Set up a feedback channel for ongoing improvement',
        'Anticipate and address adoption resistance',
      ],
      videos: [
        { title: 'Making Workflows Transferable', durationMin: 11, description: 'Documentation and handoff that prevents single-person dependency.' },
        { title: 'Overcoming Adoption Resistance', durationMin: 10, description: 'Why teammates resist new tools and how to bring them along.' },
      ],
      readings: [
        R.mitCulture,
        R.hbrChange,
        R.mckAdoption,
      ],
      exercise: {
        title: 'Team Adoption Package',
        prompt:
          'Create an adoption package for your workflow and use it to train one colleague to run it without your help. Capture their feedback and note one change you will make based on it.',
        deliverable: 'An adoption package plus evidence that one colleague ran the workflow independently and gave feedback.',
        estMinutes: 65,
        rubric: [
          'Documentation lets a colleague run the workflow alone',
          'A real colleague is trained and runs it independently',
          'A feedback mechanism is established',
          'At least one adoption obstacle is addressed',
        ],
      },
    },
    {
      id: 'w9',
      index: 9,
      title: 'Capstone and Roadmap',
      theme: 'Consolidate and look ahead',
      phase: 'Scale',
      summary:
        'Bring the program together into a deployed, measured, team-adopted workflow and a roadmap for the next three AI opportunities on your team.',
      objectives: [
        'Demonstrate a deployed, measured, team-adopted workflow',
        'Reflect on what worked and what you would do differently',
        'Identify the next three AI opportunities on your team',
        'Make the case for continued investment',
      ],
      videos: [
        { title: 'From One Win to a Portfolio', durationMin: 12, description: 'Turning a single workflow into a pipeline of opportunities.' },
        { title: 'Pitching Continued Investment', durationMin: 10, description: 'Building the internal case to keep going after the program.' },
      ],
      readings: [
        R.mckAdoption,
        R.mitWorkforce,
        R.a16zEnterprise,
      ],
      exercise: {
        title: 'Capstone: Deployed Team Workflow and AI Roadmap',
        prompt:
          'Present your capstone: a deployed AI-augmented workflow with documented impact and at least one independent adopter, plus a roadmap of the next three opportunities with rough effort and value estimates. Frame it as a proposal to leadership.',
        deliverable: 'A capstone presentation covering the deployed workflow, its measured impact, adoption evidence, and a three-item AI roadmap.',
        estMinutes: 100,
        rubric: [
          'Workflow is deployed, measured, and independently adopted',
          'Impact is presented credibly with caveats',
          'A roadmap of three opportunities is scoped with value and effort',
          'The presentation makes a persuasive case for continued investment',
        ],
      },
    },
  ],
}

// =====================================================================
// PROGRAM 3 — AI Builders (12 weeks)
// =====================================================================

const builders: Program = {
  slug: '12-week-ai-builders',
  name: 'AI Builders',
  durationLabel: 'Weeks: 12',
  weekCount: 12,
  level: 'Advanced',
  audience: 'Technical staff and power users who want to build agents, RAG systems, and integrations and ship internal AI tools.',
  outcome: 'Learners ship a production-grade internal AI application that real colleagues use, with evaluation and guardrails in place.',
  heroSummary:
    'A twelve-week engineering program for builders. Move from API fundamentals through RAG and agents to a deployed, evaluated, governed internal AI tool that your organization actually relies on.',
  tags: ['LLM engineering', 'RAG', 'Agents', 'Evaluation', 'Integrations'],
  phases: [
    { name: 'Diagnose', tagline: 'Foundations, APIs, and problem framing', weeks: 'Weeks 1-4' },
    { name: 'Personalize', tagline: 'Build RAG, tools, and agents', weeks: 'Weeks 5-8' },
    { name: 'Scale', tagline: 'Evaluate, harden, deploy, and operate', weeks: 'Weeks 9-12' },
  ],
  weeks: [
    {
      id: 'w1',
      index: 1,
      title: 'How LLMs Work Under the Hood',
      theme: 'Mental model for builders',
      phase: 'Diagnose',
      summary:
        'Build the technical intuition you need to engineer with language models: tokens, context, sampling, and why outputs vary. This is the foundation every later week depends on.',
      objectives: [
        'Explain tokenization, context windows, and sampling parameters',
        'Reason about why temperature and prompts change outputs',
        'Describe the transformer attention mechanism at a working level',
        'Estimate cost and latency from token counts',
      ],
      videos: [
        { title: 'Tokens, Context, and Sampling', durationMin: 15, description: 'The mechanics that determine cost, latency, and variability.' },
        { title: 'Attention in Plain Terms', durationMin: 13, description: 'A builder-level explanation of how transformers attend to context.' },
      ],
      readings: [
        R.arxivAttention,
        R.arxivGpt3,
        R.contextWindows,
      ],
      exercise: {
        title: 'Model Behavior Probe',
        prompt:
          'Run the same prompt across varied temperatures and context lengths and record how outputs, cost, and latency change. Write a short note explaining the behavior you observed in terms of tokens and sampling.',
        deliverable: 'A short report with experiment results and an explanation grounded in tokenization and sampling.',
        estMinutes: 70,
        rubric: [
          'Experiments vary parameters systematically',
          'Cost and latency are measured, not guessed',
          'Observations are explained mechanically',
          'Conclusions are accurate and concrete',
        ],
      },
    },
    {
      id: 'w2',
      index: 2,
      title: 'Working With the API',
      theme: 'From chat to code',
      phase: 'Diagnose',
      summary:
        'Move from the chat interface to programmatic calls. You will authenticate, send structured requests, stream responses, and handle errors like a production system.',
      objectives: [
        'Make authenticated API calls and handle responses',
        'Use system prompts and message roles programmatically',
        'Stream output and manage timeouts and retries',
        'Track token usage and cost per call',
      ],
      videos: [
        { title: 'Your First API Calls', durationMin: 14, description: 'Authentication, messages, and parsing responses in code.' },
        { title: 'Streaming, Retries, and Errors', durationMin: 12, description: 'Production-grade handling of the realities of API calls.' },
      ],
      readings: [
        R.systemPrompts,
        R.openaiPrompting,
        R.toolUse,
      ],
      exercise: {
        title: 'API Client Build',
        prompt:
          'Write a small script that calls a model API with a system prompt, streams the response, handles errors with retries, and logs token usage and cost per call. Run it against several inputs.',
        deliverable: 'A working script plus a short log showing streamed responses, error handling, and per-call cost.',
        estMinutes: 80,
        rubric: [
          'Authenticated calls with system prompt work correctly',
          'Streaming is implemented',
          'Errors are handled with sensible retries',
          'Token usage and cost are logged per call',
        ],
      },
    },
    {
      id: 'w3',
      index: 3,
      title: 'Prompt Engineering for Production',
      theme: 'Reliability at scale',
      phase: 'Diagnose',
      summary:
        'Production prompts must be reliable across thousands of inputs. You will master structured output, few-shot design, decomposition, and prompt templating with variables.',
      objectives: [
        'Enforce structured, parseable output reliably',
        'Design few-shot prompts that generalize',
        'Template prompts with variables for reuse',
        'Decompose complex tasks into a prompt chain',
      ],
      videos: [
        { title: 'Structured Output You Can Parse', durationMin: 13, description: 'Getting machine-readable output every time.' },
        { title: 'Templating and Prompt Chains', durationMin: 14, description: 'Parameterizing prompts and chaining them reliably.' },
      ],
      readings: [
        R.promptOverview,
        R.fewShot,
        R.chainOfThought,
        R.openaiPrompting,
      ],
      exercise: {
        title: 'Production Prompt Module',
        prompt:
          'Build a reusable prompt module that takes variables, returns strictly structured output, and chains at least two steps. Validate the output schema across at least ten inputs and report the pass rate.',
        deliverable: 'A prompt module with templating, schema validation, and a measured pass rate across ten or more inputs.',
        estMinutes: 85,
        rubric: [
          'Output is strictly structured and validated',
          'Prompts are templated with variables',
          'At least two steps are chained',
          'A measured reliability rate is reported',
        ],
      },
      liveSession: {
        title: 'Builder Foundations Clinic',
        description: 'Code review of API clients and prompt modules with a facilitator, focusing on reliability and cost discipline.',
        cadence: 'Week 3 - Live cohort call',
      },
    },
    {
      id: 'w4',
      index: 4,
      title: 'Framing the Build',
      theme: 'Choosing the right problem',
      phase: 'Diagnose',
      summary:
        'Select the internal tool you will build over the program. You will write a spec, identify users, define success metrics, and choose an architecture before writing more code.',
      objectives: [
        'Select a high-value, feasible internal AI use case',
        'Write a concise product and technical spec',
        'Define success metrics and acceptance criteria',
        'Choose an initial architecture and justify it',
      ],
      videos: [
        { title: 'Scoping an AI Tool That Ships', durationMin: 12, description: 'Picking a problem narrow enough to finish and worth finishing.' },
        { title: 'Architecture Decisions Up Front', durationMin: 13, description: 'Choosing between prompt-only, RAG, and agentic designs early.' },
      ],
      readings: [
        R.a16zStack,
        R.buildingAgents,
        R.mckState,
      ],
      exercise: {
        title: 'Build Spec',
        prompt:
          'Write a one- to two-page spec for the internal AI tool you will build: the problem, the users, success metrics, acceptance criteria, and a proposed architecture. Identify the riskiest assumption.',
        deliverable: 'A build spec covering problem, users, metrics, acceptance criteria, architecture, and the key risk.',
        estMinutes: 70,
        rubric: [
          'Problem and users are concrete and real',
          'Success metrics and acceptance criteria are measurable',
          'Architecture choice is justified',
          'The riskiest assumption is named',
        ],
      },
    },
    {
      id: 'w5',
      index: 5,
      title: 'Retrieval-Augmented Generation',
      theme: 'Grounding in your data',
      phase: 'Personalize',
      summary:
        'Build a RAG pipeline so your tool answers from your organization\'s documents. You will chunk, embed, store, retrieve, and assemble grounded prompts.',
      objectives: [
        'Chunk and embed documents effectively',
        'Store and query vectors for relevant retrieval',
        'Assemble retrieved context into grounded prompts',
        'Reduce hallucination through citation and grounding',
      ],
      videos: [
        { title: 'The RAG Pipeline End to End', durationMin: 16, description: 'Chunking, embeddings, vector search, and grounded generation.' },
        { title: 'Chunking and Retrieval Quality', durationMin: 13, description: 'Why retrieval quality, not the model, usually decides RAG quality.' },
      ],
      readings: [
        R.arxivRag,
        R.openaiEmbeddings,
        R.dlaiRag,
        R.a16zStack,
      ],
      exercise: {
        title: 'RAG Prototype',
        prompt:
          'Build a working RAG prototype over a real document set: chunk, embed, retrieve, and generate grounded answers with citations. Test it on ten realistic questions and note retrieval failures.',
        deliverable: 'A RAG prototype plus a test log of ten questions with answers, citations, and noted failures.',
        estMinutes: 100,
        rubric: [
          'Documents are chunked and embedded sensibly',
          'Retrieval returns relevant context',
          'Answers are grounded and cite sources',
          'Failure cases are identified and analyzed',
        ],
      },
    },
    {
      id: 'w6',
      index: 6,
      title: 'Tool Use and Function Calling',
      theme: 'Letting models act',
      phase: 'Personalize',
      summary:
        'Give your model the ability to call functions and reach external systems. You will define tools, handle the call-response loop, and constrain what the model can do.',
      objectives: [
        'Define tools with clear schemas the model can call',
        'Handle the request-call-result loop reliably',
        'Constrain and validate tool inputs and outputs',
        'Use the Model Context Protocol to standardize integrations',
      ],
      videos: [
        { title: 'Function Calling Mechanics', durationMin: 14, description: 'Defining tools and orchestrating the call loop safely.' },
        { title: 'Standardizing With MCP', durationMin: 12, description: 'Using the Model Context Protocol for portable integrations.' },
      ],
      readings: [
        R.toolUse,
        R.openaiFunctions,
        R.mcp,
        R.dlaiFunctions,
      ],
      exercise: {
        title: 'Tool-Calling Capability',
        prompt:
          'Add at least two tools to your build that let the model fetch data or take an action, with validated inputs and outputs. Demonstrate the model correctly choosing and calling each tool, and handle a malformed call.',
        deliverable: 'A working tool-calling capability with at least two validated tools and a demonstration including an error case.',
        estMinutes: 90,
        rubric: [
          'Tools have clear, validated schemas',
          'The call-response loop works reliably',
          'Inputs and outputs are validated',
          'A malformed or failed call is handled gracefully',
        ],
      },
      liveSession: {
        title: 'RAG and Tooling Review',
        description: 'Learners demo their RAG and tool-calling components for architectural critique and debugging support.',
        cadence: 'Week 6 - Live cohort call',
      },
    },
    {
      id: 'w7',
      index: 7,
      title: 'Designing Agents',
      theme: 'Reasoning and acting in loops',
      phase: 'Personalize',
      summary:
        'Combine reasoning and tool use into agents that plan and act over multiple steps, while keeping them bounded, observable, and safe.',
      objectives: [
        'Apply the reason-act loop to multi-step tasks',
        'Decide when an agent is warranted versus a fixed workflow',
        'Bound agent autonomy with limits and stop conditions',
        'Instrument agents for observability and debugging',
      ],
      videos: [
        { title: 'The Reason-Act Loop', durationMin: 15, description: 'How agents plan, call tools, and incorporate results.' },
        { title: 'Bounding Agent Autonomy', durationMin: 13, description: 'Keeping agents safe, cheap, and debuggable.' },
      ],
      readings: [
        R.arxivReact,
        R.buildingAgents,
        R.toolUse,
      ],
      exercise: {
        title: 'Bounded Agent',
        prompt:
          'Build a bounded agent that completes a multi-step task in your domain using tools, with step limits, stop conditions, and logging of every decision. Run it on three tasks and analyze its trajectories.',
        deliverable: 'A bounded agent with logged trajectories for three multi-step tasks and an analysis of its decisions.',
        estMinutes: 100,
        rubric: [
          'Agent completes genuine multi-step tasks',
          'Autonomy is bounded with limits and stop conditions',
          'Every decision is logged and observable',
          'Trajectory analysis identifies strengths and failures',
        ],
      },
    },
    {
      id: 'w8',
      index: 8,
      title: 'Assembling the Application',
      theme: 'From components to product',
      phase: 'Personalize',
      summary:
        'Integrate RAG, tools, and agent logic into a coherent application with a usable interface, ready for real colleagues to try.',
      objectives: [
        'Integrate components into one coherent application',
        'Provide a usable interface for non-technical users',
        'Manage state, sessions, and conversation history',
        'Prepare the application for a pilot with real users',
      ],
      videos: [
        { title: 'Gluing the Pieces Together', durationMin: 14, description: 'Turning components into a single dependable application.' },
        { title: 'Interfaces for Real Users', durationMin: 11, description: 'Designing an entry point colleagues will actually use.' },
      ],
      readings: [
        R.a16zStack,
        R.buildingAgents,
        R.hbrAugment,
      ],
      exercise: {
        title: 'Integrated Application Build',
        prompt:
          'Assemble your RAG, tools, and agent logic into a working application with a usable interface and session handling. Run an internal smoke test with one colleague and capture their first-use feedback.',
        deliverable: 'A working integrated application plus notes from a colleague\'s first-use smoke test.',
        estMinutes: 110,
        rubric: [
          'Components are integrated into one working application',
          'A usable interface exists for non-technical users',
          'State and sessions are handled correctly',
          'Real first-use feedback is captured',
        ],
      },
    },
    {
      id: 'w9',
      index: 9,
      title: 'Evaluation',
      theme: 'Knowing it actually works',
      phase: 'Scale',
      summary:
        'Build a real evaluation harness so quality is measured, not assumed. You will create test sets, define metrics, and use model-graded and human evaluation.',
      objectives: [
        'Construct representative evaluation datasets',
        'Define quality metrics for your application',
        'Use model-graded and human evaluation appropriately',
        'Set quality gates that must pass before release',
      ],
      videos: [
        { title: 'Building an Eval Harness', durationMin: 15, description: 'Test sets, metrics, and automated scoring for LLM apps.' },
        { title: 'Model-Graded and Human Evals', durationMin: 12, description: 'When to trust an LLM judge and when you need people.' },
      ],
      readings: [
        R.dlaiRag,
        R.buildingAgents,
        R.nistRmf,
      ],
      exercise: {
        title: 'Evaluation Harness',
        prompt:
          'Build an evaluation harness for your application with a representative test set, defined metrics, and automated scoring. Report current quality and set the quality gate required to ship.',
        deliverable: 'An evaluation harness with a test set, metrics, current scores, and a defined ship gate.',
        estMinutes: 95,
        rubric: [
          'Test set is representative of real use',
          'Metrics are relevant and clearly defined',
          'Scoring is automated where appropriate',
          'A concrete quality gate for release is set',
        ],
      },
      liveSession: {
        title: 'Evaluation and Readiness Review',
        description: 'Learners present evaluation results and ship gates; facilitator probes for blind spots before deployment.',
        cadence: 'Week 9 - Live cohort call',
      },
    },
    {
      id: 'w10',
      index: 10,
      title: 'Guardrails and Security',
      theme: 'Safe in the real world',
      phase: 'Scale',
      summary:
        'Harden the application against misuse, prompt injection, and data leakage, and add the guardrails an enterprise will require before approving it.',
      objectives: [
        'Identify and mitigate prompt injection and jailbreaks',
        'Prevent leakage of sensitive data through the application',
        'Add input and output guardrails',
        'Apply a recognized risk framework to the build',
      ],
      videos: [
        { title: 'Prompt Injection and Defenses', durationMin: 14, description: 'How attackers manipulate LLM apps and how to blunt them.' },
        { title: 'Guardrails and Data Protection', durationMin: 13, description: 'Input and output controls that keep an app enterprise-safe.' },
      ],
      readings: [
        R.nistRmf,
        R.googleResponsible,
        R.buildingAgents,
      ],
      exercise: {
        title: 'Security Hardening Pass',
        prompt:
          'Run a security pass on your application: attempt prompt injection and data-leakage attacks, then add input and output guardrails that close the gaps. Document the threats found and the mitigations applied.',
        deliverable: 'A hardening report listing attempted attacks, results, and the guardrails added, with the framework used.',
        estMinutes: 90,
        rubric: [
          'Realistic injection and leakage attacks are attempted',
          'Concrete guardrails are implemented',
          'Mitigations are mapped to a risk framework',
          'Residual risks are stated honestly',
        ],
      },
    },
    {
      id: 'w11',
      index: 11,
      title: 'Deployment and Operations',
      theme: 'Running it in production',
      phase: 'Scale',
      summary:
        'Deploy the application for real users and stand up the operational basics: monitoring, logging, cost controls, and a plan for incidents and iteration.',
      objectives: [
        'Deploy the application to a real environment',
        'Add monitoring, logging, and cost controls',
        'Define an incident and rollback plan',
        'Establish a loop for ongoing iteration',
      ],
      videos: [
        { title: 'Shipping to Real Users', durationMin: 13, description: 'Deployment, access control, and rollout for an internal tool.' },
        { title: 'Monitoring and Cost Control', durationMin: 12, description: 'Operating an LLM app without surprises in quality or spend.' },
      ],
      readings: [
        R.mckAdoption,
        R.a16zStack,
        R.nistRmf,
      ],
      exercise: {
        title: 'Production Deployment',
        prompt:
          'Deploy your application for a small group of real users with monitoring, logging, and cost controls in place. Document the rollout, the operational dashboard, and your incident and rollback plan.',
        deliverable: 'A deployed application with monitoring in place and a one-page operations and incident plan.',
        estMinutes: 100,
        rubric: [
          'Application is deployed and reachable by real users',
          'Monitoring, logging, and cost controls are active',
          'An incident and rollback plan exists',
          'An iteration loop is defined',
        ],
      },
    },
    {
      id: 'w12',
      index: 12,
      title: 'Capstone Showcase',
      theme: 'Ship and defend',
      phase: 'Scale',
      summary:
        'Present the deployed, evaluated, governed internal AI tool with evidence of real usage and impact, and a plan for its next iteration.',
      objectives: [
        'Demonstrate a deployed tool with real users',
        'Present evaluation results and security posture',
        'Show evidence of usage and impact',
        'Lay out the roadmap for the next iteration',
      ],
      videos: [
        { title: 'Presenting an AI Build', durationMin: 12, description: 'Communicating architecture, evaluation, and impact to stakeholders.' },
        { title: 'Maintaining and Evolving Your Tool', durationMin: 11, description: 'Keeping a shipped AI tool healthy and improving over time.' },
      ],
      readings: [
        R.buildingAgents,
        R.mckAdoption,
        R.mitWorkforce,
      ],
      exercise: {
        title: 'Capstone Project: Deployed Internal AI Tool',
        prompt:
          'Deliver your capstone: a deployed internal AI application with documented architecture, evaluation results, security guardrails, evidence of real usage, and a next-iteration roadmap. Defend your design choices in a technical review.',
        deliverable: 'A capstone package and presentation covering the deployed tool, its evaluation, security, usage evidence, and roadmap.',
        estMinutes: 150,
        rubric: [
          'Tool is deployed and used by real colleagues',
          'Evaluation and security posture are presented credibly',
          'Usage and impact evidence is shown',
          'Design choices are defended and a roadmap is set',
        ],
      },
    },
  ],
}

// =====================================================================
// PROGRAM 4 — AI Transformation (18 weeks)
// =====================================================================

const transformation: Program = {
  slug: '18-week-ai-transformation',
  name: 'AI Transformation',
  durationLabel: 'Weeks: 18',
  weekCount: 18,
  level: 'Transformation',
  audience: 'Managers and executives leading org-wide AI adoption across strategy, governance, and change management.',
  outcome: 'Leaders deliver a funded, governed AI transformation plan with embedded culture, measurable ROI, and a scaling roadmap.',
  heroSummary:
    'The flagship eighteen-week program for leaders accountable for AI across the organization. Diagnose readiness, set strategy, build governance, lead the change, and prove ROI as you scale AI from pilots to enterprise practice.',
  tags: ['AI strategy', 'Governance', 'Change management', 'ROI', 'Operating model'],
  phases: [
    { name: 'Diagnose', tagline: 'Assess readiness, strategy, and use-case portfolio', weeks: 'Weeks 1-6' },
    { name: 'Personalize', tagline: 'Build governance, talent, pilots, and operating model', weeks: 'Weeks 7-12' },
    { name: 'Scale', tagline: 'Deploy, measure ROI, and embed culture org-wide', weeks: 'Weeks 13-18' },
  ],
  weeks: [
    {
      id: 'w1',
      index: 1,
      title: 'The Executive Case for AI',
      theme: 'Why now, why you',
      phase: 'Diagnose',
      summary:
        'Establish a clear-eyed view of where generative AI creates enterprise value and where it does not, so your transformation is anchored in economics rather than hype.',
      objectives: [
        'Articulate the economic value pools of generative AI for your sector',
        'Separate durable advantage from temporary novelty',
        'Frame AI as an operating-model shift, not a tool purchase',
        'Define what success would look like for your organization',
      ],
      videos: [
        { title: 'The Economics of Generative AI', durationMin: 16, description: 'Where the value actually accrues across functions and industries.' },
        { title: 'Operating-Model Change, Not Tool Adoption', durationMin: 13, description: 'Why treating AI as procurement guarantees disappointment.' },
      ],
      readings: [
        R.mckEconomic,
        R.mckState,
        R.hbrStrategy,
        R.mitWorkforce,
      ],
      exercise: {
        title: 'AI Value Thesis',
        prompt:
          'Write a value thesis for AI in your organization: the two or three value pools you will pursue, why they matter, and what durable advantage looks like. Ground each claim in evidence, not aspiration.',
        deliverable: 'A two-page AI value thesis identifying prioritized value pools with supporting evidence.',
        estMinutes: 90,
        rubric: [
          'Value pools are specific to the organization and sector',
          'Claims are evidence-based, not aspirational',
          'Durable advantage is distinguished from novelty',
          'A clear definition of success is stated',
        ],
      },
    },
    {
      id: 'w2',
      index: 2,
      title: 'Assessing AI Readiness',
      theme: 'Honest baseline',
      phase: 'Diagnose',
      summary:
        'Diagnose the organization\'s true starting point across data, talent, technology, culture, and leadership so the strategy fits reality.',
      objectives: [
        'Assess readiness across data, talent, technology, and culture',
        'Identify the binding constraints that will limit progress',
        'Benchmark against peer and leading practice',
        'Produce a defensible readiness baseline',
      ],
      videos: [
        { title: 'The Five Dimensions of Readiness', durationMin: 14, description: 'A structured assessment across data, talent, tech, culture, and leadership.' },
        { title: 'Finding the Binding Constraint', durationMin: 11, description: 'Why one constraint usually governs the pace of transformation.' },
      ],
      readings: [
        R.mckState,
        R.mitWorkforce,
        R.mckAdoption,
      ],
      exercise: {
        title: 'Readiness Assessment',
        prompt:
          'Conduct a readiness assessment of your organization across the five dimensions, supported by real evidence and at least three stakeholder inputs. Identify the single binding constraint to address first.',
        deliverable: 'A readiness assessment with scored dimensions, supporting evidence, and the identified binding constraint.',
        estMinutes: 100,
        rubric: [
          'All five dimensions are assessed with evidence',
          'At least three stakeholder inputs inform the assessment',
          'Scoring is honest, including weaknesses',
          'The binding constraint is identified and justified',
        ],
      },
    },
    {
      id: 'w3',
      index: 3,
      title: 'Building the Use-Case Portfolio',
      theme: 'A portfolio, not a project',
      phase: 'Diagnose',
      summary:
        'Generate and prioritize a portfolio of AI opportunities balanced across quick wins and strategic bets, scored on value, feasibility, and risk.',
      objectives: [
        'Generate use cases across functions systematically',
        'Score opportunities on value, feasibility, and risk',
        'Balance quick wins against strategic bets',
        'Sequence the portfolio into a credible roadmap',
      ],
      videos: [
        { title: 'Generating Use Cases at Scale', durationMin: 13, description: 'Structured methods to surface opportunities across the org.' },
        { title: 'Portfolio Prioritization', durationMin: 12, description: 'Scoring and sequencing opportunities into a roadmap.' },
      ],
      readings: [
        R.mckEconomic,
        R.a16zEnterprise,
        R.hbrStrategy,
      ],
      exercise: {
        title: 'Use-Case Portfolio',
        prompt:
          'Build a prioritized AI use-case portfolio of at least twelve opportunities scored on value, feasibility, and risk, balanced across quick wins and strategic bets, and sequenced into a roadmap.',
        deliverable: 'A scored, sequenced use-case portfolio with at least twelve opportunities and a roadmap view.',
        estMinutes: 100,
        rubric: [
          'At least twelve opportunities span multiple functions',
          'Scoring on value, feasibility, and risk is consistent',
          'Quick wins and strategic bets are balanced',
          'A credible sequencing roadmap is presented',
        ],
      },
      liveSession: {
        title: 'Strategy Diagnostic Review',
        description: 'Executives present value thesis, readiness, and portfolio to peers and faculty for challenge and refinement.',
        cadence: 'Week 3 - Live cohort call',
      },
    },
    {
      id: 'w4',
      index: 4,
      title: 'Competitive and Market Context',
      theme: 'Outside-in strategy',
      phase: 'Diagnose',
      summary:
        'Situate your AI strategy in the competitive and technology landscape so you invest where it creates advantage rather than parity.',
      objectives: [
        'Map competitor and market AI moves relevant to you',
        'Distinguish table-stakes capabilities from differentiators',
        'Anticipate technology and vendor trajectory',
        'Identify where AI threatens or protects your moat',
      ],
      videos: [
        { title: 'Reading Competitor AI Moves', durationMin: 13, description: 'Interpreting what rivals are doing and what it means for you.' },
        { title: 'Table Stakes Versus Differentiation', durationMin: 12, description: 'Investing where AI creates advantage, not just parity.' },
      ],
      readings: [
        R.a16zEnterprise,
        R.a16zStack,
        R.mckState,
      ],
      exercise: {
        title: 'Competitive AI Landscape',
        prompt:
          'Produce a competitive AI landscape for your market: what peers are doing, what is becoming table stakes, and where AI could threaten or strengthen your moat. Draw two implications for your strategy.',
        deliverable: 'A competitive landscape analysis with two concrete strategic implications.',
        estMinutes: 85,
        rubric: [
          'Competitor and market moves are accurately mapped',
          'Table stakes and differentiators are distinguished',
          'Moat threats and opportunities are identified',
          'Two actionable strategic implications are drawn',
        ],
      },
    },
    {
      id: 'w5',
      index: 5,
      title: 'Setting the AI Strategy',
      theme: 'Choices and trade-offs',
      phase: 'Diagnose',
      summary:
        'Convert diagnosis into a coherent strategy: where to play, how to win, build-versus-buy posture, and the investment thesis behind it.',
      objectives: [
        'Make explicit where-to-play and how-to-win choices',
        'Define a build, buy, and partner posture',
        'Set the investment level and expected returns',
        'Align the strategy to enterprise objectives',
      ],
      videos: [
        { title: 'Where to Play, How to Win', durationMin: 15, description: 'Applying strategy fundamentals to AI investment choices.' },
        { title: 'Build, Buy, or Partner', durationMin: 13, description: 'Deciding what to own versus source in your AI stack.' },
      ],
      readings: [
        R.hbrStrategy,
        R.mckEconomic,
        R.a16zEnterprise,
      ],
      exercise: {
        title: 'AI Strategy Statement',
        prompt:
          'Write an AI strategy statement: the where-to-play and how-to-win choices, the build-buy-partner posture, the investment level, and the expected returns, all aligned to enterprise objectives.',
        deliverable: 'A three- to four-page AI strategy statement with explicit choices and an investment thesis.',
        estMinutes: 110,
        rubric: [
          'Where-to-play and how-to-win choices are explicit',
          'Build-buy-partner posture is clearly defined',
          'Investment level and expected returns are stated',
          'Strategy is aligned to enterprise objectives',
        ],
      },
    },
    {
      id: 'w6',
      index: 6,
      title: 'The Business Case',
      theme: 'Funding the transformation',
      phase: 'Diagnose',
      summary:
        'Turn strategy into a fundable business case with costs, benefits, risks, and a phased investment plan that a board would approve.',
      objectives: [
        'Quantify costs and benefits across the portfolio',
        'Model ROI with sensible assumptions and ranges',
        'Phase investment to match learning and de-risking',
        'Present a board-ready business case',
      ],
      videos: [
        { title: 'Modeling AI ROI Credibly', durationMin: 14, description: 'Building an ROI model executives and boards will trust.' },
        { title: 'Phasing Investment to De-Risk', durationMin: 12, description: 'Staging funding so you learn before you scale spend.' },
      ],
      readings: [
        R.mckEconomic,
        R.mckAdoption,
        R.hbrStrategy,
      ],
      exercise: {
        title: 'Board-Ready Business Case',
        prompt:
          'Develop a board-ready business case for your AI transformation: costs, benefits, a phased investment plan, an ROI model with ranges, and the key risks with mitigations.',
        deliverable: 'A board-ready business case with financials, phasing, ROI model, and risk register.',
        estMinutes: 120,
        rubric: [
          'Costs and benefits are quantified across the portfolio',
          'ROI model uses transparent assumptions and ranges',
          'Investment is phased to de-risk',
          'Risks and mitigations are documented',
        ],
      },
      liveSession: {
        title: 'Business Case Defense',
        description: 'Each leader defends their business case in a simulated board session with faculty and peers acting as the board.',
        cadence: 'Week 6 - Live cohort call',
      },
    },
    {
      id: 'w7',
      index: 7,
      title: 'AI Governance Foundations',
      theme: 'Accountability by design',
      phase: 'Personalize',
      summary:
        'Stand up the governance that lets the organization adopt AI confidently: principles, decision rights, and oversight that fit your risk appetite.',
      objectives: [
        'Establish AI principles aligned to organizational values',
        'Define decision rights and oversight bodies',
        'Match governance intensity to risk',
        'Avoid governance that stalls adoption',
      ],
      videos: [
        { title: 'Designing AI Governance', durationMin: 15, description: 'Principles, decision rights, and oversight that enable rather than block.' },
        { title: 'Risk-Tiered Governance', durationMin: 12, description: 'Calibrating controls to the risk of each use case.' },
      ],
      readings: [
        R.nistRmf,
        R.googleResponsible,
        R.mitCulture,
      ],
      exercise: {
        title: 'Governance Charter',
        prompt:
          'Draft an AI governance charter: principles, decision rights, oversight bodies, and a risk-tiering scheme for use cases. Show how it enables adoption while managing the highest risks.',
        deliverable: 'An AI governance charter with principles, decision rights, oversight, and a risk-tiering scheme.',
        estMinutes: 100,
        rubric: [
          'Principles align to organizational values',
          'Decision rights and oversight are clearly assigned',
          'Governance is risk-tiered, not one-size-fits-all',
          'The design enables rather than blocks adoption',
        ],
      },
    },
    {
      id: 'w8',
      index: 8,
      title: 'Responsible AI and Compliance',
      theme: 'Trust and the law',
      phase: 'Personalize',
      summary:
        'Operationalize responsible AI: fairness, transparency, privacy, and the regulatory obligations that apply to your sector and geography.',
      objectives: [
        'Apply fairness, transparency, and privacy requirements operationally',
        'Map relevant regulatory obligations to your use cases',
        'Define controls for high-risk AI applications',
        'Establish documentation and audit practices',
      ],
      videos: [
        { title: 'Operationalizing Responsible AI', durationMin: 14, description: 'Turning principles into controls people actually follow.' },
        { title: 'The Regulatory Landscape', durationMin: 13, description: 'Mapping AI regulation to your obligations and use cases.' },
      ],
      readings: [
        R.nistRmf,
        R.googleResponsible,
        R.mckAdoption,
      ],
      exercise: {
        title: 'Responsible AI Control Set',
        prompt:
          'Build a responsible AI control set for your two highest-risk use cases: the fairness, transparency, and privacy controls, the regulatory obligations they meet, and the documentation required for audit.',
        deliverable: 'A responsible AI control set mapping controls and obligations for two high-risk use cases.',
        estMinutes: 95,
        rubric: [
          'Fairness, transparency, and privacy controls are concrete',
          'Regulatory obligations are correctly mapped',
          'High-risk controls are proportionate',
          'Audit documentation practices are defined',
        ],
      },
    },
    {
      id: 'w9',
      index: 9,
      title: 'Talent and Capability',
      theme: 'People make it real',
      phase: 'Personalize',
      summary:
        'Design the talent strategy: which skills to build, buy, or borrow, how to upskill the workforce, and how to organize scarce AI talent.',
      objectives: [
        'Assess capability gaps against the strategy',
        'Decide build, buy, and borrow for key skills',
        'Design role-based upskilling pathways',
        'Organize and retain scarce AI talent',
      ],
      videos: [
        { title: 'Closing the AI Capability Gap', durationMin: 14, description: 'Building, buying, and borrowing the skills the strategy needs.' },
        { title: 'Upskilling the Whole Workforce', durationMin: 12, description: 'Role-based pathways that lift the entire organization.' },
      ],
      readings: [
        R.mitWorkforce,
        R.mckAdoption,
        R.hbrAugment,
      ],
      exercise: {
        title: 'Talent and Capability Plan',
        prompt:
          'Create a talent and capability plan: the capability gaps against your strategy, a build-buy-borrow decision for each key skill, role-based upskilling pathways, and a retention approach for scarce talent.',
        deliverable: 'A talent and capability plan covering gaps, sourcing decisions, upskilling pathways, and retention.',
        estMinutes: 100,
        rubric: [
          'Capability gaps are tied to the strategy',
          'Build-buy-borrow decisions are made per skill',
          'Upskilling pathways are role-based and concrete',
          'A retention approach for scarce talent is defined',
        ],
      },
      liveSession: {
        title: 'Governance and Talent Review',
        description: 'Leaders present governance charters and talent plans for peer challenge on enablement versus control balance.',
        cadence: 'Week 9 - Live cohort call',
      },
    },
    {
      id: 'w10',
      index: 10,
      title: 'The AI Operating Model',
      theme: 'How work gets done',
      phase: 'Personalize',
      summary:
        'Design the operating model that delivers AI at scale: the balance of centralized and federated capability, platforms, and ways of working.',
      objectives: [
        'Choose a centralized, federated, or hybrid operating model',
        'Define shared platforms and reusable assets',
        'Set ways of working between central teams and the business',
        'Avoid the failure modes of each model',
      ],
      videos: [
        { title: 'Centralized, Federated, or Hybrid', durationMin: 14, description: 'Choosing the operating model that fits your organization.' },
        { title: 'Platforms and Reuse', durationMin: 12, description: 'Why shared platforms decide whether AI scales or sprawls.' },
      ],
      readings: [
        R.mitWorkforce,
        R.mckAdoption,
        R.a16zStack,
      ],
      exercise: {
        title: 'Operating Model Design',
        prompt:
          'Design the AI operating model for your organization: the centralized-versus-federated balance, shared platforms and reusable assets, and the ways of working between central teams and the business.',
        deliverable: 'An operating-model design with structure, platforms, and ways of working defined.',
        estMinutes: 100,
        rubric: [
          'Operating-model choice fits the organization',
          'Shared platforms and reusable assets are defined',
          'Ways of working are explicit',
          'Known failure modes are addressed',
        ],
      },
    },
    {
      id: 'w11',
      index: 11,
      title: 'Running Pilots That Matter',
      theme: 'Learning fast, safely',
      phase: 'Personalize',
      summary:
        'Design and launch pilots that test the riskiest assumptions, produce real evidence, and are built from day one to be scalable.',
      objectives: [
        'Select pilots that test the riskiest assumptions',
        'Define success criteria and decision gates up front',
        'Design pilots for scalability, not just demos',
        'Capture learning systematically',
      ],
      videos: [
        { title: 'Pilots That Inform Decisions', durationMin: 13, description: 'Designing pilots to produce evidence, not theater.' },
        { title: 'From Pilot to Scalable', durationMin: 12, description: 'Avoiding pilots that can never graduate to production.' },
      ],
      readings: [
        R.mckAdoption,
        R.a16zEnterprise,
        R.mckState,
      ],
      exercise: {
        title: 'Pilot Design and Launch',
        prompt:
          'Design and launch two pilots that test your riskiest assumptions, with success criteria, decision gates, and a plan to capture learning. Show how each is built to scale if it succeeds.',
        deliverable: 'Pilot designs for two initiatives with success criteria, gates, and evidence they are scalable.',
        estMinutes: 110,
        rubric: [
          'Pilots target the riskiest assumptions',
          'Success criteria and decision gates are set in advance',
          'Pilots are designed for scalability',
          'A systematic learning-capture plan exists',
        ],
      },
    },
    {
      id: 'w12',
      index: 12,
      title: 'Leading the Change',
      theme: 'The human side',
      phase: 'Personalize',
      summary:
        'Apply change-management fundamentals to AI adoption: narrative, coalition, addressing fear, and embedding new behaviors that stick.',
      objectives: [
        'Craft a compelling change narrative for AI',
        'Build a leadership coalition and visible sponsorship',
        'Address workforce fear and resistance directly',
        'Embed new behaviors so they persist',
      ],
      videos: [
        { title: 'The Change Narrative', durationMin: 14, description: 'Telling a story that earns belief and effort, not compliance.' },
        { title: 'Addressing Fear of AI', durationMin: 13, description: 'Engaging job-security and trust concerns honestly.' },
      ],
      readings: [
        R.hbrChange,
        R.mitCulture,
        R.mckAdoption,
      ],
      exercise: {
        title: 'Change Management Plan',
        prompt:
          'Create a change-management plan for your AI transformation: the narrative, the sponsorship coalition, how you will address fear and resistance, and the mechanisms that embed new behaviors.',
        deliverable: 'A change-management plan with narrative, coalition, resistance strategy, and behavior-embedding mechanisms.',
        estMinutes: 100,
        rubric: [
          'The change narrative is compelling and specific',
          'A real sponsorship coalition is identified',
          'Fear and resistance are addressed directly',
          'Mechanisms to embed behaviors are concrete',
        ],
      },
      liveSession: {
        title: 'Change Leadership Simulation',
        description: 'Leaders run a simulated town hall and respond live to workforce concerns about AI, with peer and faculty feedback.',
        cadence: 'Week 12 - Live cohort call',
      },
    },
    {
      id: 'w13',
      index: 13,
      title: 'Scaling From Pilots',
      theme: 'Crossing the chasm',
      phase: 'Scale',
      summary:
        'Move from successful pilots to enterprise scale, confronting the integration, data, and process barriers that stall most transformations here.',
      objectives: [
        'Diagnose why pilots fail to scale',
        'Remove integration, data, and process barriers',
        'Industrialize what pilots proved',
        'Sequence scaling to maintain momentum',
      ],
      videos: [
        { title: 'Why Pilots Stall at Scale', durationMin: 14, description: 'The hard truths that separate pilots from production at scale.' },
        { title: 'Industrializing AI', durationMin: 13, description: 'Turning a proven pilot into a repeatable enterprise capability.' },
      ],
      readings: [
        R.mckAdoption,
        R.mitWorkforce,
        R.a16zStack,
      ],
      exercise: {
        title: 'Scaling Plan',
        prompt:
          'Build a scaling plan for one proven pilot: the integration, data, and process barriers to remove, the steps to industrialize it, and the sequencing that maintains momentum across the organization.',
        deliverable: 'A scaling plan that takes one proven pilot to enterprise scale with barriers and sequencing addressed.',
        estMinutes: 105,
        rubric: [
          'Barriers to scale are diagnosed accurately',
          'Integration, data, and process issues are addressed',
          'Industrialization steps are concrete',
          'Sequencing sustains momentum',
        ],
      },
    },
    {
      id: 'w14',
      index: 14,
      title: 'Measuring ROI and Value',
      theme: 'Proof at the enterprise level',
      phase: 'Scale',
      summary:
        'Stand up enterprise-level value measurement that connects AI investment to outcomes the CFO and board will accept as real.',
      objectives: [
        'Connect AI initiatives to enterprise financial outcomes',
        'Distinguish attributable value from correlation',
        'Build a value-tracking dashboard',
        'Report value credibly to finance and the board',
      ],
      videos: [
        { title: 'Enterprise AI Value Measurement', durationMin: 15, description: 'Linking AI investment to outcomes finance will accept.' },
        { title: 'Attribution Without Self-Deception', durationMin: 12, description: 'Separating real AI impact from everything else changing.' },
      ],
      readings: [
        R.mckEconomic,
        R.mitWorkforce,
        R.hbrStrategy,
      ],
      exercise: {
        title: 'Value Measurement System',
        prompt:
          'Design an enterprise value-measurement system: the metrics linking AI to financial outcomes, the attribution approach, and a dashboard. Produce a sample value report you could give the CFO.',
        deliverable: 'A value-measurement system design with attribution method, dashboard, and a sample CFO-ready report.',
        estMinutes: 105,
        rubric: [
          'Metrics link AI to enterprise financial outcomes',
          'Attribution method is rigorous and honest',
          'A practical value dashboard is designed',
          'The sample report is credible to finance',
        ],
      },
      liveSession: {
        title: 'Scaling and ROI Review',
        description: 'Leaders present scaling plans and value systems for rigorous challenge on attribution and feasibility.',
        cadence: 'Week 15 - Live cohort call',
      },
    },
    {
      id: 'w15',
      index: 15,
      title: 'Embedding AI Culture',
      theme: 'Making it the default',
      phase: 'Scale',
      summary:
        'Move AI from initiative to default way of working by shaping incentives, rituals, leadership behavior, and norms across the organization.',
      objectives: [
        'Align incentives and recognition to AI adoption',
        'Establish rituals and forums that sustain practice',
        'Model the leadership behaviors that set the norm',
        'Measure cultural change, not just usage',
      ],
      videos: [
        { title: 'From Initiative to Default', durationMin: 14, description: 'Embedding AI so it becomes simply how work is done.' },
        { title: 'Incentives, Rituals, and Norms', durationMin: 12, description: 'The cultural levers that make adoption durable.' },
      ],
      readings: [
        R.mitCulture,
        R.hbrChange,
        R.mckAdoption,
      ],
      exercise: {
        title: 'AI Culture Plan',
        prompt:
          'Design an AI culture plan: the incentives and recognition, the rituals and forums, the leadership behaviors, and the measures of cultural change that will make AI the default way of working.',
        deliverable: 'An AI culture plan covering incentives, rituals, leadership behavior, and cultural-change measures.',
        estMinutes: 95,
        rubric: [
          'Incentives and recognition reinforce adoption',
          'Sustaining rituals and forums are defined',
          'Leadership behaviors are explicit and modeled',
          'Cultural change is measured, not just usage',
        ],
      },
    },
    {
      id: 'w16',
      index: 16,
      title: 'Risk, Resilience, and Continuity',
      theme: 'Operating at scale safely',
      phase: 'Scale',
      summary:
        'Mature the risk posture for AI at scale: monitoring, incident response, model and vendor risk, and resilience against failures and shocks.',
      objectives: [
        'Establish enterprise monitoring for AI in production',
        'Define incident response for AI failures',
        'Manage model, vendor, and concentration risk',
        'Build resilience and continuity into AI dependence',
      ],
      videos: [
        { title: 'AI Risk at Enterprise Scale', durationMin: 14, description: 'Monitoring, incident response, and model and vendor risk.' },
        { title: 'Resilience and Continuity', durationMin: 12, description: 'Avoiding fragile single points of failure as AI dependence grows.' },
      ],
      readings: [
        R.nistRmf,
        R.googleResponsible,
        R.mckAdoption,
      ],
      exercise: {
        title: 'AI Risk and Resilience Framework',
        prompt:
          'Develop an enterprise AI risk and resilience framework: production monitoring, incident response, model and vendor risk management, and continuity plans for your most critical AI dependencies.',
        deliverable: 'An AI risk and resilience framework covering monitoring, incident response, model and vendor risk, and continuity.',
        estMinutes: 100,
        rubric: [
          'Production monitoring is defined enterprise-wide',
          'Incident response for AI failures is concrete',
          'Model, vendor, and concentration risks are managed',
          'Continuity and resilience plans address critical dependencies',
        ],
      },
    },
    {
      id: 'w17',
      index: 17,
      title: 'The Transformation Roadmap',
      theme: 'Bringing it together',
      phase: 'Scale',
      summary:
        'Integrate every workstream into one coherent, sequenced, funded transformation roadmap with clear owners, milestones, and governance.',
      objectives: [
        'Integrate strategy, governance, talent, and operations into one plan',
        'Sequence workstreams with realistic dependencies',
        'Assign owners, milestones, and decision gates',
        'Stress-test the roadmap against constraints',
      ],
      videos: [
        { title: 'Integrating the Workstreams', durationMin: 14, description: 'Weaving strategy, governance, talent, and ops into one roadmap.' },
        { title: 'Sequencing and Dependencies', durationMin: 12, description: 'Ordering the work so each phase enables the next.' },
      ],
      readings: [
        R.mckAdoption,
        R.mitWorkforce,
        R.hbrStrategy,
      ],
      exercise: {
        title: 'Integrated Transformation Roadmap',
        prompt:
          'Assemble your integrated transformation roadmap: sequenced workstreams with dependencies, owners, milestones, decision gates, and funding. Stress-test it against your binding constraint and biggest risks.',
        deliverable: 'An integrated transformation roadmap with sequencing, owners, milestones, gates, and a stress test.',
        estMinutes: 120,
        rubric: [
          'All workstreams are integrated coherently',
          'Sequencing respects realistic dependencies',
          'Owners, milestones, and gates are assigned',
          'The roadmap is stress-tested against constraints',
        ],
      },
      liveSession: {
        title: 'Roadmap Integration Workshop',
        description: 'Leaders walk through their integrated roadmaps and stress-test sequencing and dependencies with faculty and peers.',
        cadence: 'Week 17 - Live cohort call',
      },
    },
    {
      id: 'w18',
      index: 18,
      title: 'Capstone Board Presentation',
      theme: 'Commit and lead',
      phase: 'Scale',
      summary:
        'Deliver the capstone: a complete, funded, governed AI transformation plan presented and defended as you would to your own board.',
      objectives: [
        'Present a complete transformation plan end to end',
        'Defend strategy, economics, governance, and change approach',
        'Show evidence from pilots and early scaling',
        'Secure commitment and define the first ninety days',
      ],
      videos: [
        { title: 'Presenting to the Board', durationMin: 14, description: 'Communicating a transformation plan that earns commitment.' },
        { title: 'Leading the First Ninety Days', durationMin: 12, description: 'Converting an approved plan into immediate, visible action.' },
      ],
      readings: [
        R.mckEconomic,
        R.mckAdoption,
        R.hbrChange,
      ],
      exercise: {
        title: 'Capstone: AI Transformation Plan and Board Defense',
        prompt:
          'Deliver your capstone: a complete AI transformation plan covering strategy, business case, governance, talent, operating model, scaling, ROI, culture, and risk, with pilot evidence and a ninety-day plan. Present and defend it in a simulated board session.',
        deliverable: 'A complete transformation plan and board presentation, defended live, including a ninety-day action plan.',
        estMinutes: 180,
        rubric: [
          'The plan integrates every workstream coherently',
          'Strategy, economics, and governance withstand challenge',
          'Pilot and early-scaling evidence supports the case',
          'A credible ninety-day plan and commitment ask are made',
        ],
      },
    },
  ],
}

// =====================================================================

export const programs: Program[] = [foundations, applied, builders, transformation]

export default programs
