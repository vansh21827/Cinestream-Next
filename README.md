# 🎬 CineStream Next

CineStream Next is a modern movie discovery web application built with **Next.js 16**, leveraging **Server-Side Rendering (SSR)**, **Server Components**, and **App Router** for high performance and SEO optimization. The application integrates the **TMDB (The Movie Database) API** to display popular movies, provide detailed movie information through dynamic routing, enable real-time movie search, and allow users to save favorite movies using browser local storage.

---

## 🚀 Live Demo

**Live URL:** https://cinestream-next-blond.vercel.app/

---

## 📸 Preview

> Add screenshots of your application here.

| Home Page | Movie Details |
|-----------|---------------|---------|-----------|


| Search | Favorites |
|-----------|---------------|---------|-----------|


---

## ✨ Features

- Built with **Next.js 16 App Router**
- Server-Side Rendering (SSR) for popular movies
- Dynamic movie details page
- Dynamic SEO using `generateMetadata()`
- File-based routing
- Real-time movie search 
- Favorites management using Local Storage
- Responsive UI
- Loading and Error boundaries
- 404 Not Found page
- TMDB API integration
- Optimized server/client component architecture

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16
- React 19
- JavaScript (ES6+)
- CSS3

### APIs
- TMDB API

### Concepts Used
- Server Components
- Client Components
- Server-Side Rendering (SSR)
- Dynamic Routing
- SEO Optimization
- App Router
- File-Based Routing
- API Routes
- Local Storage
- Responsive Design

---

## 📂 Project Structure

```
cinestream-next/
│
├── app/
│   ├── api/
│   │   └── search/
│   │       └── route.js
│   ├── favorites/
│   │   └── page.js
│   ├── movie/
│   │   └── [id]/
│   │       └── page.js
│   ├── search/
│   │   └── page.js
│   ├── error.js
│   ├── loading.js
│   ├── not-found.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── FavoriteButton.jsx
│   ├── Footer.jsx
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   └── Navbar.jsx
│
├── lib/
│   └── tmdb.js
│
├── public/
├── next.config.mjs
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/cinestream-next.git
```

Navigate to the project directory

```bash
cd cinestream-next
```

Install dependencies

```bash
npm install
```

Create an environment file

```env
TMDB_API_TOKEN=your_tmdb_bearer_token
NEXT_PUBLIC_TMDB_IMAGE=https://image.tmdb.org/t/p/w500
```

Start the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## 🌐 Environment Variables

Create a `.env.local` file in the project root.

```env
TMDB_API_TOKEN=YOUR_TMDB_BEARER_TOKEN
NEXT_PUBLIC_TMDB_IMAGE=https://image.tmdb.org/t/p/w500
```

---

## 📈 Performance Features

- Server-Side Rendering
- Server Components
- Optimized API Fetching
- Dynamic Metadata
- Error Boundaries
- Loading UI
- Responsive Design

---

## 🔍 SEO Features

- Dynamic Page Titles
- Dynamic Meta Descriptions
- Open Graph Metadata
- Search Engine Friendly URLs
- Server-rendered Pages

---

## ❤️ Favorites

Users can:

- Add movies to favorites
- Remove favorites
- Persist favorites using Local Storage
- View favorite movies on a dedicated page

---

## 🔎 Search

- Search movies using TMDB API
- Client-side search experience
- Dynamic search results

---

## 🚀 Deployment

This project is deployment-ready on **Vercel**.

```bash
npm run build
```

## 📚 Learning Outcomes

This project demonstrates:

- Next.js App Router
- Server Components
- Client Components
- Server-Side Rendering
- Dynamic Routing
- Dynamic Metadata
- SEO Best Practices
- API Integration
- Component-Based Architecture
- Responsive UI Development

---

## 🙏 Acknowledgements

- TMDB (The Movie Database) API
- Next.js
- React

> **This product uses the TMDB API but is not endorsed or certified by TMDB.**

---

## 👨‍💻 Author

**Vansh Bansal**

---

## 📄 License

This project is developed for educational and portfolio purposes.
