export const site = {
  brand: "OTIS LABS",
  tagline: "Closed-Loop Mastitis Defense",
  copyright: "© 2026 OTIS LABS. ALL RIGHTS RESERVED. BUILT FOR THE PARLOR.",
  established: "EST. 2024",
};

export const contactEmails = [
  "ananthrn@stanford.edu",
  "nlee11@stanford.edu",
  "akashpai@stanford.edu",
];

export const pilotInquiryHref = `mailto:${contactEmails.join(
  ","
)}?subject=Otis%20Labs%20%E2%80%94%20Pilot%20Inquiry`;

export const nav = {
  links: [] as Array<{ label: string; href: string; active?: boolean }>,
  cta: { label: "Pilot Inquiry", href: pilotInquiryHref },
};

export const hero = {
  eyebrow: "Closed-Loop Mastitis Defense",
  title: "Neurotech for Healthier Herds",
  body: "Otis is a full-stack mastitis system. Milking-station sensors flag udder-specific infection, ear-tag devices deliver targeted vagal nerve stimulation, and an AI copilot keeps the operation in sync.",
  cta: { label: "See the Pipeline", href: "#detection" },
  video: {
    src: "https://assets.mixkit.co/videos/10276/10276-720.mp4",
    poster:
      "https://images.unsplash.com/photo-1775222678831-6ff176ab4a58?w=2400&q=80&auto=format&fit=crop",
    alt: "A herd of cows roaming an open plain at golden hour.",
  },
};

export const marquee = {
  // Phrases used in the running editorial strip below the hero.
  phrases: [
    "Detect at the parlor",
    "Treat at the tag",
    "Vagal-nerve precision",
    "$32B problem, closed-loop answer",
    "Mastitis, measured",
    "AI copilot in the milking pit",
  ],
};

export type Variant = "watermark" | "fullbleed" | "asymmetric";

export type Feature = {
  index: string;
  category: string;
  title: string;
  body: string;
  image: { src: string; alt: string; filterClass?: string };
  variant: Variant;
  cta?: { label: string; href: string };
  tags?: string[];
};

export const features: Feature[] = [
  {
    index: "01",
    category: "Detection",
    title: "Milking-Station Sensing",
    body: "Sensors built into the milking station read each cow as a discrete biological signal — flagging udder-specific infection the moment it appears. Diagnosis moves from weekly culture to per-milking telemetry, replacing intuition with empirical rigor.",
    image: {
      src: "/img/detection-otis.jpg",
      alt: "Close-up of an OTIS-tagged dairy cow framed by parlor steel — every animal read as a data node.",
      filterClass: "saturate-[0.95] contrast-110",
    },
    variant: "watermark",
    tags: ["Per-Animal", "Parlor", "Real-Time"],
  },
  {
    index: "02",
    category: "Stimulation",
    title: "Interventive Ear-Tag",
    body: "Once a cow is flagged, our ear-tag device delivers targeted vagal nerve stimulation — reducing damaging inflammation while still fighting infection, without separation drama, without disrupting the herd. Treatment happens where the cow already is.",
    image: {
      src: "/img/stimulation-otis.jpg",
      alt: "Close portrait of a brown dairy cow with OTIS-branded yellow ear-tags — the device site for vagal nerve stimulation.",
      filterClass: "saturate-[1.0] contrast-110",
    },
    variant: "fullbleed",
    tags: ["Vagal Nerve", "Ear-Tag", "Antibiotic-Free"],
  },
  {
    index: "03",
    category: "Copilot",
    title: "Operator Software",
    body: "Farmers run the herd through a web app and AI copilot. Otis surfaces flagged cows, segments and feeds them, and triggers stimulation through each ear-tag automatically — one full-stack system, from parlor floor to pasture overview.",
    image: {
      src: "https://images.unsplash.com/photo-1720386063956-00296002a701?w=2200&q=80&auto=format&fit=crop",
      alt: "Aerial view of agricultural land — the operator's dashboard view, parcels read as a live dataset.",
      filterClass: "saturate-[1.0] contrast-115",
    },
    variant: "asymmetric",
    cta: { label: "Access Our Web App", href: "#app" },
  },
];

export const ledger = {
  // Animated stat strip — large numerals, no decoration.
  eyebrow: "The Problem, in figures",
  stats: [
    { value: 32, prefix: "$", suffix: "B", label: "Global Mastitis Cost / Year" },
    { value: 2, prefix: "$", suffix: "B", label: "U.S. Mastitis Cost / Year" },
    { value: 1, prefix: "#", suffix: "", label: "Costliest Disease in Dairy" },
    { value: 2, suffix: "-Step", label: "Closed-Loop Pipeline" },
  ] as Array<{ value: number; prefix?: string; suffix?: string; decimals?: number; label: string }>,
};

export const pullQuote = {
  text: "Mastitis has been such a hard problem to tackle and Otis is definitely the system we've been waiting for.",
  attribution: "Dairy operator",
};

export const footer = {
  contact: {
    eyebrow: "Contact",
    body: "Pilot programs, research collaborations, and press — reach the founding team directly.",
    emails: contactEmails,
  },
};
