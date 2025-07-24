import React from 'react'
import { Article } from '../models/Article'
import { SkeletonCard } from './SkeletonCard'
import { ArticleCard } from './ArticleCard'

interface Props {
  articles: Article[]
  loading: boolean
  query: string
}

export const ArticleList: React.FC<Props> = ({ articles, loading, query }) => {
  return (
    <div className="row g-4">
      {loading &&
        Array.from({ length: 3 }).map((_, i) => (
          <div className="col-4" key={i}>
            <SkeletonCard />
          </div>
        ))}

      {!loading && articles.length === 0 && query.length > 2 && (
        <div className="col-12 text-center text-muted">
          No articles found for “{query}”
        </div>
      )}

      {!loading &&
        articles.map((article, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4">
            <ArticleCard article={article} />
          </div>
        ))}
    </div>
  )
}
