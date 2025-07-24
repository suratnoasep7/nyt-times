import { useEffect, useState } from 'react'
import { fetchArticles } from '../services/nytApi'
import type { Article } from '../models/Article'
import ArticleList from '../components/ArticleList'
import { NewspaperIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const [query, setQuery] = useState('')
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(false)
  const [debouncedQuery, setDebouncedQuery] = useState(query)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 500)
    return () => clearTimeout(timer)
  }, [query])

  useEffect(() => {
    if (!debouncedQuery) return
    setLoading(true)
    fetchArticles(debouncedQuery)
      .then(setArticles)
      .catch(() => alert('Failed to fetch articles'))
      .finally(() => setLoading(false))
  }, [debouncedQuery])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <NewspaperIcon className="h-8 w-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800">NYT Article Search</h1>
        </div>

        <input
          type="text"
          className="w-full px-4 py-3 text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
          placeholder="Search articles by keyword..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="mt-6">
          {loading ? (
            <p className="text-gray-500 italic">Loading articles...</p>
          ) : (
            <ArticleList articles={articles} />
          )}
        </div>
      </div>
    </div>
  )
}
