import React, { useState } from 'react';
import './App.css';

const articles = [
  {
    id: 1,
    title: "How to stay productive when working from home",
    date: "Mar 12, 2022",
    excerpt: "Working from home sounds great until distractions take over. Setting a fixed schedule, creating a dedicated workspace, and taking regular breaks can make a huge difference in your daily output."
  },
  {
    id: 2,
    title: "The basics of eating healthy on a budget",
    date: "Jul 04, 2022",
    excerpt: "Eating healthy does not have to be expensive. Buying vegetables, eggs, and grains in bulk while avoiding processed foods is a simple way to improve your diet without spending too much."
  },
  {
    id: 3,
    title: "Why reading books is still worth your time",
    date: "Sep 18, 2022",
    excerpt: "In a world full of short videos and social media, books offer something rare — depth. Reading regularly improves focus, vocabulary, and the ability to think through complex problems."
  },
  {
    id: 4,
    title: "Tips for getting better sleep every night",
    date: "Nov 30, 2022",
    excerpt: "Poor sleep affects your mood, memory, and health. Going to bed at the same time each night, avoiding screens before sleep, and keeping your room cool are proven ways to sleep better."
  },
  {
    id: 5,
    title: "How to start exercising when you have no motivation",
    date: "Jan 08, 2023",
    excerpt: "The hardest part of exercising is starting. Committing to just 10 minutes a day, finding an activity you enjoy, and tracking small progress can help you build a habit that actually sticks."
  }
];

function highlightText(text, query) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase()
      ? <mark key={index}>{part}</mark>
      : part
  );
}

function App() {
  const [query, setQuery] = useState('');

  const filtered = articles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Search</h1>
      <input
        type="text"
        className="search-box"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="results-count">
        {query && <strong>{filtered.length} posts</strong>} {query && "were found."}
      </p>
      {filtered.map(article => (
        <div className="article" key={article.id}>
          <h2>{highlightText(article.title, query)}</h2>
          <p className="date">{article.date}</p>
          <p>{highlightText(article.excerpt, query)}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;