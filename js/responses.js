// Expanded BCIT-specific keywords and replies.
window.RESPONSES = [
  {
    keywords: [
      "study partners",
      "find partners",
      "peer",
      "support",
      "group",
      "partner",
    ],
    reply: `Ways to find peer support at BCIT:
• Post in your course Teams or Discord (#study-groups) with course code + topic + your times.
• Ask your instructor for any official peer‑tutoring channels.
• Use library group rooms for a focused meet‑up.
Tip: Keep privacy: share email only if comfortable and meet on campus.`,
  },
  {
    keywords: ["library", "tutoring", "help centre", "learning commons"],
    reply: `BCIT study help:
• Library: quiet zones + bookable group rooms.
• Learning resources: ask librarians for research/databases help.
• Check if your program posts tutor hours in LEARN/Teams.`,
  },
  {
    keywords: ["comp 1537", "web", "javascript"],
    reply: `COMP 1537 tips:
• Rebuild a small API project with fetch() and DOM events.
• Practice array methods (map/filter/reduce) + async/await.
• MDN + freeCodeCamp projects for muscle memory.`,
  },

  // COMP 2714 • Lecture 1: Introduction to Relational Databases 
{
  keywords: [
    "comp 2714", "2714", "relational database", "intro", "dbms",
    "data vs information", "file system", "data redundancy", "data anomalies",
    "entity integrity", "referential integrity", "keys", "schema", "instance"
  ],
  reply:
`COMP 2714 — Lecture 1: Introduction to Relational Databases

Big idea
• Databases exist so we can turn data (raw facts) into information (meaning that answers a question) and make better decisions. :contentReference[oaicite:0]{index=0}

From files to databases
• Old file-system approaches lead to long dev times, security limits, hard admin, and lots of custom code.
• Two core problems in file systems:
  – Structural & data dependence: changes to layout/storage force app rewrites.
  – Data redundancy: multiple copies → inconsistency, security issues, integrity problems.
• Data anomalies (update/insert/delete) appear when redundant copies don’t change together. :contentReference[oaicite:1]{index=1}

What is a database / DBMS?
• Database: shared, integrated structure containing end-user data + metadata (“data about data”).
• DBMS: software that manages structure + access; lets users say *what* they want, not *how* to fetch it. Key functions include:
  – Data dictionary & storage management, performance tuning
  – Security & multi-user control, backup/recovery
  – Integrity management, SQL interfaces and comms. :contentReference[oaicite:2]{index=2}

Database system environment
• Components: hardware, software (DBMS + apps), data, procedures, people (DBAs, designers, end users). :contentReference[oaicite:3]{index=3}

Relational model basics
• Relation (table) → set of tuples (rows) with attributes (columns & domains).
• Keys: primary key (unique id), candidate keys (alternatives), foreign keys (references).
• Integrity constraints:
  – Entity integrity: PKs cannot be NULL.
  – Referential integrity: FKs must match existing PKs. :contentReference[oaicite:4]{index=4}

Schemas & independence
• Schema (design/description) changes rarely; instance (actual data) changes often.
• Data independence:
  – Logical: change conceptual schema without breaking views.
  – Physical: change storage without breaking schema. :contentReference[oaicite:5]{index=5}

Why design matters
• A poor design harms performance and consistency even with a good DBMS.
• Aim: decompose data into well-structured tables that meet all user requirements. :contentReference[oaicite:6]{index=6}

Quick practice
• Identify data vs information in a short scenario.
• Given a spreadsheet with duplicate customer info, list redundancy/anomalies.
• Sketch tables with PK/FK for Students–Courses–Enrollments and state the integrity rules.`
},


  // COMP 2522 • Lecture 1: Modifiers, Constructors & Conventions 
{
  keywords: [
    "comp 2522", "2522", "lecture 1", "week 1",
    "oop tips", "oop", "modifiers", "constructors", "conventions"
  ],
  reply:
`COMP 2522 — Lecture 1: Modifiers, Constructors & Conventions

Constructors & Initialization
- Constructor: same name as the class; used to initialize objects
- Validate inputs inside constructors
- Overloading = same name, different parameters
- Constructor chaining: this(...)
- Instance initializer runs before constructors (rare)
- Static initializer runs once when the class loads

Instance & Static Data
- Instance variables belong to each object
- Static variables are shared across objects
- Use least privilege: keep fields private; use final when possible

Coding Conventions
- Include units in names (e.g., weightKg, balanceCad)
- Avoid magic numbers → use static final constants (UPPER_SNAKE_CASE)
- JavaDoc for all non-private classes/ctors/methods
- Class names: PascalCase; methods/vars: lowerCamelCase

Strings & Types
- String vs primitive types
- Common methods: length(), equals(), isBlank(), replace()
- Strings are immutable; StringBuilder for concatenation
- Never compare Strings with == (use equals / equalsIgnoreCase)

Study Tips
- Write constructors with validation
- Explain instance vs static in one sentence
- Replace all magic numbers with constants
- Prefer final where possible

Resources
- Slides: 2522-L01-modifiers-ctors-conventions.pptx
- Docs: https://docs.oracle.com/javase/tutorial/java/javaOO/
- IntelliJ: File → New Project → mark src/tests as sources/tests

Design flow
- fields → constructor → getters → toString → equals/hashCode
- keep classes small (single responsibility)
- add JUnit tests for edge/invalid inputs`
},
  {
    keywords: ["comp 2256", "networking", "subnetting", "osi", "tcp udp"],
    reply: `Networking:
  • Memorize OSI with examples; map real protocols (HTTP/TLS/TCP)
  • Time your subnetting; verify with calculators after
  • Compare TCP vs UDP with concrete app examples
  • Practice Wireshark filters: ip.addr==X, tcp.port==80`,
  },
  {
    keywords: ["discrete math", "logic", "proof", "sets"],
    reply: `Discrete Math:
  • Rehearse truth tables & De Morgan’s laws
  • Do short proofs by contradiction
  • Practice set algebra identities on small examples
  • Space practice: small daily problem sets (15–20 min)`,
  },

  {
    keywords: ["comp 1537 advanced", "1537 dom", "1537 fetch"],
    reply: `COMP 1537 (Web 1):
  • Build 2–3 mini apps: fetch() JSON → render cards; form → validate → submit
  • Practice event delegation (one listener on parent)
  • Learn querySelector vs querySelectorAll + classList toggles
  • Keep CSS simple: layout (flex/grid) + spacing + states (:hover, :focus)`,
  },

  // COMP 2510 • Lecture 1: Intro to C / Procedural Programming
{
  keywords: [
    "comp 2510", "2510", "c language", "intro to c", "procedural programming",
    "hello world", "gcc", "printf", "variables", "command line args",
    "if", "else", "switch", "while", "for", "break", "continue", "booleans"
  ],
  reply:
`COMP 2510 — Lecture 1: Intro to C & Procedural Programming

Goals
• Learn C syntax + standard libraries
• Write robust & efficient code; understand the compiler  :contentReference[oaicite:0]{index=0}

Basic program shape
• Preprocessor directives (e.g., #include <stdio.h>)
• (Optional) global declarations/variables
• Functions: main() plus your own  :contentReference[oaicite:1]{index=1}

Hello World & build
• Source: hello.c with main() and printf("Hello World\\n");
• Compile: gcc hello.c -o hello   • Run: ./hello  :contentReference[oaicite:2]{index=2}

Variables & printing
• int a,b,c;  c = a * b;  printf("a = %d b = %d c = %d\\n", a,b,c);
• printf placeholders: %c, %d, %f, %%, width/precision like %10d, %.2f  :contentReference[oaicite:3]{index=3}

Command-line arguments
• main(int argc, char **argv)
• atoi(argv[1]), atoi(argv[2]) to convert to int  :contentReference[oaicite:4]{index=4}

Blocks & scope
• { … } is a block; inner declarations shadow outer ones  :contentReference[oaicite:5]{index=5}

Decisions
• if / else / else if patterns
• switch with case … break;  (fall-through without break)
• Always include default in switch  :contentReference[oaicite:6]{index=6}

Booleans in C
• No native bool in classic C; 0 = false, non-zero = true
• Watch out for assignment in conditions: if (a = 5) // bug
• Ternary: cond ? x : y  :contentReference[oaicite:7]{index=7}

Loops
• while (cond) { … }   • do { … } while (cond);
• for (init; cond; step) { … }
• Infinite loops: for(;;) or while(1)  (for(;;) can be slightly leaner)
• break to exit; continue to skip to next iteration  :contentReference[oaicite:8]{index=8}

Quick practice
• Build hello.c, then vars.c
• Write a program: reads two ints from argv, prints sum/product
• Re-format numbers with printf width/precision (%.2f, %10d)

Tip
• Compile/run often; add prints to check variables; prefer switch with breaks`
},


  {
    keywords: ["comp 1510", "intro programming", "loops", "arrays"],
    reply: `COMP 1510:
• Write tiny programs daily (15–30 min).
• Trace loops and conditionals by hand to see logic.
• Revisit arrays + methods; practice lots of exercises.`,
  },
  {
    keywords: ["networking", "subnet", "tcp", "udp", "osi"],
    reply: `Networking:
• Memorize OSI with examples (HTTP=Layer 7, TCP=4).
• Practice subnetting under a timer.
• Use Packet Tracer to simulate flows.`,
  },
  {
    keywords: ["resources", "tutorials", "practice", "cheat sheet"],
    reply: `Handy resources:
• MDN (Web/JS), freeCodeCamp projects
• SQLZoo + DB Fiddle (SQL practice)
• Roadmap.sh (learning paths)
• BCIT Library databases + citation tools`,
  },
  {
    keywords: ["time management", "schedule", "plan", "burnout", "exam"],
    reply: `Time & exam prep:
• Use 50‑10 focus blocks (50 work / 10 rest).
• Make a 7‑day topic map and rehearse hard parts first.
• Sleep well the night before labs/exams; short active review in the morning.`,
  },
  {
    keywords: ["academic integrity", "cheating", "policy"],
    reply: `Academic integrity:
• Collaborate on concepts, write your own code.
• Cite resources, don't share solutions for graded work.
• When unsure, ask your instructor early.`,
  },
  {
    keywords: ["contact", "email", "reach", "help"],
    reply: `To connect with peers: share an email (optional) or a Teams/Discord handle you’re comfortable with. Meet in public campus spaces.`,
  },
  {
    keywords: ["help", "start", "how", "what can you do", "commands", "menu"],
    reply: `Try things like:
• "tips for COMP 1537"
• "JOIN practice for COMP 2714"
• "find study partners"
• "time management for exams"
• "BCIT library and tutoring"`,
  },
];

window.FALLBACKS = [
  "I’m not sure yet. Try asking about a specific course (e.g., COMP 2714 tips).",
  "Good question! Ask me about study partners, BCIT resources, or a course by code.",
  "I can share tips, resources, or places to study. Which course are you working on?",
];
