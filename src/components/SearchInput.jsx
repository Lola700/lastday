import React from 'react'

const SearchInput = (props) => {
    const { search, setSearch } = props
    return (
        <>
            <div className="search">
                <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>

                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search products..."
                />

                {search && (
                    <button className="clear-btn" onClick={() => setSearch('')} aria-label="Clear search">
                        ✕
                    </button>
                )}
            </div>
        </>
    )
}

export default SearchInput