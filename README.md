# 📰 NYT Article Search App

A single-page application (SPA) built with **React + TypeScript** that allows users to search for articles from The New York Times using its public API. The UI is clean, responsive, and mobile-first with real-time search and skeleton loading effects.

![screenshot](./public/preview.png)

## 🔍 Features

- 🔎 Search for NYT articles by keyword
- 📄 Display article title, author, publish date, and image
- 🕒 Debounced input to reduce API calls
- 📱 Responsive & mobile-first design
- 💨 Skeleton loading while fetching data
- 🔗 Open full article in a new tab

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Bootstrap 5, Material Icons
- **Testing**: Jest, React Testing Library
- **API**: [New York Times Article Search API](https://developer.nytimes.com/docs/articlesearch-product/1/overview)

## 📁 Project Structure

```
src/
├── components/
│   ├── ArticleCard.tsx
│   ├── ArticleList.tsx
│   ├── SearchInput.tsx
│   └── SkeletonCard.tsx
├── models/
│   └── Article.ts
├── services/
│   └── nytApi.ts
├── App.tsx
└── index.tsx
```

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/nyt-search-app.git
cd nyt-search-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set NYT API Key

Create a `.env` file in the root:

```env
VITE_NYT_API_KEY=your_api_key_here
```

> 🔑 You can get a free API key from: https://developer.nytimes.com/

### 4. Run the app
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🧪 Running Tests

```bash
npm test
```

- ✅ Unit tested: SearchInput renders correctly  
- ✅ Integration tested: Article search works on input

## 📦 Build for Production

```bash
npm run build
```

Then deploy the contents of `/dist` to your static host (e.g. Vercel, Netlify).

## 📸 Preview

<p align="center">
  <img src="./public/mobile-preview.png" width="300" alt="mobile preview" />
  <img src="./public/desktop-preview.png" width="600" alt="desktop preview" />
</p>

## 📌 TODOs / Enhancements

- [ ] Add pagination / infinite scroll
- [ ] Filter by date or section
- [ ] Save favorite articles
- [ ] Dark mode toggle

## 📄 License

MIT © 2025 — [Asep SUratno](https://github.com/suratnoasep7)