import { T } from "./tokens";

export const SUBJECT_PILLS = [
  { label: "Math", bg: "#f8d471" },
  { label: "Reading & writing", bg: "#b8dfd9" },
  { label: "study skills", bg: "#a8b0fb" },
  { label: "executive functioning", bg: "#fbc7a8" },
  { label: "Social studies", bg: "#b0dde7" },
  { label: "Test prep", bg: "#fbd3da" },
  { label: "College essays", bg: "#d6bbe0" },
];

export interface PricingTier {
  name: string;
  price: number;
  perSess?: number;
  unit: string;
  best: boolean;
  perks: string[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Service {
  id: string;
  short: string;
  name: string;
  grades: string;
  color: string;
  colorDeep: string;
  image: string;
  blurb: string;
  long: string;
  included: string;
  bullets: string[];
  sessionLen: string;
  pricing: PricingTier[];
  faqs: FAQ[];
}

export const SERVICES: Service[] = [
  {
    id: "skills",
    short: "Academic Support",
    name: "Academic Support",
    grades: "Grades K–12",
    color: T.mint,
    colorDeep: "#7fc4ba",
    image: "/skill-building.jpg",
    blurb: "Personalized instruction focused on skill development, confidence, and academic growth.",
    long: "Personalized instruction focused on skill development, confidence, and academic growth.",
    included: "The goal of tutoring is not only to improve academic performance, but also to build confidence, independence, and a more positive approach to learning over time. ",
    bullets: [
      "Reading comprehension and fluency",
      "Writing development",
      "Math skills and problem-solving",
      "Executive functioning and study strategies",
      "Breaking down assignments and long-term projects",
      "Developing organization systems and routines",
      "Building study strategies and time management skills",
      "Skill-building and assignment support",
      "Brief parent updates following each session",
      "Building learning confidence and independence",
    ],
    sessionLen: "60 min",
    pricing: [
      {
        name: "Single Session",
        price: 120,
        unit: "single 60-min session",
        best: false,
        perks: [
          "One 60-minute lesson",
          "Personalized warm-up",
          "Take-home practice",
          "Pay as you go",
        ],
      },
      {
        name: "Monthly Plan",
        price: 420,
        perSess: 105,
        unit: "4 sessions",
        best: true,
        perks: [
          "Save $60",
          "Weekly progress notes",
          "Shared resource folder",
          "Use within 6 weeks",
        ],
      },
      {
        name: "Semester Plan",
        price: 1000,
        perSess: 100,
        unit: "10 sessions",
        best: false,
        perks: [
          "Best value — save $200",
          "Custom learning roadmap",
          "Parent updates each month",
          "Use within 14 weeks",
        ],
      },
    ],
    faqs: [
      {
        q: "How is this different from homework help?",
        a: "Homework gets done in the process, but the goal is to fix the underlying skill so next week's homework is easier on its own.",
      },
      {
        q: "What ages do you work with?",
        a: "Kindergarten through twelfth grade. Most of my skill-building students are in grades 3–10.",
      },
    ],
  },
  {
    id: "support",
    short: "Academic and Educational Support",
    name: "Academic and Educational Support",
    grades: "Grades K–12",
    color: T.pinkSoft,
    colorDeep: "#e87aa6",
    image: "/guided-support.jpg",
    blurb:
      "Comprehensive student and family support that combines individualized instruction with educational guidance, school collaboration, and home-school partnership.",
    long: "Comprehensive student and family support that combines individualized instruction with educational guidance, school collaboration, and home-school partnership.",
    included: "Includes everything in Academic Tutoring & Skill Building, plus the following: ",
    bullets: [
      "Communication with classroom teachers to align goals and expectations",
      "Collaboration to support consistency between school and tutoring",
      "Family conferencing to review progress, strengths, and next steps",
      "Regular progress updates and instructional focus areas shared through written progress summaries (biweekly or monthly)",
      "Alignment with classroom expectations and current curriculum",
      "Scheduled check-ins with families to review progress and plan next steps",
    ],
    sessionLen: "60 min",
    pricing: [
      {
        name: "Per Session",
        price: 160,
        unit: "single 60-min session",
        best: false,
        perks: [
          "One 60-minute lesson",
          "Tailored to your week's load",
          "Email follow-up notes",
          "Pay as you go",
        ],
      },
      {
        name: "Weekly Plan",
        price: 580,
        perSess: 145,
        unit: "4 sessions",
        best: true,
        perks: [
          "Save $60",
          "Weekly check-in with parents",
          "Shared resource folder",
          "Use within 8 weeks",
        ],
      },
      {
        name: "Semester Plan",
        price: 1400,
        perSess: 140,
        unit: "10 sessions",
        best: false,
        perks: [
          "Best value — save $200",
          "Custom semester roadmap",
          "Two parent/teacher updates",
          "Use within 16 weeks",
        ],
      },
    ],
    faqs: [
      {
        q: "What if my student needs help in two subjects?",
        a: "We split sessions when it helps. Most weeks one subject dominates and the other gets a quick check-in.",
      },
      {
        q: "Can we add a session before big tests?",
        a: "Yes — packages are flexible, and most families add a 'crunch week' session every few months.",
      },
    ],
  },
  {
    id: "meeting",
    short: "School Meeting Preparation",
    name: "School Meeting Preparation",
    grades: "Parents & students",
    color: T.peachSoft,
    colorDeep: "#e88a64",
    image: "/meeting-prep.jpg",
    blurb:
      "Support to help families feel prepared, informed, and confident going into school meetings.",
    long: "School meetings can often feel overwhelming for families. This service is designed to provide guidance and clarity so families feel prepared and confident in understanding their child's needs and next steps.",
    included: "Includes everything in Academic Tutoring & Skill Building, plus the following ",
    bullets: [
      "Reviewing student progress, reports, and school data",
      "Reviewing IEP, 504, and evaluation reports to support understanding of results, goals, services, and recommendations",
      "Explaining educational terminology and school-based recommendations",
      "Identifying questions and priorities ahead of meetings",
      "Discussing potential next steps and areas of focus",
      "Reviewing guidance on understanding school information and records",
      "Preparation for upcoming meetings with clear action items",
      "When scheduling allows, attendance at school meetings may be available upon request in a supportive, educational role",
    ],
    sessionLen: "60 min",
    pricing: [
      {
        name: "Single Session",
        price: 75,
        unit: "single 60-min meeting",
        best: false,
        perks: [
          "One 60-minute working session",
          "IEP/504 & evaluation report review",
          "Guidance on school information",
          "Meeting preparation",
        ],
      },
      {
        name: "4-Session Package",
        price: 250,
        unit: "4 sessions",
        best: true,
        perks: [
          "Save $50",
          "Full document & history review",
          "Custom agenda and asks list",
          "Two rounds of email edits",
        ],
      },
      {
        name: "6-Session Package",
        price: 375,
        unit: "6 sessions",
        best: false,
        perks: [
          "Save $75",
          "Attend the meeting with you",
          "In-meeting note-taking",
          "Follow-up summary & next steps",
        ],
      },
    ],
    faqs: [
      {
        q: "Are you a lawyer or advocate?",
        a: "No — I'm a tutor with deep classroom and IEP experience. For legal advocacy I can refer you to colleagues I trust.",
      },
      {
        q: "Can you attend remotely?",
        a: "Yes — most schools accept a Zoom guest. I'll coordinate with the team beforehand.",
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Alyssa took my daughter from a C+ in Algebra II to an A− in one semester. More importantly, she now actually likes math.",
    who: "Priya M.",
    role: "Parent of a 10th grader",
  },
  {
    quote:
      "I was dreading my AP Lit essay. Alyssa walked me through the structure twice, then let me figure the rest out. I got a 5.",
    who: "Marcus L.",
    role: "Student, 12th grade",
  },
  {
    quote:
      "We tried three tutors before Alyssa. She's the first one our son actually looks forward to seeing each week.",
    who: "Daniel & Rae K.",
    role: "Parents of a 6th grader",
  },
  {
    quote:
      "She made my college essay sound like me, but better. I got into my first choice.",
    who: "Sofia R.",
    role: "Student, 12th grade",
  },
];

export const ABOUT_HOME = {
  label: "Meet Alyssa",
  headline: "What Does a Learning Specialist & Family Support Partner Do?",
  paras: [
    "I provide individualized, strengths-based support designed to help students build the academic skills, confidence, and independence needed to thrive in school and beyond. Instruction is tailored to each child's unique learning profile and aligned with their educational goals.",
    "As a trusted partner for families, I help create meaningful connections between home and school. With your permission, I can support communication, clarify educational information, and help ensure that everyone involved in your child's learning is working toward shared goals.",
    "I also guide families in understanding their child's progress, educational supports, and learning needs, empowering you with the knowledge and tools to confidently support growth at home and advocate for your child's success.",
  ],
  credentials: [
    "B.S. Special Education · UCONN",
    "M.A. Educational Psychology · UCONN",
    "6th Year · CCSU",
    "CT-certified K-12",
  ],
};

export const ABOUT = {
  label: "Meet Alyssa",
  paras: [
    "Hi! I'm Alyssa, a certified teacher with 7 years of experience in special education across both elementary and middle school settings—and a genuine love for helping students and families feel confident and supported.",
    "I've had the opportunity to work with students with a wide range of learning needs, and one of my favorite parts of teaching is helping them build skills, confidence, and independence in a way that feels achievable and encouraging. I also really value working closely with families, supporting them in understanding and navigating their child's educational journey—both in and out of the classroom.",
    "In addition to my classroom experience, I've provided individualized tutoring for students of all ages, which has allowed me to meet learners where they are and tailor instruction to fit their unique strengths and pace.",
    "I also have a lot of experience supporting students through important transitions—like moving from elementary to middle school and middle to high school—and I love helping students feel more prepared, organized, and confident during those big changes.",
    "Through my work in schools, I've seen just how powerful it is when families and educators are truly working together. That's what inspired me to create Tudino Learning—so I can support not just students, but families as they navigate and feel confident in their child's learning experience every step of the way.",
  ],
  credentials: [
    "B.S. Comprehensive Special Education K-12, English Concentration",
    "M.A. Educational Psychology, Special Education Concentration",
    "M.A. Educational Leadership",
    "OG Associate Level 1 Certification Candidate",
  ],
};

export const FAQS: FAQ[] = [
  {
    q: "Do you tutor in person or online?",
    a: "Both. In person within Brooklyn and most of Manhattan and Queens; online over Zoom for everyone else.",
  },
  {
    q: "How long is a typical session?",
    a: "45 minutes for K–5, 60 for middle/high school, and 75 for test prep. We can flex if attention spans demand it.",
  },
  {
    q: "What's your cancellation policy?",
    a: "24 hours notice for a full credit. Within 24 hours, half-session credit. Real emergencies are always handled case by case.",
  },
  {
    q: "Can parents sit in?",
    a: "Of course. For younger students I usually recommend it for the first session, then we play it by ear.",
  },
];

export const CONTACT = {
  email: "alyssa@tudinolearning.com",
  phone: "(203) 530—0922",
  area: "South Windsor, NY — in person & online",
  ig: "@tudino.learning",
  hours: "Mon–Fri 3–9pm · Sat 10am–2pm",
};
