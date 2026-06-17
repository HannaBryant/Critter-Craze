# Critter-Craze

A landing page for a fictional toy company called **CritterCraze** — a magical world of collectible creatures you can adopt, train, and evolve.

## Project Summary

CritterCraze is a front-end web application that serves as a promotional landing page for a fictional creature-collecting toy brand. The site showcases featured products, introduces collectible critters, and includes a sign-up form for users to join the community.

### Features

- **Hero Section** — Eye-catching intro with a call-to-action to explore products
- **Featured Products** — Dynamically loaded product cards fetched from a Supabase backend
- **Meet the Critters** — Showcases sample critters (Fluffy, Bouncy, Leafy) with images and descriptions
- **Sign-Up Form** — Collects user name, email, and message, storing leads via Supabase REST API
- **About Section** — Brief overview of the CritterCraze world
- **Responsive Design** — Mobile-friendly layout with a fixed navbar

### Tech Stack

- **HTML5** — Page structure and content
- **CSS3** — Custom styling with a vibrant red/yellow/orange color palette
- **JavaScript (Vanilla)** — Client-side logic for fetching products and submitting leads
- **Bootstrap 5.3** — Grid system and form utilities
- **Google Fonts** — Chewy, Luckiest Guy, Sniglet, and Poppins typefaces
- **Supabase** — Backend-as-a-service for storing leads and serving product data

### Project Structure

```
Critter-Craze/
├── assets/crittercraze/   # Images (logo, critter PNGs, product art)
├── app.js                 # Fetch products & submit leads logic
├── index.html             # Main landing page
├── styles.css             # Custom styles
├── package.json           # Node dependencies (prompt-sync)
└── README.md              # This file
```

### Getting Started

1. Clone the repository
2. Open `index.html` in a browser (no build step required)
3. Products and lead submission require the Supabase backend to be accessible
