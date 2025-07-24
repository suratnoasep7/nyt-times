import React, { useState, useEffect } from 'react'
import { fetchArticles } from '../services/nytApi'
import { Article } from '../models/Article'
import { SearchInput } from '../components/SearchInput'
import { ArticleList } from '../components/ArticleList'

export const SearchArticle: React.FC = () => {
  const [query, setQuery] = useState('')
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true)
      const delayDebounce = setTimeout(() => {
        fetchArticles(query)
          .then(setArticles)
          .finally(() => setLoading(false))
      }, 500)
      return () => clearTimeout(delayDebounce)
    } else {
      setArticles([])
    }
  }, [query])

  return (
    <div className="container px-3 py-4">
      <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
      <ArticleList articles={articles} loading={loading} query={query} />
    </div>
  )
}
