import React from 'react'

interface SearchInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className="input-group mb-4 shadow-sm rounded-pill">
      <span className="input-group-text bg-white border-0">
        <span className="material-icons text-muted">search</span>
      </span>
      <input
        type="text"
        className="form-control border-0"
        placeholder="Search New York Times articles..."
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
