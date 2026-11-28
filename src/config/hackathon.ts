/**
 * Configuration for AI CodeStorm 2026
 * Organised by Proton Solutions
 * 
 * Centralized Event, Stages, Domains, Eligibility & Governance Configuration
 */

export const HACKATHON_CONFIG = {
  // Event Metadata
  eventName: "AI CodeStorm 2026",
  shortName: "AI CodeStorm 2026",
  tagline: "The Future of Coding is Powered by AI — It's Time to Build It!",
  heroHeading: "Build Intelligent. Code Autonomous. Shape Tomorrow.",
  heroSupportingText: "AI CodeStorm 2026 is an innovation-driven hackathon by Proton Solutions. Transform creative ideas into practical, intelligent, and impactful software solutions using AI-powered coding tools, LLMs, Generative AI, and autonomous AI agents.",
  badgeLabel: "AI Engineering Hackathon",
  format: "100% Online",
  category: "AI Engineering",
  teamSizeText: "1 - 2 Members",
  minTeamSize: 1,
  maxTeamSize: 2,
  collaborationDescription: "An innovation-driven online AI hackathon organised by Proton Solutions in collaboration with ROOTS & RISE Foundation. Build practical, intelligent, and impactful software solutions across education, healthcare, automation, business, cybersecurity, and productivity.",

  // Registration Timeline (25 Nov 26, 12:00 AM to 31 Dec 26, 12:00 AM IST)
  registrationTimeline: {
    startDateText: "Nov 25, 2026 • 12:00 AM IST",
    endDateText: "Dec 31, 2026 • 12:00 AM IST",
    startDateIso: "2026-11-25T00:00:00+05:30",
    endDateIso: "2026-12-31T00:00:00+05:30",
  },

  // Eligibility
  eligibility: {
    summary: "Undergraduate, Postgraduate, Engineering Students, Freshers, and Experienced Professionals across India.",
    categories: [
      {
        title: "Undergraduate Students",
        desc: "College students exploring AI development, agent loops, and software engineering."
      },
      {
        title: "Postgraduate & Researchers",
        desc: "Grad students and researchers specializing in AI/ML, NLP, and LLM applications."
      },
      {
        title: "Engineering Students",
        desc: "Aspiring engineers passionate about building scalable, production-ready AI tools."
      },
      {
        title: "Freshers & Early Devs",
        desc: "Recent graduates eager to showcase practical AI engineering projects on their portfolio."
      },
      {
        title: "Experienced Professionals",
        desc: "Software developers, data engineers, and AI practitioners building next-gen apps."
      },
      {
        title: "Solo or Duo (1 - 2 Members)",
        desc: "Participate solo or team up with 1 partner to collaborate on code and presentation."
      }
    ]
  },

  // What to Expect
  whatToExpect: [
    "Build innovative applications using Artificial Intelligence.",
    "Explore AI-assisted coding and software development.",
    "Experiment with Generative AI, LLMs, and autonomous AI agents.",
    "Solve real-world problems through technology.",
    "Showcase your creativity, technical knowledge, and problem-solving skills.",
    "Compete with innovative developers and aspiring entrepreneurs."
  ],

  // Why Participate
  whyParticipate: [
    "Gain practical experience in AI-powered development.",
    "Build projects that demonstrate your technical abilities.",
    "Learn and experiment with emerging AI technologies.",
    "Receive recognition for your innovation and creativity.",
    "Get an opportunity to showcase your work before an expert jury."
  ],

  // Organizational Partners
  technologyOrganizer: {
    name: "Proton Solutions",
    role: "Technology Organiser",
    tagline: "Pioneering Autonomous Systems & Developer Innovation",
    description: "Proton Solutions is a next-generation technology organization cultivating cutting-edge engineering talent and accelerating innovation in artificial intelligence, cloud systems, and autonomous computing.",
    responsibilities: [
      "Hackathon planning, curriculum, and technical platform",
      "Problem statements and AI engineering challenges",
      "Mentorship from senior AI engineers and researchers",
      "Evaluation, judging coordination, and prize distribution"
    ],
    contactEmail: "potrontech-hr@proton.me",
    website: "https://protonsolutions.tech"
  },

  ticketPartner: {
    name: "KonfHub",
    role: "Official Ticket Partner",
    tagline: "Official Ticketing & Payment Infrastructure",
    description: "KonfHub is our official Ticket Partner for AI CodeStorm 2026, powering secure entry ticket booking, payment processing, and instant email ticket confirmations.",
    website: "https://konfhub.com",
    ticketUrl: "https://konfhub.com/ai-codestorm-hackathon-2026"
  },

  ngoPartner: {
    name: "ROOTS & RISE Foundation",
    shortName: "ROOTS & RISE",
    role: "Official Social Impact Collaboration Partner",
    tagline: "Growing Together. Changing Lives.",
    description: "ROOTS & RISE Foundation is a registered non-profit working with rural communities across 142 Gram Panchayats in education, clean water, healthcare, and livelihoods.",
    mission: "To help rural families overcome poverty through quality education, clean water, and sustainable livelihoods.",
    vision: "Thriving village communities where everyone has access to education, healthcare, and economic opportunity.",
    legalStatus: "Section 8 Non-Profit Company (Registered in India)",
    cin: "U85300DL2021NPL389012",
    registrationInfo: "Registered Section 8 Non-Profit • CIN: U85300DL2021NPL389012 • 80G & 12A Certified",
    taxExemption: "Section 80G & 12A Certified under the Indian Income Tax Act",
    website: "https://roots-and-rise-l27a.vercel.app/",
    contactEmail: "contact@rootsandrise.org",
    volunteerEmail: "volunteer@rootsandrise.org",
    phone: "+91 11 4987 6500 / +91 11 4987 6501",
    workingHours: "Monday to Friday: 9:30 AM – 5:30 PM IST",
    registeredOffice: "B-14 Institutional Area, New Delhi 110016",
    tribalHub: "Gram Seva Bhavan, Bichhiya Road, Mandla (Madhya Pradesh)",
    areasOfOperation: "142 Gram Panchayats across Rajasthan, Madhya Pradesh, Odisha, and West Bengal",
    responsibilities: [
      "Providing real grassroots challenge themes",
      "Advising on community needs and usability",
      "Evaluating projects for social impact"
    ],
    leadership: [
      {
        name: "Dr. Anandita Sen",
        role: "Advisory Director – Rural Public Health",
        focusArea: "Maternal-child health & telemedicine"
      },
      {
        name: "Harishankar Meena",
        role: "Lead Strategist – Community Watersheds",
        focusArea: "Decentralized water & stepwell revival"
      },
      {
        name: "Sunita Soren",
        role: "Director – Women Collectives & Livelihoods",
        focusArea: "Women producer groups & fair market access"
      },
      {
        name: "Vikram Joshi",
        role: "Operations & Volunteer Coordinator",
        focusArea: "University partnerships & field programs"
      }
    ],
    initiatives: [
      {
        title: "Rural Skills & Livelihoods",
        category: "Livelihoods",
        stat: "600+ Youth",
        description: "Training rural youth in solar energy, agro-processing, and crafts with direct job placements."
      },
      {
        title: "Joyful Learning Centers",
        category: "Education",
        stat: "35+ Schools",
        description: "Providing books, STEM learning kits, and trained teachers to village primary schools."
      },
      {
        title: "Clean Water & Stepwells",
        category: "Water & Environment",
        stat: "18 Stepwells",
        description: "Restoring historic wells and installing clean bio-sand water filters in rural villages."
      },
      {
        title: "Women's Craft Collectives",
        category: "Women Empowerment",
        stat: "450+ Women",
        description: "Helping women weavers sell handmade products directly to fair-trade buyers."
      },
      {
        title: "Natural Farming Support",
        category: "Sustainable Agriculture",
        stat: "320+ Families",
        description: "Helping small farmers switch to chemical-free natural farming and traditional seeds."
      },
      {
        title: "Mobile Health Clinics",
        category: "Healthcare",
        stat: "Tele-Triage",
        description: "Bringing medical checkups and basic telemedicine to remote, hard-to-reach hamlets."
      }
    ]
  },

  // Challenge Domains (Education, Healthcare, Automation, Business, Cybersecurity, Productivity)
  socialGoodTracks: [
    {
      id: "track-1",
      number: "01",
      title: "Education & Vernacular Learning",
      description: "AI-assisted learning companions, multilingual tutors, and interactive tools that make foundational education accessible to all learners.",
      techFocus: "LLMs • Multilingual Audio • RAG Knowledge Retrieval",
      communityImpact: "Empowers students across India with accessible, vernacular tutoring."
    },
    {
      id: "track-2",
      number: "02",
      title: "Healthcare Diagnostics & Triage",
      description: "Intelligent medical assistance, preliminary symptom checkers, tele-consultation support, and epidemic outbreak tracking agents.",
      techFocus: "Multimodal AI • Clinical Decision Support • Structured Triage",
      communityImpact: "Accelerates healthcare triage for remote hamlets and community clinics."
    },
    {
      id: "track-3",
      number: "03",
      title: "Automation & Autonomous Agents",
      description: "Multi-agent systems, tool-calling pipelines, and autonomous workflows that execute complex multi-step digital operations independently.",
      techFocus: "Autonomous Agent Loops • Tool Calling • Swarm Coordination",
      communityImpact: "Automates repetitive digital tasks and optimizes resource distribution."
    },
    {
      id: "track-4",
      number: "04",
      title: "Business & Enterprise Intelligence",
      description: "Generative AI applications for financial intelligence, market synthesis, customer insight automation, and smart decision systems.",
      techFocus: "Enterprise LLMs • Agentic Analytics • API Integration",
      communityImpact: "Empowers small businesses and cooperatives with enterprise-grade AI tools."
    },
    {
      id: "track-5",
      number: "05",
      title: "Cybersecurity & Safe Systems",
      description: "AI tools for proactive vulnerability detection, smart contract auditing, automated threat analysis, and ethical safety guardrails.",
      techFocus: "Code Analysis • Anomaly Detection • Safety Filters",
      communityImpact: "Protects digital systems and citizen data from cyber vulnerabilities."
    },
    {
      id: "track-6",
      number: "06",
      title: "Developer Productivity & AI Coding",
      description: "Next-generation developer utilities, code generation assistants, test suite synthesizers, and intelligent debugging swarms.",
      techFocus: "Code LLMs • AST Parsing • Automated Debugging Loops",
      communityImpact: "Boosts developer speed and democratization of software engineering."
    }
  ],

  // Social Impact Section Metadata ("Technology With a Purpose")
  socialImpact: {
    sectionTitle: "Technology With a Purpose",
    sectionSubtitle: "AI Innovation for Real Community Needs",
    description: "We believe technology should solve meaningful problems. In partnership with ROOTS & RISE Foundation, participants build smart AI agents that help rural communities thrive.",
    focusAreas: [
      {
        id: "rural-development",
        number: "01",
        title: "Rural Development & Agri-Tech",
        tagline: "Smart Farming & Water Systems",
        description: "Helping small farmers diagnose crop diseases, predict rainfall, and manage village water resources.",
        impactGoal: "Boost crop yields and water availability for rural farming families.",
        image: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "education-learning",
        number: "02",
        title: "Education & Local Languages",
        tagline: "Multilingual AI Tutors for Kids",
        description: "Building voice-enabled AI tutors that teach school subjects in local regional languages.",
        impactGoal: "Make quality learning accessible to children in village schools.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "healthcare-accessibility",
        number: "03",
        title: "Healthcare Access & Triage",
        tagline: "Health Advice & Early Detection",
        description: "Assisting local health workers with symptom checkers and early illness warning tools.",
        impactGoal: "Help remote villages receive timely health support.",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "community-empowerment",
        number: "04",
        title: "Livelihoods & Women Artisans",
        tagline: "Fair Trade & Fair Markets",
        description: "Connecting rural women weavers and craftspeople directly to online buyers at fair prices.",
        impactGoal: "Enable financial independence for rural women artisans.",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  // Transparency & Financial Governance
  transparency: {
    sectionTitle: "Your Participation. A Bigger Purpose.",
    sectionSubtitle: "Two-Stage Registration • Transparent Ticketing",
    summary: "Initial registration is hosted on Unstop, followed by official ₹350 paid entry ticket confirmation exclusively via KonfHub. The ₹24,000 prize pool and technical platform are managed transparently by Proton Solutions.",
    disclaimer: "Official Policy: Unstop is used only for initial registration. Participation is confirmed only after purchasing your official ₹350 entry ticket through KonfHub.",
    financialBreakdown: [
      {
        item: "Stage 1: Unstop",
        share: "Initial Registration",
        description: "Register your profile and team details on Unstop to start."
      },
      {
        item: "Stage 2: KonfHub Ticket",
        share: "₹350 Entry Fee",
        description: "Complete official paid entry ticket purchase exclusively on KonfHub."
      },
      {
        item: "Guaranteed Cash Prizes",
        share: "₹24,000 Total",
        description: "100% funded by Proton Solutions: 🥇 ₹10k, 🥈 ₹8k, 🥉 ₹6k."
      },
      {
        item: "Confirmation & Access",
        share: "Email Verified",
        description: "KonfHub issues ticket confirmation; further-round details arrive via email."
      },
      {
        item: "NGO Social Partnership",
        share: "Community Advisory",
        description: "ROOTS & RISE Foundation provides real-world community insights."
      },
      {
        item: "Public Transparency",
        share: "Audit & Report",
        description: "Winner announcements and prize transfers published openly."
      }
    ]
  },

  // Registration & Fee Details
  registrationFee: 350,
  feeText: "₹350",
  currency: "INR",
  currencySymbol: "₹",
  totalPrizePool: "₹24,000",
  totalPrizeNumber: 24000,
  
  // Registration policy notice
  refundPolicyText: "Unstop registration is only the initial stage. Participation is confirmed exclusively after purchasing the official ₹350 entry ticket on KonfHub. Terms and Conditions Apply.",
  refundNoticeHeadline: "TWO-STAGE ENTRY: Register on Unstop, then purchase your ₹350 entry ticket on KonfHub.",

  // Official Channel & Registration Links
  placeholders: {
    unstopEventUrl: "https://unstop.com/hackathons/ai-codestorm-2026-proton-solutions",
    konfhubTicketUrl: "https://konfhub.com/ai-codestorm-hackathon-2026",
    googleFormUrl: "https://forms.gle/YKmaTnHpTi65envRA",
    whatsappChannelUrl: "https://whatsapp.com/channel/0029VbDpw0m1iUxbAtgMO71Z",
    discordServerUrl: "#",
    githubOrgUrl: "https://github.com/venkyworldz6k-Venky/Hackathon-2k26",
  },

  // Registration & Ticketing Information
  payment: {
    initialPlatform: "Unstop",
    platform: "KonfHub",
    registrationFee: 350,
    feeText: "₹350",
    currency: "INR",
    currencySymbol: "₹",
    tickets: [
      {
        id: "individual",
        title: "Individual Entry Ticket",
        subtitle: "Solo Participant (1 Member)",
        price: 350,
        priceText: "₹350",
        description: "Official entry ticket for solo developers participating individually.",
      },
      {
        id: "team",
        title: "Team Entry Ticket",
        subtitle: "Team Participants (1 - 2 Members)",
        price: 350,
        priceText: "₹350",
        description: "Official entry ticket for teams collaborating on a single project submission.",
      },
    ],
    policy: "All payments are processed exclusively through KonfHub. Participation will be considered confirmed only after successful ticket purchase.",
  },

  // Official Four-Stage Event Timeline (Indian Standard Time - IST)
  importantDates: [
    {
      phaseNumber: "01",
      roundNumber: 1,
      title: "Round 1 – Idea & Innovation Submission",
      shortTitle: "Idea & Innovation",
      date: "02 Jan 27, 12:00 AM – 07 Jan 27, 12:00 AM IST",
      time: "Online on Unstop",
      description: "Submission round through Unstop platform. Propose creative ideas and concepts addressing real-world problems using modern AI.",
      status: "upcoming" as const,
      badge: "ROUND 1 • UNSTOP",
      highlightType: "standard" as const,
      submissionRequirements: [
        "Idea submission via Unstop platform",
        "Problem statement definition and target domain",
        "Proposed AI architecture (LLMs, GenAI, or AI Agents)",
        "Innovation approach and expected impact"
      ],
      evaluationCriteria: [
        "Innovation & Originality",
        "Relevance to Challenge Domains",
        "Feasibility of AI Implementation"
      ]
    },
    {
      phaseNumber: "02",
      roundNumber: 2,
      title: "Round 2 – AI Development & Prototype",
      shortTitle: "AI Prototype & MVP",
      date: "08 Jan 27, 12:00 AM – 18 Jan 27, 12:00 AM IST",
      time: "Development & Submission",
      description: "Participants selected in Round 1 transform their ideas into functional AI-powered prototypes demonstrating practical implementation.",
      status: "upcoming" as const,
      badge: "ROUND 2 • PROTOTYPE",
      highlightType: "standard" as const,
      submissionRequirements: [
        "1. Working prototype or MVP",
        "2. GitHub repository link with source code",
        "3. Short demonstration video (3–5 minutes)",
        "4. Technical explanation of technologies used",
        "5. Screenshots demonstrating the application"
      ],
      evaluationCriteria: [
        "Implementation and functionality – 30%",
        "Effective use of AI technologies – 25%",
        "Technical execution – 20%",
        "User experience and usability – 15%",
        "Innovation – 10%"
      ]
    },
    {
      phaseNumber: "03",
      roundNumber: 3,
      title: "Round 3 – Final Project Development & Submission",
      shortTitle: "Final App Submission",
      date: "19 Jan 27, 12:00 AM – 25 Jan 27, 12:01 AM IST",
      time: "Enhanced Application",
      description: "Qualified teams enhance prototypes into complete, production-ready AI applications focusing on performance, reliability, and real impact.",
      status: "upcoming" as const,
      badge: "ROUND 3 • FINAL APP",
      highlightType: "challenge-24h" as const,
      submissionRequirements: [
        "1. Complete working application or software solution",
        "2. Final GitHub repository with source code",
        "3. Live deployment link, where applicable",
        "4. Final project documentation (PDF)",
        "5. Demonstration video (5–7 minutes)",
        "6. Explanation of AI architecture and implementation",
        "7. Key features, limitations, and future improvements"
      ],
      evaluationCriteria: [
        "Completeness and functionality – 25%",
        "AI implementation and technical depth – 25%",
        "Innovation and originality – 20%",
        "Practical applicability and impact – 15%",
        "Documentation and presentation – 15%"
      ]
    },
    {
      phaseNumber: "04",
      roundNumber: 4,
      title: "Round 4 – Final Presentation & Project Demonstration",
      shortTitle: "Grand Finale (Live Pitch)",
      date: "30 Jan 27, 12:00 AM – 31 Jan 27, 12:01 AM IST",
      time: "Live on Google Meet",
      description: "Welcome to the Grand Finale! Shortlisted finalists present completed AI-powered applications before the judging panel and compete for ₹24,000.",
      status: "upcoming" as const,
      badge: "GRAND FINALE • LIVE PITCH",
      highlightType: "finale" as const,
      submissionRequirements: [
        "1. Live project demonstration",
        "2. Presentation explaining problem & proposed solution",
        "3. Technical architecture and AI implementation overview",
        "4. Explanation of the project's unique features",
        "5. Future development roadmap",
        "6. Judges' question-and-answer session"
      ],
      evaluationCriteria: [
        "Innovation and originality – 25%",
        "Technical implementation – 25%",
        "Working demonstration – 20%",
        "Real-world impact – 15%",
        "Presentation & Q&A – 15%"
      ]
    }
  ],

  // Prizes
  prizes: [
    {
      place: "FIRST PRIZE",
      rank: 1,
      title: "Grand Champion",
      amount: "₹10,000",
      rawAmount: 10000,
      badge: "🥇 1ST PLACE",
      tagline: "Top Innovation & Technical Excellence",
      accent: "gold" as const,
      perks: [
        "Cash Prize of ₹10,000 directly to bank account",
        "Winner Trophy & Certificate of Grand Excellence",
        "Direct Mentorship & Job/Internship Referral Opportunity",
        "Spotlight feature across Proton Solutions community"
      ]
    },
    {
      place: "SECOND PRIZE",
      rank: 2,
      title: "First Runner-Up",
      amount: "₹8,000",
      rawAmount: 8000,
      badge: "🥈 2ND PLACE",
      tagline: "Outstanding AI Engineering",
      accent: "silver" as const,
      perks: [
        "Cash Prize of ₹8,000 directly to bank account",
        "Runner-Up Certificate of Excellence",
        "Direct Mentorship with AI Tech Leads",
        "Featured spotlight on Proton Community"
      ]
    },
    {
      place: "THIRD PRIZE",
      rank: 3,
      title: "Second Runner-Up",
      amount: "₹6,000",
      rawAmount: 6000,
      badge: "🥉 3RD PLACE",
      tagline: "Innovative Problem Solving",
      accent: "bronze" as const,
      perks: [
        "Cash Prize of ₹6,000 directly to bank account",
        "Official Certificate of Innovation & Excellence",
        "Technical Feedback & Code Review from Senior Evaluators",
        "Proton Solutions Community Developer Badge"
      ]
    }
  ],

  // Terms and Conditions
  termsAndConditions: [
    "Registration follows a two-stage process: initial registration on Unstop followed by official ₹350 ticket purchase on KonfHub.",
    "Team size: 1 - 2 Members (participate individually or in pairs).",
    "All payments are processed exclusively through KonfHub; participation is confirmed only after successful ticket purchase.",
    "Open to Undergraduates, Postgraduates, Engineering Students, Freshers, and Professionals.",
    "All project code must be original and built during the hackathon rounds.",
    "Submissions must be made on Unstop before the deadline for each round.",
    "The event is conducted 100% online with remote mentorship and judging.",
    "Cash prizes will be credited directly to winning team bank accounts."
  ],

  // Frequently Asked Questions
  faqs: [
    {
      id: "faq-1",
      question: "What is AI CodeStorm 2026?",
      answer: "AI CodeStorm 2026 is an innovation-driven online hackathon by Proton Solutions challenging participants to build practical software applications using LLMs, Generative AI, and autonomous AI agents.",
      category: "General"
    },
    {
      id: "faq-2",
      question: "What is the team size?",
      answer: "Team size is strictly 1 to 2 members. You can participate solo or as a duo.",
      category: "Participation"
    },
    {
      id: "faq-3",
      question: "How do registration and payment work?",
      answer: "It is a two-stage process: First, complete initial registration on Unstop. Next, purchase your official ₹350 entry ticket exclusively through KonfHub to confirm participation.",
      category: "General"
    },
    {
      id: "faq-4",
      question: "Who is eligible to participate?",
      answer: "Undergraduates, Postgraduates, Engineering Students, Freshers, and Experienced Professionals across India are welcome.",
      category: "Participation"
    },
    {
      id: "faq-5",
      question: "What is the registration timeline?",
      answer: "Registrations are open from 25 Nov 26, 12:00 AM IST to 31 Dec 26, 12:00 AM IST on Unstop.",
      category: "General"
    },
    {
      id: "faq-6",
      question: "What are the four rounds of the hackathon?",
      answer: "Round 1: Idea Submission (Jan 2-7, 2027) • Round 2: Prototype & MVP (Jan 8-18) • Round 3: Final App Submission (Jan 19-25) • Round 4: Grand Finale Live Pitch (Jan 30-31).",
      category: "Submissions"
    },
    {
      id: "faq-7",
      question: "What are the challenge domains?",
      answer: "You can build solutions in Education, Healthcare, Automation & AI Agents, Business, Cybersecurity, or Developer Productivity.",
      category: "Submissions"
    },
    {
      id: "faq-8",
      question: "What are the prizes?",
      answer: "The total prize pool is ₹24,000 (🥇 1st ₹10,000, 🥈 2nd ₹8,000, 🥉 3rd ₹6,000) plus digital certificates for all valid submissions.",
      category: "General"
    },
    {
      id: "faq-9",
      question: "Is the hackathon online or offline?",
      answer: "AI CodeStorm 2026 is 100% online. You can participate from anywhere in India.",
      category: "General"
    },
    {
      id: "faq-10",
      question: "How do I contact the organizers?",
      answer: "Reach out to Proton Solutions at potrontech-hr@proton.me or join our official WhatsApp channel for announcements.",
      category: "General"
    }
  ],

  // Contact Information
  contact: {
    email: "potrontech-hr@proton.me",
    supportEmail: "potrontech-hr@proton.me",
    ngoCollaborationEmail: "potrontech-hr@proton.me",
    phone: "+91 98765 43210",
    headquarters: "Bengaluru, Karnataka, India",
    workingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST"
  }
};
