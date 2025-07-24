import React from 'react'
import { Article } from '../models/Article'

interface Props {
  article: Article
}

export const ArticleCard: React.FC<Props> = ({ article }) => (
  <div className="card shadow-sm border-0 rounded-4 w-100">
    {article.imageUrl && (
      <img
        src={article.imageUrl}
        alt={article.headline}
        className="card-img-top"
        style={{ maxHeight: '300px', objectFit: 'cover' }}
      />
    )}
    <div className="card-body">
      <h5 className="card-title fw-semibold mb-2">{article.headline}</h5>
      <p className="card-text text-muted mb-1">{article.byline}</p>
      <p className="card-text mb-3">
        <small className="text-muted">
          {new Date(article.pub_date).toLocaleDateString()}
        </small>
      </p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-sm btn-primary"
      >
        Read More
      </a>
    </div>
  </div>
)
