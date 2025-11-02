// Expanded BCIT-specific keywords and replies.

window.RESPONSES = [
  {
    keywords: ["study partners", "find partners", "peer", "support", "group", "partner"],
    reply: `Ways to find peer support at BCIT:
• Post in your course Teams or Discord (#study-groups) with course code + topic + your times.
• Ask your instructor for any official peer‑tutoring channels.
• Use library group rooms for a focused meet‑up.
Tip: Keep privacy: share email only if comfortable and meet on campus.`
  },
  {
    keywords: ["library", "tutoring", "help centre", "learning commons"],
    reply: `BCIT study help:
• Library: quiet zones + bookable group rooms.
• Learning resources: ask librarians for research/databases help.
• Check if your program posts tutor hours in LEARN/Teams.`
  },
  {
    keywords: ["comp 1537", "web", "javascript"],
    reply: `COMP 1537 tips:
• Rebuild a small API project with fetch() and DOM events.
• Practice array methods (map/filter/reduce) + async/await.
• MDN + freeCodeCamp projects for muscle memory.`
  },
  {
    keywords: ["comp 2714 tips", "sql joins", "normalization", "3nf"],
    reply: `COMP 2714 (SQL):
  • Practice INNER vs LEFT JOIN with 3-table queries
  • Aggregates: GROUP BY first, then HAVING for filters
  • Normalize small schemas (1NF → 3NF) and explain each change
  • Make a JOINs cheat sheet with sample data you understand`
  },
  
  {
    keywords: ["comp 2522 tips", "java oop", "junit", "immutability"],
    reply: `COMP 2522 (Java/OOP):
  • Design first: fields → constructor → getters → toString → equals/hashCode
  • Use named constants; no magic numbers
  • Keep classes small; one responsibility
  • Add JUnit tests for edge cases and invalid inputs`
  },
  {
    keywords: ["comp 2256", "networking", "subnetting", "osi", "tcp udp"],
    reply: `Networking:
  • Memorize OSI with examples; map real protocols (HTTP/TLS/TCP)
  • Time your subnetting; verify with calculators after
  • Compare TCP vs UDP with concrete app examples
  • Practice Wireshark filters: ip.addr==X, tcp.port==80`
  },
  {
    keywords: ["discrete math", "logic", "proof", "sets"],
    reply: `Discrete Math:
  • Rehearse truth tables & De Morgan’s laws
  • Do short proofs by contradiction
  • Practice set algebra identities on small examples
  • Space practice: small daily problem sets (15–20 min)`
  },
  
  
  {
    keywords: ["comp 1537 advanced", "1537 dom", "1537 fetch"],
    reply: `COMP 1537 (Web 1):
  • Build 2–3 mini apps: fetch() JSON → render cards; form → validate → submit
  • Practice event delegation (one listener on parent)
  • Learn querySelector vs querySelectorAll + classList toggles
  • Keep CSS simple: layout (flex/grid) + spacing + states (:hover, :focus)`
  },
  

  {
    keywords: ["comp 2510", "c programming", "bitwise", "pointers"],
    reply: `COMP 2510 (C):
  • Drill compile → run cycle with warnings: gcc -Wall -Wextra file.c -o app
  • Practice arrays, loops, functions; avoid magic numbers (use #define)
  • Learn bit masks & shifting with tiny examples
  • Use 'printf' format specifiers (%d, %u, %x) and check return codes
  Tip: If stuck, make a 10–20 line repro program first.`
  },
  
  {
    keywords: ["comp 1510", "intro programming", "loops", "arrays"],
    reply: `COMP 1510:
• Write tiny programs daily (15–30 min).
• Trace loops and conditionals by hand to see logic.
• Revisit arrays + methods; practice lots of exercises.`
  },
  {
    keywords: ["networking", "subnet", "tcp", "udp", "osi"],
    reply: `Networking:
• Memorize OSI with examples (HTTP=Layer 7, TCP=4).
• Practice subnetting under a timer.
• Use Packet Tracer to simulate flows.`
  },
  {
    keywords: ["resources", "tutorials", "practice", "cheat sheet"],
    reply: `Handy resources:
• MDN (Web/JS), freeCodeCamp projects
• SQLZoo + DB Fiddle (SQL practice)
• Roadmap.sh (learning paths)
• BCIT Library databases + citation tools`
  },
  {
    keywords: ["time management", "schedule", "plan", "burnout", "exam"],
    reply: `Time & exam prep:
• Use 50‑10 focus blocks (50 work / 10 rest).
• Make a 7‑day topic map and rehearse hard parts first.
• Sleep well the night before labs/exams; short active review in the morning.`
  },
  {
    keywords: ["academic integrity", "cheating", "policy"],
    reply: `Academic integrity:
• Collaborate on concepts, write your own code.
• Cite resources, don't share solutions for graded work.
• When unsure, ask your instructor early.`
  },
  {
    keywords: ["contact", "email", "reach", "help"],
    reply: `To connect with peers: share an email (optional) or a Teams/Discord handle you’re comfortable with. Meet in public campus spaces.`
  },
  {
    keywords: ["help", "start", "how", "what can you do", "commands", "menu"],
    reply: `Try things like:
• "tips for COMP 1537"
• "JOIN practice for COMP 2714"
• "find study partners"
• "time management for exams"
• "BCIT library and tutoring"`
  }
];



window.FALLBACKS = [
  "I’m not sure yet. Try asking about a specific course (e.g., COMP 2714 tips).",
  "Good question! Ask me about study partners, BCIT resources, or a course by code.",
  "I can share tips, resources, or places to study. Which course are you working on?"
];

