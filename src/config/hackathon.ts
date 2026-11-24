/**
 * Configuration for Gemini Agentic Coding Hackathon 2026
 * Organized by Proton Solutions in Collaboration with ROOTS & RISE Foundation
 * 
 * Centralized Event, Partner, Social Impact & Governance Configuration
 */

export const HACKATHON_CONFIG = {
  // Event Metadata
  eventName: "Gemini Agentic Coding Hackathon 2026",
  shortName: "Gemini Agentic 2026",
  tagline: "Build Intelligent. Think Autonomous. Create a Better Tomorrow.",
  heroHeading: "Build Intelligent. Create Impact. Change Tomorrow.",
  heroSupportingText: "Join Gemini Agentic Coding Hackathon 2026, where autonomous AI meets real-world challenges. Collaborate, innovate and develop intelligent solutions that can contribute to a better society.",
  badgeLabel: "Technology Meets Social Impact",
  format: "100% Online",
  collaborationDescription: "An AI innovation initiative organised by Proton Solutions in collaboration with ROOTS & RISE Foundation, bringing together developers, students and innovators to build intelligent technology solutions while contributing to meaningful social impact.",

  // Organizational Partners
  technologyOrganizer: {
    name: "Proton Solutions",
    role: "Technology Organiser",
    tagline: "Pioneering Autonomous Systems & Developer Innovation",
    description: "Proton Solutions is a next-generation technology organization focused on cultivating cutting-edge engineering talent and accelerating innovation in artificial intelligence, cloud systems, and autonomous computing.",
    responsibilities: [
      "Hackathon planning, curriculum and execution",
      "Technical infrastructure and cloud runtime environment",
      "Problem statements and technical challenges formulation",
      "Participant communication and developer support desk",
      "Technical evaluation and code auditing",
      "Project mentoring by senior AI engineers",
      "Submission management and grand finale judging coordination"
    ],
    contactEmail: "potrontech-hr@proton.me",
    website: "https://protonsolutions.tech"
  },

  ngoPartner: {
    name: "ROOTS & RISE Foundation",
    shortName: "ROOTS & RISE",
    role: "Official Social Impact Collaboration Partner",
    tagline: "Growing Together. Changing Lives.",
    description: "ROOTS & RISE Foundation is a community-driven nonprofit organization empowering rural India across 142 Gram Panchayats through quality education, women self-help collectives, water conservation, sustainable agriculture, and accessible healthcare.",
    mission: "To partner with rural and tribal communities to eliminate generational poverty through dignified livelihoods, equitable access to quality education, community-controlled water systems, and women-led economic self-reliance.",
    vision: "An India of flourishing, resilient villages where every child enjoys joyful learning, every woman exercises economic freedom, every farmer practices ecological agriculture, and human dignity is universally respected.",
    legalStatus: "Section 8 Non-Profit Company (Registered in India)",
    cin: "U85300DL2021NPL389012",
    registrationInfo: "Registered Section 8 Non-Profit • CIN: U85300DL2021NPL389012 • Section 80G & 12A Certified • FCRA Compliant",
    taxExemption: "Section 80G & 12A Certified under the Indian Income Tax Act",
    website: "https://roots-and-rise-l27a.vercel.app/",
    contactEmail: "contact@rootsandrise.org",
    volunteerEmail: "volunteer@rootsandrise.org",
    phone: "+91 11 4987 6500 / +91 11 4987 6501",
    workingHours: "Monday to Friday: 9:30 AM – 5:30 PM IST | Saturday: 10:00 AM – 2:00 PM IST",
    registeredOffice: "B-14 Institutional Area, New Delhi 110016",
    tribalHub: "Gram Seva Bhavan, Bichhiya Road, Mandla – 481661 (Madhya Pradesh)",
    areasOfOperation: "142 Gram Panchayats across Rajasthan (Barmer, Jalore), Madhya Pradesh (Mandla Tribal Hub), Odisha (Mayurbhanj, Keonjhar), and West Bengal (Sundarbans)",
    responsibilities: [
      "Social-impact collaboration and rural domain advisory",
      "Providing real-world community problem contexts and field insights",
      "Advising on grassroots scalability, ethics, and vernacular usability",
      "Community engagement and beneficiary challenge definition",
      "Reviewing the social relevance, impact depth, and utility of submissions",
      "Supporting post-event impact validation and pilot implementation"
    ],
    leadership: [
      {
        name: "Dr. Anandita Sen",
        role: "Advisory Director – Rural Public Health",
        focusArea: "Maternal-child health & telemedicine clinics in Eastern India"
      },
      {
        name: "Harishankar Meena",
        role: "Lead Strategist – Community Watersheds",
        focusArea: "Decentralized check dams, stepwell revival & Jal Swaraj"
      },
      {
        name: "Sunita Soren",
        role: "Director – Women Collectives & Livelihoods",
        focusArea: "Women Producer Companies, Sabai grass weaving & fair market linkage"
      },
      {
        name: "Vikram Joshi",
        role: "Operations & Volunteer Coordinator",
        focusArea: "Fellowships, university partnerships & field camp deployments"
      }
    ],
    initiatives: [
      {
        title: "Rural Skills & Livelihood Initiative",
        category: "Livelihoods",
        stat: "600+ Youth",
        description: "Establishing solar-powered skill development hubs training rural youth in agro-processing, textile weaving, and electrical maintenance with direct cooperative placement."
      },
      {
        title: "Joyful Learning Centers (Education for Every Child)",
        category: "Education",
        stat: "35+ Schools",
        description: "Upgrading 35 single-teacher tribal schools with multilingual libraries, STEM learning kits, and community teacher fellowships for first-generation learners."
      },
      {
        title: "Jal Swaraj: Community Water & Check Dams",
        category: "Water & Environment",
        stat: "18 Stepwells",
        description: "Constructing community check dams, reviving 18 historic stepwells, and deploying gravity-based bio-sand filters for fluoride-free drinking water."
      },
      {
        title: "Women Entrepreneurship & SHG Loom Collective",
        category: "Women Empowerment",
        stat: "450+ Women",
        description: "Organizing 450 rural women weavers and forest produce collectors into registered producer companies with 100% women-owned equity and direct fair market linkages."
      },
      {
        title: "Paramparik Krishi: Natural Farming & Millet Revival",
        category: "Sustainable Agriculture",
        stat: "320+ Families",
        description: "Transitioning 320 smallholder farming families to zero-chemical natural farming, desi heritage seed conservation, and bio-fertilizer preparation."
      },
      {
        title: "Sanjeevani: Mobile Rural Health Clinics",
        category: "Healthcare",
        stat: "Tele-Triage",
        description: "Deploying solar water ambulances in the Sundarbans and all-terrain medical vans with telemedicine diagnostic hubs to reach isolated hamlets."
      }
    ]
  },

  // Social Impact Section Metadata ("Technology With a Purpose")
  socialImpact: {
    sectionTitle: "Technology With a Purpose",
    sectionSubtitle: "Bridging AI Innovation with Real-World Community Needs",
    description: "We believe technology should solve meaningful problems. Through our collaboration with ROOTS & RISE Foundation, we aim to encourage innovators to explore how AI and autonomous systems can support rural communities, improve access to opportunities and contribute to sustainable development.",
    focusAreas: [
      {
        id: "rural-development",
        number: "01",
        title: "Rural Development & Agri-Tech",
        tagline: "Agri-Tech & Sustainable Watersheds",
        description: "Empowering smallholder farmers and village watershed committees with autonomous crop diagnostics, weather resilience agents, and decentralized water management.",
        impactGoal: "Enhancing farm yield and supply-chain transparency across Rajasthan and Madhya Pradesh hamlets.",
        image: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "education-learning",
        number: "02",
        title: "Education & Vernacular Learning",
        tagline: "Multilingual AI Tutors & STEM Labs",
        description: "Democratizing foundational education with autonomous bilingual tutors, audio-first learning companions, and interactive STEM learning aids tailored for rural schools.",
        impactGoal: "Bridging the rural-urban learning divide for first-generation learners across tribal learning centers.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "healthcare-accessibility",
        number: "03",
        title: "Healthcare Accessibility & Tele-Triage",
        tagline: "Community Health & Early Outbreak Detection",
        description: "Equipping ASHA workers and mobile health clinics with AI triage assistants, vernacular health communication bots, and symptom tracking agents.",
        impactGoal: "Accelerating maternal and pediatric primary diagnostics across hard-to-reach tribal and riverine terrains.",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "community-empowerment",
        number: "04",
        title: "Community & Women Empowerment",
        tagline: "Artisan Producer Collectives & Fair Trade",
        description: "Building autonomous systems that connect rural women artisans directly to fair trade buyers, eliminating broker exploitation and streamlining welfare access.",
        impactGoal: "Unlocking direct economic dignity and citizen entitlement navigation for rural families.",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  // Hackathon Track: AI for Social Good (Suggested Themes)
  socialGoodTracks: [
    {
      id: "track-1",
      number: "01",
      title: "AI-Powered Rural Education Assistance",
      description: "Autonomous voice-first and vernacular multi-agent tutors that explain complex STEM concepts in native regional languages without requiring high-speed broadband.",
      techFocus: "Gemini Multimodal • Offline Vector Retrieval • Audio In/Out Agent Loops",
      communityImpact: "Supports joyful foundational literacy and STEM learning in tribal community schools."
    },
    {
      id: "track-2",
      number: "02",
      title: "Smart Agricultural Support & Advisory",
      description: "Proactive crop pest diagnosis and weather risk warning agents that analyze smartphone photos and regional rainfall patterns to advise smallholders in real time.",
      techFocus: "Gemini Vision • Soil Data Integration • Action Planning Swarms",
      communityImpact: "Protects harvest yields and assists transition to chemical-free natural farming."
    },
    {
      id: "track-3",
      number: "03",
      title: "Rural Healthcare Information & Triage",
      description: "Intelligent symptom-checking workflows designed for mobile clinics and ASHA health volunteers, alerting medical teams to potential seasonal outbreaks.",
      techFocus: "Agentic Tool Use • Medical Knowledge Graphs • Structured Triage APIs",
      communityImpact: "Speeds up early treatment in remote riverine and forest hamlets."
    },
    {
      id: "track-4",
      number: "04",
      title: "AI-Based Livelihood & Skill Matching",
      description: "Autonomous skill mapping and vernacular resume builders matching rural youth and women artisans with certified vocational opportunities and cooperative buyers.",
      techFocus: "Multi-Agent Profiling • Conversational Extraction • Geo-spatial Job Routing",
      communityImpact: "Connects rural trainees directly to fair wages and self-help cooperative ventures."
    },
    {
      id: "track-5",
      number: "05",
      title: "Community Resource & Water Management",
      description: "Sensor-data and drone-imagery reasoning agents that optimize community check dams, stepwell reserves, and fluoride-free water allocation during droughts.",
      techFocus: "Autonomous Time-Series Reasoning • Alert Dispatch • Predictive Maintenance",
      communityImpact: "Preserves critical drinking and irrigation water in drought-vulnerable villages."
    },
    {
      id: "track-6",
      number: "06",
      title: "Digital Access to Government Welfare Schemes",
      description: "Bilingual entitlement navigators that guide citizens through documentation requirements for scholarships, pensions, Kisan credit, and housing subsidies.",
      techFocus: "Agentic Document Parsing • Multilingual Speech • Form Auto-Filling Agents",
      communityImpact: "Ensures government welfare subsidies reach verified families without broker commissions."
    }
  ],

  // Transparency & Financial Governance ("Your Participation. A Bigger Purpose.")
  transparency: {
    sectionTitle: "Your Participation. A Bigger Purpose.",
    sectionSubtitle: "Ethical Stewardship & Transparent Collaboration",
    summary: "Proton Solutions and ROOTS & RISE Foundation believe in 100% transparency. Participation in this hackathon is 100% Free of charge. The guaranteed ₹24,000 cash prizes and cloud infrastructure are fully funded by Proton Solutions.",
    disclaimer: "Official Policy: Participation in the Gemini Agentic Coding Hackathon 2026 is 100% free of charge. No registration fee, subscription, or payment is collected from participants at any stage.",
    financialBreakdown: [
      {
        item: "Participant Registration Fee",
        share: "₹0 (100% Free)",
        description: "Open to all eligible students and developers with zero entry cost."
      },
      {
        item: "Hosting & Platform Access",
        share: "Free on Unstop",
        description: "Event hosted on Unstop with free application submission."
      },
      {
        item: "Guaranteed Cash Prize Pool",
        share: "₹24,000 Total Allocation",
        description: "100% funded by Proton Solutions: 🥇 ₹10k, 🥈 ₹8k, 🥉 ₹6k."
      },
      {
        item: "Technical & Organizing Infrastructure",
        share: "Proton Solutions Sponsored",
        description: "Cloud compute, LLM evaluation tooling, and Google Meet servers funded by organizers."
      },
      {
        item: "NGO Social Impact Collaboration",
        share: "Community Advisory",
        description: "Proton Solutions direct collaboration and support for ROOTS & RISE rural initiatives."
      },
      {
        item: "Final Transfer Confirmation",
        share: "Public Impact Report",
        description: "Published transparently on this portal with audited prize distributions."
      }
    ]
  },

  // Registration & Fee Details
  registrationFee: 0,
  feeText: "100% Free (₹0)",
  currency: "INR",
  currencySymbol: "₹",
  totalPrizePool: "₹24,000",
  totalPrizeNumber: 24000,
  
  // Free registration policy notice
  refundPolicyText: "Registration is 100% free of charge. No entry fees or payments are collected from participants. Terms and Conditions Apply.",
  refundNoticeHeadline: "100% FREE PARTICIPATION: Open to all innovators with zero registration fee.",

  // Official Channel & Registration Links (Configurable)
  placeholders: {
    unstopEventUrl: "https://unstop.com/hackathons/gemini-agentic-coding-hackathon-2026-proton-solutions",
    googleFormUrl: "https://forms.gle/YKmaTnHpTi65envRA",
    whatsappChannelUrl: "https://whatsapp.com/channel/0029VbDpw0m1iUxbAtgMO71Z",
    discordServerUrl: "#",
    githubOrgUrl: "https://github.com/venkyworldz6k-Venky/Hackathon-2k26",
  },

  // Registration Information
  payment: {
    platform: "Unstop",
    registrationFee: 0,
    feeText: "100% Free",
    currency: "INR",
    currencySymbol: "₹",
    policy: "Participation is 100% free of charge. No payment or financial information is required.",
  },

  // Official Six-Phase Event Timeline (Indian Standard Time - IST)
  importantDates: [
    {
      phaseNumber: "01",
      title: "REGISTRATION OPEN",
      date: "November 23, 2026",
      time: "Portal Live • 100% Online",
      description: "Registration opens for individuals and teams of up to 4 members. Fee: 100% Free on Unstop. Complete registration before the deadline.",
      status: "active" as const,
      badge: "OPENS NOV 23",
      highlightType: "live-registration" as const,
    },
    {
      phaseNumber: "02",
      title: "REGISTRATION CLOSING & VERIFICATION",
      date: "November 30 – December 2, 2026",
      time: "Closes Nov 30 at 11:59 PM IST",
      description: "Registration closes Nov 30 at 11:59 PM IST. Organizing team verifies participant details and Google Form submissions. Confirmation sent via email.",
      status: "upcoming" as const,
      badge: "CLOSING & VERIFICATION",
      highlightType: "standard" as const,
    },
    {
      phaseNumber: "03",
      title: "PROBLEM STATEMENT ANNOUNCEMENT",
      date: "December 3, 2026",
      time: "10:00 AM IST",
      description: "Official problem statements, community challenge instructions, technical guidelines, and evaluation criteria shared with selected participants via email.",
      status: "upcoming" as const,
      badge: "PROBLEM STATEMENTS",
      highlightType: "standard" as const,
    },
    {
      phaseNumber: "04",
      title: "24-HOUR CODING HACKATHON",
      date: "December 4–5, 2026",
      time: "Start: Dec 4, 10:00 AM IST • End: Dec 5, 10:00 AM IST",
      description: "Competition Duration: 24 Hours non-stop. Build innovative AI solutions using Gemini, Agentic AI concepts, and social-impact workflows into functional prototypes.",
      status: "upcoming" as const,
      badge: "⚡ 24-HOUR CODING HACKATHON",
      highlightType: "challenge-24h" as const,
    },
    {
      phaseNumber: "05",
      title: "PROJECT SUBMISSION & FINALIST SELECTION",
      date: "December 5–8, 2026",
      time: "Submission via Google Form",
      description: "Submit complete project via Google Form (GitHub Repo, PPT, technical docs, architecture, implementation details, and demo video). Shortlisted finalists invited via email.",
      status: "upcoming" as const,
      badge: "SUBMISSION & SHORTLISTING",
      highlightType: "standard" as const,
    },
    {
      phaseNumber: "06",
      title: "ONLINE PRESENTATION & GRAND FINALE",
      date: "December 9, 2026",
      time: "5:00 PM IST via Google Meet",
      description: "Shortlisted finalists present projects online through Google Meet. Final winner selection & ₹24,000 prize distribution: 🥇 1st ₹10,000, 🥈 2nd ₹8,000, 🥉 3rd ₹6,000.",
      status: "upcoming" as const,
      badge: "GRAND FINALE (GOOGLE MEET)",
      highlightType: "finale" as const,
    },
  ],

  // Prizes
  prizes: [
    {
      place: "FIRST PRIZE",
      rank: 1,
      title: "Grand Champion",
      amount: "₹10,000",
      amountNumber: 10000,
      badge: "🥇 1ST PLACE",
      tagline: "Top Autonomous Agent Solution",
      accent: "gold" as const,
      perks: [
        "Cash Prize of ₹10,000 directly to bank account",
        "Official Proton Solutions Winner Trophy & Certificate",
        "Social Impact Innovation Spotlight feature",
        "Featured project showcase on Proton Solutions official network"
      ]
    },
    {
      place: "SECOND PRIZE",
      rank: 2,
      title: "Runner-Up",
      amount: "₹8,000",
      amountNumber: 8000,
      badge: "🥈 2ND PLACE",
      tagline: "Outstanding Agent Architecture",
      accent: "silver" as const,
      perks: [
        "Cash Prize of ₹8,000 directly to bank account",
        "Official Runner-Up Certificate of Excellence",
        "Direct Mentorship Session with AI Tech Leads",
        "Featured spotlight on Proton Solutions Community"
      ]
    },
    {
      place: "THIRD PRIZE",
      rank: 3,
      title: "Second Runner-Up",
      amount: "₹6,000",
      amountNumber: 6000,
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

  // Terms and Conditions (10 Binding Conditions)
  termsAndConditions: [
    "Registration is 100% free of charge for all participants.",
    "No entry fee, payment, or banking information is required at any stage of the event.",
    "Participants must provide accurate registration information.",
    "Participants must follow the hackathon guidelines and event instructions.",
    "Any plagiarism, cheating, impersonation, or unfair practices may result in disqualification.",
    "Participants must submit their projects before the announced deadline.",
    "The organizers reserve the right to verify submissions and determine winners according to the published judging criteria.",
    "The hackathon will be conducted entirely online.",
    "Any changes to the event schedule or rules will be communicated through official channels.",
    "Participation is subject to these Terms and Conditions."
  ],

  // Frequently Asked Questions
  faqs: [
    {
      id: "faq-1",
      question: "Is this hackathon online or offline?",
      answer: "The Gemini Agentic Coding Hackathon 2026 is 100% online. You can participate from anywhere in the world from the comfort of your home, campus, or office with an internet connection.",
      category: "General"
    },
    {
      id: "faq-2",
      question: "Who is the NGO collaboration partner?",
      answer: "The hackathon is organized by Proton Solutions in official collaboration with ROOTS & RISE Foundation (https://roots-and-rise-l27a.vercel.app/), a registered Section 8 non-profit organization (CIN: U85300DL2021NPL389012) empowering rural communities across 142 Gram Panchayats through education, women self-help collectives, water sustainability, and healthcare.",
      category: "General"
    },
    {
      id: "faq-3",
      question: "Is there any registration fee?",
      answer: "No! Registration for the Gemini Agentic Coding Hackathon 2026 is 100% Free. There is zero entry fee for individuals or teams of up to 4 members.",
      category: "General"
    },
    {
      id: "faq-4",
      question: "Do I need to make any payment on Unstop?",
      answer: "No payment is required. You can complete your free registration on Unstop without any fee, and then fill out the official Proton Solutions Google Form.",
      category: "General"
    },
    {
      id: "faq-5",
      question: "Who can participate?",
      answer: "The hackathon is open to students, developers, software engineers, AI researchers, innovators, and technology enthusiasts. You can participate individually (solo) or in a team of up to 4 members.",
      category: "Participation"
    },
    {
      id: "faq-6",
      question: "How can I register for free?",
      answer: "Visit our official Unstop event page and complete your free registration. After registering on Unstop, fill out the official Proton Solutions Google Form with your team and technical details. Our team will verify records and send confirmation via email.",
      category: "Participation"
    },
    {
      id: "faq-7",
      question: "What is the 'AI for Social Good' track?",
      answer: "It is a dedicated challenge category encouraging participants to build autonomous agent solutions addressing rural education, agricultural sustainability, community healthcare, and local livelihoods inspired by ROOTS & RISE Foundation's grassroots initiatives. Official problem statements will be released on December 3, 2026.",
      category: "Submissions"
    },
    {
      id: "faq-8",
      question: "What are the prizes?",
      answer: "The total prize pool is ₹24,000 distributed as follows: First Prize: ₹10,000, Second Prize: ₹8,000, and Third Prize: ₹6,000, alongside official trophies, certificates, and mentorship opportunities.",
      category: "General"
    },
    {
      id: "faq-9",
      question: "How will winners be announced?",
      answer: "Winners will be determined by our expert jury based on technical innovation, agent autonomy, architecture, and presentation quality. Final results will be announced live on December 9, 2026 at 5:00 PM IST via Google Meet and our official WhatsApp Channel.",
      category: "Submissions"
    },
    {
      id: "faq-10",
      question: "Where can I contact the organizers?",
      answer: "You can reach Proton Solutions directly at potrontech-hr@proton.me or via our official WhatsApp community channel and contact section on this website.",
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
