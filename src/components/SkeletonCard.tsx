import React from 'react'

export const SkeletonCard: React.FC = () => (
  <div className="card shadow-sm border-0 rounded-4 w-100">
    <div className="skeleton-img bg-light w-100" style={{ height: '200px' }} />
    <div className="card-body">
      <div className="skeleton-text bg-light mb-2" style={{ height: '24px', width: '80%' }} />
      <div className="skeleton-text bg-light mb-2" style={{ height: '18px', width: '60%' }} />
      <div className="skeleton-text bg-light mb-3" style={{ height: '14px', width: '30%' }} />
      <div className="skeleton-text bg-light rounded-pill" style={{ height: '32px', width: '100px' }} />
    </div>
  </div>
)
