import React from 'react'

export const PageTitle = ({ title }) => {
    return (
        <div id="hero" className="flex items-center justify-center flex-col pt-20 pb-10">
            <h1 className="text-4xl text-zinc-100 font-bold">
                {title}
            </h1>
        </div>
    )
}