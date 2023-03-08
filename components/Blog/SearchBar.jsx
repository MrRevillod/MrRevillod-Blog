import React from 'react'

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="md:w-1/2 w-full flex items-center justify-end md:ml-5">
            <input
                type="text"
                placeholder="Buscar por nombre"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-transparent text-zinc-800"
            />
        </div>
    )
}
