// ─────────────────────────────────────────────────────────────
//  Kris Kringle – settings
//  Paste your Firebase web-app config below (see README.md).
//  While apiKey is empty the site runs in DEMO MODE: everything
//  is saved only in this browser, which is handy for testing.
// ─────────────────────────────────────────────────────────────
window.KK_CONFIG = {
  firebase: {
 	apiKey: "AIzaSyAuKxU6H5smKYtaYa2Jj6xMLb6gIGLEAWM",
  	authDomain: "kk2026-1cf13.firebaseapp.com",
 	projectId: "kk2026-1cf13",
  	storageBucket: "kk2026-1cf13.firebasestorage.app",
 	messagingSenderId: "123405377772",
 	appId: "1:123405377772:web:40285899aaea74ed5645c9"
  },

  // Defaults the organiser sees when starting a new draw (editable there too)
  defaults: {
    title: "Family Kris Kringle " + new Date().getFullYear(),
    budget: "$50",
    // Pre-filled on the setup page (still editable there)
    people: ["Mungo","Lillian","Jessica","Sim","Sebastian","Sinead","Edward","Betty","Kiel","Anwen"],
    // Pairs who can't draw each other (works both ways)
    pairs: [["Mungo","Lillian"],["Sebastian","Sinead"],["Edward","Betty"],["Kiel","Anwen"]],
    date: "Christmas Day",
    // "Finish the sentence" prompts. Keep the ids (p1–p8) stable once people have answered;
    // you can reword the text any time.
    prompts: [
      { id: "p1", text: "I have way too many…" },
      { id: "p2", text: "I could always use more…" },
      { id: "p3", text: "My hobbies include…" },
      { id: "p4", text: "I'd never say no to…" },
      { id: "p5", text: "Lately I've been really into…" },
      { id: "p6", text: "Something I've always wanted to try is…" }
    ],
    into: [
      "Books & reading", "Cooking & kitchen", "Garden & outdoors", "Cosy & comfort",
      "Pamper & self-care", "Tech & gadgets", "Games & puzzles", "Art & craft",
      "Music", "Sport & fitness", "Food & treats", "Drinks",
      "Home & decor", "Experiences", "Surprise me"
    ],
    need: [
      "Clothes & socks", "Kitchen basics", "Phone / tech accessories", "Tools",
      "Stationery", "Bathroom & toiletries", "Bags & travel", "Something for the car"
    ]
  }
};


