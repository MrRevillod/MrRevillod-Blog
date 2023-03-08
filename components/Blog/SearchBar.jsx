import React from 'react'

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="w-full flex justify-center items-center mb-4">
            <input
                type="text"
                placeholder="Buscar por nombre"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-1/2 px-4 py-2 mb-8 border rounded-lg focus:outline-none focus:border-transparent text-zinc-800"
            />
        </div>
    )
}
