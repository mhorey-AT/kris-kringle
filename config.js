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


