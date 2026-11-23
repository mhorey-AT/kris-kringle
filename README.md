# Family Kris Kringle

A tiny secret-santa site: draw names, send each person a private link, and everyone picks the gift areas they're into or need. Their Kris Kringle sees those picks update live.

* `index.html`: the whole app
* `config.js`: your Firebase settings and default gift areas
* `firestore.rules`: database security rules to paste into Firebase

If `config.js` has no Firebase settings, the site runs in **demo mode**. Everything is saved in your browser only, which is handy for trying it out. Open `index.html` through any local server, or just push it to GitHub Pages first.

---

## 1. Set up Firebase (free, ~5 min)

1. Go to https://console.firebase.google.com and click **Create project**. Any name works, and you can turn Google Analytics off.
2. In the left menu, go to **Build → Firestore Database → Create database**.
   * Choose **production mode**.
   * For location, pick `australia-southeast2` (Melbourne) or `australia-southeast1` (Sydney).
3. Open the **Rules** tab, replace everything with the contents of `firestore.rules`, and click **Publish**.
4. Click the gear icon, go to **Project settings → Your apps**, and click the **Web `</>`** icon. Register an app with any nickname and no Firebase Hosting.
5. Firebase shows a `firebaseConfig = { … }` block. Copy those values into `config.js`.

The free Spark plan is far more than enough. It allows 50k reads a day, and a family of 10 will use a few hundred.

> The `apiKey` in config.js is meant to be public. It only identifies the project. What protects the data is the rules file.

## 2. Put it on GitHub Pages

1. Create a new repo on GitHub, e.g. `kris-kringle`.
2. Upload `index.html`, `config.js`, `firestore.rules` and `README.md`. You can drag them into **Add file → Upload files**.
3. In the repo, go to **Settings → Pages**. Set **Source** to *Deploy from a branch*, the branch to `main`, and the folder to `/ (root)`, then click **Save**.
4. After a minute, the site is live at `https://<your-username>.github.io/kris-kringle/`.

## 3. Run it

1. Open the site, add everyone's names and any "can't draw each other" pairs, adjust the gift areas, and click **Draw names**.
2. You land on the **organiser page**. **Bookmark it**, because it's your only way back to the links.
3. Use **Copy link** or **Share** to text each person their own link.
4. Each person opens their link, taps to reveal who they've got, and ticks their own gift areas. Ticks save automatically and can be changed any time.
5. The organiser page shows who has filled in their picks. It never shows who has whom.

Want to redo it? Click **Start another draw**. Each draw is separate.

---

## How private is it?

* Every link holds a long random code. The database refuses to list its contents, so you can only read a record if you already have its code.
* Your link shows **only** who you're buying for. It doesn't show who's buying for you or anyone else's pairing.
* The organiser holds everyone's links, so they *could* peek by opening someone else's link. If you're organising and playing, just don't open the others.
* It's built for family-level trust, not Fort Knox. Someone who goes digging in browser dev tools could edit the picks of the person they're buying for. They still can't see anything else.

## Tweaks

* **Names, couples, gift areas, budget, title:** edit `defaults` in `config.js`. The organiser can also change them on the setup page before drawing.
* **Colours:** the CSS variables at the top of `index.html` (`--paper`, `--red`, `--green`, `--gold`) and the `COL` list in the script, which colours the halftone art.
* **Artwork:** the posters are generated live. Each shape is painted as soft grey on a hidden canvas, then redrawn as SVG dots sized by tone. The motifs (`tree`, `baubles`, `star`, `gift`, `forest`) are in `MOTIFS`, and each person always gets the same one, picked from their name. `CELL` sets the dot size, the `#ink` filter roughens the edges, and the paper grain is the `body::after` noise.
