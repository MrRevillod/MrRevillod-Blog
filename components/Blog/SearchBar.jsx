import React from 'react'
import Image from 'next/image'

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="md:w-1/2 w-full flex items-center justify-end md:ml-5 relative">
            <input
                type="text"
                placeholder="Buscar por nombre"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-transparent text-zinc-800"
            />

            <Image
                src='http://pillan.inf.uct.cl/~lrevillod/Blog/assets/icons/search-icon.png'
                width={20}
                height={20}
                alt="Search Icon"
                style={{ position: 'absolute', right: '10px', top: '11px' }}
            />

        </div>
    )
}
