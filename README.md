# Priyadarshini - Professional Engineering Portfolio

A modern, high-profile developer portfolio website designed for **Computer Science Engineering** students, crafted specifically for internships, placements, hackathons, and professional opportunities.

Built with **React + Vite + Tailwind CSS** with strict adherence to clean UI/UX, accessibility, and component modularity.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port indicated in your terminal) in your browser.

### 3. Build for Production
```bash
npm run build
```
This produces an optimized production build in the `dist/` directory, ready to deploy to **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 🛠️ How to Customize Your Information

All personal details, URLs, project information, and experience are centralized in one file:
👉 **`src/data/portfolioData.js`**

### Easy Placeholders to Replace:
1. **GitHub Profile**: Replace `YOUR_GITHUB_PROFILE` with your GitHub username.
2. **LinkedIn Profile**: Replace `YOUR_LINKEDIN_PROFILE` with your LinkedIn username.
3. **LeetCode Profile**: Replace `YOUR_LEETCODE_PROFILE` with your LeetCode username.
4. **Email**: Replace `YOUR_EMAIL@example.com` with your real email.
5. **College & Year**: Replace `Your College Name` and `Your Graduation Year` in `educationData`.
6. **Resume**: Replace `#resume` with the link to your Google Drive resume or PDF in `public/`.
7. **Projects & Demo Links**: Replace `YOUR_GITHUB_LINK` and `YOUR_DEMO_LINK` with your repository links.

---

## 🌟 Architecture & Features

- **Theme Engine**: Complete Dark/Light mode toggle with `localStorage` persistence, system `prefers-color-scheme` support, and zero Flash of Unstyled Content (FOUC).
- **Engineering Visuals**: Interactive developer profile card in the hero section displaying real configuration code, quick status badges, and copyable snippet.
- **Featured Projects**: Highlights problem statements, architectural approaches, key features, and source repositories.
- **SIH Hackathon Contribution**: Dedicated timeline detailing your database design, data modeling, backend integration, and Git collaboration in the Smart India Hackathon.
- **No Fake Data**: Grounded strictly in authentic CSE student capabilities and verified activities.
- **Responsive & Accessible**: Clean mobile drawer menu, semantic HTML5, keyboard navigation, and custom accessible scrollbars.

---

## 📁 Project Structure

```
priyadarshini-portfolio/
├── index.html                  # HTML entry with pre-script for dark mode
├── package.json
├── vite.config.js
├── tailwind.config.js          # Theme tokens and custom typography
├── postcss.config.js
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glassmorphism header & mobile drawer
│   │   ├── Hero.jsx            # Impactful intro & interactive tech card
│   │   ├── About.jsx           # Engineering narrative & core pillars
│   │   ├── Skills.jsx          # Categorized badges with status tags
│   │   ├── Projects.jsx        # Project cards with problem-solved callouts
│   │   ├── Experience.jsx      # Hackathon timeline & engineering roles
│   │   ├── Education.jsx       # Degree, semester & coursework
│   │   ├── Achievements.jsx    # Modular achievement & certification cards
│   │   ├── CodingProfiles.jsx  # LeetCode & GitHub focus breakdown
│   │   ├── Contact.jsx         # Contact info, copy email & message form
│   │   └── Footer.jsx          # Signature, social links & back-to-top
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all content
│   ├── App.jsx                 # App root & dark mode synchronization
│   ├── index.css               # Tailwind directives & custom scrollbars
│   └── main.jsx                # React DOM render entry
└── README.md
```
